import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api.service';
@Component({
  selector: 'app-controlador-api',
  templateUrl: './controlador-api.page.html',
  styleUrls: ['./controlador-api.page.scss'],
})
export class ControladorApiPage implements OnInit {
  
  alumnos : any[] = [];
  alumnoSeleccionado: any = null;
  nuevoAlumno: any = { nombre_usuario: '', email: '', password: '' };
  mostrarFormulario: boolean = false;
  mostrarFormularioEditar: boolean = false;
  
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.api.getAlumnos().subscribe(data => {
      this.alumnos = data
      console.log(this.alumnos);
  }, (error) => {
    console.log("Error en la petición" + error);
  });

  }

  editarAlumno(alumno: any) {
    this.alumnoSeleccionado = { ...alumno };
    this.mostrarFormularioEditar = true;
    
  }


   // Modificar el alumno con los datos del formulario
  modificarAlumno(id: any, alumnoData: any) {
    this.api.updateAlumno(id, alumnoData).subscribe(data => {
      console.log('Alumno modificado:', data);
      this.cargarAlumnos();
      this.mostrarFormularioEditar = false;
      this.alumnoSeleccionado = null;
    }, error => {
      console.log("Error en la petición", error);
    });
  }
  
  

  // Eliminar un alumno
  eliminarAlumno(id: number) {  // Cambiamos el tipo de dato a number
    this.api.deleteAlumno(id).subscribe(data => {
      console.log('Alumno eliminado:', data);
      setTimeout(() => {  // Agregamos un pequeño retraso
        this.cargarAlumnos(); // Recargar la lista tras la eliminación
      }, 500); 
    }, error => {
      console.log("Error en la petición" + error);
    });
  }

  // Función para mostrar el formulario de creación de alumnos
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }


  // Crear un nuevo alumno
  crearAlumno() {
    this.api.postAlumno(this.nuevoAlumno).subscribe(data => {
      console.log('Alumno creado:', data);
      this.cargarAlumnos();
      this.nuevoAlumno = { nombre_usuario: '', email: '', password: '' };
      this.mostrarFormulario = false
    }, error => {
      console.log("Error en la petición" + error);
    });
  }



}
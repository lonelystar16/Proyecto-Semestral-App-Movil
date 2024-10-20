import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {

  connectionStatus: boolean = false;
  
  constructor(private storage: StorageService ) {
    
  }
    
  
  loginBD(alumno: string, password: string): Promise<boolean> {
    return this.storage.get(alumno)
    .then((res) => {
      // Si funciona me devuelve el objeto completo
      if (res.password == password) {
        this.connectionStatus = true;
        return true;
        
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.error('Error al buscar usuario:', error);
      return false;
    });
  }
  
  


  // * Funcion para obtener el estado de la conexion
  isConected(): boolean {
    return this.connectionStatus;
  }

  // * Funcion para cerrar sesion
  logout() {
    this.connectionStatus = false;
  }

  async registrar(alumno: any): Promise<boolean> {
    // set (llave, valor)
    return this.storage.set(alumno.email, alumno)
    .then((res) => {
      if (res != null) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.error('Error al registrar usuario:', error);
      return false;
    });
  }





}

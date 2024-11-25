import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // TODO: Revisar en la barra de utilidades de VSCode si el puerto cambia de 3000 a 3001
  private apiUrl = 'https://xt6j2jbg-3000.brs.devtunnels.ms' // URL del JSON Server

  constructor(private http: HttpClient) {}

// * CRUD de la API desde la vista de Admin
// * GET
  getAlumnos(): Observable<any> {
    return this.http.get(this.apiUrl + '/alumnos');
  }

  // * POST
  postAlumno(alumnoData: any): Observable<any> {
    return this.http.post(this.apiUrl + '/alumnos', alumnoData);
  }

  // * PUT
  updateAlumno(id: string, alumnoData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/alumnos/` + id, alumnoData);
  }
  
  // * DELETE
  deleteAlumno(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/alumnos/' + id);
  }

  
  

  

}

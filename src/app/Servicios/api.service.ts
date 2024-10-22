import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3001' // URL del JSON Server

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

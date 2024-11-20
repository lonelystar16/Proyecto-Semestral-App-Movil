// authenticator.service.ts
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {

  connectionStatus: boolean = false;
  private apiUrl = 'https://xt6j2jbg-3001.brs.devtunnels.ms/alumnos';

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) { }

  loginBD(email: string, password: string): Observable<{ success: boolean, nombre_usuario?: string }> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.connectionStatus = true; // Actualizar el estado de conexión
          return { success: true, nombre_usuario: users[0].nombre_usuario };
        } else {
          this.connectionStatus = false;
          return { success: false };
        }
      }),
      catchError(error => {
        this.connectionStatus = false;
        console.error('Error en la conexión con JSON Server:', error);
        return [{ success: false }];
      })
    );
  }

  isConected(): boolean {
    console.log('Estado de conexión:', this.connectionStatus);
    return this.connectionStatus;
  }

  logout() {
    this.connectionStatus = false;
  }

  limpiarDatos() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }

  registrar(alumno: any): Observable<boolean> {
    return this.http.post(this.apiUrl, alumno).pipe(
      map((res) => {
        if (res) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        console.error('Error al registrar usuario:', error);
        return [false];
      })
    );
  }
}
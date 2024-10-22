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
  private apiUrl = 'http://localhost:3001/alumnos';
  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {
    
  }
    
  
  async loginBD(email: string, password: string): Promise<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos?email=${email}`)
      .toPromise()
      .then((res) => {
        if (res && res.length > 0 && res[0].password === password) {
          return true;  // Usuario y contraseña correctos
        } else {
          return false; // Credenciales incorrectas
        }
      })
      .catch((error) => {
        console.error('Error al autenticar:', error);
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

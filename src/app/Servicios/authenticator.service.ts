import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  
  // * Generamos una variable boolean para rectificar el actual estado de conexion con el autenticador
  connectionStatus: boolean = false;
  constructor() { }
  // * Generamos funcion para validar correo y contraseña
  // * Si equivale a los datos configurados entregará un true sino un false
  login(email: string, password: string): boolean {
    if (email === 'ferna.munozp' && password === '123456') {
      this.connectionStatus = true;
      return true;
    }
    this.connectionStatus = false;
    return false;

  } 

  // * Funcion para obtener el estado de la conexion
  isAuthenticaded(): boolean {
    return this.connectionStatus;
  }
}

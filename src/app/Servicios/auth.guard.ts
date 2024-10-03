import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  /* 
    * La definicion inject nos permite generar el objeto de la clase sin
    * la necesidad de aplicar un constructor completo.
  */

  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  if (authService.isAuthenticaded()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }


};

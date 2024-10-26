// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  console.log('Estado de autenticación:', authService.isConected());

  if (authService.isConected()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
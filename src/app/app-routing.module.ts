import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'encuentra-viajes',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
<<<<<<< Updated upstream
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
=======
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
//    canActivate: [authGuard]
>>>>>>> Stashed changes
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
<<<<<<< Updated upstream

=======
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'controlador-api',
    loadChildren: () => import('./pages/Admin/controlador-api/controlador-api.module').then( m => m.ControladorApiPageModule)
  },
  {
    path: 'encuentra-viajes',
    loadChildren: () => import('./pages/encuentra-viajes/encuentra-viajes.module').then( m => m.EncuentraViajesPageModule),
//    canActivate: [authGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule)
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

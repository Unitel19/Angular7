import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
      path: 'login',
      component : LoginComponent
    },
    {
      path: 'logout',
      component : LogoutComponent
    },
    {
      path: 'register',
      component : RegisterComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'login'
    }
  ]
}]
@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouteringModule { }

export const routedComponents = [
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  AuthComponent
];
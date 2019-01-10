import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouteringModule } from './auth-router.module';
import { routedComponents } from './auth-router.module';


@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    AuthRouteringModule
  ]
})
export class AuthModule { }
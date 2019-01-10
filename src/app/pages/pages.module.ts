import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-router.module';
import { routedComponents } from './pages-router.module';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

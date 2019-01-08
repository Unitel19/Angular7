import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component : HomeComponent
    },
    {
      path: 'music',
      component : MusicComponent
    },
    {
      path: 'contact',
      component : ContactComponent
    }
  ]
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
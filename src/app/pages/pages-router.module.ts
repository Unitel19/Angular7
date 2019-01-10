import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'home'
    }
  ]
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
export const routedComponents = [
  HomeComponent,
  MusicComponent,
  ContactComponent,
  PagesComponent
]
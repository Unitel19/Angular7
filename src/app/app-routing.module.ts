import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'src/app/pages/pages.module#PagesModule',
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo: 'pages'
  }
];

const config : ExtraOptions = {
  useHash: true,
}

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

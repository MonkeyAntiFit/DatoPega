import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'mensajeria',
        loadChildren: () => import('./mensajeria/mensajeria.module').then( m => m.MensajeriaPageModule)
      },
    ]
  },  {
    path: 'mensajeria',
    loadChildren: () => import('./mensajeria/mensajeria.module').then( m => m.MensajeriaPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

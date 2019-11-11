import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ListOfObservationsPage } from './pages/list-of-observations/list-of-observations.page';
import { ObservationDetailPage } from './pages/observation-detail/observation-detail.page';

export const routes: Routes = [
  { path: '', redirectTo: 'list-of-observations', pathMatch: 'full' },
  { path: 'list-of-observations', loadChildren: () => import('./pages/list-of-observations/list-of-observations.module').then( m => m.ListOfObservationsPageModule)},
  { path: 'observation-detail/:uuid', loadChildren: () => import('./pages/observation-detail/observation-detail.module').then( m => m.ObservationDetailPageModule)},
  { path: 'create-observation', loadChildren: './pages/create-observation/create-observation.module#CreateObservationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

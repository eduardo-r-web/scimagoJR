import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskComponent } from './desk.component';

const routes: Routes = [
  {
    path: 'desk',
    component: DeskComponent,
    loadChildren: () => import('./child-routing.module').then( m => m.ChildRoutingModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeskRoutingModule { }

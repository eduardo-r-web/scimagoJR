import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth.guard';
import { DeskComponent } from './desk.component';

const routes: Routes = [
  {
    path: 'modules',
    component: DeskComponent,
    canActivate: [ AuthGuard ],
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

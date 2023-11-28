import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskRoutingModule } from './desk/desk-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  // path: '/desk' deskRouting
  { path: '', redirectTo: '/desk', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DeskRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

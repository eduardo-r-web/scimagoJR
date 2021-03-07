import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DeskRoutingModule } from './desk/desk-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  // path: '/modules' deskRouting
  // path: '/auth' AuthRouting
  { path: '', redirectTo: '/modules', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DeskRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

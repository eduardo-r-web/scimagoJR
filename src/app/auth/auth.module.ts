// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { CoreModule } from './../core/core.module';
import { AuthRoutingModule } from './auth-routing.module';

// components
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }

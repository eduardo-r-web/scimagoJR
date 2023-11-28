// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskRoutingModule } from './desk-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DeskComponent } from './desk.component';
import { HomeComponent } from './home/home.component';
import { PredictComponent } from './predict/predict/predict.component';
import { PredictViewComponent } from './predict/predict-view/predict-view.component';



@NgModule({
  declarations: [
    DeskComponent,
    HomeComponent,
    PredictComponent,
    PredictViewComponent
  ],
  imports: [
    CommonModule,
    DeskRoutingModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    DeskComponent,
    HomeComponent
  ]
})
export class DeskModule { }

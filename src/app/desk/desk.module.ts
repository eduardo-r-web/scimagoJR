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
import { MachineLearningComponent } from './machine-learning/machine-learning/machine-learning.component';
import { ClassifierComponent } from './classifier/classifier/classifier.component';
import { ClassifierViewComponent } from './classifier/classifier-view/classifier-view.component';
import { ApiDialogComponent } from './api-dialog/api-dialog/api-dialog.component';



@NgModule({
  declarations: [
    DeskComponent,
    HomeComponent,
    PredictComponent,
    PredictViewComponent,
    MachineLearningComponent,
    ClassifierComponent,
    ClassifierViewComponent,
    ApiDialogComponent
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

// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskRoutingModule } from './desk-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { DeskComponent } from './desk.component';
import { HomeComponent } from './home/home.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesCreateComponent } from './companies/companies-create/companies-create.component';
import { CompaniesReadComponent } from './companies/companies-read/companies-read.component';
import { CompaniesUpdateComponent } from './companies/companies-update/companies-update.component';
import { CompaniesHistoryComponent } from './companies/companies-history/companies-history.component';


@NgModule({
  declarations: [
    DeskComponent,
    HomeComponent,
    CompaniesListComponent,
    CompaniesCreateComponent,
    CompaniesReadComponent,
    CompaniesUpdateComponent,
    CompaniesHistoryComponent
  ],
  imports: [
    CommonModule,
    DeskRoutingModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DeskComponent,
    HomeComponent
  ]
})
export class DeskModule { }

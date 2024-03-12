import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxModuleRoutingModule } from './rx-module-routing.module';
import { RxjsComponent } from '../rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Rx2Component } from '../rx2/rx2.component';
import { Rx2Module } from '../rx2/rx2.module';
import { TestRxComponent } from '../test-rx/test-rx.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    RxjsComponent,
    Rx2Component,
    TestRxComponent,
  ],
  
  imports: [
    CommonModule,
    RxModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Rx2Module,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    
  ]
})
export class RxModuleModule { }

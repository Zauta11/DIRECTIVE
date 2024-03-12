import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewngRoutingModule } from './newng-routing.module';
import { NgComponent } from '../ng.component';


@NgModule({
  declarations: [
    NgComponent
  ],
  imports: [
    CommonModule,
    NewngRoutingModule
  ]
})
export class NewngModule { }

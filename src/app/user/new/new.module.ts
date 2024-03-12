import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { DirectiveDirective } from 'src/app/directive.directive';


@NgModule({
  declarations: [
    NewComponent,
    DirectiveDirective
  ],
  imports: [
    CommonModule,
    NewRoutingModule,

  ]
})
export class NewModule { }

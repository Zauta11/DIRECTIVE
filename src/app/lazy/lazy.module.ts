import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
// import { DirectiveDirective } from '../directive.directive';
import { CustomDirective } from '../directives/custom.directive';
import { UserComponent } from '../user/user.component';
import { SecCustomDirective } from '../directives/sec-custom.directive';


@NgModule({
  declarations: [
    LazyComponent,
    CustomDirective,
    // UserComponent,
    SecCustomDirective
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }

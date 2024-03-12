import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from 'src/app/user/second/second.component';
import { Rx2Component } from './rx2.component';

const routes: Routes = [
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rx2RoutingModule { }

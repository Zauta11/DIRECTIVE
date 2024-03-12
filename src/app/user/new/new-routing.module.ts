import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from '../second/second.component';
import { NewComponent } from './new.component';

const routes: Routes = [

  {
    path: "",
    component: NewComponent
  },

  {
    path: "second",
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }

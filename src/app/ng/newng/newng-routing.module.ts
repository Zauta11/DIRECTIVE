import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgComponent } from '../ng.component';

const routes: Routes = [

  {
    path: "ng",
    component: NgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewngRoutingModule { }

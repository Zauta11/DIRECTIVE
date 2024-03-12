import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from 'src/app/user/second/second.component';
import { Rx2Component } from '../rx2/rx2.component';
import { RxjsComponent } from '../rxjs.component';

const routes: Routes = [
  
  {
    path: "",
    component: RxjsComponent
  },
  {
    path: 'rx2',
    component: Rx2Component
  },
  {
    path: 'rx2/sec',
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxModuleRoutingModule { }

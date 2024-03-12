import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxModuleModule } from '../app/rxjs/rx-module/rx-module.module';
import { ChildComponent } from './child/child.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
// import { Rx2Module } from './rxjs/rx2/rx2.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TestRxComponent } from './rxjs/test-rx/test-rx.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: DataComponent
  },

  {
    path: 'child',
    component: ChildComponent
  },

  {
    path: 'parent',
    component: ParentComponent
  },

  {
    path: "directive",
    component: UserComponent
  },

  {
    path: "testrx",
    component: TestRxComponent
  },

  {
    path: 'apprxjs',
    loadChildren: () => import('../app/rxjs/rx-module/rx-module.module').then(m => RxModuleModule)
  },

  {
    path: "new",
    loadChildren: () => import ('./user/new/new.module'). then(m => m.NewModule)
  },

  {
    path: "template",
    loadChildren: () => import ('./ng/newng/newng.module').then(m => m.NewngModule)
  },

  {
    path: "lazy-loading",
    loadChildren: () => import ('./lazy/lazy.module').then(m => m.LazyModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

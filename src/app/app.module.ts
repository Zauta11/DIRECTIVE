import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HeadComponent } from './head/head.component';
import { MainDirective, SecDirective, ThirdDirective } from './main.directive';
import { UserComponent } from './user/user.component';
import { SecondComponent } from './user/second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomDirective } from './directives/custom.directive';
import { DirectiveDirective } from './directive.directive';
import { SecCustomDirective } from './directives/sec-custom.directive';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent,
    ChildComponent,
    ParentComponent,
    HeadComponent, 
    MainDirective,
    UserComponent,
    SecDirective,
    ThirdDirective,
    SecondComponent,
    
    
    
    
    
    
       
   
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

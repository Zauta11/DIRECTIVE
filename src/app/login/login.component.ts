import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

public myForm !: FormGroup;

constructor() {}


  ngOnInit(): void {
      this.myForm = new FormGroup({
        user: new FormControl("", Validators.required),
        password: new FormControl("", [Validators.required, Validators.minLength(3)])
      })
  }

  onSubmit() {
    console.log(this.myForm.value)
    
  }



}

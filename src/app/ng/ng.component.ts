import { Component } from '@angular/core';

@Component({
  selector: 'app-ng',
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.scss']
})
export class NgComponent {

  admin: boolean = false;

  title: string = "This is Pipe"
  numb: number = 123;
  // Chaining Pipe ( multiple Pipe )
  time:any = new Date();


  change() {
    this.admin =!this.admin;
  }
// NG If შემთხვევა
  students: string[] = ["გიორგი", " დათო", " ლაშა", "ანტონა"];


  //NG Style შემთხვევა, როცა სტილიზაციისთვის გვაქვს არასტატიკური მნიშვნელობა ანუ
  colorForStyle = 'green'

  //NG Class შემთხვევა, როცა გვინდა კლასთნ დაკავშირება ანუ CSS თან

  colorForClass = 'ngColorClass'


}

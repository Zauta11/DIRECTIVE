import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

constructor( ) {}


  age: number = 15;
  name: string =  'ivane';
  surname: string = "Zautiasasas";
  event: any;

  firstName: string = "Giorgi";
  lastName: string = "berishvili"
  
  

  @Input() dataFromLazy?: any[];

  @Output() sendInfo = new EventEmitter<any> ();


  dataFromUser: any[] = [
    {
      title: "This data is From Child (User) to Parent (Lazy)",
      text: 'textFromUser',
      age: 23,
      id: 1,

    }
  ]


  ngOnInit() {
    console.log("This is Data from Parent (Lazy) to Child (User): ", this.dataFromLazy);
    this.sendInfo.emit(this.dataFromUser)
    
  }
  
}

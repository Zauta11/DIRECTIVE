import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

// @Output() sendToParent = new EventEmitter<any>()
// @Output() sendToParent = new EventEmitter<any>()

// @Input() dataFromParent: any;

// @Input() goChild: any;


constructor( ) {

}
@Input() data!: any[];
@Output() sendTo = new EventEmitter<number[]>();
// @Output () sendIt = new EventEmitter<any>()
// data : any[] = [

//   {
//     "id": 17,
//     "name": "The Handmaid's Tale",
//     "rating": 3.45
//   }
// ]
allNumbers: any[] =[1,2,3,4,5,6,7,8]

// showChild() {

// }


 ngOnInit() {
    // console.log(this.dataFromParent);
  this.data ? console.log("Data From Parent to Child", this.data): null;

  this.sendTo.emit(this.allNumbers);


 }

  
}



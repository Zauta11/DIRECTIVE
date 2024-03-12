import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
firstName: string = "GIORGI";
lastName: string = "BERISHVILI"


personNumber: number = 10;

userInfo: any;
lazyData : any[] = [
  {
    name: "zauta", 
    age: 25
  }
]
//   info?: any[];


// getDataFromUser($event :any[]) {
//     this.info = $event
//     console.log("This is data from User(Child) to Lazy(Parent)", this.info);
// }


getInfoFromUser($event : any) {
    return this.userInfo = $event
}




ngOnInit() {

  

}



}

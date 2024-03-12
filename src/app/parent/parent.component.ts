import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [MainService]
})
export class ParentComponent implements OnInit {

  dataFromChild?: number[];

  constructor(private mainService: MainService) {

  }
  dataForCh : any[] = [
    {
      "id": 17,
      "name": "The Handmaid's Tale",
      "rating": 3.45
    }
  ]

  ngOnInit() {

    
  }
  

  fromChild($event: number[]) {
    console.log("Data from Child to Parent", $event);
    this.dataFromChild = $event;
  }

  


}

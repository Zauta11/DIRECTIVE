import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  firstName = "Giorgi";
  lastName = "berishvili"

  elements$ = of([
    {
      id: 1,
      name: "გიორგი",
    },
    {
      id: 2,
      name: "ბერიძე",
    }
  ])

  behavior$ = new BehaviorSubject<number>(0)

  ngOnInit() {
    this.elements$.pipe(
      delay(4000)
    ).subscribe(elements => {
      console.log(elements)
      this.behavior$.next(101)
    })
  }



  
}

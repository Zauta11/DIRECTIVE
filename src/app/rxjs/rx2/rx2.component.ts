import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { combineLatest, concatMap, debounceTime, delay, distinctUntilChanged, filter, fromEvent, interval, map, mergeMap, Observable, of, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rx2',
  templateUrl: './rx2.component.html',
  styleUrls: ['./rx2.component.scss']
})
export class Rx2Component implements OnInit {


  constructor (private dinTitle: Title) {

  }


  rx2$: Observable <any> = of(10, 11, 11, 12, 13, 14, 15);

  mainXs$ = this.rx2$.pipe(
    tap(console.log),
    map((v) => v / 2 ),
    filter((v) => v % 2 == 0));

      //SWITCH MAP
    obs1$: Observable <any> = fromEvent(document, 'click');
    obs2$: Observable <any> = interval(2000);

    finalObs$: Observable <number> = this.obs1$.pipe(
      switchMap(() => this.obs2$)
      )
      //////////////

      firstNameObs$: Observable <string> = of("IVANE", "Vano", "Vano");
      lastNameObs$: Observable <string> = of("Zautashvili", "Third","Second", "Third");

      finalNameObs$: Observable <any> = this.firstNameObs$.pipe(
        mergeMap((value) => this.lastNameObs$.pipe(
          map((value2) => value + " " + value2)
        )
      )
      )
      readonly obs$ = this.finalNameObs$.subscribe((res) => console.log("res", res)
  )

      //////////////

      // getNgForm() {
      //   this.inputName.get('name')?.valueChanges.
      //     pipe(debounceTime(2000))
      //     .subscribe((res) => {
            
      //       console.log("ngForm" , res);
            
      //         })
      // }

      inputName = new FormGroup({
        name: new FormControl(" ", [Validators.required, Validators.minLength(3)])
      });

      new: any;

    ngOnInit() {

      this.dinTitle.setTitle("RxJs TEST")





//       const timerOne$ = timer(1000, 4000);
// //timerTwo emits first value at 2s, then once every 4s
// const timerTwo$ = timer(2000, 4000);
// //timerThree emits first value at 3s, then once every 4s
// const timerThree$ = timer(3000, 4000);
// //when one timer emits, emit the latest values from each timer as an array
//  combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
//   (items) => {
//     console.log(
//     `Timer One Latest: ${items[0]},
//      Timer Two Latest: ${items[1]},
//      Timer Three Latest: ${items[2]}`
//     );
//   }
// );

      
      this.finalNameObs$.pipe(distinctUntilChanged()).subscribe((Res) => console.log("MergeMap: ", Res)
      )

      this.firstNameObs$.pipe(distinctUntilChanged()).subscribe((res) => console.log("FIRST:", res)
      )
      
      this.mainXs$.subscribe((res : any) =>  {
        console.log("MAIN", res)
      });
      
      
     
        this.inputName.get('name')?.valueChanges.pipe(
          debounceTime(2000))
          .subscribe((res: any) => {
            this.new = res;
          console.log("DEBOUNCE: ", res)
          }
        )

      //  switch Map --> this.finalObs$.subscribe((res) => console.log("SwitchMap: ", res))

    
     
    }


  }
 
  


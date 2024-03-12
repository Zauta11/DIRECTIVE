import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, concatMap, delay, distinctUntilChanged, filter, from, interval, map, Observable, of, share, switchMap, tap } from 'rxjs';
import { MainService } from 'src/app/main.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-test-rx',
  templateUrl: './test-rx.component.html',
  styleUrls: ['./test-rx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestRxComponent implements OnInit {

  
  @Input() users !: any[];
  
  @Output() sendTo = new EventEmitter<number[]>();
  array: number[] = [2,3,4,4,5,6,7,7,2];

  rxData$: Observable<any> = this.mainService.getItems().pipe(

    map((x) => x.filter((item) => item.id > 17)),
    tap((x) => console.log("BEFORE MAP: ", x)),
    map((x) => x.map((x1: any) => x1.id * 10)),
    tap((x) => console.log("AFTER MAP: ", x)),
    
    );



       /////////  HTTP RXJS

    // gData$: Observable <any> = this.mainService.getItems();

    dataLength$: Observable<any> = this.mainService.getItems().pipe(
      map((listOfUsers) => listOfUsers.length),
    );
    
    
    
    
    //    /////////  HTTP RXJS
    
    toppings = new FormControl('');
    
    
    toppingList$: Observable<any[]> = this.mainService.getItems();
  infoFromParent?: any[];
      
      onSelect(toppings: any) {
        toppings.value.length > 0 ? console.log("TOP", toppings.value) : null;
      }






/////////////////////////////////////////

      //  FROM YOUTUBE / ///

      currentPage$ = new BehaviorSubject<any>(1);

      newSubject1$ = new BehaviorSubject<any>(11);
      newSubject2$ = new BehaviorSubject<any>(12);

  // This bit is hidden for now, we will come to it in a moment
  currentPageData$ = this.currentPage$.pipe(
    switchMap((currentPage) =>
      this.mainService.getPassengerData(currentPage)
    ),
    map((res: any) => res.data),
    tap((res) => console.log("Youtube", res)
    )
    
  );

  newObjData$ = 
    combineLatest([
      this.newSubject1$,
      this.newSubject2$
    ]).pipe(map(([first, second]) => ({first, second}))
  )

  

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    if (this.currentPage$.value > 1) {
      this.currentPage$.next(this.currentPage$.value - 1);
    }
  }



// /////////////////////////////////////////////////////////


  streamOne$ = of("Hello Combine Latest >>>>>>>>");

  streamTwo$ = interval(2000);

  both$ = combineLatest([
    this.streamOne$,
    this.streamTwo$
  ]).pipe(map(([one, two]) => ({one, two})));




    
  constructor(private mainService: MainService) {


    this.newObjData$.subscribe((res) => console.log("subject,", res)
    );    
      const result = of(this.array);

      result.pipe(
        map((x) => x.map((x1) => x1 * 10))
      ).subscribe((res: any) => console.log("RESULT: ", res));
       result.subscribe((res) => console.log("ARRAY:", res));
      
       

       ////////////////////////////////////////////////////////////////////////////////////

       // DistinctuntilChanged მუშაობს From ოპერატორთან ერთად და ერრეიდან იღებს 
       // იმ ველიუებს რომლებიც მეორდება რამდენჯერმე 
       // ანუ [1, 2 , 2, 4] დან მივიღებთ [1, 2, 4]
       
       let result2 = from(this.array);
           result2.pipe(distinctUntilChanged()).subscribe((res) => console.log("DISTINCT: ", res)
            )

        ///////////////////////////////////////////////////////////////////////////////

      
      
  }

 

  sendInfoToChild() {
  
    this.users ? console.log("DATA FROM PARENT", this.users) : null;
    this.infoFromParent = this.users
  }


  ngOnInit() {
 
    this.sendTo.emit(this.array);
    console.log("data sent");
  

  }


}

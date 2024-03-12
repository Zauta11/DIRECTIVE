import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, delay, filter, from, fromEvent, map, Observable, of, skip, startWith, Subject, switchMap, tap, timer } from 'rxjs';
import { MainService } from '../main.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  dataFromChild?: number[];

  constructor(private main: MainService) {}

  usersForChild = [123, 234, 345, 456]

  users1 = [
    
    {id: 1 , name: "AUDI", year: 2020, isActive: true},
    // {id: 2 , name: "BMW", year: 2018, isActive: true},
    // {id: 3 , name: "TOYOTA", year: 2015, isActive: true},
    {id: 4 , name: "HONDA", year: 2022, isActive: true}

  ]
  
  fromChild($event: number[]) {
    console.log("Data from Child to Parent", $event);
    
    this.dataFromChild = $event;
  }

  users$ = of(this.users1);

  person$ = new BehaviorSubject<string>("");
  personObs$ = this.person$.asObservable();


  @ViewChild('fromNewEvent') newBtnEvent: any = ElementRef;

  // username$ = this.users$.pipe(

      // Pipes
      filteredUsers$ = this.users$.pipe(
      filter((users) => users.every((user) => user.year > 2018)),
      map((users) =>  users.map((user) => user.name))
      )
  combineData: any;

      

      // From Event

      // documentClick$ = fromEvent(document , 'click').pipe(
      //   tap(data => console.log("Before: ", data)
      //   )
      //   )
      






      newEvent() {
        const btnObservable$ = fromEvent(this.newBtnEvent?.nativeElement , 'click')
        .subscribe((res) => console.log(res)
        )

        // btnObservable$.subscribe((res) => console.log('FromEvent: ', res)
        // )
      }

      //CombineLatest
      data$ = combineLatest([
        this.users$,
        this.filteredUsers$
      ]).pipe(
        map(([users, filteredUsers]) => ({
          users,
          filteredUsers
          }))
      )
            // Map Operator ///
      numbers$: Observable<number[]> = of([1, 2, 3 , 4, 5]).pipe(
        map((x) => x.map((num) => num + 10))
      );

       
    /////// Of and From Operators Difference /////////////////////////////////////////////////////
        
  startOf$: Observable<number[]> = of([1, 2 ,3], [4, 5, 6]);

  startFrom$: Observable<number> = from([1, 2 ,3]);
        // From ის დროს ტაიპში [] ფრჩხილები არ არის საჭირო  //
        //////////////////////////////////////////////////////////////////////////////////////

  searchForm!: FormGroup<any>;
  found: any;

      

  
  ngForms: any = "";
  
  goSearch() {
    console.log("Forms: ", this.searchForm.value);
    this.searchForm.reset()
  }

  getNgForm() {
    this.searchForm.get('name')?.valueChanges.
      pipe(debounceTime(2000))
      .subscribe((res) => {
        this.ngForms = res,
        console.log("ngForm" ,this.ngForms);
        
          })
  }

  time$ = timer( 1000, 3000);
  timeTwo$ = timer( 2000, 4000);
  timeThree$ = timer( 3000, 5000);

  source3$ = of(1,2,3,4,5)
  source4$ = of("a", "b", "c", "d", "e");

  
  results?: any
  searchControl = new FormControl('');



  ngOnInit(): void {

      this.searchControl.valueChanges.pipe(
        debounceTime(1000)
      ).subscribe(data => {
        this.results = data;
        console.log("THIS IS INPUT DATA: ", data)
        
        
      });
    
    // combineLatest([this.source3$,this.source4$]).subscribe((data) => 
    // console.log("CombineLatest", data)
    // )

    // combineLatest([this.time$, this.timeTwo$, this.timeThree$]).subscribe(
    //  ( [finalVal, SecVal, ThirdVal] : [any, any, any]) => {
    //   console.log(
    //     "COMBINE LATEST:", finalVal,
    //     "SECOND: ", SecVal,
    //     "THIRD: ", ThirdVal
    //      );
      
    //  }
    // )

    

    // this.time.subscribe((res) => 
    // console.log("======TIMER", res) 
    // )

    /////// Of and From Operators Difference //////////////////////////////////////////////////////
      
    // this.startOf$.subscribe((res) => console.log("users Of: ", res));

    //   // Of ის დროს დალოგავ მთლიანად ერეეის ანუ 
    //   // users Of:  (3) [1, 2, 3] 

    // this.startFrom$.subscribe((res) => console.log("users From: ", res));

// From ის დროს დალოგავს სათითაოდ ყველა შემავალ ელემენტს ანუ
      // users From:  1
      // users From:  2
      // users From:  3

    // ///////////////////////////////////////////////////////////////////////////////////////
    

    // SKIP 

    // this.startOf$.pipe(
    //   skip(1)
      
    // ).subscribe((res) => {
    //   console.log("----SKIP: ", res);
      
    // })

    this.searchForm = new FormGroup({
      name: new FormControl(" ", [Validators.required, Validators.minLength(3)])
    });

      fromEvent<any>(document , 'click').pipe(
        tap(data => console.log("Before: ", data)),
        filter(data => data.clientX > 300 && data.clientY > 300),
        map(data => `"X:" ${data.clientX} , "Y:" ${data.clientY}`)
      ).subscribe((data) => console.log("AFTER-Log:", data))


 
      //  this.startOf$?.pipe(
      //   delay(3000)
      //  ).subscribe((res : any) => {
      //   console.log("START: ", res);
      //  })

     
      
        
      // this.numbers$.subscribe((res) => console.log("MAP:", res)
      // );

      // //////////

      // this.users$.subscribe((res) => console.log("USERS: ", res));


    // this.documentClick$.subscribe((e) => 
    // console.log('e:', e)
    // )

    // this.filteredUsers$.subscribe((all) => {
    //   console.log('usersOF:', all);
    // })

    setTimeout(() => {
      this.person$.next('zauta')
    },2000);
    this.person$.subscribe((res) => 
    console.log("person: ", res)
    )

    setTimeout(() => {
     },2000);
    this.personObs$.subscribe((res) => 
    console.log("person Obser: ", res)
    )


    // console.log('users', this.filteredUsers$);
    
  }

}

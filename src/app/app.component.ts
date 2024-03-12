import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OrientPro';


  age: number = 15;
  name: string =  'ivane';
  surname: string = "Zautiasasas";
  
constructor (private mainService: MainService,
    private dinTitle: Title,
    private router: Router
  ) {



}

ngOnInit() {


  // Routing ის URL ის მიხედვით ბრაუზერში Title ის შეცვლა 

  this.router.events.subscribe( (res: any ) => {
      
    if (res instanceof NavigationEnd) {
      console.log("Router: ", res);

      switch (res.url) {
        case '/home' :
          this.dinTitle.setTitle('Home Page');
          break;
        case '/rxtest' :
          this.dinTitle.setTitle('RxTest Page');
          break;
        case '/new' :
          this.dinTitle.setTitle('NEW Page');
          break;
          default:
            this.dinTitle.setTitle("Default Page")

      }

    }
    
  })
}

getData$: Observable<any> = this.mainService.getProducts()



}

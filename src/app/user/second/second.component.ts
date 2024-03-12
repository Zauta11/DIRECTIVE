import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private mainService: MainService) {

  }

getData$: Observable<any> = this.mainService.getProducts();


ngOnInit(): void {

}

}

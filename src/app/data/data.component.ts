import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

data$: Observable<Movie[]> = this.mainService.getItems()

productData$: Observable<any[]> = this.mainService.getDataforUsers()

constructor(private mainService: MainService) {}

}

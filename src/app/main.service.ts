import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, Subject } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://run.mocky.io/v3/cd3bd65a-0e83-4d68-99b2-c3e679be1d40"

  ProductURL = "https://fakestoreapi.com/products/"

  getItems(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  } 

  getDataforUsers (): Observable<any[]> {
    return this.http.get<any[]>(this.ProductURL)
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
// /// FROM YOUTUBE ////// 
getPassengerData(page: number) {
  return this.http.get(
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
  );
}
  
///////////////////////////

  addItems(user:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/todo`, user)
  }

  editItems(params: any) : Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/todo`, params)
  }

  deleteItems(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/todo/${id}`)
  }





}

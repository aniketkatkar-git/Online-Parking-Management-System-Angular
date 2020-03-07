import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  public getCity():any
  {
    return this.http.get<any>("http://localhost:8989/city/getAllCities").pipe(
      tap(city=>{
        console.log('fetch data'+city);
      })
    )
}
}

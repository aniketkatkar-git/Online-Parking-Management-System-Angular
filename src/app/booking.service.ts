import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { City } from './city';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  cities:City[];
 // area:Area[];
  constructor(private http:HttpClient) { }

  public bookingRegistration(bk:Booking)
  {
    
    return this.http.post("http://localhost:8989/booking/registerBooking", {"Bid":bk.Bid,"Bdate":bk.Bdate,"Tsslots":bk.Tsslots,"Plname":bk.Plname,"Aname":bk.Aname,"Cname":bk.Cname,"Bcharges":bk.Bcharges,"Bmode":bk.Bmode,"Bpaymentstatus":bk.Bpaymentstatus,"Status":bk.Status});
  }

  public getCities():Observable<City> {
    return this.http.get<City>("http://localhost:8989/city/getAllCities");
  }
 /* public getArea(cid):Observable<Area>
  {
    console.log(cid);
    return this.http.get<Area>("http://localhost:8080/area/getAreaByCityId?cid="+cid);
  }*/
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http:HttpClient){}

  public registerRequest(no:Request)
  {
    
    return this.http.post("http://localhost:8989/request/registerRequest",{"no.Oid":no.Oid,"Rid":no.Rid,"Rpsaddress":no.Rpsaddress,"Rpscount":no.Rpscount,"Rstatus":no.Rstatus});
    
  }

  getRequest():any
  {
    return this.http.get<any>("http://localhost:8989/request/getAllRequests").pipe(
      tap(requests=>{
        console.log('fetch data'+requests);
      })

    )

  }
}

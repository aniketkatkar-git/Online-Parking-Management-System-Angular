import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from './Owner';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http:HttpClient) { }

  public ownerRegistration(no:Owner)
  {
    
    return this.http.post("http://localhost:8989/owner/registerOwner", {"id":no.id,"ownerUsername":no.ownerUsername,"password":no.password,"firstName":no.firstName,"lastName":no.lastName,"email":no.email,"contactno":no.contactno,"address":no.address});
    
  }

  public login(userName,password):Observable<any>
  {
    return this.http.get<any>("http://localhost:8989/owner/login?o_username="+userName+"&o_password="+password);
  }
  public getOwner():any

  {
    return this.http.get<any>("http://localhost:8989/owner/getAllOwners").pipe(
      tap(owners=>{
        console.log('fetch data'+owners);
      })

    )

  }
  public updateOwner(no:Owner)
  {
    alert(no.id);
    return this.http.put("http://localhost:8989/owner/updateOwner/"+no.id, no);
    
  }
}

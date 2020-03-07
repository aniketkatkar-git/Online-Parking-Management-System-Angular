import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Manager } from './manager';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Owner } from './Owner';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  login(mUserName: string, mPassword: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

  public managerRegistration(nm:Manager)
  {
    
    return this.http.post("http://localhost:8989/manager/registerManager", {"mId":nm.mId,"mUserName":nm.mUserName,"mPassword":nm.mPassword,"mEmail":nm.mEmail,"mContactNo":nm.mContactNo});
  }
  public managerlogin(userName,password):Observable<any>
  {
    return this.http.get<any>("http://localhost:8989/manager/login?m_username="+userName+"&m_password="+password);
  }
  getManager():any

  {
    return this.http.get<any>("http://localhost:8989/manager/getAllManagers").pipe(
      tap(managers=>{
        console.log('fetch data'+managers);
      })

    )

  }
  public updateManager(no:Manager)
  {
    alert(no.mId);
    return this.http.put("http://localhost:8989/manager/updateManager/"+no.mId, no);
    
  }


}

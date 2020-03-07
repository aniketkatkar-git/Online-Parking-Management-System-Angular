import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { ngModuleJitUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public userRegistration(nu:User)
  {
    
    return this.http.post("http://localhost:8989/user/registerUser", {"id":nu.id,"userName":nu.userName,"password":nu.password,"firstname":nu.firstname,"lastname":nu.lastname,"email":nu.email,"contactNo":nu.contactNo,"address":nu.address});

  }
  public userlogin(userName,password):Observable<any>
  {
    return this.http.get<any>("http://localhost:8989/user/login?u_username="+userName+"&u_password="+password);
  }

  public updateUser(no:User)
  {
    alert(no.id);
    return this.http.put("http://localhost:8989/user/updateUser/"+no.id, no);

  }
  getUser():any
  {
    return this.http.get<any>("http://localhost:8989/user/getAllUsers").pipe(
      tap(users=>{
        console.log('fetch data'+users);
      })

    )

  }

}
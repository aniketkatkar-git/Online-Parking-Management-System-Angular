import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Admin } from './admin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  login(userName: string, password: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

  public adminlogin(userName,password):Observable<any>
  {
    return this.http.get<any>("http://localhost:8989/admin/login?a_username="+userName+"&a_password="+password);
  }

}


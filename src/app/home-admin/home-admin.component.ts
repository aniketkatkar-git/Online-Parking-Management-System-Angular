import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

username:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('aname');
       console.log(this.username);
  }
  public LogOut(){
    sessionStorage.removeItem('userName');
    this.router.navigate(['/'])
;   // this.router.navigate(['/admin']);
  }
}

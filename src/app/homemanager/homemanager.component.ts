import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homemanager',
  templateUrl: './homemanager.component.html',
  styleUrls: ['./homemanager.component.css']
})
export class HomemanagerComponent implements OnInit {

  username:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('mUserName');
       console.log(this.username);
  }
  public LogOut(){
    sessionStorage.removeItem('username');
    this.router.navigate(['/manager']);
  }
}



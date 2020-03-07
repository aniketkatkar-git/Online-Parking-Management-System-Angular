import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-allcity',
  templateUrl: './allcity.component.html',
  styleUrls: ['./allcity.component.css']
})
export class AllcityComponent implements OnInit {
 
  name:string;
  city:any;
  
 // city:City=new City(0,"");
  
  constructor(private service:CityService) { 
    this.city=new City(0,"");
    
  }
  
    ngOnInit() 
  {
    this.service.getCity().subscribe(
      usr=>{
        this.city=usr;
      }
    );
    function getdata()
    {
      this.name="hello";

    }

  }
}


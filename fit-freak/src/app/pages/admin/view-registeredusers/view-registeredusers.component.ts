import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-registeredusers',
  templateUrl: './view-registeredusers.component.html',
  styleUrls: ['./view-registeredusers.component.css']
})
export class ViewRegisteredusersComponent implements OnInit {
  Sunwa:any;

  constructor(private auth:AuthService, private router:Router){}
  
  ngOnInit(): void {
    this.loadregusers();
  }

  loadregusers(){
    this.auth.getSunwaRegistered().subscribe((data:any)=>{
      console.log(data);
      this.Sunwa=data;
    })
  }
}

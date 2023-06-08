import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit{
  users:any;

  constructor(private auth:AuthService, private router:Router){}
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.auth.getuser().subscribe((data:any)=>{
      console.log(data);
      this.users=data;
    })
  }
}

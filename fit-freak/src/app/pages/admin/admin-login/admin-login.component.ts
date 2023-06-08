import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  message:string = '';
  className='d-none'
  username!: string;
  password!: string;
  constructor(private router:Router){}

  ngOnInit():void{

  }
  login(){
      if(this.username=="admin" && this.password=="admin"){
      this.router.navigate(['/admin'])
      }
      else{
        this.message="Access Denied";
        this.className='alert alert-danger';
      }
  }
}

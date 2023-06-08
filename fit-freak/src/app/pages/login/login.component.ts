import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm!: FormGroup;
  message:string = '';
  className='d-none'
  constructor(private fb:FormBuilder,private auth:AuthService, private router:Router){
    this.LoginForm=this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required],
    })
  }
  ngOnInit():void{}

  login(){
    const data = this.LoginForm.value
    this.auth.login(data).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('SessionId',res.SessionId)
      this.router.navigate(['/home'])
      }
      else{
        this.message=res.message;
        this.className='alert alert-danger';
      }
    }, err=>{
      alert("Login Failed"+err);
    })
  }
}

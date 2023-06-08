import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm!: FormGroup;
  message:string = '';
  className='d-none';
  isProcess:boolean=false;
  constructor(private fb:FormBuilder, private auth:AuthService)
  {
    this.RegisterForm=this.fb.group({
      'username':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required]
    })
  }
  ngOnInit():void{

  }
  register(){
    this.isProcess=true;
    const data= this.RegisterForm.value;
    delete data['confirm']
    this.auth.register(data).subscribe(res=>{
      if(res.success){
        this.isProcess=false;
        this.message="Welcome to Fit-Freak. TRAIN HARD :) ";
        this.className='alert alert-success';
      }else{
        this.isProcess=false;
        this.message=res.message;
        this.className='alert alert-danger';
      } 
      }, err=>{
        this.isProcess=false;
        this.message="error: "+err;
        this.className='alert alert-danger';
    })
  }
}

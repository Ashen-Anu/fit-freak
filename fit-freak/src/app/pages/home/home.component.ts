import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sunwaRegister!: FormGroup;
  message:string = '';
  className='d-none';
  isProcess:boolean=false;
  constructor(private fb:FormBuilder, private auth:AuthService)
  {
    this.sunwaRegister=this.fb.group({
      'email':['',Validators.required],
      'category':['',Validators.required]
    })
  }
  ngOnInit():void{

  }
  sunwaregister(){
    this.isProcess=true;
    const data= this.sunwaRegister.value;
    delete data['confirm']
    this.auth.sunwaRegister(data).subscribe(res=>{
      if(res.success){
        this.isProcess=false;
        this.message="We will email/text you the details shortly 💪 ";
        this.className='alert alert-success';
      }else{
        this.isProcess=false;
        this.message=res.message;
        this.className='alert alert-danger';
      } 
      }, err=>{
        this.isProcess=false;
        this.message="Couldn't connect server :(";
        this.className='alert alert-danger';
    })
  }
}

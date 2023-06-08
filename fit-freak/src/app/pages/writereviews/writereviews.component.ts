import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-writereviews',
  templateUrl: './writereviews.component.html',
  styleUrls: ['./writereviews.component.css']
})
export class WritereviewsComponent implements OnInit {
  ngOnInit(): void {
  }
  ReviewForm!: FormGroup;
  message:string = '';
  className='d-none'
  constructor(private fb:FormBuilder,private auth:AuthService){
    this.ReviewForm=this.fb.group({
      'email':['',Validators.required],
      'review':['',Validators.required],
    })
  }
  
  review(){
    const data = this.ReviewForm.value
    this.auth.addreview(data).subscribe((res)=>{
      if(res.success){
        alert("Successful");
      }
      else{
        this.message=res.message;
        this.className='alert alert-danger';
      }
    }, err=>{
      alert("Failed"+err);
    })
  }
}

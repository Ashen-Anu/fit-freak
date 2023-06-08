import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit{
  workoutForm!: FormGroup;
  scheduleData:any;
  message:string = '';
  className='d-none';
  values=[] as any;
  isProcess:boolean=false;

  constructor(private http:HttpClient ,private auth:AuthService, private fb:FormBuilder, private router:Router){
    this.workoutForm=this.fb.group({
      day:[''],
      workout1:[''],
      workout2:[''],
      workout3:[''],
      workout4:[''],
      workout5:[''],
      workout6:[''],
      workout7:[''],
      workout8:[''],
      workout9:[''],
      workout10:['']
    })
  }
  
  ngOnInit(): void{
    this.http.get('http://localhost:8080/auth/getSchedule').subscribe((data:any)=>{
      console.log(data);
      this.scheduleData=data;
    })
  }

  addWorkout(){
    this.isProcess=true;
    const data= this.workoutForm.value;
    delete data['confirm']
    this.auth.addWorkout(data).subscribe(res=>{
      if(res.success){
        this.isProcess=false;
        this.message="Workout Added💪";
        this.className='alert alert-success';
      }
      else{
        this.isProcess=false;
        this.message=res.message;
        this.className='alert alert-danger';
      } 
      }, err=>{
        this.isProcess=false;
        this.message=err;
        this.className='alert alert-danger';
    })
  }
}


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-workout',
  templateUrl: './view-workout.component.html',
  styleUrls: ['./view-workout.component.css']
})
export class ViewWorkoutComponent implements OnInit{
  scheduleData:any;
  workoutData:any;

  constructor(private http:HttpClient ,private auth:AuthService, private router:Router){}
  ngOnInit(): void {
    this.loadschedule();
    this.loadworkout();
  }

  loadschedule(){
    this.http.get('http://localhost:8080/auth/getSchedule').subscribe((data:any)=>{
      console.log(data);
      this.scheduleData=data;
  })
}
loadworkout(){
  this.auth.postworkout().subscribe((data:any)=>{
    console.log(data);
    this.workoutData=data;
  })
}
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})

export class AddScheduleComponent implements OnInit {
  message:string = '';
  scheduleForm!: FormGroup;
  className='d-none';
  values=[] as any;
  isProcess:boolean=false;
  
  constructor(private fb:FormBuilder, private auth:AuthService){
    this.scheduleForm=this.fb.group({
      'username':['',Validators.required],
      'event1':['',Validators.required],
      'event2':['',Validators.required],
      'event3':['',Validators.required],
      'event4':['',Validators.required],
      'event5':['',Validators.required],
      'event6':['',Validators.required],
      'event7':['',Validators.required],
      'event8':['',Validators.required],
      'event9':['',Validators.required],
      'event10':['',Validators.required]
    })
  }
  
  ngOnInit(){
  }
  addSchedule(){
    const data = this.scheduleForm.value
    delete data['confirm']
    this.auth.addSchedule(data).subscribe((res)=>{
      if(res.success){
        alert("Schedule Added. Train Hard💪");
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

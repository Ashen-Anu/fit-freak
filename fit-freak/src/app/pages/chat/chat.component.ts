import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  chatForm!: FormGroup;
  replyForm!: FormGroup;
  isProcess:boolean=false;
  chats:any;
  replies:any
  constructor(private fb:FormBuilder, private auth:AuthService)
  {
    this.chatForm=this.fb.group({
      'message':['',Validators.required],
      'name':['']
    })
    this.replyForm=this.fb.group({
      'reply':['',Validators.required],
      'rname':['']
    })

  }
  ngOnInit():void{
      this.postMsg();
  }
  sendMsg(){
    this.isProcess=true;
    const data= this.chatForm.value;
    delete data['confirm']
    this.auth.sendMessage(data).subscribe(res=>{
      if(res.success){
        this.isProcess=false;
      }else{
        this.isProcess=false;
      } 
      }, err=>{
        this.isProcess=false;
        alert('error'+err);
    })
  }
  postMsg(){
    this.auth.postchats().subscribe((data:any)=>{
      console.log(data);
      this.chats=data;
    })
  }
}

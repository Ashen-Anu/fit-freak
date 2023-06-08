import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vreviews',
  templateUrl: './vreviews.component.html',
  styleUrls: ['./vreviews.component.css']
})
export class VreviewsComponent implements OnInit{
  writerevs:any;

  constructor(private auth:AuthService, private router:Router){}
  
  ngOnInit(): void {
    this.reviews();
  }

  reviews(){
    this.auth.reviews().subscribe((data:any)=>{
      console.log(data);
      this.writerevs=data;
    })
  }
}

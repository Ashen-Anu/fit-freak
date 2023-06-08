import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) {}

  register(data:any): Observable<any>{
    return this.http.post('http://localhost:8080/auth/register',data);
  }
  sendMessage(data:any): Observable<any>{
    return this.http.post('http://localhost:8080/auth/sendMessage',data);
  }
  sendReply(data:any): Observable<any>{
    return this.http.post('http://localhost:8080/auth/sendReply',data);
  }
  postreplies(){
    return this.http.get('http://localhost:8080/auth/postReplies');
  }
  postchats(){
    return this.http.get('http://localhost:8080/auth/postChats');
  }
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/login',data);
  }
  addSchedule(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/addschedule',data);
  }
  sunwaRegister(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/home',data);
  }
  addWorkout(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/addworkout',data);
  }
  getSunwaRegistered(){
    return this.http.get('http://localhost:8080/auth/sunwaregister');
  }
  reviews(){
    return this.http.get('http://localhost:8080/auth/getreviews');
  }
  postworkout(){
    return this.http.get('http://localhost:8080/auth/getworkout');
  }
  getuser(){
    return this.http.get('http://localhost:8080/auth/getusers');
  }
  addreview(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/writereviews',data);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Users } from '../Interfaces/Users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: number = 1;
  private currentUser? : Users; 
  private apiUrl = 'http://localhost:5000/users' 
  constructor(private http: HttpClient) { }

getUsers(username: String, password: String): Observable<Users[]> {
  let newApiUrl = this.apiUrl + `?user_name=${username}`;
  return this.http.get<Users[]>(newApiUrl);
}

setCurrentUser(user: Users) : void{
  this.currentUser = user; 
}

getCurrentUser() : Users | undefined {
  if(this.currentUser !== undefined) {
    return this.currentUser; 
  }
  return undefined; 
}


checkUserPassword(user: Users, password: String): boolean{
  if(user === undefined || user === null || password === ''){
    return false;
  }
  if(user.user_password === password){
    return true;
  }
  return false;
}

getUser(): number {
  return this.user; 
}


}

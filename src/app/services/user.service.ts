import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: number = 1;
  private apiUrl = 'http://localhost:5000/user' 
  constructor() { }

  getUser(): number {
    return this.user; 
  }


}

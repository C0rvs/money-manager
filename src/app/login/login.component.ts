import { Component } from '@angular/core';
import { Users } from '../Interfaces/Users';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string =''; 
  password: string = ''; 
  user?: Users; 
  constructor(private userService: UserService, private router: Router) {

  }
  submitData() {
    if (this.userName === '' || this.password === '') {
      this.clearInputs();
      return;
    }
    let currentPassword = this.password; 
    this.userService.getUsers(this.userName, currentPassword).subscribe(newUser => {
      if (newUser !== undefined && newUser !== null) {
        console.log(currentPassword); // Moved the console.log here
        if (this.userService.checkUserPassword(newUser[0], currentPassword)) {
          this.userService.setCurrentUser(newUser[0]); 
          this.router.navigate(['/home']); 
        } else {
          console.log("Incorrect credentials!");
        }
      }
    });
    this.clearInputs();
  }
  

  clearInputs() {
    this.userName = "";
    this.password = ""; 
  }

}

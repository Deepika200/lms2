import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
// import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private apiService: ApiService,private router:Router) {}

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.apiService.login({ username, password }).subscribe(
        (response) => {
          console.log('Login successful', response);
          const userId = response.userId; // Adjust according to your actual response structure

          this.router.navigate(['/student-details',userId])
          // Navigate to the dashboard or handle success
        },
        (error) => {
          console.error('Login failed', error);
          // Show an error message
        }
      );
    }
  }
}

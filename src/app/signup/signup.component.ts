import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';  // Ensure your API service is imported
import { HttpClient } from '@angular/common/http';
import { response, Router } from 'express';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    // Prepare the data for the backend
    const signupData = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    this.apiService.signup(signupData).subscribe(
      (response)=>{
        console.log('signup succesfull',response);
        alert('registeration sucessfull');

      },
      (error)=>{
        console.error('signup failed',error);
        alert('Signup failed!');
      }

    );

  //   // Send POST request to Express backend
  //   this.http.post('http://localhost:5000/api/signup', this.signupForm.value).subscribe(
  //     (response) => {
  //       console.log('User registered successfully:', response);
  //       alert('User registered successfully');
  //       // Redirect to login page after successful signup
  //       // this.route.navigate(['/login']);
  //     },
  //     (error) => {
  //       console.error('Error occurred while registering user:', error);
  //       alert("cant register user");
  //     }
  //   );
  // }
}
}

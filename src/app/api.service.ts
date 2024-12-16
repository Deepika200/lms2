import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api'; // Ensure this matches your backend URL

  constructor(private http: HttpClient) {}

  // Existing signup method
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  // New login method
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }


  getStudentByUserId(userid: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/${userid}`);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/courses`);
  }

  getCourseById(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/${courseId}`);
  }

}

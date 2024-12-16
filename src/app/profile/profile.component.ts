import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userId: number;
  student: any = {};


  constructor(private router: Router,private apiService:ApiService,private route:ActivatedRoute) {}


ngOnInit(): void {
  this.route.paramMap.subscribe((params)=>{
    this.userId= Number(params.get('userId'));
    if(this.userId){
      this.fetchStudentData();
    }
  })
}

fetchStudentData() {
  this.apiService.getStudentByUserId(this.userId).subscribe(
    (data) => {
      this.student = data;
      console.log('Student details:', this.student);
    },
    (error) => {
      console.error('Error fetching student details:', error);
    }
  );

}


}
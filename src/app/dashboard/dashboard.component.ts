import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  navigateTo(route: string): void {
    this.router.navigate([route]); // Navigate to the selected page
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

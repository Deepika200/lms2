import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  course: any = null;
  courseId: number;
  userId:any= null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Get the courseId from the route params
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;  // 'courseId' is the parameter in the route

    // Fetch the course details using the courseId
    this.apiService.getCourseById(this.courseId).subscribe(
      (data) => {
        this.course = data;
        console.log('Course details:', this.course);
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
  assignments = [
    {
      id: 'A101',
      name: 'Math Assignment 1',
      date: '2024-12-10',
      lastDate: '2024-12-13',
      lastTime: '11:59 PM',
      pdfUrl: 'assets/assignments/math_assignment_1.pdf'
    },
    {
      id: 'A102',
      name: 'Science Assignment 1',
      date: '2024-12-12',
      lastDate: '2024-12-22',
      lastTime: '11:59 PM',
      pdfUrl: 'assets/assignments/science_assignment_1.pdf'
    }
  ];

  

  uploadFile(event: any, assignmentId: string): void {
    const file = event.target.files[0];
    const assignment = this.assignments.find(a => a.id === assignmentId);
  
    if (assignment) {
      const currentDate = new Date();
      const lastSubmissionDate = new Date(assignment.lastDate);
  
      if (currentDate > lastSubmissionDate) {
        alert('Submission date has passed. You cannot upload the file.');
        return;
      }
  
      if (file) {
        console.log(`File uploaded for Assignment ID ${assignmentId}:`, file.name);
        // Additional logic for file upload handling
      }
    }
  }
  isSubmissionClosed(lastDate: string): boolean {
    return new Date() > new Date(lastDate);
  }
  
}

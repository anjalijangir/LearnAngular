import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService }  from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  /**
   * tnject the services
   * @param activatedRoute 
   * @param location 
   * @param studentService 
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private studentService: StudentService
  ) { }

  getStudent():void{
    const rollNumber = +this.activatedRoute.snapshot.paramMap.get('rollNumber');
    this.studentService.getStudent(rollNumber).subscribe(student => this.student = student)
    
  }

  goBack(): void{
    this.location.back();
  }

  ngOnInit() {
  }

}

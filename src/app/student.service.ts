import { Injectable, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { STUDENTS } from './mock-student';
import { MessageService } from './messages.service';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('StudentService: fetched students');
    return of(STUDENTS);
  }

  getStudent(rollnumber: number): Observable<Student> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`StudentService: fetched student rollnumber=${rollnumber}`);
    return of(STUDENTS.find(student => student.rollNumber === rollnumber));
  }

}

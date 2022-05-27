import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  ListEmployeesComponent:Employee

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@tech.com',
      dateOfBirth: new Date( '01/11/2000'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phonenumber: 234567890,
      dateOfBirth: new Date('05/27/2000'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phonenumber: 23456789,
      dateOfBirth: new Date( '04/20/1996'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/john.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

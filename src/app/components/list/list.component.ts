import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: any[] = [];
 // Array to hold employee data

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      (data: any) => {
        console.log(data); // Check the data in the console
        this.employees = data; // Assuming the service returns an array directly
      },
      (error: any) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }
  
  
  
}

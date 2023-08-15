import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployee() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  addEmployee(employeeData: any) {
    return this.httpClient.post('http://localhost:3000/employees', employeeData);
  }
}

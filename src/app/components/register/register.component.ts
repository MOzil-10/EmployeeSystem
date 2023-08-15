import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employee: EmployeeService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Create an object with the employee data to be added
      const employeeData = {
        id: Math.floor(Math.random() * 100), // Generate a random ID (just an example)
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };

      this.employee.addEmployee(employeeData).subscribe(
        (response: any) => {
          console.log('Employee added:', response);
          // Handle success here
        },
        (error: any) => {
          console.error('Error adding employee:', error);
          // Handle error here
        }
      );
      }
    }
  }      

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
  
      this.employeeService.getEmployeeByEmail(formData.email).subscribe(
        (user: any) => {
          if (user.length > 0 && user[0].password === formData.password) {
            // Successful login, navigate to the list page
            this.router.navigate(['/list']);
          } else {
            // Invalid credentials, show error message
            console.error('Invalid credentials');
          }
        },
        (error: any) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }
}

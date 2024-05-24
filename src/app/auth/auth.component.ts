
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AuthComponent {
  loginForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    if (username === 'testuser' && password === 'password') {
      this.message = 'Login successful';
    } else {
      this.message = 'Invalid username or password';
    }
  }
}

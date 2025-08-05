import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    this.authService
      .login(email, password)
      .then(() => {
        localStorage.setItem('user', JSON.stringify({ email }));
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error(error);
        alert('Login failed: ' + error.message);
      });
  }
}

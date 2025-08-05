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
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]], // ВЪРНАТО
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const { username, email, password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService
      .register(email, password)
      .then(() => {
        localStorage.setItem('user', JSON.stringify({ email }));
        localStorage.setItem('isLoggedIn', 'true');
        alert(`Welcome ${username}! Registration successful.`);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }
}

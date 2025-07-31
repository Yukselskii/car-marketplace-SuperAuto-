import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    const user = localStorage.getItem('user');
    if (!user) {
      alert('No user found. Please register first.');
      return;
    }

    const parsedUser = JSON.parse(user);

    if (parsedUser.email === email) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      alert('Incorrect email or password.');
    }
  }
}

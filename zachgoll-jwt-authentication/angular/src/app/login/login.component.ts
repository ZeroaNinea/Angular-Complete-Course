import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform', { static: false }) loginForm!: NgForm;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const token = localStorage.getItem('id_token');

    const headers = new HttpHeaders()
      .set('Authorization', token!)
      .set('Content-Type', 'application/json');

    const reqObject = {
      username: username,
      password: password,
    };

    this.http
      .post('http://localhost:5000/users/login', reqObject, { headers })
      .subscribe({
        // The response data
        next: (response) => {
          // If the user authenticates successfully, we need to store the JWT returned in localStorage
          this.authService.setLocalStorage(response);
          console.log(response);
        },

        // If there is an error
        error: (error) => {
          console.log(error);
        },

        // When observable completes
        complete: () => {
          console.log('done!');
          this.router.navigate(['protected']);
        },
      });
  }

  ngOnInit(): void {}
}

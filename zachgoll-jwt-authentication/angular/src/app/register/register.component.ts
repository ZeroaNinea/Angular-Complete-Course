import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerform', { static: false }) registerForm!: NgForm;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onRegisterSubmit() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;

    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    const reqObject = {
      username: username,
      password: password,
    };

    this.http
      .post('http://localhost:5000/users/register', reqObject, {
        headers: headers,
      })
      .subscribe(
        // The response data
        (response) => {
          console.log(response);
        },

        // If there is an error
        (error) => {
          console.log(error);
        },

        // When observable completes
        () => {
          console.log('done!');
          this.router.navigate(['login']);
        }
      );
  }
}

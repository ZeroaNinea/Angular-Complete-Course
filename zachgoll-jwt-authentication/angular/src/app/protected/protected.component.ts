import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss',
})
export class ProtectedComponent implements OnInit {
  constructor(private http: HttpClient) {}

  message!: string;

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/users/protected').subscribe({
      next: (response) => {
        if (response) {
          this.message = response.msg;
        }
      },

      error: (error) => {
        if (error.status === 401) {
          this.message =
            'You are not authorized to visit this route.  No data is displayed.';
        }

        console.log(error);
      },

      complete: () => {
        console.log('HTTP request done');
      },
    });
  }
}

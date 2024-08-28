import { Component, NgModule, Injectable, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  UpperCasePipe,
  LowerCasePipe,
  DatePipe,
  DecimalPipe,
  CurrencyPipe,
} from "@angular/common";

// Components
import { UserComponent } from "./user/user.component";
import { CommentsComponent } from "./comments/comments.component";
import { HomeComponent } from "./home/home.component";

import { UserService } from "./user/user-service/user.service";

import { ReversePipe } from "./reverse.pipe";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    UserComponent,
    CommentsComponent,
    HomeComponent,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    ReversePipe,
  ],
  templateUrl: "./app.component.html",
  // template: ` <section><app-user /></section> `,
  styleUrl: "./app.component.css",
  // styles: `
  //   :host {
  //     color: #a144eb;
  //   }
  // `,
})
export class AppComponent {
  title = "lesson-1";
  city = "San Francisco";
  isLoggedIn = true;
  isServerRunning = true;
  operatingSystems = [
    { id: "win", name: "Windows" },
    { id: "osx", name: "MacOS" },
    { id: "linux", name: "Linux" },
  ];
  users = [
    { id: 0, name: "Sarah" },
    { id: 1, name: "Amy" },
    { id: 2, name: "Rachel" },
    { id: 3, name: "Jessica" },
    { id: 4, name: "Poornima" },
  ];
  isEditable = true;

  greet() {
    console.log("Hello, there 👋!");
  }

  message = "";

  onMouseOver() {
    this.message = "Way to go 🚀.";
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  username = "youngTech";
  favoriteFramework = "";

  showFramework() {
    alert(this.favoriteFramework);
  }

  profileForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + " | " + this.profileForm.value.email);
  }

  display = "";
  // userService = inject(UserService);

  // constructor() {
  //   this.display = this.userService.getCars().join(" ⭐️ ");
  // }

  constructor(private userService: UserService) {
    this.display = this.userService.getCars().join(" ⭐️ ");
  }

  loudMessage = "we think you are doing great!";

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  word = "You are a champion!";
}

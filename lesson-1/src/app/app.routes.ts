import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CommentsComponent } from "./comments/comments.component";

export const routes: Routes = [
  {
    path: "",
    title: "App Home Page",
    component: HomeComponent,
  },
  {
    path: "comments",
    title: "App Comments Page",
    component: CommentsComponent,
  },
];

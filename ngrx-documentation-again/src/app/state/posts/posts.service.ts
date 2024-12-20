import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { PostInterface } from "./posts.state";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>("http://localhost:4200/posts");
  }

  createPost(post: { title: string }): Observable<PostInterface> {
    return this.http.post<PostInterface>("http://localhost:4200/posts", post);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.state";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<User>("https://fakestoreapi.com/users/2");
  }

  getUserById(id: number) {
    return this.http.get<User>(`https://fakestoreapi.com/users/${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(
      `https://fakestoreapi.com/users/${user.id}`,
      user,
    );
  }
}

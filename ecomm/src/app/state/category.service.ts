import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tap, EMPTY, catchError, timeout, of, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  // constructor(private readonly http: HttpClient) {}

  // getCategories() {
  //   return this.http.get<string[]>(
  //     "https://fakestoreapi.com/products/categories",
  //   );
  // }
  // getCategories() {
  //   return this.http
  //     .get<string[]>("https://fakestoreapi.com/products/categories")
  //     .pipe(
  //       tap((data) => console.log("Fetched categories: ", data)),
  //       catchError((error) => {
  //         console.error("Error fetching categories: ", error);
  //         return EMPTY;
  //       }),
  //       timeout(30000),
  //     );
  // }
  getCategories(): Observable<string[]> {
    return of([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);
  }
}

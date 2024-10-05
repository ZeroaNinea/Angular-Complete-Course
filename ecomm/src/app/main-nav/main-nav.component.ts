import { Component, inject } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { AsyncPipe, CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { RouterModule } from "@angular/router";
import { RouterOutlet } from "@angular/router";

import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

import ProductComponent from "../product/product.component";

import { CategoryService } from "../state/category.service";

import { Store } from "@ngrx/store";
import {
  categoryActions,
  categoryActionsFailure,
  categoryActionsSuccess,
} from "../state/categories.actions";
import { selectCategories } from "../state/category.selector";
import { CategoryState } from "../state/state";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrl: "./main-nav.component.scss",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    CommonModule,
    RouterModule,
    RouterOutlet,
    ProductComponent,
    MatMenuModule,
  ],
})
export class MainNavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  categories$!: Observable<string[]>;

  constructor(
    private readonly categoryService: CategoryService,
    private store: Store<CategoryState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(categoryActions());
    this.categories$ = this.store.select(selectCategories);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}

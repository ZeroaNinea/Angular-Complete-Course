import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { provideMockStore } from "@ngrx/store/testing";
import { EntityCollectionServiceElementsFactory } from "@ngrx/data";

import { AppComponent } from "./app.component";
import { ProductService } from "./product/state/product.service";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
      providers: [
        // ProductService,
        { provide: ProductService, useValue: ProductService },
        provideMockStore(), // Provide a mock Store if required by NgRx
        EntityCollectionServiceElementsFactory, // Add this to resolve the NullInjectorError
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ngrx-documentation-again' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("ngrx-documentation-again");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Hello, ngrx-documentation-again",
    );
  });
});

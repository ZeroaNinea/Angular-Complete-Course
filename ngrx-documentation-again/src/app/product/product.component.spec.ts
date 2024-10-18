import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { provideMockStore } from "@ngrx/store/testing";
import { EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { EntityDispatcherFactory } from "@ngrx/data";

import { of } from "rxjs";

import { ProductComponent } from "./product.component";
import { ProductService } from "./state/product.service";

const mockEntityCollectionServiceElementsFactory = {
  create: jasmine.createSpy("create").and.returnValue(of([])), // Mock any required methods
};

describe("ProductComponent", () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
      providers: [
        // ProductService,
        { provide: ProductService, useValue: ProductService },
        provideMockStore(), // Provide a mock Store if required by NgRx
        // EntityCollectionServiceElementsFactory, // Add this to resolve the NullInjectorError
        {
          provide: EntityCollectionServiceElementsFactory,
          useValue: EntityCollectionServiceElementsFactory,
        },
        {
          provide: EntityDispatcherFactory,
          useValue: EntityDispatcherFactory,
        }, // Provide mock for EntityDispatcherFactory
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

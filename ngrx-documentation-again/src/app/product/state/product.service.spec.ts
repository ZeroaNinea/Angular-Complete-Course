import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  // mockEntityCollectionServiceElementsFactory,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { EntityDispatcherFactory } from "@ngrx/data";

import { of } from "rxjs";

import { ProductService } from "./product.service";

const mockProductService = {
  getAll: jasmine.createSpy("getAll").and.returnValue(of([])), // Mock any required methods
};

describe("ProductService", () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
      providers: [
        provideMockStore({}), // Provide a mock store if needed for testing NgRx store
        // EntityCollectionServiceElementsFactory, // Add this to resolve the NullInjectorError
        { provide: ProductService, useValue: mockProductService },
        {
          provide: EntityCollectionServiceElementsFactory,
          useValue: EntityCollectionServiceElementsFactory,
        },
        {
          provide: EntityDispatcherFactory,
          useValue: EntityDispatcherFactory,
        },
      ],
    });
    service = TestBed.inject(ProductService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

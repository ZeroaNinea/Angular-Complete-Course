import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { PostsService } from "./posts.service";

describe("PostsService", () => {
  let service: PostsService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(PostsService);
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
      providers: [
        provideMockStore({}), // Provide a mock store if needed for testing NgRx store
      ],
    });
    service = TestBed.inject(PostsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

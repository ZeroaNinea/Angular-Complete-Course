import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "../../app.component";

import { postReducer, initialState } from "./post.reducer";
import { loadPostsSuccess } from "./post.actions";
import { Post } from "./post.model";

describe("Post Reducer", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
      providers: [
        provideMockStore({}), // Provide a mock store if needed for testing NgRx store
      ],
    }).compileComponents();
  });

  it("should load posts into state on success", () => {
    const posts: Post[] = [{ id: "1", title: "Test Post", body: "Test Body" }];
    const newState = postReducer(initialState, loadPostsSuccess({ posts }));

    expect(newState.ids.length).toBe(1);
    expect(newState.entities["1"]).toEqual(posts[0]);
  });
});

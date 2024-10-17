import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "../../app.component";

import { selectPosts } from "./post.selectors";
import { PostsState } from "./post.reducer";

describe("Post Selectors", () => {
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

  it("should select all posts", () => {
    const state: PostsState = {
      ids: ["1"],
      entities: {
        "1": { id: "1", title: "Test Post", body: "Test Body" }, // Match the expected title
      },
      loading: false,
      error: null,
    };

    const posts = selectPosts.projector(state);
    expect(posts.length).toBe(1);
    expect(posts[0].title).toBe("Test Post"); // Now it should match
  });
});

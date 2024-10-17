import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { Observable, of } from "rxjs";

import { PostsEffects } from "./post.effects";
import { loadPosts, loadPostsSuccess } from "./post.actions";
import { PostsService } from "./posts.service";

describe("PostsEffects", () => {
  let actions$: Observable<any>;
  let effects: PostsEffects;
  let postsService: jasmine.SpyObj<PostsService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
      providers: [
        PostsEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: PostsService,
          useValue: jasmine.createSpyObj("PostsService", ["getPosts"]),
        },
      ],
    });

    effects = TestBed.inject(PostsEffects);
    postsService = TestBed.inject(PostsService) as jasmine.SpyObj<PostsService>;
  });

  it("should load posts on loadPosts action", () => {
    const mockPosts = [{ id: "1", title: "Test Post", body: "Test Body" }];
    postsService.getPosts.and.returnValue(of(mockPosts));

    actions$ = of(loadPosts());
    effects.loadPosts$.subscribe((result) => {
      expect(result).toEqual(loadPostsSuccess({ posts: mockPosts }));
    });
  });
});

import { createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Post } from "./post.model";
import { loadPostsSuccess, createPostSuccess } from "./post.actions";

// Define the interface for the Posts state
export interface PostsState extends EntityState<Post> {
  // additional entities state properties
  loading: boolean;
  error: any;
}

// Create an Entity adapter
export const postsAdapter = createEntityAdapter<Post>();

// Define the initial state using the adapter's getInitialState method
export const initialState: PostsState = postsAdapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null,
});

// Create the reducer
export const postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, {
      ...state,
      // loading: false,
      posts,
      error: null,
    }),
  ),
  on(createPostSuccess, (state, { post }) =>
    postsAdapter.addOne(post, {
      ...state,
      loading: false,
      error: null,
    }),
  ),
  // You can add more handlers here, such as for error handling
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  postsAdapter.getSelectors();

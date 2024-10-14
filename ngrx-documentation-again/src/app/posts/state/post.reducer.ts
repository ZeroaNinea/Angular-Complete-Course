import { createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Post } from "./post.model";
import {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  createPostSuccess,
} from "./post.actions";

// Define the interface for the Posts state
export interface PostsState extends EntityState<Post> {
  loading: boolean;
  error: any;
}

// Create an Entity adapter
export const postsAdapter = createEntityAdapter<Post>();

// Define the initial state using the adapter's getInitialState method
export const initialState: PostsState = postsAdapter.getInitialState({
  loading: false,
  error: null,
});

// Create the reducer
export const postReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, {
      ...state,
      loading: false,
      error: null,
    }),
  ),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(createPostSuccess, (state, { post }) =>
    postsAdapter.addOne(post, {
      ...state,
      loading: false,
      error: null,
    }),
  ),
);

// Export selectors
export const { selectAll, selectEntities, selectIds, selectTotal } =
  postsAdapter.getSelectors();

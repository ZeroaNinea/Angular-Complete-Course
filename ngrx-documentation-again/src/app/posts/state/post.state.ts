import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Post } from "./post.model";

export interface PostState extends EntityState<Post> {
  selectedPostId: string | null;
}

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostState = postAdapter.getInitialState({
  selectedPostId: null,
});

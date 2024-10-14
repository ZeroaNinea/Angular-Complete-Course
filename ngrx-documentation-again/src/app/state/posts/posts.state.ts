export interface PostInterface {
  id: string;
  title: string;
}

export interface PostsStateInterface {
  posts: PostInterface[];
  isLoading: boolean;
  error: string | null;
}

export interface AppStateInterface {
  posts: PostsStateInterface;
}

export const initialState: PostsStateInterface = {
  posts: [],
  isLoading: false,
  error: null,
};

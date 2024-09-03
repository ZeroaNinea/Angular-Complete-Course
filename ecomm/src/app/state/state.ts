export interface CategoriesState {
  data: any[];
  error: string | null;
  loading: boolean;
}

export const initialCategoriesState: CategoriesState = {
  data: [],
  error: null,
  loading: false,
};

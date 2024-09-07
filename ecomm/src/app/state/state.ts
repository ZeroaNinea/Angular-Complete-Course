// export interface CategoryState {
//   data: any[];
//   error: string | null;
//   loading: boolean;
// }

// export const initialCategoriesState: CategoriesState = {
//   data: [],
//   error: null,
//   loading: false,
// };

export interface CategoryState {
  categories: string[];
  currentCategory: string | null;
  error: string | null;
}

export const initialState: CategoryState = {
  categories: [],
  currentCategory: "",
  error: "",
};

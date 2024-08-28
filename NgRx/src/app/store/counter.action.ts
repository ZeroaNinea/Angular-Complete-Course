import { createAction } from "@ngrx/store";

export const incrementCounter = createAction("Counter Incremented.");

export const decrementCounter = createAction("Decrement Counter.");

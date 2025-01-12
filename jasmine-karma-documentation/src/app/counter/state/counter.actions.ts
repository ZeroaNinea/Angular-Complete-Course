import { createAction } from '@ngrx/store';

export const startCounter = createAction('[Counter] Start');
export const stopCounter = createAction('[Counter] Stop');
export const resetCounter = createAction('[Counter] Reset');

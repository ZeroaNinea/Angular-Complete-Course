export interface Game {
  home: number;
  away: number;
}

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0,
};

export const scoreboardFeatureKey = "game";

//aqui no habia
import { DataShapeMovie } from './movies';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	movielist: DataShapeMovie[];
	screen: string;
  currentcategory:string;
};

export enum MoviesActions {
	'GET' = 'GET',
}

export interface GetMoviesAction {
	action: MoviesActions.GET;
	payload: DataShapeMovie[] | undefined;
}

export enum ScreenActions {
	'NAVIGATE' = 'NAVIGATE',
}

export type Actions = GetMoviesAction | ScreenActions;

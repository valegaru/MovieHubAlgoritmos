//aqui no habia
import { UserMovieList } from '../services/getDataUserMovieLists';
import { ListDocument } from './list';
import { DataShapeMovie } from './movies';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	movielist: DataShapeMovie[];
	screen: string;
	currentcategory: string;
	titlecategory: string;
	imagecategory: string;
	movieid: string;
	movieimage: string;
	moviecategories: string;
	movietitle: string;
	moviedirector: string;
	moviereleasedate: string;
	moviecast: string;
	moviecrew: string;
	movieimagesec: string;
	moviedescription: string;
	moviecatchphrase: string;
	favlist: DataShapeMovie[];
	currentnewlistname: string;
	currentnewlistimage: string;
	currentnewlistid: string;
	usermovielists: UserMovieList[];
};

export enum MoviesActions {
	'GET' = 'GET',
}

export interface GetMoviesAction {
	action: MoviesActions.GET;
	payload: DataShapeMovie[] | undefined;
}

export enum FavoritesActions {
	'GET2' = 'GET2',
}

export interface GetFavoritesAction {
	action: FavoritesActions.GET2;
	payload: DataShapeMovie[] | undefined;
}

export enum ListsActions {
	'GET3' = 'GET3',
}

export interface GetListsAction {
	action: ListsActions.GET3;
	payload: UserMovieList[] | undefined;
}

export enum ScreenActions {
	'NAVIGATE' = 'NAVIGATE',
}

export type Actions = GetMoviesAction | ScreenActions | GetFavoritesAction | GetListsAction;

//
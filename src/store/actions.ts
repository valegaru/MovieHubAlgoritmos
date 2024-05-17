import { getDataFavoriteMovies } from '../services/getDataFavorites';
import { getDataMovies } from '../services/getDataMovies';
import { getDataUserMovieList } from '../services/getDataUserMovieLists';
import {
	MoviesActions,
	GetMoviesAction,
	GetFavoritesAction,
	FavoritesActions,
	GetListsAction,
	ListsActions,
} from '../types/store';
import { Observer, AppState, Actions } from '../types/store';

export const navigate = (screen: any) => {
	return {
		action: 'navigate',
		payload: screen,
	};
};

export const navigateCategory = (category: any) => {
	return {
		action: 'navigateCategory',
		payload: category,
	};
};

export const SaveTitleCategory = (title: any) => {
	return {
		action: 'SaveTitleCategory',
		payload: title,
	};
};

export const SaveImageCategory = (image: any) => {
	return {
		action: 'SaveImageCategory',
		payload: image,
	};
};

export const SaveMovieId = (uid: any) => {
	return {
		action: 'SaveMovieId',
		payload: uid,
	};
};

export const SaveMovieImage = (image: any) => {
	return {
		action: 'SaveMovieImage',
		payload: image,
	};
};

export const SaveMovieCategories = (categories: any) => {
	return {
		action: 'SaveMovieCategories',
		payload: categories,
	};
};

export const SaveMovieTitle = (utitle: any) => {
	return {
		action: 'SaveMovieTitle',
		payload: utitle,
	};
};

export const SaveMovieDirector = (director: any) => {
	return {
		action: 'SaveMovieDirector',
		payload: director,
	};
};

export const SaveMovieReleaseDate = (release: any) => {
	return {
		action: 'SaveMovieReleaseDate',
		payload: release,
	};
};

export const SaveMovieCast = (cast: any) => {
	return {
		action: 'SaveMovieCast',
		payload: cast,
	};
};

export const SaveMovieCrew = (crew: any) => {
	return {
		action: 'SaveMovieCrew',
		payload: crew,
	};
};

export const SaveMovieImageSec = (imagesec: any) => {
	return {
		action: 'SaveMovieImageSec',
		payload: imagesec,
	};
};

export const SaveMovieDescription = (description: any) => {
	return {
		action: 'SaveMovieDescription',
		payload: description,
	};
};

export const SaveMovieCatchPhrase = (catchphrase: any) => {
	return {
		action: 'SaveMovieCatchPhrase',
		payload: catchphrase,
	};
};

export const GetMovies = async (): Promise<GetMoviesAction> => {
	const dataMovies = await getDataMovies();
	return {
		action: MoviesActions.GET,
		payload: dataMovies,
	};
};

export const SaveCurrentNewListName = (name: any) => {
	return {
		action: 'SaveCurrentNewListName',
		payload: name,
	};
};

export const SaveCurrentNewListImage = (url: any) => {
	return {
		action: 'SaveCurrentNewListImage',
		payload: url,
	};
};

export const SaveCurrentNewListId = (id: any) => {
	return {
		action: 'SaveCurrentNewListId',
		payload: id,
	};
};

export const GetFavorites = async (userId: string): Promise<GetFavoritesAction> => {
	const dataFavorites = await getDataFavoriteMovies(userId);
	return {
		action: FavoritesActions.GET2,
		payload: dataFavorites,
	};
};

export const GetLists = async (userId: string): Promise<GetListsAction> => {
	const dataLists = await getDataUserMovieList(userId);
	return {
		action: ListsActions.GET3,
		payload: dataLists,
	};
};

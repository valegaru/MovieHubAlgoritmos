import { getDataMovies } from '../services/getDataMovies';
import { MoviesActions, GetMoviesAction } from '../types/store';
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

export const GetMovies = async (): Promise<GetMoviesAction> => {
	const dataMovies = await getDataMovies();
	return {
		action: MoviesActions.GET,
		payload: dataMovies,
	};
};

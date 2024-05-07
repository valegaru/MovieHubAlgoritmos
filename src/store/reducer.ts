import { Actions, MoviesActions, AppState } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: any, currentState: any) => {
	//Payload: es el valor que queremos cambiar o asignar
	const { action, payload } = currentAction;

	switch (action) {
		case 'navigate':
			currentState.screen = payload;
			break;
	}

	switch (action) {
		case MoviesActions.GET:
			return {
				...currentState,
				movielist: payload,
			};
	}

	switch (action) {
		case 'navigateCategory':
			currentState.currentcategory = payload;
			break;
	}

	switch (action) {
		case 'SaveTitleCategory':
			currentState.titlecategory = payload;
			break;
	}

	switch (action) {
		case 'SaveImageCategory':
			currentState.imagecategory = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieId':
			currentState.movieid = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieImage':
			currentState.movieimage = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieCategories':
			currentState.moviecategories = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieTitle':
			currentState.movietitle = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieDirector':
			currentState.moviedirector = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieReleaseDate':
			currentState.moviereleasedate = payload;
			break;
	}

	return currentState;
};

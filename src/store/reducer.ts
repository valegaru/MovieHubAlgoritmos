import {
	Actions,
	MoviesActions,
	AppState,
	FavoritesActions,
	ListsActions,
	ContentListsActions,
	MoviesProfileActions,
} from '../types/store';
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
		case FavoritesActions.GET2:
			return {
				...currentState,
				favlist: payload,
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

	switch (action) {
		case 'SaveMovieCast':
			currentState.moviecast = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieCrew':
			currentState.moviecrew = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieImageSec':
			currentState.movieimagesec = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieDescription':
			currentState.moviedescription = payload;
			break;
	}

	switch (action) {
		case 'SaveMovieCatchPhrase':
			currentState.moviecatchphrase = payload;
			break;
	}

	switch (action) {
		case 'SaveCurrentNewListName':
			currentState.currentnewlistname = payload;
			break;
	}

	switch (action) {
		case 'SaveCurrentNewListImage':
			currentState.currentnewlistimage = payload;
			break;
	}

	switch (action) {
		case 'SaveCurrentNewListId':
			currentState.currentnewlistid = payload;
			break;
	}

	switch (action) {
		case ListsActions.GET3:
			return {
				...currentState,
				usermovielists: payload,
			};
	}

	switch (action) {
		case ContentListsActions.GET4:
			return {
				...currentState,
				listcontent: payload,
			};
	}

	switch (action) {
		case 'SETUSER':
			currentState.user = payload;
			break;
	}

	switch (action) {
		case MoviesProfileActions.GET5:
			return {
				...currentState,
				movieprofile: payload,
			};
	}

	return currentState;
};

//uso SaveCurrentNewListId, SaveCurrentNewListName, SaveCurrentNewListImage tambien para lo de darle click a las listas

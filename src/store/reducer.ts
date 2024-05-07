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

	return currentState;
};

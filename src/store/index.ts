import { reducer } from './reducer';
import Storage, { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer } from '../types/store';
import { Screens } from '../types/navigation';

export let appState = {
	screen: 'DASHBOARD',
	movielist: [],
	currentcategory: '',
	titlecategory: '',
	imagecategory: '',
	movieid: '',
	movieimage: '',
	moviecategories: '',
	//para los titulos compuestos solo guarda la primera palabra
	movietitle: '',
	//solo guarda la primera palabra del nombre dle director
	moviedirector:''
};

//De aquí hacia abajo no se lo aprendan de memoria, siempre va a estar ahí el archivo, esto es configuración
let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o: any) => o.render());
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

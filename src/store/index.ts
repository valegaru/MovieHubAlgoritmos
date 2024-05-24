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
	//hay que usarlo con comillas como title="${appState.movietitle}"
	movietitle: '',
	//hay que usarlo con comillas como director="${appState.moviedirector}"
	moviedirector: '',
	moviereleasedate: '',

	moviecast: '',
	moviecrew: '',
	movieimagesec: '',
	moviedescription: '',
	moviecatchphrase: '',

	favlist: [],

	currentnewlistname: '',
	currentnewlistimage: '',
	//para guardar el id de la lista a la que quiero acceder desde mylist o la que acabo de crear desde el modal
	currentnewlistid: '',
	usermovielists: [] || undefined,
	listcontent:[],
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

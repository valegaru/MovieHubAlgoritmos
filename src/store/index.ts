import { reducer } from './reducer';
import Storage, { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer } from '../types/store';
import { Screens } from '../types/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { navigate, setUserCredentials } from './actions';

onAuthStateChanged(auth, (user) => {
	if (user) {
		user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
		dispatch(navigate('DASHBOARD'));
		console.log(user);
	} else {
		dispatch(navigate('LOGIN'));
		console.log('no hay usuario logueado');
	}
});

const emptyState = {
	screen: 'LOGIN',
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
	listcontent: [],
	//para usercredentials
	user: '',
};

export let appState = emptyState;
//De aquí hacia abajo no se lo aprendan de memoria, siempre va a estar ahí el archivo, esto es configuración
let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o: any) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

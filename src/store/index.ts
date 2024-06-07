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

	} else {
		dispatch(navigate('LOGIN'));
		
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
	//para guardar las peliculas que crea cada usuario, se puede usar para mostrar las del usuario logueado
	movieprofile: [],
};

export let appState = emptyState;
//De aquí hacia abajo no se lo aprendan de memoria, siempre va a estar ahí el archivo, esto es configuración
let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o: any) => o.render());

const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	persistStore(newState);
	notifyObservers();
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

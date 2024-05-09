import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { DataShapeMovie } from '../types/movies';

const firebaseConfig = {
	apiKey: 'AIzaSyDKlhRev5ZTVC9nGqXyT4qBi0WxSqs1gHE',
	authDomain: 'moviehub-ad4ef.firebaseapp.com',
	projectId: 'moviehub-ad4ef',
	storageBucket: 'moviehub-ad4ef.appspot.com',
	messagingSenderId: '15340906607',
	appId: '1:15340906607:web:3eeeaedde73256afea859a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const addMovie = async (movie: Omit<DataShapeMovie, 'id'>) => {
	try {
		const where = collection(db, 'movies');
		await addDoc(where, movie);
		console.log('se añadió con éxito');
	} catch (error) {
		console.error(error);
	}
};

const getMovie = async () => {
	const querySnapshot = await getDocs(collection(db, 'movies'));
	const transformed: Array<DataShapeMovie> = [];

	querySnapshot.forEach((doc) => {
		const data: Omit<DataShapeMovie, 'id'> = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});
	return transformed;
};

export const addFavorites = async (userId: string, movie: Omit<DataShapeMovie, 'id'>) => {
	try {
		// Obtener la referencia del documento del usuario
		const userRef = doc(db, 'users', userId);

		// Crear la colección 'Favorites' dentro del documento del usuario
		const favoritesCollectionRef = collection(userRef, 'Favorites');

		// Agregar la película a la colección 'Favorites'
		await addDoc(favoritesCollectionRef, movie);

		console.log('Película agregada exitosamente a la colección "Favorites" del usuario', userId);
	} catch (error) {
		console.error('Error al agregar película a la colección "Favorites" del usuario', userId, error);
	}
};

export default {
	addMovie,
	getMovie,
};

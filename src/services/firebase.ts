import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { DataShapeMovie } from '../types/movies';
import { deleteDoc } from 'firebase/firestore';
import { ListDocument } from '../types/list';

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

export const getUser = async () => {
	const querySnapshot = await getDocs(collection(db, 'users'));
	const transformed: Array<DataShapeMovie> = [];

	querySnapshot.forEach((doc) => {
		const data: Omit<DataShapeMovie, 'id'> = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});
	return transformed;
};

export const addFavorites = async (userId: string, movieId: string, movie: DataShapeMovie) => {
	try {
		// Obtener la referencia del documento del usuario
		const userRef = doc(db, 'users', userId);

		// Crear la colección 'Favorites' dentro del documento del usuario
		const favoritesCollectionRef = collection(userRef, 'Favorites');

		// Agregar la película a la colección 'Favorites' con el movieId especificado
		await setDoc(doc(favoritesCollectionRef, movieId), movie);

		console.log('Película agregada exitosamente a la colección "Favorites" del usuario', userId);
	} catch (error) {
		console.error('Error al agregar película a la colección "Favorites" del usuario', userId, error);
	}
};

export const removeFavorite = async (userId: string, movieId: string) => {
	try {
		const db = getFirestore();
		const userRef = doc(db, 'users', userId);
		const favoritesCollectionRef = collection(userRef, 'Favorites');
		await deleteDoc(doc(favoritesCollectionRef, movieId));
	} catch (error) {
		throw error;
	}
};

export const getFavoriteMovies = async (userId: string) => {
	try {
		// Obtener la referencia del documento del usuario
		const userRef = doc(db, 'users', userId);

		// Obtener la referencia de la colección 'Favorites' dentro del documento del usuario
		const favoritesCollectionRef = collection(userRef, 'Favorites');

		// Obtener todos los documentos de la colección 'Favorites'
		const querySnapshot = await getDocs(favoritesCollectionRef);

		// Transformar los datos de los documentos en un array de películas
		const favoriteMovies: DataShapeMovie[] = [];
		querySnapshot.forEach((doc) => {
			const data: Omit<DataShapeMovie, 'id'> = doc.data() as any;
			favoriteMovies.push({ id: doc.id, ...data });
		});

		return favoriteMovies;
	} catch (error) {
		console.error('Error al obtener las películas favoritas del usuario', userId, error);
		throw error;
	}
};

export const addListAndGetId = async (
	userId: string,
	listName: string,
	listImage: string,
	content: DataShapeMovie[]
) => {
	try {
		// Obtener la referencia del documento del usuario
		const userRef = doc(db, 'users', userId);

		// Crear la colección 'Mylists' dentro del documento del usuario
		const myListCollectionRef = collection(userRef, 'Mylists');

		// Crear un nuevo documento para la nueva lista dentro de 'Mylists'
		const newListDocRef = await addDoc(myListCollectionRef, {
			name: listName,
			image: listImage,
		} as ListDocument); // Se asegura de que la estructura sea de ListDocument

		// Obtener el ID del nuevo documento de lista
		const newListId = newListDocRef.id;
		console.log('Lista agregada exitosamente para el usuario', userId, 'con ID:', newListId);

		// Obtener la referencia de la colección 'content' dentro del documento de la lista recién creada
		const contentCollectionRef = collection(newListDocRef, 'content');

		// Agregar las películas a la colección 'content' de la lista
		await Promise.all(
			content.map(async (movie) => {
				await addDoc(contentCollectionRef, movie);
			})
		);

		// Devolver el ID de la lista recién creada
		return newListId;
	} catch (error) {
		console.error('Error al agregar lista para el usuario', userId, error);
		throw error;
	}
};

export default {
	addMovie,
	getMovie,
	getFavoriteMovies,
	removeFavorite,
	addFavorites,
	addListAndGetId,
};

import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc, getDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { DataShapeMovie } from '../types/movies';
import { deleteDoc } from 'firebase/firestore';
import { ListDocument } from '../types/list';
import Firebase from './firebase';
import { appState } from '../store';

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
export const auth = getAuth(app);

let userId: string | null = null;

//funciones para loguear y registrar
export const createUser = (formData: any) => {
	createUserWithEmailAndPassword(auth, formData.email, formData.password)
		.then(async (userCredential) => {
			//Primer paso es obtener el id
			const user = userCredential.user;
			userId = user.uid;
			console.log(user.uid);

			//Segundo paso es agregar un documento con más info bajo ese id
			try {
				const where = doc(db, 'users', user.uid);
				const data = {
					id: user.uid,
					username: formData.name,
					mobilenumber: formData.mobile,
				};
				console.log(data);
				await setDoc(where, data);
				alert('Se creó el usuario');
			} catch (error) {
				console.error(error);
			}
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
			alert('Revisa que la información sea correcta y que el correo no esté en uso en nuestra plataforma');
		});
};

export const logIn = (formData: any) => {
	signInWithEmailAndPassword(auth, formData.email, formData.password)
		.then(async (userCredential) => {
			//Primer paso es obtener el id
			const user = userCredential.user;
			console.log(user.uid);
			alert('Bienvenido de vuelta');
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
			alert('Credenciales incorrectas');
		});
};

//funciones para el funcionamiento de la pagina
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

		// Crear la colección 'content' dentro del documento de la lista recién creada
		const contentCollectionRef = collection(newListDocRef, 'content');

		// Crear el primer documento con el ID 'automaticreation123'
		await setDoc(doc(contentCollectionRef, 'automaticreation123'), {});

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

// Crear una nueva función en Firebase para agregar una película a la lista
export const addMovieToList = async (userId: string, listId: string, movieData: DataShapeMovie) => {
	try {
		// Obtener la referencia del documento de la lista
		const listRef = doc(db, 'users', userId, 'Mylists', listId);

		// Obtener la referencia de la colección 'content' dentro del documento de la lista
		const contentCollectionRef = collection(listRef, 'content');

		// Agregar la película como un nuevo documento en la colección 'content'
		await addDoc(contentCollectionRef, movieData);

		console.log('Película agregada exitosamente a la lista', listId);
	} catch (error) {
		console.error('Error al agregar la película a la lista', listId, error);
		throw error;
	}
};

// Función para obtener las listas de películas del usuario
export const getUserMovieLists = async (userId: string) => {
	try {
		const userMovieLists: any[] = []; //array con las listas
		// Obtener la referencia del documento del usuario
		const userRef = doc(db, 'users', userId);

		// Obtener la referencia de la colección 'Mylists' dentro del documento del usuario
		const myListCollectionRef = collection(userRef, 'Mylists');

		// Obtener todos los documentos (listas) de la colección 'Mylists'
		const querySnapshot = await getDocs(myListCollectionRef);
		// Transformar los datos de los documentos en un array de listas de películas
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			userMovieLists.push({ id: doc.id, ...data });
		});

		console.log(userMovieLists);
		return userMovieLists;
	} catch (error) {
		console.error('Error al obtener las listas de películas del usuario', userId, error);
		throw error;
	}
};

export const getUserMovieListContent = async (userId: string, idList: string): Promise<DataShapeMovie[]> => {
	try {
		const listContent: DataShapeMovie[] = []; // array con el content de peliculas de la lista

		// Obtener la referencia del documento del usuario
		const userRef = doc(db, 'users', userId);

		// Obtener la referencia de la colección 'Mylists' dentro del documento del usuario
		const myListCollectionRef = collection(userRef, 'Mylists');

		// Obtener la referencia del documento dentro de la colección 'Mylists'
		const docList = doc(myListCollectionRef, idList);

		// Obtener la referencia de la colección 'content' dentro del documento de la lista
		const collectionContent = collection(docList, 'content');

		// Obtener todos los documentos (movies) de la colección content
		const querySnapshot = await getDocs(collectionContent);
		querySnapshot.forEach((doc) => {
			// Verificar si el ID del documento es diferente de 'automaticreation123' para no traer ese
			if (doc.id !== 'automaticreation123') {
				const data = doc.data() as Omit<DataShapeMovie, 'id'>;
				listContent.push({ id: doc.id, ...data });
			}
		});

		return listContent;
	} catch (error) {
		console.error('Error al obtener las listas de películas del usuario', userId, error);
		throw error;
	}
};

// export const getMovieListener = (cb: (movies: DataShapeMovie[]) => void) => {
// 	const moviesCollectionRef = collection(db, 'movies');

// 	// Usar onSnapshot para suscribirse a los cambios en tiempo real
// 	onSnapshot(moviesCollectionRef, (collection) => {
// 			const docs: DataShapeMovie[] = collection.docs.map((doc)=>({
// 				id: doc.id,
// 				...doc.data(),
// 			})) as DataShapeMovie[];
// 			});
// 			// Llamar al callback con los datos transformados
// 			cb(docs);
// 	};

export default {
	addMovie,
	getMovie,
	getFavoriteMovies,
	removeFavorite,
	addFavorites,
	addListAndGetId,
	addMovieToList,
	getUserMovieLists, //para pintar los botones de las listas
	getUserMovieListContent, //para pintar el content de la ultima lista tecleada
};

import { DataShapeMovie } from '../types/movies';
import Firebase from './firebase';

export interface UserMovieList {
	id: string;
	name: string;
	image: string;
	//content: DataShapeMovie[];
}

// Modificar la función para que devuelva este tipo de dato
export async function getDataUserMovieList(userId: string): Promise<UserMovieList[]> {
	try {
		const movielists = await Firebase.getUserMovieLists(userId);
		console.log(movielists);
		return movielists || []; // Si movielists es undefined, devolvemos un array vacío
	} catch (error) {
		console.error(error);
		return []; // Si ocurre un error, también devolvemos un array vacío
	}
}

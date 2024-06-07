import Firebase from './firebase';

export async function getDataMoviesProfile(idUser: string) {
	try {
		const movies = await Firebase.getMovieProfile(idUser);
		return movies;
	} catch (error) {
		console.error(error);
	}
}

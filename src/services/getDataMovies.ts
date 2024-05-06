import Firebase from './firebase';

export async function getDataMovies() {
	try {
		const movies = await Firebase.getMovie();
		console.log(movies);
		return movies;
	} catch (error) {
		console.error(error);
	}
}

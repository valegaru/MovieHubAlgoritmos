import Firebase from './firebase';

export async function getDataFavoriteMovies(userId: string) {
	try {
		const favoriteMovies = await Firebase.getFavoriteMovies(userId);
		console.log(favoriteMovies);
		return favoriteMovies;
	} catch (error) {
		console.error(error);
	}
}

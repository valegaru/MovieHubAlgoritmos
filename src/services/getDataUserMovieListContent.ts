import Firebase, { getUserMovieListContent } from './firebase';

export async function getDataUserMovieListContent(userId: string, idList: string) {
	try {
		const listContent = await Firebase.getUserMovieListContent(userId, idList);
		return listContent;
	} catch (error) {
		console.error('Error al obtener el contenido de la lista de películas del usuario:', error);
	}
}
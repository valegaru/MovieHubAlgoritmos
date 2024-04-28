export interface DataShape {
	id: number;
	image: string;
	categories: string[]; //puede tener los stirng que quiera dentro de categories, es decir asignarle las categorias que uno quiera
}
//al momento de crear la pelicula dentro del sitio web, el usuario le va a asignar las categorias que considere con multiples checkboxes.
//categories: ['popular','cinema','trending','classics','action','comedy','romantic','cienceFiction','animated','drama','thriller',"documentary"], estas son todas las categorias posibles
export const movies: DataShape[] = [
	{
		id: 1,
		image: 'https://pics.filmaffinity.com/Pearl-745024740-large.jpg',
		categories: ['popular'],
	},

	{
		id: 2,
		image:
			'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/AC3DD9EACA5CD19BC1124D9FDD9E5C8947DEE0A71559CB21A3D3B49CE35DD990/scale?width=506&aspectRatio=2.00&format=jpeg',
		categories: ['popular'],
	},
	{
		id: 3,
		image: 'https://pics.filmaffinity.com/Pulp_Fiction-210382116-mmed.jpg',
		categories: ['popular'],
	},
	{
		id: 4,
		image:
			'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
		categories: ['popular'],
	},
	{
		id: 5,
		image:
			'https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg',
		categories: ['popular'],
	},
	{
		id: 6,
		image: 'https://pics.filmaffinity.com/Paraasitos-406070218-large.jpg',
		categories: ['popular'],
	},
	{
		id: 7,
		image: 'https://tecolotito.elsiglodetorreon.com.mx/blogs/163304/2020/02/5e3cb25189f7a.jpg',
		categories: ['popular'],
	},
	{
		id: 8,
		image: 'https://pics.filmaffinity.com/Raequiem_por_un_sueano-174867645-large.jpg',
		categories: ['popular'],
	},
	{
		id: 9,
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg',
		categories: ['popular'],
	},
	{
		id: 10,
		image: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Mysterious_skin.jpg',
		categories: ['popular'],
	},
	{
		id: 11,
		image: 'https://http2.mlstatic.com/D_NQ_NP_768674-MLU70355009620_072023-O.webp',
		categories: ['popular'],
	},
	{
		id: 12,
		image: 'https://m.media-amazon.com/images/I/91+6LJTjUYL._AC_UF894,1000_QL80_.jpg',
		categories: ['popular'],
	},
	{
		id: 13,
		image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c3/23/c3237208ecb81d0d0ea3a27ed387c923.jpg',
		categories: ['cinema'],
	},
	{
		id: 14,
		image: 'https://hips.hearstapps.com/hmg-prod/images/poster-vidas-pasadas-6540c5a06cbed.jpg?resize=980:*',
		categories: ['cinema'],
	},
	{
		id: 15,
		image: 'https://pics.filmaffinity.com/Old_Boy-588574486-large.jpg',
		categories: ['cinema'],
	},
	{
		id: 16,
		image:
			'https://archivos-cms.cinecolombia.com/images/6/4/9/1/51946-1-esl-CO/e7f541ce3904-zoi_cineco_pstr-dskp_480x670.png',
		categories: ['cinema'],
	},
	{
		id: 17,
		image: 'https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/424439/424439.jpg',
		categories: ['cinema'],
	},
	{
		id: 18,
		image: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/poster-anatomia-de-una-caida.jpg',
		categories: ['cinema'],
	},
	{
		id: 19,
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/249b60dcd65e4ba17882d43310dcaa8f30b1840ea7bc2d7e0089e5a5398aa55f.jpg',
		categories: ['trending'],
	},
	{
		id: 20,
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/b8accbc09fd8615ddb6fa39e8eb76cbf86f03e4bde3a4ceb4629f681083f5d39.jpg  ',
		categories: ['trending'],
	},
	{
		id: 21,
		image:
			'https://play-lh.googleusercontent.com/M18KWgpMAQUUzF2nIcGkMOe08O5jvT4z4mhn_LBVHrmkDWhy9poipiQTwdCxEtl6FChj9A',
		categories: ['trending'],
	},
	{
		id: 22,
		image:
			'https://www.atomcomics.pl/environment/cache/images/0_0_productGfx_234928/c15ba70f8752a972cf60dea25c6c325b.jpg',
		categories: ['trending'],
	},
	{
		id: 23,
		image:
			'https://m.media-amazon.com/images/M/MV5BNWI5ODc4MTAtN2U2NC00ZDk3LWE3NjAtNjIyODE2YTlhYjYwXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_.jpg',
		categories: ['trending'],
	},
	{
		id: 24,
		image: 'https://pics.filmaffinity.com/Juno-964259078-large.jpg',
		categories: ['trending'],
	},
	{
		id: 25,
		image: 'https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg',
		categories: ['classics'],
	},
	{
		id: 26,
		image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/81/22/812252fdfa443853ac4f0c38d89a9690.jpg',
		categories: ['classics'],
	},
	{
		id: 27,
		image: 'https://musicart.xboxlive.com/7/2fb15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
		categories: ['classics'],
	},
	{
		id: 28,
		image: 'https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg',
		categories: ['classics'],
	},
	{
		id: 29,
		image: 'https://es.web.img3.acsta.net/c_310_420/pictures/14/05/27/12/07/438875.jpg',
		categories: ['classics'],
	},
	{
		id: 30,
		image: 'https://es.web.img2.acsta.net/pictures/14/04/01/10/42/226928.jpg',
		categories: ['classics'],
	},
	{
		id: 31,
		image: 'https://pics.filmaffinity.com/El_gran_Gatsby-737648170-large.jpg',
		categories: ['classics'],
	},
	{
		id: 32,
		image: 'https://mx.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/61/01/20070878.jpg',
		categories: ['classics'],
	},
	{
		id: 33,
		image: 'https://pics.filmaffinity.com/Shrek-903764423-large.jpg',
		categories: ['classics'],
	},
	{
		id: 34,
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDCocdzcNgJ76xzG8WDxq8IcVeHL_8JBaUCOtps6mCB0htT-wyulkV5HveyvAZCP8QtyZ7lhI7uLQpa7Qqt55rLlF3StkAnn5SgFC1FJEs79sCbIDBBOHNWbvU75k5vsS8-K4GSQkKuDQk/s1600/Intocables.jpg',
		categories: ['classics'],
	},
	{
		id: 35,
		image:
			'https://www.ulima.edu.pe/sites/default/files/styles/225x333/public/movie/image/leon-the-professional-md-web.jpg?itok=0g3NGZTq',
		categories: ['classics'],
	},
	{
		id: 36,
		image: 'https://pics.filmaffinity.com/Juno-964259078-large.jpg',
		categories: ['classics'],
	},
];

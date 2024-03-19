const movies = [
	{
		uid: 1,
		image: 'https://pics.filmaffinity.com/Pearl-745024740-large.jpg',
	},
	{
		uid: 2,
		image:
			'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/AC3DD9EACA5CD19BC1124D9FDD9E5C8947DEE0A71559CB21A3D3B49CE35DD990/scale?width=506&aspectRatio=2.00&format=jpeg',
	},
	{
		uid: 3,
		image: 'https://pics.filmaffinity.com/Pulp_Fiction-210382116-mmed.jpg',
	},
	{
		uid: 4,
		image:
			'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
	},
	{
		uid: 5,
		image:
			'https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg',
	},
	{
		uid: 6,
		image: 'https://pics.filmaffinity.com/Paraasitos-406070218-large.jpg',
	},
	{
		uid: 7,
		image:
			'https://static.wikia.nocookie.net/doblaje/images/9/90/Eterno_resplandor.jpg/revision/latest?cb=20210621152829&path-prefix=es',
	},
	{
		uid: 8,
		image: 'https://pics.filmaffinity.com/Raequiem_por_un_sueano-174867645-large.jpg',
	},
	{
		uid: 9,
		image:
			'https://static.wikia.nocookie.net/international-entertainment-project/images/2/27/Forrest_Gump_-_poster_%28English%29.jpeg/revision/latest?cb=20230420015018',
	},
	{
		uid: 10,
		image: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Mysterious_skin.jpg',
	},
	{
		uid: 11,
		image: 'https://pics.filmaffinity.com/Her-481503906-large.jpg',
	},
	{
		uid: 12,
		image: 'https://m.media-amazon.com/images/I/91+6LJTjUYL._AC_UF894,1000_QL80_.jpg',
	},
	{
		uid: 13,
		image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c3/23/c3237208ecb81d0d0ea3a27ed387c923.jpg',
	},
	{
		uid: 14,
		image: 'https://hips.hearstapps.com/hmg-prod/images/poster-vidas-pasadas-6540c5a06cbed.jpg?resize=980:*',
	},
	{
		uid: 15,
		image: 'https://pics.filmaffinity.com/Old_Boy-588574486-large.jpg',
	},
	{
		uid: 16,
		image:
			'https://archivos-cms.cinecolombia.com/images/6/4/9/1/51946-1-esl-CO/e7f541ce3904-zoi_cineco_pstr-dskp_480x670.png',
	},
	{
		uid: 17,
		image:
			'https://static.wikia.nocookie.net/doblaje/images/5/5f/El_ni%C3%B1o_y_la_garza.jpg/revision/latest?cb=20231218203634&path-prefix=es',
	},
	{
		uid: 18,
		image: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/poster-anatomia-de-una-caida.jpg',
	},
	{
		uid: 19,
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/249b60dcd65e4ba17882d43310dcaa8f30b1840ea7bc2d7e0089e5a5398aa55f.jpg',
	},
	{
		uid: 20,
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/b8accbc09fd8615ddb6fa39e8eb76cbf86f03e4bde3a4ceb4629f681083f5d39.jpg  ',
	},
	{
		uid: 21,
		image:
			'https://play-lh.googleusercontent.com/M18KWgpMAQUUzF2nIcGkMOe08O5jvT4z4mhn_LBVHrmkDWhy9poipiQTwdCxEtl6FChj9A',
	},
	{
		uid: 22,
		image: 'https://pics.filmaffinity.com/American_Psycho-137901124-large.jpg',
	},
	{
		uid: 23,
		image:
			'https://m.media-amazon.com/images/M/MV5BNWI5ODc4MTAtN2U2NC00ZDk3LWE3NjAtNjIyODE2YTlhYjYwXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_.jpg',
	},
	{
		uid: 24,
		image: 'https://pics.filmaffinity.com/Juno-964259078-large.jpg',
	},
	{
		uid: 25,
		image: 'https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg',
	},
	{
		uid: 26,
		image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/81/22/812252fdfa443853ac4f0c38d89a9690.jpg',
	},
	{
		uid: 27,
		image: 'https://musicart.xboxlive.com/7/2fb15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
	},
	{
		uid: 28,
		image: 'https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg',
	},
	{
		uid: 29,
		image: 'https://es.web.img3.acsta.net/c_310_420/pictures/14/05/27/12/07/438875.jpg',
	},
	{
		uid: 30,
		image: 'https://es.web.img2.acsta.net/pictures/14/04/01/10/42/226928.jpg',
	},
	{
		uid: 31,
		image: 'https://pics.filmaffinity.com/El_gran_Gatsby-737648170-large.jpg',
	},
	{
		uid: 32,
		image: 'https://mx.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/61/01/20070878.jpg',
	},
	{
		uid: 33,
		image: 'https://pics.filmaffinity.com/Shrek-903764423-large.jpg',
	},
	{
		uid: 34,
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDCocdzcNgJ76xzG8WDxq8IcVeHL_8JBaUCOtps6mCB0htT-wyulkV5HveyvAZCP8QtyZ7lhI7uLQpa7Qqt55rLlF3StkAnn5SgFC1FJEs79sCbIDBBOHNWbvU75k5vsS8-K4GSQkKuDQk/s1600/Intocables.jpg',
	},
	{
		uid: 35,
		image:
			'https://www.ulima.edu.pe/sites/default/files/styles/225x333/public/movie/image/leon-the-professional-md-web.jpg?itok=0g3NGZTq',
	},
	{
		uid: 36,
		image: 'https://pics.filmaffinity.com/Juno-964259078-large.jpg',
	},
];

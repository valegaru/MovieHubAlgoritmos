/*! For license information please see bundle.js.LICENSE.txt */
(() => {
	'use strict';
	var t = {
			167: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					'a {\n\tdisplay: flex;\n\talign-items: center; /* Alinea verticalmente los elementos */\n\ttext-decoration: none; /* Quita el subrayado del enlace */\n}\n\np {\n\tmargin-right: 10px; /* Ajusta el margen derecho según sea necesario */\n}\n',
					'',
				]);
				const a = o;
			},
			925: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"/* Estilos para el componente de banner */\n#allbanner {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tbackground-size: cover;\n\tbackground-position: center top 30%;\n\tmargin: 0;\n\tpadding: 10%;\n\theight: 43vh;\n}\n\n#allbanner::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.3); /* Color de fondo con opacidad */\n\tz-index: 1; /* Colócalo encima del contenido */\n}\n\n:host {\n\tcolor: white;\n}\n\nsection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tposition: relative;\n\tz-index: 2;\n}\n\n/* Estilos para el componente personalizado de la barra de navegación */\ncustom-navbar {\n\twidth: 100%; /* Ocupar el 100% del banner */\n\tposition: absolute; /* Para posicionarlo */\n\ttop: 0; /* En la parte superior */\n\tz-index: 3; /* Z-index para estar por encima de otros elementos */\n}\n\nh1 {\n\twidth: 45%;\n\theight: auto; /* Cambia la altura a automática */\n\tmargin-top: 30%;\n\tmargin-bottom: 3vh; /* Espacio entre el mensaje y el botón */\n\tfont-size: 200%;\n\ttext-align: center; /* Centrar horizontalmente */\n\tfont-family: 'Domine', serif;\n}\n\nbutton {\n\twidth: 20%; /* Modifica el ancho del botón */\n\theight: 50px;\n\tbackground-color: rgba(251, 149, 60, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 10px;\n\tfont-size: 80%;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\nbutton:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n\tcursor: pointer;\n}\n\nbutton span {\n\tdisplay: inline-block;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n/* Media queries para dispositivos móviles */\n@media screen and (max-width: 767px) {\n\t:host {\n\t\theight: auto; /* Altura automática para adaptarse a dispositivos móviles */\n\t}\n\n\th1 {\n\t\twidth: 80%;\n\t\tmargin-top: 40%;\n\t\tmargin-bottom: 3vh;\n\t\tfont-size: 6vw;\n\t}\n\n\tbutton {\n\t\twidth: 60%;\n\t\theight: 10vw;\n\t\tfont-size: 4vw;\n\t}\n}\n",
					'',
				]);
				const a = o;
			},
			682: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"/* Reset de estilos */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\n\n/* Estilos generales de la barra de navegación */\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 3%;\n\tjustify-content: space-around;\n\talign-items: center;\n\tbackground: none;\n\tjustify-content: space-between; /* Alinear elementos al centro horizontalmente */\n}\n\n/* Estilos para la sección de búsqueda */\nnav .search-bar,\nnav .pages {\n\tflex: 1; /* Distribuir el espacio disponible */\n}\n\n/* Agrega un espacio del 5% entre .search-bar y .pages */\nnav .search-bar {\n\tmargin-right: 5%;\n}\n\n/* Ajustes adicionales para la barra de búsqueda */\n.search-bar {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\theight: 30px;\n\tbox-sizing: border-box;\n\tbackground-color: rgba(255, 255, 255, 0.5);\n\tborder-radius: 5px;\n\tmax-width: 30%;\n}\n\n.search-bar input {\n\tflex: 1; /* Para que el input ocupe el espacio restante */\n\tpadding: 0 5px;\n\theight: 100%;\n\tborder: none;\n\toutline: none;\n\tbackground-color: transparent; /* Eliminar el color de fondo */\n\tcolor: white;\n}\n\n.icon {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.icon img {\n\twidth: 20px;\n\tpadding: 0 10px;\n}\n\n/* Estilos para la sección de páginas */\n.pages {\n\tdisplay: flex;\n\tjustify-content: center; /* Centra los elementos horizontalmente */\n\tmargin-right: 0;\n}\n\n.pages a {\n\tmargin-right: 15%; /* Espacio entre los elementos */\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n\tcolor: white;\n\tfont-size: 14px;\n}\n\n.pages a:hover {\n\tcolor: rgba(251, 149, 60, 1);\n\tcursor: pointer;\n\ttransition: color 0.1s ease;\n}\n\n.pages {\n\tposition: relative;\n}\n\n/* Estilos para el menú desplegable */\n.pages .menu-desplegable {\n\tdisplay: none; /* controla que no se muestre */\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\tbackground-color: rgba(250, 149, 59, 1);\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tlist-style-type: none;\n}\n.pages .menu-desplegable a {\n\ttext-transform: none;\n\tdisplay: block;\n\tpadding: 5px 0;\n}\n\n.pages .menu-desplegable a:hover {\n\tcolor: rgba(233, 13, 90, 1);\n}\n\n.menu-desplegableDisplayed {\n\tdisplay: block !important;\n}\n\n/* media queries */\n@media screen and (max-width: 767px) {\n\tnav {\n\t\tflex-direction: row;\n\t\tpadding: 3%;\n\t}\n\n\tnav .search-bar {\n\t\tmargin-right: 10px;\n\t\tmargin-bottom: 0px;\n\t\twidth: 50%;\n\t\theight: 50%;\n\t}\n\n\t.icon {\n\t\twidth: 20%;\n\t\theight: 20%;\n\t}\n\t.pages a {\n\t\tmargin-right: 6px;\n\t\tfont-size: 10px;\n\t}\n}\n",
					'',
				]);
				const a = o;
			},
			679: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"button {\n\twidth: 20%; /* Modifica el ancho del botón */\n\theight: 50px;\n\tbackground-color: rgba(251, 149, 60, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 10px;\n\tfont-size: 80%;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\nbutton:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n\nbutton span {\n\tdisplay: inline-block;\n\twidth: 100%;\n\ttext-align: center;\n}\n",
					'',
				]);
				const a = o;
			},
			191: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					'h2 {\n\tfont-weight: normal; /* Quita el negrita */\n\tcolor: rgba(233, 13, 90, 1); /* Cambia el color a rosa */\n\tmargin-bottom: 6px;\n}\n\nhr {\n\tborder-color: rgba(233, 13, 90, 1); /* Cambia el color del hr a rosa */\n\tmargin-top: 0px;\n\tmargin-bottom: 5%;\n}\n\np {\n\tmargin-bottom: 10%;\n}\n',
					'',
				]);
				const a = o;
			},
			83: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					'#figure {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\ttext-align: center;\n}\n\n#figure img {\n\twidth: 400px;\n\theight: auto;\n}\n\n#directoanddate {\n\tmargin-top: 10px; /* Ajusta el margen superior según sea necesario */\n}\n\nh1 {\n\tfont-size: 200%;\n\tmargin: 1%;\n}\n\n#directoranddate {\n\tmargin: 1%;\n\tdisplay: flex; /* Hace que los elementos se alineen en una línea */\n\tjustify-content: center; /* Los elementos se alinearán al centro horizontalmente */\n\tgap: 10px; /* Espacio entre los elementos */\n}\n\np {\n\tmargin: 1%;\n\twhite-space: nowrap; /* Hace que el texto dentro del párrafo se muestre en una sola línea */\n}\n\n/* Estilos para pantallas más pequeñas */\n@media screen and (max-width: 767px) {\n\t#figure img {\n\t\twidth: 100%; /* Hace que la imagen ocupe todo el ancho disponible */\n\t}\n\n\t#directoranddate {\n\t\tflex-direction: column; /* Cambia la dirección del flexbox a columna */\n\t\talign-items: center; /* Centra los elementos horizontalmente */\n\t\tmargin-top: 5px; /* Ajusta el margen superior */\n\t}\n\n\th1 {\n\t\tfont-size: 120%;\n\t}\n\tp {\n\t\twhite-space: normal; /* Permite que el texto dentro del párrafo se ajuste automáticamente al ancho del contenedor */\n\t\tfont-size: 90%;\n\t}\n}\n',
					'',
				]);
				const a = o;
			},
			909: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([t.id, '', '']);
				const a = o;
			},
			675: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.modal-new-list {\n\tbackground-color: orange;\n\tborder-radius: 30px;\n\tpadding: 10px 40px;\n\tpadding-bottom: 40px;\n\twidth: 500px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n}\n\n.close {\n\tposition: absolute;\n\ttop: 20px;\n\tright: 20px;\n\tcursor: pointer;\n}\n\n.title-list {\n\tmargin-top: 15px;\n\tmargin-bottom: 30px;\n}\n\n.info-list {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.info-list label {\n\tmargin-bottom: 10px;\n}\n\n.info-list input[type='text'] {\n\twidth: 80%;\n\tpadding: 5px;\n\tmargin-bottom: 20px;\n\tborder-radius: 5px;\n\tborder: 1px solid #3e3e3e;\n}\n\n.info-list button[type='submit'] {\n\tbackground-color: black;\n\tcolor: white;\n\tpadding: 10px 20px;\n\tborder-radius: 10px;\n\tborder: none;\n\tcursor: pointer;\n\tmargin-top: 20px;\n}\n\n.info-list button[type='submit']:hover {\n\tbackground-color: #555;\n}\n",
					'',
				]);
				const a = o;
			},
			163: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([t.id, '', '']);
				const a = o;
			},
			931: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"/* Estilos globales del componente */\n* {\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\n\n/* Estilos para el contenedor de la tarjeta de película */\n.container {\n\tposition: relative;\n\tobject-fit: cover;\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n}\n\n/* Estilos para el póster/imagen principal de la película */\n.poster {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.viewdetails {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n}\n/* Añade estilos para el contenido */\n.content {\n\ttop: 0;\n\tleft: 0;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.6); /* Fondo semitransparente */\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\topacity: 0; /* Inicialmente oculto */\n\ttransition: opacity 0.6s; /* Transición suave al mostrar */\n\tobject-fit: cover;\n}\n\n.container:hover .content {\n\topacity: 1; /* Mostrar contenido al pasar el mouse por encima de .container */\n}\n\np {\n\tcolor: white;\n\tfont-size: 100%;\n}\n\n.content img,\n.content p {\n\tmargin: 5px; /* Ajusta el margen entre elementos */\n\ttext-align: center;\n}\n\n.content img {\n\twidth: 28%;\n\theight: auto;\n\tcursor: pointer; /* Cambia el cursor al pasar sobre el botón */\n}\n\nimg.details {\n\theight: auto;\n\twidth: 50%;\n}\n\n.link {\n\tdisplay: flex;\n\twidth: 100%; /* Ancho del 50% */\n\theight: 25%;\n\tjustify-content: center; /* Centra horizontalmente */\n\talign-items: center; /* Centra verticalmente */\n\tmargin: 5px;\n\tpadding: 0px;\n}\n\n.dislike,\n.like {\n\tdisplay: none; /* Inicialmente oculto */\n}\n\n@media screen and (max-width: 767px) {\n\t.content img,\n\t.content p {\n\t\tmargin: 3px;\n\t}\n\n\t.content img {\n\t\twidth: 35%;\n\t}\n\n\timg.details {\n\t\twidth: 80%;\n\t}\n\n\t.link {\n\t\twidth: 70%;\n\t}\n}\n",
					'',
				]);
				const a = o;
			},
			791: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					'input {\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-bottom: 0;\n\tborder: none;\n\tbackground-color: rgba(255, 255, 255, 0.5);\n\tcolor: #fff;\n\tborder-radius: 5px;\n\tbox-sizing: border-box; /* Modelo de caja */\n}\n\n::placeholder {\n\tcolor: rgba(30, 21, 22, 1);\n}\n\n#header .close {\n\tfloat: right; /* Se alinea a la derecha */\n\tcursor: pointer;\n}\n\nh1 {\n\tfont-size: 300%;\n\tmargin-top: 0;\n}\n',
					'',
				]);
				const a = o;
			},
			633: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"a {\n\tcolor: rgba(250, 149, 59, 1);\n}\n\nbutton {\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-top: 20px;\n\tbackground-color: rgba(250, 149, 59, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tcursor: pointer; /* Cambio de cursor */\n\tfont-family: 'Noto Traditional Nushu', serif;\n\tfont-size: 110%;\n}\n\nbutton:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n",
					'',
				]);
				const a = o;
			},
			583: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					"/* Estilos para el botón flotante de abrir el modal */\n#ButtonModal {\n\tposition: fixed;\n\tz-index: 1; /* Se coloca por encima de otros elementos */\n\tbottom: 20px;\n\tright: 20px;\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: white;\n\tfont-size: 35px;\n\twidth: 55px;\n\theight: 55px;\n\tborder-radius: 50%;\n\tborder: 0px;\n\tcursor: pointer;\n}\n\n/* Estilos para el botón de cerrar el modal */\n.modalContainer .close {\n\tfloat: right; /* Se alinea a la derecha */\n\tcursor: pointer;\n}\n\n::placeholder {\n\tcolor: rgba(30, 21, 22, 1);\n}\n/* Estilos del formulario dentro del modal */\n.my-form {\n\tposition: fixed; /* Se fija el formulario en una posición específica */\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%); /* Centrado horizontal y vertical */\n\tbackground-color: rgba(30, 21, 22, 1);\n\tz-index: 2; /* Colocado por encima del modal */\n\tpadding: 20px;\n\tbox-shadow: 0 0 20px #000000; /* Sombra */\n\tborder-radius: 2rem;\n\theight: 80vh; /* Altura del 80% de la ventana */\n\twidth: 50%; /* Ancho del 50% de la ventana */\n\toverflow-x: hidden; /* Oculta el desbordamiento horizontal */\n\toverflow-y: auto; /* Habilita el desplazamiento vertical */\n}\n\n/*oculta la scrollbar */\n.my-form::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.modalContainer {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 9999;\n}\n\n/* Crea el velo detras del modal*/\n.modal-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\tz-index: -1;\n}\n\n/*Responsive */\n@media screen and (max-width: 767px) {\n\t#ButtonModal {\n\t\twidth: 60px;\n\t\theight: 60px;\n\t\tfont-size: 40px;\n\t}\n\n\t.modal-content {\n\t\tpadding: 10px;\n\t}\n\n\t.my-form {\n\t\tpadding: 10px;\n\t}\n\n\t.my-form input[type='text'],\n\t.my-form input[type='date'] {\n\t\tpadding: 8px;\n\t\tfont-size: 14px;\n\t}\n\n\t.my-form button {\n\t\tpadding: 8px;\n\t\tfont-size: 14px;\n\t}\n}\n\n/* Estilos del contenido del modal */\n.modal-content {\n\tcolor: #fff;\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tposition: relative;\n\tz-index: 10000; /* Colocado por encima de todos los elementos */\n\toverflow: hidden; /* Oculta el desbordamiento */\n\tdisplay: flex;\n\tjustify-content: center; /* Centrado horizontal */\n\talign-items: center; /* Centrado vertical */\n\tfont-family: 'Cairo', sans-serif;\n\tfont-size: 80%;\n\theight: 80vh; /* Altura del 80% de la ventana */\n}\n\n.my-form label {\n\tcolor: #fff;\n}\n\n/* Estilos para los campos de entrada de texto y fecha */\n.my-form input[type='text'],\n.my-form input[type='date'] {\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-bottom: 0;\n\tborder: none;\n\tbackground-color: rgba(255, 255, 255, 0.5);\n\tcolor: #fff;\n\tborder-radius: 5px;\n\tbox-sizing: border-box; /* Modelo de caja */\n}\n\n/* Estilos para los checkboxes */\n.my-form input[type='checkbox'] {\n\tmargin-right: 5px;\n}\n\n/* Estilos para el botón de submit */\n.my-form button {\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-top: 20px;\n\tbackground-color: rgba(250, 149, 59, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tcursor: pointer; /* Cambio de cursor */\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\n\n/* Estilos cuando se pasa el cursor sobre el botón */\n.my-form button:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n\n/* Estilos para los checkboxes de género */\n#checkboxes label {\n\tmargin-right: 10px;\n}\n\n#checkboxes {\n\tdisplay: grid; /* Se muestra como grid */\n\tgrid-template-rows: repeat(2, 1fr); /* Se repite la plantilla de filas */\n\tgrid-auto-flow: column; /* Se muestran en columnas */\n}\n\n/* Estilos para la imagen de cerrar el modal, el icono de x */\n.close img {\n\twidth: 70%;\n\theight: auto;\n\tcursor: pointer; /* Cambia el cursor al pasar sobre el botón */\n}\n",
					'',
				]);
				const a = o;
			},
			775: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					'b {\n\ttext-transform: uppercase; /* Convierte el texto a mayúsculas */\n\topacity: 70%;\n}\n\np {\n\tdisplay: block; /* Hace que el párrafo sea un bloque de texto */\n\twidth: 100%; /* Establece un ancho del 100% */\n}\n\n#description {\n\tmargin-bottom: 10%;\n}\n',
					'',
				]);
				const a = o;
			},
			213: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					":host {\n\tdisplay: block;\n\tpadding: 5%;\n}\n\n#cards {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: flex-start; /* Alineación a la izquierda */\n\tgap: 2%; /* Agregamos un espacio entre las columnas */\n}\n\nmovie-card {\n\twidth: calc((100% / 6) - 2%); /* Calculamos el ancho deseado considerando el espacio entre las columnas */\n\tmargin-bottom: 20px; /* Espacio entre las filas */\n\n\t/* Ajustes para pantallas de tamaño pequeño */\n\t@media (max-width: 576px) {\n\t\twidth: calc((100% / 2) - 2%); /* Ancho para mostrar dos columnas */\n\t\tmargin-bottom: 4%; /* Espacio máximo entre las filas */\n\t}\n}\n\nh1 {\n\ttext-transform: uppercase;\n\tcolor: white;\n\tfont-family: 'Cairo', sans-serif;\n\t@media (max-width: 576px) {\n\t\tfont-size: 5vw; /* Tamaño de fuente más grande para pantallas pequeñas */\n\t}\n}\n\na {\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n}\n\nh1:hover {\n\tcolor: rgba(233, 13, 90, 1);\n}\n",
					'',
				]);
				const a = o;
			},
			809: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					':host {\n\tdisplay: block;\n\tbackground-color: rgba(30, 21, 22, 1);\n\tmargin: 0;\n\tpadding: 0;\n}\n',
					'',
				]);
				const a = o;
			},
			9: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					':host {\n\tdisplay: block;\n\tbackground-color: rgba(30, 21, 22, 1);\n\tmargin: 0;\n\tpadding: 0;\n}\n',
					'',
				]);
				const a = o;
			},
			207: (t, e, n) => {
				n.d(e, { A: () => a });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s)()(r());
				o.push([
					t.id,
					":host {\n\tdisplay: block;\n\tbackground-color: rgba(30, 21, 22, 1);\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Noto Traditional Nushu', serif;\n\tcolor: white;\n\tposition: relative;\n}\n\n#banner {\n\tposition: relative;\n\tz-index: 1;\n}\n\n#figure {\n\tposition: absolute;\n\ttop: 40%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 2; /* Para asegurarse de que figure esté encima del banner */\n}\n\n#content {\n\tmargin-top: 20%;\n\tdisplay: flex;\n\tposition: relative;\n\tmargin-left: 10%;\n\tmargin-right: 10%;\n}\n\n#info {\n\tflex: 2; /* Para que ocupe 2/3 del espacio */\n\tborder-right-color: white;\n\tborder-right-width: 20px;\n\tpadding-right: 20%;\n}\n\n#content::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: calc(4 / 5 * 100%); /* Calcula la posición para que esté en el cuarto 4/5 de la pantalla */\n\twidth: 1px; /* Ancho de la línea */\n\tbackground-color: white; /* Color de la línea */\n}\n\n#actions {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end; /* Centra los elementos horizontalmente */\n\tflex: 1; /* Para que ocupe 1/3 del espacio */\n}\n\n/* Estilos para pantallas más pequeñas */\n@media screen and (max-width: 767px) {\n\t#figure {\n\t\ttop: 39%;\n\t}\n\n\t#content {\n\t\tmargin-top: 80%;\n\t\tflex-direction: column; /* Cambiar la dirección del flex para columnas */\n\t}\n\n\t#info {\n\t\tborder-right: none; /* Eliminar el borde derecho en pantallas pequeñas */\n\t\tpadding-right: 0; /* Eliminar el relleno derecho */\n\t}\n\n\t#content::after {\n\t\tleft: 0; /* Colocar la línea vertical al principio */\n\t\ttop: calc(2 / 3 * 100%); /* Colocar la línea al cuarto 4/5 de la pantalla */\n\t\twidth: 100%; /* Ancho completo */\n\t\theight: 1px; /* Altura de la línea */\n\t}\n\n\t#actions {\n\t\torder: -1; /* Cambiar el orden para que aparezca arriba */\n\t\talign-items: center; /* Alinear los elementos horizontalmente */\n\t\tpadding-top: 10px; /* Añadir espacio arriba */\n\t\tdisplay: grid; /* Usar grid layout para organizar los elementos */\n\t\tgrid-template-columns: repeat(2, 1fr); /* Crear 2 columnas de igual tamaño */\n\t\tgrid-gap: 10px; /* Espacio entre las celdas */\n\t\tmargin-bottom: 20px;\n\t}\n\n\t/* Alinear elementos de la segunda columna hacia la derecha */\n\t#actions my-actionandicon:nth-child(even) {\n\t\tjustify-self: end;\n\t}\n\n\t#content::after {\n\t\tdisplay: none;\n\t}\n}\n",
					'',
				]);
				const a = o;
			},
			858: (t, e, n) => {
				n.d(e, { A: () => d });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s),
					a = n(417),
					c = n.n(a),
					l = new URL(n(528), n.b),
					h = o()(r()),
					u = c()(l);
				h.push([
					t.id,
					`* {\n\tcolor: #fff;\n\tfont-family: 'Cairo', sans-serif;\n}\n\n#form {\n\tposition: fixed;\n\ttop: 40%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%); /* Centrado horizontal y vertical */\n\tbackground-color: rgba(30, 21, 22, 1);\n\tpadding: 3%;\n\tbox-shadow: 0 0 20px #000000; /* Sombra */\n\tborder-radius: 2rem;\n\theight: auto;\n\twidth: auto;\n\toverflow-x: hidden; /* Oculta el desbordamiento horizontal */\n\toverflow-y: auto; /* Habilita el desplazamiento vertical */\n\tcolor: #fff;\n\tfont-family: 'Cairo', sans-serif;\n\tz-index: 2;\n}\n\na {\n\tcolor: rgba(250, 149, 59, 1);\n}\n\n#extrainfo {\n\tposition: fixed;\n\tbottom: 10%; /* Ajusta esta cantidad según el espacio que quieras entre #form y #extrainfo */\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\twidth: 100%;\n\ttext-align: center; /* Alinea el contenido al centro */\n}\n\n#extrainfo-content {\n\twidth: 100%;\n}\n\n#extrainfo-content hr {\n\tdisplay: inline-block;\n\twidth: 30%; /* Ajusta este valor según el ancho deseado */\n\tmargin: 0 10px; /* Espacio entre elementos */\n\tborder-top: 1px solid rgba(255, 255, 255, 0.5); /* Cambia el color y estilo según lo necesario */\n\tvertical-align: middle; /* Alinea verticalmente */\n}\n\n#extrainfo-content p {\n\tdisplay: inline-block;\n\tmargin: 0 10px; /* Espacio entre elementos */\n}\n\nbutton {\n\tdisplay: inline-block;\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tmargin: 10px;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\n\nbutton:hover {\n\tbackground-color: rgba(250, 149, 59, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n\n:host {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tbackground-image: url(${u});\n\tbackground-size: cover;\n\tbackground-position: center top 30%;\n\tmargin: 0;\n\tpadding: 10%;\n\tcolor: white;\n\theight: 100%;\n\tz-index: 1;\n}\n`,
					'',
				]);
				const d = h;
			},
			868: (t, e, n) => {
				n.d(e, { A: () => d });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s),
					a = n(417),
					c = n.n(a),
					l = new URL(n(473), n.b),
					h = o()(r()),
					u = c()(l);
				h.push([
					t.id,
					`:host {\n\tdisplay: block;\n\tbackground-color: rgba(30, 21, 22, 1);\n\tmargin: 0;\n\tpadding: 0;\n}\n\n#modal-button {\n\twidth: 70%;\n\theight: 200px;\n\tmargin: 30px auto;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\n\ttext-transform: uppercase;\n\tborder-radius: 30px;\n\tcolor: white;\n\tbackground-image: url(${u});\n\tbackground-position: center;\n}\n`,
					'',
				]);
				const d = h;
			},
			307: (t, e, n) => {
				n.d(e, { A: () => d });
				var i = n(601),
					r = n.n(i),
					s = n(314),
					o = n.n(s),
					a = n(417),
					c = n.n(a),
					l = new URL(n(528), n.b),
					h = o()(r()),
					u = c()(l);
				h.push([
					t.id,
					`section {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%); /* Centrado horizontal y vertical */\n\tbackground-color: rgba(30, 21, 22, 1);\n\tpadding: 3%;\n\tbox-shadow: 0 0 20px #000000; /* Sombra */\n\tborder-radius: 2rem;\n\theight: auto;\n\twidth: auto;\n\toverflow-x: hidden; /* Oculta el desbordamiento horizontal */\n\toverflow-y: auto; /* Habilita el desplazamiento vertical */\n\tcolor: #fff;\n\tfont-family: 'Cairo', sans-serif;\n\tz-index: 2;\n}\n\na {\n\tcolor: rgba(250, 149, 59, 1);\n\tcursor: pointer;\n}\n\n:host {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tbackground-image: url(${u});\n\tbackground-size: cover;\n\tbackground-position: center top 30%;\n\tmargin: 0;\n\tpadding: 10%;\n\tcolor: white;\n\theight: 100%;\n}\n`,
					'',
				]);
				const d = h;
			},
			314: (t) => {
				t.exports = function (t) {
					var e = [];
					return (
						(e.toString = function () {
							return this.map(function (e) {
								var n = '',
									i = void 0 !== e[5];
								return (
									e[4] && (n += '@supports ('.concat(e[4], ') {')),
									e[2] && (n += '@media '.concat(e[2], ' {')),
									i && (n += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
									(n += t(e)),
									i && (n += '}'),
									e[2] && (n += '}'),
									e[4] && (n += '}'),
									n
								);
							}).join('');
						}),
						(e.i = function (t, n, i, r, s) {
							'string' == typeof t && (t = [[null, t, void 0]]);
							var o = {};
							if (i)
								for (var a = 0; a < this.length; a++) {
									var c = this[a][0];
									null != c && (o[c] = !0);
								}
							for (var l = 0; l < t.length; l++) {
								var h = [].concat(t[l]);
								(i && o[h[0]]) ||
									(void 0 !== s &&
										(void 0 === h[5] ||
											(h[1] = '@layer'.concat(h[5].length > 0 ? ' '.concat(h[5]) : '', ' {').concat(h[1], '}')),
										(h[5] = s)),
									n && (h[2] ? ((h[1] = '@media '.concat(h[2], ' {').concat(h[1], '}')), (h[2] = n)) : (h[2] = n)),
									r &&
										(h[4]
											? ((h[1] = '@supports ('.concat(h[4], ') {').concat(h[1], '}')), (h[4] = r))
											: (h[4] = ''.concat(r))),
									e.push(h));
							}
						}),
						e
					);
				};
			},
			417: (t) => {
				t.exports = function (t, e) {
					return (
						e || (e = {}),
						t
							? ((t = String(t.__esModule ? t.default : t)),
							  /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
							  e.hash && (t += e.hash),
							  /["'() \t\n]|(%20)/.test(t) || e.needQuotes
									? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
									: t)
							: t
					);
				};
			},
			601: (t) => {
				t.exports = function (t) {
					return t[1];
				};
			},
			473: (t, e, n) => {
				t.exports = n.p + 'b9ed50904b789d681f2b.png';
			},
			528: (t, e, n) => {
				t.exports = n.p + '5fa3712916bc3774d951.png';
			},
		},
		e = {};
	function n(i) {
		var r = e[i];
		if (void 0 !== r) return r.exports;
		var s = (e[i] = { id: i, exports: {} });
		return t[i](s, s.exports, n), s.exports;
	}
	(n.m = t),
		(n.n = (t) => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return n.d(e, { a: e }), e;
		}),
		(n.d = (t, e) => {
			for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
		}),
		(n.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' == typeof window) return window;
			}
		})()),
		(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
		(() => {
			var t;
			n.g.importScripts && (t = n.g.location + '');
			var e = n.g.document;
			if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
				var i = e.getElementsByTagName('script');
				if (i.length) for (var r = i.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); ) t = i[r--].src;
			}
			if (!t) throw new Error('Automatic publicPath is not supported in this browser');
			(t = t
				.replace(/#.*$/, '')
				.replace(/\?.*$/, '')
				.replace(/\/[^\/]+$/, '/')),
				(n.p = t);
		})(),
		(n.b = document.baseURI || self.location.href),
		(() => {
			var t, e;
			!(function (t) {
				t.GET = 'GET';
			})(t || (t = {})),
				(function (t) {
					t.NAVIGATE = 'NAVIGATE';
				})(e || (e = {}));
			let i = {
					screen: 'DASHBOARD',
					movielist: [],
					currentcategory: '',
					titlecategory: '',
					imagecategory: '',
					movieid: '',
					movieimage: '',
					moviecategories: '',
					movietitle: '',
					moviedirector: '',
					moviereleasedate: '',
					moviecast: '',
					moviecrew: '',
					movieimagesec: '',
					moviedescription: '',
					moviecatchphrase: '',
				},
				r = [];
			const s = (e) => {
					const n = JSON.parse(JSON.stringify(i));
					(i = ((e, n) => {
						const { action: i, payload: r } = e;
						return (
							'navigate' === i && (n.screen = r),
							i === t.GET
								? Object.assign(Object.assign({}, n), { movielist: r })
								: ('navigateCategory' === i && (n.currentcategory = r),
								  'SaveTitleCategory' === i && (n.titlecategory = r),
								  'SaveImageCategory' === i && (n.imagecategory = r),
								  'SaveMovieId' === i && (n.movieid = r),
								  'SaveMovieImage' === i && (n.movieimage = r),
								  'SaveMovieCategories' === i && (n.moviecategories = r),
								  'SaveMovieTitle' === i && (n.movietitle = r),
								  'SaveMovieDirector' === i && (n.moviedirector = r),
								  'SaveMovieReleaseDate' === i && (n.moviereleasedate = r),
								  'SaveMovieCast' === i && (n.moviecast = r),
								  'SaveMovieCrew' === i && (n.moviecrew = r),
								  'SaveMovieImageSec' === i && (n.movieimagesec = r),
								  'SaveMovieDescription' === i && (n.moviedescription = r),
								  'SaveMovieCatchPhrase' === i && (n.moviecatchphrase = r),
								  n)
						);
					})(e, n)),
						r.forEach((t) => t.render());
				},
				o = (t) => {
					r = [...r, t];
				},
				a = function (t) {
					const e = [];
					let n = 0;
					for (let i = 0; i < t.length; i++) {
						let r = t.charCodeAt(i);
						r < 128
							? (e[n++] = r)
							: r < 2048
							? ((e[n++] = (r >> 6) | 192), (e[n++] = (63 & r) | 128))
							: 55296 == (64512 & r) && i + 1 < t.length && 56320 == (64512 & t.charCodeAt(i + 1))
							? ((r = 65536 + ((1023 & r) << 10) + (1023 & t.charCodeAt(++i))),
							  (e[n++] = (r >> 18) | 240),
							  (e[n++] = ((r >> 12) & 63) | 128),
							  (e[n++] = ((r >> 6) & 63) | 128),
							  (e[n++] = (63 & r) | 128))
							: ((e[n++] = (r >> 12) | 224), (e[n++] = ((r >> 6) & 63) | 128), (e[n++] = (63 & r) | 128));
					}
					return e;
				},
				c = {
					byteToCharMap_: null,
					charToByteMap_: null,
					byteToCharMapWebSafe_: null,
					charToByteMapWebSafe_: null,
					ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
					get ENCODED_VALS() {
						return this.ENCODED_VALS_BASE + '+/=';
					},
					get ENCODED_VALS_WEBSAFE() {
						return this.ENCODED_VALS_BASE + '-_.';
					},
					HAS_NATIVE_SUPPORT: 'function' == typeof atob,
					encodeByteArray(t, e) {
						if (!Array.isArray(t)) throw Error('encodeByteArray takes an array as a parameter');
						this.init_();
						const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
							i = [];
						for (let e = 0; e < t.length; e += 3) {
							const r = t[e],
								s = e + 1 < t.length,
								o = s ? t[e + 1] : 0,
								a = e + 2 < t.length,
								c = a ? t[e + 2] : 0,
								l = r >> 2,
								h = ((3 & r) << 4) | (o >> 4);
							let u = ((15 & o) << 2) | (c >> 6),
								d = 63 & c;
							a || ((d = 64), s || (u = 64)), i.push(n[l], n[h], n[u], n[d]);
						}
						return i.join('');
					},
					encodeString(t, e) {
						return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(a(t), e);
					},
					decodeString(t, e) {
						return this.HAS_NATIVE_SUPPORT && !e
							? atob(t)
							: (function (t) {
									const e = [];
									let n = 0,
										i = 0;
									for (; n < t.length; ) {
										const r = t[n++];
										if (r < 128) e[i++] = String.fromCharCode(r);
										else if (r > 191 && r < 224) {
											const s = t[n++];
											e[i++] = String.fromCharCode(((31 & r) << 6) | (63 & s));
										} else if (r > 239 && r < 365) {
											const s =
												(((7 & r) << 18) | ((63 & t[n++]) << 12) | ((63 & t[n++]) << 6) | (63 & t[n++])) - 65536;
											(e[i++] = String.fromCharCode(55296 + (s >> 10))),
												(e[i++] = String.fromCharCode(56320 + (1023 & s)));
										} else {
											const s = t[n++],
												o = t[n++];
											e[i++] = String.fromCharCode(((15 & r) << 12) | ((63 & s) << 6) | (63 & o));
										}
									}
									return e.join('');
							  })(this.decodeStringToByteArray(t, e));
					},
					decodeStringToByteArray(t, e) {
						this.init_();
						const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
							i = [];
						for (let e = 0; e < t.length; ) {
							const r = n[t.charAt(e++)],
								s = e < t.length ? n[t.charAt(e)] : 0;
							++e;
							const o = e < t.length ? n[t.charAt(e)] : 64;
							++e;
							const a = e < t.length ? n[t.charAt(e)] : 64;
							if ((++e, null == r || null == s || null == o || null == a)) throw new l();
							const c = (r << 2) | (s >> 4);
							if ((i.push(c), 64 !== o)) {
								const t = ((s << 4) & 240) | (o >> 2);
								if ((i.push(t), 64 !== a)) {
									const t = ((o << 6) & 192) | a;
									i.push(t);
								}
							}
						}
						return i;
					},
					init_() {
						if (!this.byteToCharMap_) {
							(this.byteToCharMap_ = {}),
								(this.charToByteMap_ = {}),
								(this.byteToCharMapWebSafe_ = {}),
								(this.charToByteMapWebSafe_ = {});
							for (let t = 0; t < this.ENCODED_VALS.length; t++)
								(this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
									(this.charToByteMap_[this.byteToCharMap_[t]] = t),
									(this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
									(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
									t >= this.ENCODED_VALS_BASE.length &&
										((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
										(this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
						}
					},
				};
			class l extends Error {
				constructor() {
					super(...arguments), (this.name = 'DecodeBase64StringError');
				}
			}
			const h = function (t) {
					return (function (t) {
						const e = a(t);
						return c.encodeByteArray(e, !0);
					})(t).replace(/\./g, '');
				},
				u = function (t) {
					try {
						return c.decodeString(t, !0);
					} catch (t) {
						console.error('base64Decode failed: ', t);
					}
					return null;
				},
				d = () => {
					try {
						return (
							(function () {
								if ('undefined' != typeof self) return self;
								if ('undefined' != typeof window) return window;
								if (void 0 !== n.g) return n.g;
								throw new Error('Unable to locate global object.');
							})().__FIREBASE_DEFAULTS__ ||
							(() => {
								if ('undefined' == typeof process || void 0 === process.env) return;
								const t = process.env.__FIREBASE_DEFAULTS__;
								return t ? JSON.parse(t) : void 0;
							})() ||
							(() => {
								if ('undefined' == typeof document) return;
								let t;
								try {
									t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
								} catch (t) {
									return;
								}
								const e = t && u(t[1]);
								return e && JSON.parse(e);
							})()
						);
					} catch (t) {
						return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
					}
				},
				p = (t) => {
					var e, n;
					return null === (n = null === (e = d()) || void 0 === e ? void 0 : e.emulatorHosts) || void 0 === n
						? void 0
						: n[t];
				},
				f = () => {
					var t;
					return null === (t = d()) || void 0 === t ? void 0 : t.config;
				},
				m = (t) => {
					var e;
					return null === (e = d()) || void 0 === e ? void 0 : e[`_${t}`];
				};
			class g {
				constructor() {
					(this.reject = () => {}),
						(this.resolve = () => {}),
						(this.promise = new Promise((t, e) => {
							(this.resolve = t), (this.reject = e);
						}));
				}
				wrapCallback(t) {
					return (e, n) => {
						e ? this.reject(e) : this.resolve(n),
							'function' == typeof t && (this.promise.catch(() => {}), 1 === t.length ? t(e) : t(e, n));
					};
				}
			}
			function y() {
				return 'undefined' != typeof navigator && 'string' == typeof navigator.userAgent ? navigator.userAgent : '';
			}
			function v() {
				try {
					return 'object' == typeof indexedDB;
				} catch (t) {
					return !1;
				}
			}
			class w extends Error {
				constructor(t, e, n) {
					super(e),
						(this.code = t),
						(this.customData = n),
						(this.name = 'FirebaseError'),
						Object.setPrototypeOf(this, w.prototype),
						Error.captureStackTrace && Error.captureStackTrace(this, b.prototype.create);
				}
			}
			class b {
				constructor(t, e, n) {
					(this.service = t), (this.serviceName = e), (this.errors = n);
				}
				create(t, ...e) {
					const n = e[0] || {},
						i = `${this.service}/${t}`,
						r = this.errors[t],
						s = r
							? (function (t, e) {
									return t.replace(_, (t, n) => {
										const i = e[n];
										return null != i ? String(i) : `<${n}?>`;
									});
							  })(r, n)
							: 'Error',
						o = `${this.serviceName}: ${s} (${i}).`;
					return new w(i, o, n);
				}
			}
			const _ = /\{\$([^}]+)}/g;
			function E(t, e) {
				if (t === e) return !0;
				const n = Object.keys(t),
					i = Object.keys(e);
				for (const r of n) {
					if (!i.includes(r)) return !1;
					const n = t[r],
						s = e[r];
					if (T(n) && T(s)) {
						if (!E(n, s)) return !1;
					} else if (n !== s) return !1;
				}
				for (const t of i) if (!n.includes(t)) return !1;
				return !0;
			}
			function T(t) {
				return null !== t && 'object' == typeof t;
			}
			function I(t) {
				const e = [];
				for (const [n, i] of Object.entries(t))
					Array.isArray(i)
						? i.forEach((t) => {
								e.push(encodeURIComponent(n) + '=' + encodeURIComponent(t));
						  })
						: e.push(encodeURIComponent(n) + '=' + encodeURIComponent(i));
				return e.length ? '&' + e.join('&') : '';
			}
			function S(t) {
				const e = {};
				return (
					t
						.replace(/^\?/, '')
						.split('&')
						.forEach((t) => {
							if (t) {
								const [n, i] = t.split('=');
								e[decodeURIComponent(n)] = decodeURIComponent(i);
							}
						}),
					e
				);
			}
			function C(t) {
				const e = t.indexOf('?');
				if (!e) return '';
				const n = t.indexOf('#', e);
				return t.substring(e, n > 0 ? n : void 0);
			}
			class k {
				constructor(t, e) {
					(this.observers = []),
						(this.unsubscribes = []),
						(this.observerCount = 0),
						(this.task = Promise.resolve()),
						(this.finalized = !1),
						(this.onNoObservers = e),
						this.task
							.then(() => {
								t(this);
							})
							.catch((t) => {
								this.error(t);
							});
				}
				next(t) {
					this.forEachObserver((e) => {
						e.next(t);
					});
				}
				error(t) {
					this.forEachObserver((e) => {
						e.error(t);
					}),
						this.close(t);
				}
				complete() {
					this.forEachObserver((t) => {
						t.complete();
					}),
						this.close();
				}
				subscribe(t, e, n) {
					let i;
					if (void 0 === t && void 0 === e && void 0 === n) throw new Error('Missing Observer.');
					(i = (function (t, e) {
						if ('object' != typeof t || null === t) return !1;
						for (const e of ['next', 'error', 'complete']) if (e in t && 'function' == typeof t[e]) return !0;
						return !1;
					})(t)
						? t
						: { next: t, error: e, complete: n }),
						void 0 === i.next && (i.next = A),
						void 0 === i.error && (i.error = A),
						void 0 === i.complete && (i.complete = A);
					const r = this.unsubscribeOne.bind(this, this.observers.length);
					return (
						this.finalized &&
							this.task.then(() => {
								try {
									this.finalError ? i.error(this.finalError) : i.complete();
								} catch (t) {}
							}),
						this.observers.push(i),
						r
					);
				}
				unsubscribeOne(t) {
					void 0 !== this.observers &&
						void 0 !== this.observers[t] &&
						(delete this.observers[t],
						(this.observerCount -= 1),
						0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
				}
				forEachObserver(t) {
					if (!this.finalized) for (let e = 0; e < this.observers.length; e++) this.sendOne(e, t);
				}
				sendOne(t, e) {
					this.task.then(() => {
						if (void 0 !== this.observers && void 0 !== this.observers[t])
							try {
								e(this.observers[t]);
							} catch (t) {
								'undefined' != typeof console && console.error && console.error(t);
							}
					});
				}
				close(t) {
					this.finalized ||
						((this.finalized = !0),
						void 0 !== t && (this.finalError = t),
						this.task.then(() => {
							(this.observers = void 0), (this.onNoObservers = void 0);
						}));
				}
			}
			function A() {}
			function x(t) {
				return t && t._delegate ? t._delegate : t;
			}
			class R {
				constructor(t, e, n) {
					(this.name = t),
						(this.instanceFactory = e),
						(this.type = n),
						(this.multipleInstances = !1),
						(this.serviceProps = {}),
						(this.instantiationMode = 'LAZY'),
						(this.onInstanceCreated = null);
				}
				setInstantiationMode(t) {
					return (this.instantiationMode = t), this;
				}
				setMultipleInstances(t) {
					return (this.multipleInstances = t), this;
				}
				setServiceProps(t) {
					return (this.serviceProps = t), this;
				}
				setInstanceCreatedCallback(t) {
					return (this.onInstanceCreated = t), this;
				}
			}
			const N = '[DEFAULT]';
			class D {
				constructor(t, e) {
					(this.name = t),
						(this.container = e),
						(this.component = null),
						(this.instances = new Map()),
						(this.instancesDeferred = new Map()),
						(this.instancesOptions = new Map()),
						(this.onInitCallbacks = new Map());
				}
				get(t) {
					const e = this.normalizeInstanceIdentifier(t);
					if (!this.instancesDeferred.has(e)) {
						const t = new g();
						if ((this.instancesDeferred.set(e, t), this.isInitialized(e) || this.shouldAutoInitialize()))
							try {
								const n = this.getOrInitializeService({ instanceIdentifier: e });
								n && t.resolve(n);
							} catch (t) {}
					}
					return this.instancesDeferred.get(e).promise;
				}
				getImmediate(t) {
					var e;
					const n = this.normalizeInstanceIdentifier(null == t ? void 0 : t.identifier),
						i = null !== (e = null == t ? void 0 : t.optional) && void 0 !== e && e;
					if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
						if (i) return null;
						throw Error(`Service ${this.name} is not available`);
					}
					try {
						return this.getOrInitializeService({ instanceIdentifier: n });
					} catch (t) {
						if (i) return null;
						throw t;
					}
				}
				getComponent() {
					return this.component;
				}
				setComponent(t) {
					if (t.name !== this.name) throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
					if (this.component) throw Error(`Component for ${this.name} has already been provided`);
					if (((this.component = t), this.shouldAutoInitialize())) {
						if (
							(function (t) {
								return 'EAGER' === t.instantiationMode;
							})(t)
						)
							try {
								this.getOrInitializeService({ instanceIdentifier: N });
							} catch (t) {}
						for (const [t, e] of this.instancesDeferred.entries()) {
							const n = this.normalizeInstanceIdentifier(t);
							try {
								const t = this.getOrInitializeService({ instanceIdentifier: n });
								e.resolve(t);
							} catch (t) {}
						}
					}
				}
				clearInstance(t = N) {
					this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t);
				}
				async delete() {
					const t = Array.from(this.instances.values());
					await Promise.all([
						...t.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
						...t.filter((t) => '_delete' in t).map((t) => t._delete()),
					]);
				}
				isComponentSet() {
					return null != this.component;
				}
				isInitialized(t = N) {
					return this.instances.has(t);
				}
				getOptions(t = N) {
					return this.instancesOptions.get(t) || {};
				}
				initialize(t = {}) {
					const { options: e = {} } = t,
						n = this.normalizeInstanceIdentifier(t.instanceIdentifier);
					if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
					if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
					const i = this.getOrInitializeService({ instanceIdentifier: n, options: e });
					for (const [t, e] of this.instancesDeferred.entries())
						n === this.normalizeInstanceIdentifier(t) && e.resolve(i);
					return i;
				}
				onInit(t, e) {
					var n;
					const i = this.normalizeInstanceIdentifier(e),
						r = null !== (n = this.onInitCallbacks.get(i)) && void 0 !== n ? n : new Set();
					r.add(t), this.onInitCallbacks.set(i, r);
					const s = this.instances.get(i);
					return (
						s && t(s, i),
						() => {
							r.delete(t);
						}
					);
				}
				invokeOnInitCallbacks(t, e) {
					const n = this.onInitCallbacks.get(e);
					if (n)
						for (const i of n)
							try {
								i(t, e);
							} catch (t) {}
				}
				getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
					let n = this.instances.get(t);
					if (
						!n &&
						this.component &&
						((n = this.component.instanceFactory(this.container, {
							instanceIdentifier: ((i = t), i === N ? void 0 : i),
							options: e,
						})),
						this.instances.set(t, n),
						this.instancesOptions.set(t, e),
						this.invokeOnInitCallbacks(n, t),
						this.component.onInstanceCreated)
					)
						try {
							this.component.onInstanceCreated(this.container, t, n);
						} catch (t) {}
					var i;
					return n || null;
				}
				normalizeInstanceIdentifier(t = N) {
					return this.component ? (this.component.multipleInstances ? t : N) : t;
				}
				shouldAutoInitialize() {
					return !!this.component && 'EXPLICIT' !== this.component.instantiationMode;
				}
			}
			class L {
				constructor(t) {
					(this.name = t), (this.providers = new Map());
				}
				addComponent(t) {
					const e = this.getProvider(t.name);
					if (e.isComponentSet()) throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
					e.setComponent(t);
				}
				addOrOverwriteComponent(t) {
					this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
				}
				getProvider(t) {
					if (this.providers.has(t)) return this.providers.get(t);
					const e = new D(t, this);
					return this.providers.set(t, e), e;
				}
				getProviders() {
					return Array.from(this.providers.values());
				}
			}
			const O = [];
			var M;
			!(function (t) {
				(t[(t.DEBUG = 0)] = 'DEBUG'),
					(t[(t.VERBOSE = 1)] = 'VERBOSE'),
					(t[(t.INFO = 2)] = 'INFO'),
					(t[(t.WARN = 3)] = 'WARN'),
					(t[(t.ERROR = 4)] = 'ERROR'),
					(t[(t.SILENT = 5)] = 'SILENT');
			})(M || (M = {}));
			const P = { debug: M.DEBUG, verbose: M.VERBOSE, info: M.INFO, warn: M.WARN, error: M.ERROR, silent: M.SILENT },
				F = M.INFO,
				U = { [M.DEBUG]: 'log', [M.VERBOSE]: 'log', [M.INFO]: 'info', [M.WARN]: 'warn', [M.ERROR]: 'error' },
				V = (t, e, ...n) => {
					if (e < t.logLevel) return;
					const i = new Date().toISOString(),
						r = U[e];
					if (!r) throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
					console[r](`[${i}]  ${t.name}:`, ...n);
				};
			class j {
				constructor(t) {
					(this.name = t), (this._logLevel = F), (this._logHandler = V), (this._userLogHandler = null), O.push(this);
				}
				get logLevel() {
					return this._logLevel;
				}
				set logLevel(t) {
					if (!(t in M)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
					this._logLevel = t;
				}
				setLogLevel(t) {
					this._logLevel = 'string' == typeof t ? P[t] : t;
				}
				get logHandler() {
					return this._logHandler;
				}
				set logHandler(t) {
					if ('function' != typeof t) throw new TypeError('Value assigned to `logHandler` must be a function');
					this._logHandler = t;
				}
				get userLogHandler() {
					return this._userLogHandler;
				}
				set userLogHandler(t) {
					this._userLogHandler = t;
				}
				debug(...t) {
					this._userLogHandler && this._userLogHandler(this, M.DEBUG, ...t), this._logHandler(this, M.DEBUG, ...t);
				}
				log(...t) {
					this._userLogHandler && this._userLogHandler(this, M.VERBOSE, ...t), this._logHandler(this, M.VERBOSE, ...t);
				}
				info(...t) {
					this._userLogHandler && this._userLogHandler(this, M.INFO, ...t), this._logHandler(this, M.INFO, ...t);
				}
				warn(...t) {
					this._userLogHandler && this._userLogHandler(this, M.WARN, ...t), this._logHandler(this, M.WARN, ...t);
				}
				error(...t) {
					this._userLogHandler && this._userLogHandler(this, M.ERROR, ...t), this._logHandler(this, M.ERROR, ...t);
				}
			}
			const B = (t, e) => e.some((e) => t instanceof e);
			let z, q;
			const $ = new WeakMap(),
				H = new WeakMap(),
				G = new WeakMap(),
				K = new WeakMap(),
				W = new WeakMap();
			let Q = {
				get(t, e, n) {
					if (t instanceof IDBTransaction) {
						if ('done' === e) return H.get(t);
						if ('objectStoreNames' === e) return t.objectStoreNames || G.get(t);
						if ('store' === e) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
					}
					return X(t[e]);
				},
				set: (t, e, n) => ((t[e] = n), !0),
				has: (t, e) => (t instanceof IDBTransaction && ('done' === e || 'store' === e)) || e in t,
			};
			function J(t) {
				return 'function' == typeof t
					? (e = t) !== IDBDatabase.prototype.transaction || 'objectStoreNames' in IDBTransaction.prototype
						? (
								q ||
								(q = [
									IDBCursor.prototype.advance,
									IDBCursor.prototype.continue,
									IDBCursor.prototype.continuePrimaryKey,
								])
						  ).includes(e)
							? function (...t) {
									return e.apply(Y(this), t), X($.get(this));
							  }
							: function (...t) {
									return X(e.apply(Y(this), t));
							  }
						: function (t, ...n) {
								const i = e.call(Y(this), t, ...n);
								return G.set(i, t.sort ? t.sort() : [t]), X(i);
						  }
					: (t instanceof IDBTransaction &&
							(function (t) {
								if (H.has(t)) return;
								const e = new Promise((e, n) => {
									const i = () => {
											t.removeEventListener('complete', r),
												t.removeEventListener('error', s),
												t.removeEventListener('abort', s);
										},
										r = () => {
											e(), i();
										},
										s = () => {
											n(t.error || new DOMException('AbortError', 'AbortError')), i();
										};
									t.addEventListener('complete', r), t.addEventListener('error', s), t.addEventListener('abort', s);
								});
								H.set(t, e);
							})(t),
					  B(t, z || (z = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(t, Q) : t);
				var e;
			}
			function X(t) {
				if (t instanceof IDBRequest)
					return (function (t) {
						const e = new Promise((e, n) => {
							const i = () => {
									t.removeEventListener('success', r), t.removeEventListener('error', s);
								},
								r = () => {
									e(X(t.result)), i();
								},
								s = () => {
									n(t.error), i();
								};
							t.addEventListener('success', r), t.addEventListener('error', s);
						});
						return (
							e
								.then((e) => {
									e instanceof IDBCursor && $.set(e, t);
								})
								.catch(() => {}),
							W.set(e, t),
							e
						);
					})(t);
				if (K.has(t)) return K.get(t);
				const e = J(t);
				return e !== t && (K.set(t, e), W.set(e, t)), e;
			}
			const Y = (t) => W.get(t),
				Z = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
				tt = ['put', 'add', 'delete', 'clear'],
				et = new Map();
			function nt(t, e) {
				if (!(t instanceof IDBDatabase) || e in t || 'string' != typeof e) return;
				if (et.get(e)) return et.get(e);
				const n = e.replace(/FromIndex$/, ''),
					i = e !== n,
					r = tt.includes(n);
				if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || (!r && !Z.includes(n))) return;
				const s = async function (t, ...e) {
					const s = this.transaction(t, r ? 'readwrite' : 'readonly');
					let o = s.store;
					return i && (o = o.index(e.shift())), (await Promise.all([o[n](...e), r && s.done]))[0];
				};
				return et.set(e, s), s;
			}
			var it;
			(it = Q),
				(Q = { ...it, get: (t, e, n) => nt(t, e) || it.get(t, e, n), has: (t, e) => !!nt(t, e) || it.has(t, e) });
			class rt {
				constructor(t) {
					this.container = t;
				}
				getPlatformInfoString() {
					return this.container
						.getProviders()
						.map((t) => {
							if (
								(function (t) {
									const e = t.getComponent();
									return 'VERSION' === (null == e ? void 0 : e.type);
								})(t)
							) {
								const e = t.getImmediate();
								return `${e.library}/${e.version}`;
							}
							return null;
						})
						.filter((t) => t)
						.join(' ');
				}
			}
			const st = '@firebase/app',
				ot = '0.9.26',
				at = new j('@firebase/app'),
				ct = '[DEFAULT]',
				lt = {
					[st]: 'fire-core',
					'@firebase/app-compat': 'fire-core-compat',
					'@firebase/analytics': 'fire-analytics',
					'@firebase/analytics-compat': 'fire-analytics-compat',
					'@firebase/app-check': 'fire-app-check',
					'@firebase/app-check-compat': 'fire-app-check-compat',
					'@firebase/auth': 'fire-auth',
					'@firebase/auth-compat': 'fire-auth-compat',
					'@firebase/database': 'fire-rtdb',
					'@firebase/database-compat': 'fire-rtdb-compat',
					'@firebase/functions': 'fire-fn',
					'@firebase/functions-compat': 'fire-fn-compat',
					'@firebase/installations': 'fire-iid',
					'@firebase/installations-compat': 'fire-iid-compat',
					'@firebase/messaging': 'fire-fcm',
					'@firebase/messaging-compat': 'fire-fcm-compat',
					'@firebase/performance': 'fire-perf',
					'@firebase/performance-compat': 'fire-perf-compat',
					'@firebase/remote-config': 'fire-rc',
					'@firebase/remote-config-compat': 'fire-rc-compat',
					'@firebase/storage': 'fire-gcs',
					'@firebase/storage-compat': 'fire-gcs-compat',
					'@firebase/firestore': 'fire-fst',
					'@firebase/firestore-compat': 'fire-fst-compat',
					'fire-js': 'fire-js',
					firebase: 'fire-js-all',
				},
				ht = new Map(),
				ut = new Map();
			function dt(t, e) {
				try {
					t.container.addComponent(e);
				} catch (n) {
					at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
				}
			}
			function pt(t) {
				const e = t.name;
				if (ut.has(e)) return at.debug(`There were multiple attempts to register component ${e}.`), !1;
				ut.set(e, t);
				for (const e of ht.values()) dt(e, t);
				return !0;
			}
			function ft(t, e) {
				const n = t.container.getProvider('heartbeat').getImmediate({ optional: !0 });
				return n && n.triggerHeartbeat(), t.container.getProvider(e);
			}
			const mt = new b('app', 'Firebase', {
				'no-app': "No Firebase App '{$appName}' has been created - call initializeApp() first",
				'bad-app-name': "Illegal App name: '{$appName}",
				'duplicate-app': "Firebase App named '{$appName}' already exists with different options or config",
				'app-deleted': "Firebase App named '{$appName}' already deleted",
				'no-options': 'Need to provide options, when not being deployed to hosting via source.',
				'invalid-app-argument': 'firebase.{$appName}() takes either no argument or a Firebase App instance.',
				'invalid-log-argument': 'First argument to `onLog` must be null or a function.',
				'idb-open': 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
				'idb-get': 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
				'idb-set': 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
				'idb-delete': 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
			});
			class gt {
				constructor(t, e, n) {
					(this._isDeleted = !1),
						(this._options = Object.assign({}, t)),
						(this._config = Object.assign({}, e)),
						(this._name = e.name),
						(this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled),
						(this._container = n),
						this.container.addComponent(new R('app', () => this, 'PUBLIC'));
				}
				get automaticDataCollectionEnabled() {
					return this.checkDestroyed(), this._automaticDataCollectionEnabled;
				}
				set automaticDataCollectionEnabled(t) {
					this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
				}
				get name() {
					return this.checkDestroyed(), this._name;
				}
				get options() {
					return this.checkDestroyed(), this._options;
				}
				get config() {
					return this.checkDestroyed(), this._config;
				}
				get container() {
					return this._container;
				}
				get isDeleted() {
					return this._isDeleted;
				}
				set isDeleted(t) {
					this._isDeleted = t;
				}
				checkDestroyed() {
					if (this.isDeleted) throw mt.create('app-deleted', { appName: this._name });
				}
			}
			const yt = '10.7.2';
			function vt(t, e = {}) {
				let n = t;
				'object' != typeof e && (e = { name: e });
				const i = Object.assign({ name: ct, automaticDataCollectionEnabled: !1 }, e),
					r = i.name;
				if ('string' != typeof r || !r) throw mt.create('bad-app-name', { appName: String(r) });
				if ((n || (n = f()), !n)) throw mt.create('no-options');
				const s = ht.get(r);
				if (s) {
					if (E(n, s.options) && E(i, s.config)) return s;
					throw mt.create('duplicate-app', { appName: r });
				}
				const o = new L(r);
				for (const t of ut.values()) o.addComponent(t);
				const a = new gt(n, i, o);
				return ht.set(r, a), a;
			}
			function wt(t = ct) {
				const e = ht.get(t);
				if (!e && t === ct && f()) return vt();
				if (!e) throw mt.create('no-app', { appName: t });
				return e;
			}
			function bt(t, e, n) {
				var i;
				let r = null !== (i = lt[t]) && void 0 !== i ? i : t;
				n && (r += `-${n}`);
				const s = r.match(/\s|\//),
					o = e.match(/\s|\//);
				if (s || o) {
					const t = [`Unable to register library "${r}" with version "${e}":`];
					return (
						s && t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),
						s && o && t.push('and'),
						o && t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
						void at.warn(t.join(' '))
					);
				}
				pt(new R(`${r}-version`, () => ({ library: r, version: e }), 'VERSION'));
			}
			const _t = 'firebase-heartbeat-database',
				Et = 1,
				Tt = 'firebase-heartbeat-store';
			let It = null;
			function St() {
				return (
					It ||
						(It = (function (t, e, { blocked: n, upgrade: i, blocking: r, terminated: s } = {}) {
							const o = indexedDB.open(t, e),
								a = X(o);
							return (
								i &&
									o.addEventListener('upgradeneeded', (t) => {
										i(X(o.result), t.oldVersion, t.newVersion, X(o.transaction), t);
									}),
								n && o.addEventListener('blocked', (t) => n(t.oldVersion, t.newVersion, t)),
								a
									.then((t) => {
										s && t.addEventListener('close', () => s()),
											r && t.addEventListener('versionchange', (t) => r(t.oldVersion, t.newVersion, t));
									})
									.catch(() => {}),
								a
							);
						})(_t, Et, {
							upgrade: (t, e) => {
								if (0 === e)
									try {
										t.createObjectStore(Tt);
									} catch (t) {
										console.warn(t);
									}
							},
						}).catch((t) => {
							throw mt.create('idb-open', { originalErrorMessage: t.message });
						})),
					It
				);
			}
			async function Ct(t, e) {
				try {
					const n = (await St()).transaction(Tt, 'readwrite'),
						i = n.objectStore(Tt);
					await i.put(e, kt(t)), await n.done;
				} catch (t) {
					if (t instanceof w) at.warn(t.message);
					else {
						const e = mt.create('idb-set', { originalErrorMessage: null == t ? void 0 : t.message });
						at.warn(e.message);
					}
				}
			}
			function kt(t) {
				return `${t.name}!${t.options.appId}`;
			}
			class At {
				constructor(t) {
					(this.container = t), (this._heartbeatsCache = null);
					const e = this.container.getProvider('app').getImmediate();
					(this._storage = new Rt(e)),
						(this._heartbeatsCachePromise = this._storage.read().then((t) => ((this._heartbeatsCache = t), t)));
				}
				async triggerHeartbeat() {
					var t, e;
					const n = this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),
						i = xt();
					if (
						(null != (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats) ||
							((this._heartbeatsCache = await this._heartbeatsCachePromise),
							null != (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats))) &&
						this._heartbeatsCache.lastSentHeartbeatDate !== i &&
						!this._heartbeatsCache.heartbeats.some((t) => t.date === i)
					)
						return (
							this._heartbeatsCache.heartbeats.push({ date: i, agent: n }),
							(this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((t) => {
								const e = new Date(t.date).valueOf();
								return Date.now() - e <= 2592e6;
							})),
							this._storage.overwrite(this._heartbeatsCache)
						);
				}
				async getHeartbeatsHeader() {
					var t;
					if (
						(null === this._heartbeatsCache && (await this._heartbeatsCachePromise),
						null == (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats) ||
							0 === this._heartbeatsCache.heartbeats.length)
					)
						return '';
					const e = xt(),
						{ heartbeatsToSend: n, unsentEntries: i } = (function (t, e = 1024) {
							const n = [];
							let i = t.slice();
							for (const r of t) {
								const t = n.find((t) => t.agent === r.agent);
								if (t) {
									if ((t.dates.push(r.date), Nt(n) > e)) {
										t.dates.pop();
										break;
									}
								} else if ((n.push({ agent: r.agent, dates: [r.date] }), Nt(n) > e)) {
									n.pop();
									break;
								}
								i = i.slice(1);
							}
							return { heartbeatsToSend: n, unsentEntries: i };
						})(this._heartbeatsCache.heartbeats),
						r = h(JSON.stringify({ version: 2, heartbeats: n }));
					return (
						(this._heartbeatsCache.lastSentHeartbeatDate = e),
						i.length > 0
							? ((this._heartbeatsCache.heartbeats = i), await this._storage.overwrite(this._heartbeatsCache))
							: ((this._heartbeatsCache.heartbeats = []), this._storage.overwrite(this._heartbeatsCache)),
						r
					);
				}
			}
			function xt() {
				return new Date().toISOString().substring(0, 10);
			}
			class Rt {
				constructor(t) {
					(this.app = t), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
				}
				async runIndexedDBEnvironmentCheck() {
					return (
						!!v() &&
						new Promise((t, e) => {
							try {
								let n = !0;
								const i = 'validate-browser-context-for-indexeddb-analytics-module',
									r = self.indexedDB.open(i);
								(r.onsuccess = () => {
									r.result.close(), n || self.indexedDB.deleteDatabase(i), t(!0);
								}),
									(r.onupgradeneeded = () => {
										n = !1;
									}),
									(r.onerror = () => {
										var t;
										e((null === (t = r.error) || void 0 === t ? void 0 : t.message) || '');
									});
							} catch (t) {
								e(t);
							}
						})
							.then(() => !0)
							.catch(() => !1)
					);
				}
				async read() {
					if (await this._canUseIndexedDBPromise) {
						const t = await (async function (t) {
							try {
								const e = await St();
								return await e.transaction(Tt).objectStore(Tt).get(kt(t));
							} catch (t) {
								if (t instanceof w) at.warn(t.message);
								else {
									const e = mt.create('idb-get', { originalErrorMessage: null == t ? void 0 : t.message });
									at.warn(e.message);
								}
							}
						})(this.app);
						return (null == t ? void 0 : t.heartbeats) ? t : { heartbeats: [] };
					}
					return { heartbeats: [] };
				}
				async overwrite(t) {
					var e;
					if (await this._canUseIndexedDBPromise) {
						const n = await this.read();
						return Ct(this.app, {
							lastSentHeartbeatDate:
								null !== (e = t.lastSentHeartbeatDate) && void 0 !== e ? e : n.lastSentHeartbeatDate,
							heartbeats: t.heartbeats,
						});
					}
				}
				async add(t) {
					var e;
					if (await this._canUseIndexedDBPromise) {
						const n = await this.read();
						return Ct(this.app, {
							lastSentHeartbeatDate:
								null !== (e = t.lastSentHeartbeatDate) && void 0 !== e ? e : n.lastSentHeartbeatDate,
							heartbeats: [...n.heartbeats, ...t.heartbeats],
						});
					}
				}
			}
			function Nt(t) {
				return h(JSON.stringify({ version: 2, heartbeats: t })).length;
			}
			pt(new R('platform-logger', (t) => new rt(t), 'PRIVATE')),
				pt(new R('heartbeat', (t) => new At(t), 'PRIVATE')),
				bt(st, ot, ''),
				bt(st, ot, 'esm2017'),
				bt('fire-js', ''),
				bt('firebase', '10.7.2', 'app');
			var Dt,
				Lt =
					'undefined' != typeof globalThis
						? globalThis
						: 'undefined' != typeof window
						? window
						: 'undefined' != typeof global
						? global
						: 'undefined' != typeof self
						? self
						: {},
				Ot = {},
				Mt = Mt || {},
				Pt = Lt || self;
			function Ft(t) {
				var e = typeof t;
				return (
					'array' == (e = 'object' != e ? e : t ? (Array.isArray(t) ? 'array' : e) : 'null') ||
					('object' == e && 'number' == typeof t.length)
				);
			}
			function Ut(t) {
				var e = typeof t;
				return ('object' == e && null != t) || 'function' == e;
			}
			var Vt = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
				jt = 0;
			function Bt(t, e, n) {
				return t.call.apply(t.bind, arguments);
			}
			function zt(t, e, n) {
				if (!t) throw Error();
				if (2 < arguments.length) {
					var i = Array.prototype.slice.call(arguments, 2);
					return function () {
						var n = Array.prototype.slice.call(arguments);
						return Array.prototype.unshift.apply(n, i), t.apply(e, n);
					};
				}
				return function () {
					return t.apply(e, arguments);
				};
			}
			function qt(t, e, n) {
				return (qt =
					Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? Bt : zt).apply(
					null,
					arguments
				);
			}
			function $t(t, e) {
				var n = Array.prototype.slice.call(arguments, 1);
				return function () {
					var e = n.slice();
					return e.push.apply(e, arguments), t.apply(this, e);
				};
			}
			function Ht(t, e) {
				function n() {}
				(n.prototype = e.prototype),
					(t.$ = e.prototype),
					(t.prototype = new n()),
					(t.prototype.constructor = t),
					(t.ac = function (t, n, i) {
						for (var r = Array(arguments.length - 2), s = 2; s < arguments.length; s++) r[s - 2] = arguments[s];
						return e.prototype[n].apply(t, r);
					});
			}
			function Gt() {
				(this.s = this.s), (this.o = this.o);
			}
			(Gt.prototype.s = !1),
				(Gt.prototype.sa = function () {
					var t;
					!this.s &&
						((this.s = !0), this.N(), 0) &&
						((t = this), (Object.prototype.hasOwnProperty.call(t, Vt) && t[Vt]) || (t[Vt] = ++jt));
				}),
				(Gt.prototype.N = function () {
					if (this.o) for (; this.o.length; ) this.o.shift()();
				});
			const Kt = Array.prototype.indexOf
				? function (t, e) {
						return Array.prototype.indexOf.call(t, e, void 0);
				  }
				: function (t, e) {
						if ('string' == typeof t) return 'string' != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
						for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
						return -1;
				  };
			function Wt(t) {
				const e = t.length;
				if (0 < e) {
					const n = Array(e);
					for (let i = 0; i < e; i++) n[i] = t[i];
					return n;
				}
				return [];
			}
			function Qt(t, e) {
				for (let e = 1; e < arguments.length; e++) {
					const n = arguments[e];
					if (Ft(n)) {
						const e = t.length || 0,
							i = n.length || 0;
						t.length = e + i;
						for (let r = 0; r < i; r++) t[e + r] = n[r];
					} else t.push(n);
				}
			}
			function Jt(t, e) {
				(this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
			}
			Jt.prototype.h = function () {
				this.defaultPrevented = !0;
			};
			var Xt = (function () {
				if (!Pt.addEventListener || !Object.defineProperty) return !1;
				var t = !1,
					e = Object.defineProperty({}, 'passive', {
						get: function () {
							t = !0;
						},
					});
				try {
					const t = () => {};
					Pt.addEventListener('test', t, e), Pt.removeEventListener('test', t, e);
				} catch (t) {}
				return t;
			})();
			function Yt(t) {
				return /^[\s\xa0]*$/.test(t);
			}
			function Zt() {
				var t = Pt.navigator;
				return t && (t = t.userAgent) ? t : '';
			}
			function te(t) {
				return -1 != Zt().indexOf(t);
			}
			function ee(t) {
				return ee[' '](t), t;
			}
			ee[' '] = function () {};
			var ne,
				ie,
				re,
				se = te('Opera'),
				oe = te('Trident') || te('MSIE'),
				ae = te('Edge'),
				ce = ae || oe,
				le =
					te('Gecko') &&
					!(-1 != Zt().toLowerCase().indexOf('webkit') && !te('Edge')) &&
					!(te('Trident') || te('MSIE')) &&
					!te('Edge'),
				he = -1 != Zt().toLowerCase().indexOf('webkit') && !te('Edge');
			function ue() {
				var t = Pt.document;
				return t ? t.documentMode : void 0;
			}
			t: {
				var de = '',
					pe =
						((ie = Zt()),
						le
							? /rv:([^\);]+)(\)|;)/.exec(ie)
							: ae
							? /Edge\/([\d\.]+)/.exec(ie)
							: oe
							? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ie)
							: he
							? /WebKit\/(\S+)/.exec(ie)
							: se
							? /(?:Version)[ \/]?(\S+)/.exec(ie)
							: void 0);
				if ((pe && (de = pe ? pe[1] : ''), oe)) {
					var fe = ue();
					if (null != fe && fe > parseFloat(de)) {
						ne = String(fe);
						break t;
					}
				}
				ne = de;
			}
			Pt.document && oe ? (re = ue() || parseInt(ne, 10) || void 0) : (re = void 0);
			var me = re;
			function ge(t, e) {
				if (
					(Jt.call(this, t ? t.type : ''),
					(this.relatedTarget = this.g = this.target = null),
					(this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
					(this.key = ''),
					(this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
					(this.state = null),
					(this.pointerId = 0),
					(this.pointerType = ''),
					(this.i = null),
					t)
				) {
					var n = (this.type = t.type),
						i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
					if (((this.target = t.target || t.srcElement), (this.g = e), (e = t.relatedTarget))) {
						if (le) {
							t: {
								try {
									ee(e.nodeName);
									var r = !0;
									break t;
								} catch (t) {}
								r = !1;
							}
							r || (e = null);
						}
					} else 'mouseover' == n ? (e = t.fromElement) : 'mouseout' == n && (e = t.toElement);
					(this.relatedTarget = e),
						i
							? ((this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX),
							  (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
							  (this.screenX = i.screenX || 0),
							  (this.screenY = i.screenY || 0))
							: ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
							  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
							  (this.screenX = t.screenX || 0),
							  (this.screenY = t.screenY || 0)),
						(this.button = t.button),
						(this.key = t.key || ''),
						(this.ctrlKey = t.ctrlKey),
						(this.altKey = t.altKey),
						(this.shiftKey = t.shiftKey),
						(this.metaKey = t.metaKey),
						(this.pointerId = t.pointerId || 0),
						(this.pointerType = 'string' == typeof t.pointerType ? t.pointerType : ye[t.pointerType] || ''),
						(this.state = t.state),
						(this.i = t),
						t.defaultPrevented && ge.$.h.call(this);
				}
			}
			Ht(ge, Jt);
			var ye = { 2: 'touch', 3: 'pen', 4: 'mouse' };
			ge.prototype.h = function () {
				ge.$.h.call(this);
				var t = this.i;
				t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
			};
			var ve = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
				we = 0;
			function be(t, e, n, i, r) {
				(this.listener = t),
					(this.proxy = null),
					(this.src = e),
					(this.type = n),
					(this.capture = !!i),
					(this.la = r),
					(this.key = ++we),
					(this.fa = this.ia = !1);
			}
			function _e(t) {
				(t.fa = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.la = null);
			}
			function Ee(t, e, n) {
				for (const i in t) e.call(n, t[i], i, t);
			}
			function Te(t) {
				const e = {};
				for (const n in t) e[n] = t[n];
				return e;
			}
			const Ie = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
				' '
			);
			function Se(t, e) {
				let n, i;
				for (let e = 1; e < arguments.length; e++) {
					for (n in ((i = arguments[e]), i)) t[n] = i[n];
					for (let e = 0; e < Ie.length; e++) (n = Ie[e]), Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
				}
			}
			function Ce(t) {
				(this.src = t), (this.g = {}), (this.h = 0);
			}
			function ke(t, e) {
				var n = e.type;
				if (n in t.g) {
					var i,
						r = t.g[n],
						s = Kt(r, e);
					(i = 0 <= s) && Array.prototype.splice.call(r, s, 1),
						i && (_e(e), 0 == t.g[n].length && (delete t.g[n], t.h--));
				}
			}
			function Ae(t, e, n, i) {
				for (var r = 0; r < t.length; ++r) {
					var s = t[r];
					if (!s.fa && s.listener == e && s.capture == !!n && s.la == i) return r;
				}
				return -1;
			}
			Ce.prototype.add = function (t, e, n, i, r) {
				var s = t.toString();
				(t = this.g[s]) || ((t = this.g[s] = []), this.h++);
				var o = Ae(t, e, i, r);
				return -1 < o ? ((e = t[o]), n || (e.ia = !1)) : (((e = new be(e, this.src, s, !!i, r)).ia = n), t.push(e)), e;
			};
			var xe = 'closure_lm_' + ((1e6 * Math.random()) | 0),
				Re = {};
			function Ne(t, e, n, i, r) {
				if (i && i.once) return Le(t, e, n, i, r);
				if (Array.isArray(e)) {
					for (var s = 0; s < e.length; s++) Ne(t, e[s], n, i, r);
					return null;
				}
				return (n = je(n)), t && t[ve] ? t.O(e, n, Ut(i) ? !!i.capture : !!i, r) : De(t, e, n, !1, i, r);
			}
			function De(t, e, n, i, r, s) {
				if (!e) throw Error('Invalid event type');
				var o = Ut(r) ? !!r.capture : !!r,
					a = Ue(t);
				if ((a || (t[xe] = a = new Ce(t)), (n = a.add(e, n, i, o, s)).proxy)) return n;
				if (
					((i = (function () {
						const t = Fe;
						return function e(n) {
							return t.call(e.src, e.listener, n);
						};
					})()),
					(n.proxy = i),
					(i.src = t),
					(i.listener = n),
					t.addEventListener)
				)
					Xt || (r = o), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
				else if (t.attachEvent) t.attachEvent(Pe(e.toString()), i);
				else {
					if (!t.addListener || !t.removeListener) throw Error('addEventListener and attachEvent are unavailable.');
					t.addListener(i);
				}
				return n;
			}
			function Le(t, e, n, i, r) {
				if (Array.isArray(e)) {
					for (var s = 0; s < e.length; s++) Le(t, e[s], n, i, r);
					return null;
				}
				return (n = je(n)), t && t[ve] ? t.P(e, n, Ut(i) ? !!i.capture : !!i, r) : De(t, e, n, !0, i, r);
			}
			function Oe(t, e, n, i, r) {
				if (Array.isArray(e)) for (var s = 0; s < e.length; s++) Oe(t, e[s], n, i, r);
				else
					(i = Ut(i) ? !!i.capture : !!i),
						(n = je(n)),
						t && t[ve]
							? ((t = t.i),
							  (e = String(e).toString()) in t.g &&
									-1 < (n = Ae((s = t.g[e]), n, i, r)) &&
									(_e(s[n]), Array.prototype.splice.call(s, n, 1), 0 == s.length && (delete t.g[e], t.h--)))
							: t &&
							  (t = Ue(t)) &&
							  ((e = t.g[e.toString()]), (t = -1), e && (t = Ae(e, n, i, r)), (n = -1 < t ? e[t] : null) && Me(n));
			}
			function Me(t) {
				if ('number' != typeof t && t && !t.fa) {
					var e = t.src;
					if (e && e[ve]) ke(e.i, t);
					else {
						var n = t.type,
							i = t.proxy;
						e.removeEventListener
							? e.removeEventListener(n, i, t.capture)
							: e.detachEvent
							? e.detachEvent(Pe(n), i)
							: e.addListener && e.removeListener && e.removeListener(i),
							(n = Ue(e)) ? (ke(n, t), 0 == n.h && ((n.src = null), (e[xe] = null))) : _e(t);
					}
				}
			}
			function Pe(t) {
				return t in Re ? Re[t] : (Re[t] = 'on' + t);
			}
			function Fe(t, e) {
				if (t.fa) t = !0;
				else {
					e = new ge(e, this);
					var n = t.listener,
						i = t.la || t.src;
					t.ia && Me(t), (t = n.call(i, e));
				}
				return t;
			}
			function Ue(t) {
				return (t = t[xe]) instanceof Ce ? t : null;
			}
			var Ve = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
			function je(t) {
				return 'function' == typeof t
					? t
					: (t[Ve] ||
							(t[Ve] = function (e) {
								return t.handleEvent(e);
							}),
					  t[Ve]);
			}
			function Be() {
				Gt.call(this), (this.i = new Ce(this)), (this.S = this), (this.J = null);
			}
			function ze(t, e) {
				var n,
					i = t.J;
				if (i) for (n = []; i; i = i.J) n.push(i);
				if (((t = t.S), (i = e.type || e), 'string' == typeof e)) e = new Jt(e, t);
				else if (e instanceof Jt) e.target = e.target || t;
				else {
					var r = e;
					Se((e = new Jt(i, t)), r);
				}
				if (((r = !0), n))
					for (var s = n.length - 1; 0 <= s; s--) {
						var o = (e.g = n[s]);
						r = qe(o, i, !0, e) && r;
					}
				if (((r = qe((o = e.g = t), i, !0, e) && r), (r = qe(o, i, !1, e) && r), n))
					for (s = 0; s < n.length; s++) r = qe((o = e.g = n[s]), i, !1, e) && r;
			}
			function qe(t, e, n, i) {
				if (!(e = t.i.g[String(e)])) return !0;
				e = e.concat();
				for (var r = !0, s = 0; s < e.length; ++s) {
					var o = e[s];
					if (o && !o.fa && o.capture == n) {
						var a = o.listener,
							c = o.la || o.src;
						o.ia && ke(t.i, o), (r = !1 !== a.call(c, i) && r);
					}
				}
				return r && !i.defaultPrevented;
			}
			Ht(Be, Gt),
				(Be.prototype[ve] = !0),
				(Be.prototype.removeEventListener = function (t, e, n, i) {
					Oe(this, t, e, n, i);
				}),
				(Be.prototype.N = function () {
					if ((Be.$.N.call(this), this.i)) {
						var t,
							e = this.i;
						for (t in e.g) {
							for (var n = e.g[t], i = 0; i < n.length; i++) _e(n[i]);
							delete e.g[t], e.h--;
						}
					}
					this.J = null;
				}),
				(Be.prototype.O = function (t, e, n, i) {
					return this.i.add(String(t), e, !1, n, i);
				}),
				(Be.prototype.P = function (t, e, n, i) {
					return this.i.add(String(t), e, !0, n, i);
				});
			var $e = Pt.JSON.stringify;
			function He() {
				var t = Ye;
				let e = null;
				return t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)), e;
			}
			var Ge = new (class {
				constructor(t, e) {
					(this.i = t), (this.j = e), (this.h = 0), (this.g = null);
				}
				get() {
					let t;
					return 0 < this.h ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null)) : (t = this.i()), t;
				}
			})(
				() => new Ke(),
				(t) => t.reset()
			);
			class Ke {
				constructor() {
					this.next = this.g = this.h = null;
				}
				set(t, e) {
					(this.h = t), (this.g = e), (this.next = null);
				}
				reset() {
					this.next = this.g = this.h = null;
				}
			}
			function We(t) {
				var e = 1;
				t = t.split(':');
				const n = [];
				for (; 0 < e && t.length; ) n.push(t.shift()), e--;
				return t.length && n.push(t.join(':')), n;
			}
			function Qe(t) {
				Pt.setTimeout(() => {
					throw t;
				}, 0);
			}
			let Je,
				Xe = !1,
				Ye = new (class {
					constructor() {
						this.h = this.g = null;
					}
					add(t, e) {
						const n = Ge.get();
						n.set(t, e), this.h ? (this.h.next = n) : (this.g = n), (this.h = n);
					}
				})(),
				Ze = () => {
					const t = Pt.Promise.resolve(void 0);
					Je = () => {
						t.then(tn);
					};
				};
			var tn = () => {
				for (var t; (t = He()); ) {
					try {
						t.h.call(t.g);
					} catch (t) {
						Qe(t);
					}
					var e = Ge;
					e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
				}
				Xe = !1;
			};
			function en(t, e) {
				Be.call(this), (this.h = t || 1), (this.g = e || Pt), (this.j = qt(this.qb, this)), (this.l = Date.now());
			}
			function nn(t) {
				(t.ga = !1), t.T && (t.g.clearTimeout(t.T), (t.T = null));
			}
			function rn(t, e, n) {
				if ('function' == typeof t) n && (t = qt(t, n));
				else {
					if (!t || 'function' != typeof t.handleEvent) throw Error('Invalid listener argument');
					t = qt(t.handleEvent, t);
				}
				return 2147483647 < Number(e) ? -1 : Pt.setTimeout(t, e || 0);
			}
			function sn(t) {
				t.g = rn(() => {
					(t.g = null), t.i && ((t.i = !1), sn(t));
				}, t.j);
				const e = t.h;
				(t.h = null), t.m.apply(null, e);
			}
			Ht(en, Be),
				((Dt = en.prototype).ga = !1),
				(Dt.T = null),
				(Dt.qb = function () {
					if (this.ga) {
						var t = Date.now() - this.l;
						0 < t && t < 0.8 * this.h
							? (this.T = this.g.setTimeout(this.j, this.h - t))
							: (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
							  ze(this, 'tick'),
							  this.ga && (nn(this), this.start()));
					}
				}),
				(Dt.start = function () {
					(this.ga = !0), this.T || ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
				}),
				(Dt.N = function () {
					en.$.N.call(this), nn(this), delete this.g;
				});
			class on extends Gt {
				constructor(t, e) {
					super(), (this.m = t), (this.j = e), (this.h = null), (this.i = !1), (this.g = null);
				}
				l(t) {
					(this.h = arguments), this.g ? (this.i = !0) : sn(this);
				}
				N() {
					super.N(), this.g && (Pt.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
				}
			}
			function an(t) {
				Gt.call(this), (this.h = t), (this.g = {});
			}
			Ht(an, Gt);
			var cn = [];
			function ln(t, e, n, i) {
				Array.isArray(n) || (n && (cn[0] = n.toString()), (n = cn));
				for (var r = 0; r < n.length; r++) {
					var s = Ne(e, n[r], i || t.handleEvent, !1, t.h || t);
					if (!s) break;
					t.g[s.key] = s;
				}
			}
			function hn(t) {
				Ee(
					t.g,
					function (t, e) {
						this.g.hasOwnProperty(e) && Me(t);
					},
					t
				),
					(t.g = {});
			}
			function un() {
				this.g = !0;
			}
			function dn(t, e, n, i) {
				t.info(function () {
					return (
						'XMLHTTP TEXT (' +
						e +
						'): ' +
						(function (t, e) {
							if (!t.g) return e;
							if (!e) return null;
							try {
								var n = JSON.parse(e);
								if (n)
									for (t = 0; t < n.length; t++)
										if (Array.isArray(n[t])) {
											var i = n[t];
											if (!(2 > i.length)) {
												var r = i[1];
												if (Array.isArray(r) && !(1 > r.length)) {
													var s = r[0];
													if ('noop' != s && 'stop' != s && 'close' != s) for (var o = 1; o < r.length; o++) r[o] = '';
												}
											}
										}
								return $e(n);
							} catch (t) {
								return e;
							}
						})(t, n) +
						(i ? ' ' + i : '')
					);
				});
			}
			(an.prototype.N = function () {
				an.$.N.call(this), hn(this);
			}),
				(an.prototype.handleEvent = function () {
					throw Error('EventHandler.handleEvent not implemented');
				}),
				(un.prototype.Ea = function () {
					this.g = !1;
				}),
				(un.prototype.info = function () {});
			var pn = {},
				fn = null;
			function mn() {
				return (fn = fn || new Be());
			}
			function gn(t) {
				Jt.call(this, pn.Ta, t);
			}
			function yn(t) {
				const e = mn();
				ze(e, new gn(e));
			}
			function vn(t, e) {
				Jt.call(this, pn.STAT_EVENT, t), (this.stat = e);
			}
			function wn(t) {
				const e = mn();
				ze(e, new vn(e, t));
			}
			function bn(t, e) {
				Jt.call(this, pn.Ua, t), (this.size = e);
			}
			function _n(t, e) {
				if ('function' != typeof t) throw Error('Fn must not be null and must be a function');
				return Pt.setTimeout(function () {
					t();
				}, e);
			}
			(pn.Ta = 'serverreachability'),
				Ht(gn, Jt),
				(pn.STAT_EVENT = 'statevent'),
				Ht(vn, Jt),
				(pn.Ua = 'timingevent'),
				Ht(bn, Jt);
			var En = { NO_ERROR: 0, rb: 1, Eb: 2, Db: 3, yb: 4, Cb: 5, Fb: 6, Qa: 7, TIMEOUT: 8, Ib: 9 },
				Tn = {
					wb: 'complete',
					Sb: 'success',
					Ra: 'error',
					Qa: 'abort',
					Kb: 'ready',
					Lb: 'readystatechange',
					TIMEOUT: 'timeout',
					Gb: 'incrementaldata',
					Jb: 'progress',
					zb: 'downloadprogress',
					$b: 'uploadprogress',
				};
			function In() {}
			function Sn(t) {
				return t.h || (t.h = t.i());
			}
			function Cn() {}
			In.prototype.h = null;
			var kn,
				An = { OPEN: 'a', vb: 'b', Ra: 'c', Hb: 'd' };
			function xn() {
				Jt.call(this, 'd');
			}
			function Rn() {
				Jt.call(this, 'c');
			}
			function Nn() {}
			function Dn(t, e, n, i) {
				(this.l = t),
					(this.j = e),
					(this.m = n),
					(this.W = i || 1),
					(this.U = new an(this)),
					(this.P = On),
					(t = ce ? 125 : void 0),
					(this.V = new en(t)),
					(this.I = null),
					(this.i = !1),
					(this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
					(this.F = []),
					(this.g = null),
					(this.o = 0),
					(this.s = this.v = null),
					(this.ca = -1),
					(this.J = !1),
					(this.O = 0),
					(this.M = null),
					(this.ba = this.K = this.aa = this.S = !1),
					(this.h = new Ln());
			}
			function Ln() {
				(this.i = null), (this.g = ''), (this.h = !1);
			}
			Ht(xn, Jt),
				Ht(Rn, Jt),
				Ht(Nn, In),
				(Nn.prototype.g = function () {
					return new XMLHttpRequest();
				}),
				(Nn.prototype.i = function () {
					return {};
				}),
				(kn = new Nn());
			var On = 45e3,
				Mn = {},
				Pn = {};
			function Fn(t, e, n) {
				(t.L = 1), (t.A = ni(Xn(e))), (t.u = n), (t.S = !0), Un(t, null);
			}
			function Un(t, e) {
				(t.G = Date.now()), zn(t), (t.B = Xn(t.A));
				var n = t.B,
					i = t.W;
				Array.isArray(i) || (i = [String(i)]),
					mi(n.i, 't', i),
					(t.o = 0),
					(n = t.l.J),
					(t.h = new Ln()),
					(t.g = mr(t.l, n ? e : null, !t.u)),
					0 < t.O && (t.M = new on(qt(t.Pa, t, t.g), t.O)),
					ln(t.U, t.g, 'readystatechange', t.nb),
					(e = t.I ? Te(t.I) : {}),
					t.u
						? (t.v || (t.v = 'POST'),
						  (e['Content-Type'] = 'application/x-www-form-urlencoded'),
						  t.g.ha(t.B, t.v, t.u, e))
						: ((t.v = 'GET'), t.g.ha(t.B, t.v, null, e)),
					yn(),
					(function (t, e, n, i, r, s) {
						t.info(function () {
							if (t.g)
								if (s)
									for (var o = '', a = s.split('&'), c = 0; c < a.length; c++) {
										var l = a[c].split('=');
										if (1 < l.length) {
											var h = l[0];
											l = l[1];
											var u = h.split('_');
											o = 2 <= u.length && 'type' == u[1] ? o + (h + '=') + l + '&' : o + (h + '=redacted&');
										}
									}
								else o = null;
							else o = s;
							return 'XMLHTTP REQ (' + i + ') [attempt ' + r + ']: ' + e + '\n' + n + '\n' + o;
						});
					})(t.j, t.v, t.B, t.m, t.W, t.u);
			}
			function Vn(t) {
				return !!t.g && 'GET' == t.v && 2 != t.L && t.l.Ha;
			}
			function jn(t, e, n) {
				let i,
					r = !0;
				for (; !t.J && t.o < n.length; ) {
					if (((i = Bn(t, n)), i == Pn)) {
						4 == e && ((t.s = 4), wn(14), (r = !1)), dn(t.j, t.m, null, '[Incomplete Response]');
						break;
					}
					if (i == Mn) {
						(t.s = 4), wn(15), dn(t.j, t.m, n, '[Invalid Chunk]'), (r = !1);
						break;
					}
					dn(t.j, t.m, i, null), Kn(t, i);
				}
				Vn(t) && 0 != t.o && ((t.h.g = t.h.g.slice(t.o)), (t.o = 0)),
					4 != e || 0 != n.length || t.h.h || ((t.s = 1), wn(16), (r = !1)),
					(t.i = t.i && r),
					r
						? 0 < n.length &&
						  !t.ba &&
						  ((t.ba = !0),
						  (e = t.l).g == t &&
								e.ca &&
								!e.M &&
								(e.l.info('Great, no buffering proxy detected. Bytes received: ' + n.length),
								ar(e),
								(e.M = !0),
								wn(11)))
						: (dn(t.j, t.m, n, '[Invalid Chunked Response]'), Gn(t), Hn(t));
			}
			function Bn(t, e) {
				var n = t.o,
					i = e.indexOf('\n', n);
				return -1 == i
					? Pn
					: ((n = Number(e.substring(n, i))),
					  isNaN(n) ? Mn : (i += 1) + n > e.length ? Pn : ((e = e.slice(i, i + n)), (t.o = i + n), e));
			}
			function zn(t) {
				(t.Y = Date.now() + t.P), qn(t, t.P);
			}
			function qn(t, e) {
				if (null != t.C) throw Error('WatchDog timer not null');
				t.C = _n(qt(t.lb, t), e);
			}
			function $n(t) {
				t.C && (Pt.clearTimeout(t.C), (t.C = null));
			}
			function Hn(t) {
				0 == t.l.H || t.J || hr(t.l, t);
			}
			function Gn(t) {
				$n(t);
				var e = t.M;
				e && 'function' == typeof e.sa && e.sa(),
					(t.M = null),
					nn(t.V),
					hn(t.U),
					t.g && ((e = t.g), (t.g = null), e.abort(), e.sa());
			}
			function Kn(t, e) {
				try {
					var n = t.l;
					if (0 != n.H && (n.g == t || Ei(n.i, t)))
						if (!t.K && Ei(n.i, t) && 3 == n.H) {
							try {
								var i = n.Ja.g.parse(e);
							} catch (t) {
								i = null;
							}
							if (Array.isArray(i) && 3 == i.length) {
								var r = i;
								if (0 == r[0]) {
									t: if (!n.u) {
										if (n.g) {
											if (!(n.g.G + 3e3 < t.G)) break t;
											lr(n), Zi(n);
										}
										or(n), wn(18);
									}
								} else
									(n.Fa = r[1]),
										0 < n.Fa - n.V && 37500 > r[2] && n.G && 0 == n.A && !n.v && (n.v = _n(qt(n.ib, n), 6e3));
								if (1 >= _i(n.i) && n.oa) {
									try {
										n.oa();
									} catch (t) {}
									n.oa = void 0;
								}
							} else dr(n, 11);
						} else if (((t.K || n.g == t) && lr(n), !Yt(e)))
							for (r = n.Ja.g.parse(e), e = 0; e < r.length; e++) {
								let l = r[e];
								if (((n.V = l[0]), (l = l[1]), 2 == n.H))
									if ('c' == l[0]) {
										(n.K = l[1]), (n.pa = l[2]);
										const e = l[3];
										null != e && ((n.ra = e), n.l.info('VER=' + n.ra));
										const r = l[4];
										null != r && ((n.Ga = r), n.l.info('SVER=' + n.Ga));
										const h = l[5];
										null != h &&
											'number' == typeof h &&
											0 < h &&
											((i = 1.5 * h), (n.L = i), n.l.info('backChannelRequestTimeoutMs_=' + i)),
											(i = n);
										const u = t.g;
										if (u) {
											const t = u.g ? u.g.getResponseHeader('X-Client-Wire-Protocol') : null;
											if (t) {
												var s = i.i;
												s.g ||
													(-1 == t.indexOf('spdy') && -1 == t.indexOf('quic') && -1 == t.indexOf('h2')) ||
													((s.j = s.l), (s.g = new Set()), s.h && (Ti(s, s.h), (s.h = null)));
											}
											if (i.F) {
												const t = u.g ? u.g.getResponseHeader('X-HTTP-Session-Id') : null;
												t && ((i.Da = t), ei(i.I, i.F, t));
											}
										}
										(n.H = 3),
											n.h && n.h.Ba(),
											n.ca && ((n.S = Date.now() - t.G), n.l.info('Handshake RTT: ' + n.S + 'ms'));
										var o = t;
										if ((((i = n).wa = fr(i, i.J ? i.pa : null, i.Y)), o.K)) {
											Ii(i.i, o);
											var a = o,
												c = i.L;
											c && a.setTimeout(c), a.C && ($n(a), zn(a)), (i.g = o);
										} else sr(i);
										0 < n.j.length && er(n);
									} else ('stop' != l[0] && 'close' != l[0]) || dr(n, 7);
								else
									3 == n.H &&
										('stop' == l[0] || 'close' == l[0]
											? 'stop' == l[0]
												? dr(n, 7)
												: Yi(n)
											: 'noop' != l[0] && n.h && n.h.Aa(l),
										(n.A = 0));
							}
					yn();
				} catch (t) {}
			}
			function Wn(t, e) {
				if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0);
				else if (Ft(t) || 'string' == typeof t) Array.prototype.forEach.call(t, e, void 0);
				else
					for (
						var n = (function (t) {
								if (t.ta && 'function' == typeof t.ta) return t.ta();
								if (!t.Z || 'function' != typeof t.Z) {
									if ('undefined' != typeof Map && t instanceof Map) return Array.from(t.keys());
									if (!('undefined' != typeof Set && t instanceof Set)) {
										if (Ft(t) || 'string' == typeof t) {
											var e = [];
											t = t.length;
											for (var n = 0; n < t; n++) e.push(n);
											return e;
										}
										(e = []), (n = 0);
										for (const i in t) e[n++] = i;
										return e;
									}
								}
							})(t),
							i = (function (t) {
								if (t.Z && 'function' == typeof t.Z) return t.Z();
								if (('undefined' != typeof Map && t instanceof Map) || ('undefined' != typeof Set && t instanceof Set))
									return Array.from(t.values());
								if ('string' == typeof t) return t.split('');
								if (Ft(t)) {
									for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
									return e;
								}
								for (i in ((e = []), (n = 0), t)) e[n++] = t[i];
								return e;
							})(t),
							r = i.length,
							s = 0;
						s < r;
						s++
					)
						e.call(void 0, i[s], n && n[s], t);
			}
			((Dt = Dn.prototype).setTimeout = function (t) {
				this.P = t;
			}),
				(Dt.nb = function (t) {
					t = t.target;
					const e = this.M;
					e && 3 == Gi(t) ? e.l() : this.Pa(t);
				}),
				(Dt.Pa = function (t) {
					try {
						if (t == this.g)
							t: {
								const h = Gi(this.g);
								var e = this.g.Ia();
								if ((this.g.da(), !(3 > h) && (3 != h || ce || (this.g && (this.h.h || this.g.ja() || Ki(this.g)))))) {
									this.J || 4 != h || 7 == e || yn(), $n(this);
									var n = this.g.da();
									this.ca = n;
									e: if (Vn(this)) {
										var i = Ki(this.g);
										t = '';
										var r = i.length,
											s = 4 == Gi(this.g);
										if (!this.h.i) {
											if ('undefined' == typeof TextDecoder) {
												Gn(this), Hn(this);
												var o = '';
												break e;
											}
											this.h.i = new Pt.TextDecoder();
										}
										for (e = 0; e < r; e++) (this.h.h = !0), (t += this.h.i.decode(i[e], { stream: s && e == r - 1 }));
										(i.length = 0), (this.h.g += t), (this.o = 0), (o = this.h.g);
									} else o = this.g.ja();
									if (
										((this.i = 200 == n),
										(function (t, e, n, i, r, s, o) {
											t.info(function () {
												return 'XMLHTTP RESP (' + i + ') [ attempt ' + r + ']: ' + e + '\n' + n + '\n' + s + ' ' + o;
											});
										})(this.j, this.v, this.B, this.m, this.W, h, n),
										this.i)
									) {
										if (this.aa && !this.K) {
											e: {
												if (this.g) {
													var a,
														c = this.g;
													if ((a = c.g ? c.g.getResponseHeader('X-HTTP-Initial-Response') : null) && !Yt(a)) {
														var l = a;
														break e;
													}
												}
												l = null;
											}
											if (!(n = l)) {
												(this.i = !1), (this.s = 3), wn(12), Gn(this), Hn(this);
												break t;
											}
											dn(this.j, this.m, n, 'Initial handshake response via X-HTTP-Initial-Response'),
												(this.K = !0),
												Kn(this, n);
										}
										this.S
											? (jn(this, h, o),
											  ce && this.i && 3 == h && (ln(this.U, this.V, 'tick', this.mb), this.V.start()))
											: (dn(this.j, this.m, o, null), Kn(this, o)),
											4 == h && Gn(this),
											this.i && !this.J && (4 == h ? hr(this.l, this) : ((this.i = !1), zn(this)));
									} else
										(function (t) {
											const e = {};
											t = ((t.g && 2 <= Gi(t) && t.g.getAllResponseHeaders()) || '').split('\r\n');
											for (let i = 0; i < t.length; i++) {
												if (Yt(t[i])) continue;
												var n = We(t[i]);
												const r = n[0];
												if ('string' != typeof (n = n[1])) continue;
												n = n.trim();
												const s = e[r] || [];
												(e[r] = s), s.push(n);
											}
											!(function (t, e) {
												for (const n in t) e.call(void 0, t[n], n, t);
											})(e, function (t) {
												return t.join(', ');
											});
										})(this.g),
											400 == n && 0 < o.indexOf('Unknown SID') ? ((this.s = 3), wn(12)) : ((this.s = 0), wn(13)),
											Gn(this),
											Hn(this);
								}
							}
					} catch (t) {}
				}),
				(Dt.mb = function () {
					if (this.g) {
						var t = Gi(this.g),
							e = this.g.ja();
						this.o < e.length && ($n(this), jn(this, t, e), this.i && 4 != t && zn(this));
					}
				}),
				(Dt.cancel = function () {
					(this.J = !0), Gn(this);
				}),
				(Dt.lb = function () {
					this.C = null;
					const t = Date.now();
					0 <= t - this.Y
						? ((function (t, e) {
								t.info(function () {
									return 'TIMEOUT: ' + e;
								});
						  })(this.j, this.B),
						  2 != this.L && (yn(), wn(17)),
						  Gn(this),
						  (this.s = 2),
						  Hn(this))
						: qn(this, this.Y - t);
				});
			var Qn = RegExp(
				'^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
			);
			function Jn(t) {
				if (
					((this.g = this.s = this.j = ''), (this.m = null), (this.o = this.l = ''), (this.h = !1), t instanceof Jn)
				) {
					(this.h = t.h), Yn(this, t.j), (this.s = t.s), (this.g = t.g), Zn(this, t.m), (this.l = t.l);
					var e = t.i,
						n = new ui();
					(n.i = e.i), e.g && ((n.g = new Map(e.g)), (n.h = e.h)), ti(this, n), (this.o = t.o);
				} else
					t && (e = String(t).match(Qn))
						? ((this.h = !1),
						  Yn(this, e[1] || '', !0),
						  (this.s = ii(e[2] || '')),
						  (this.g = ii(e[3] || '', !0)),
						  Zn(this, e[4]),
						  (this.l = ii(e[5] || '', !0)),
						  ti(this, e[6] || '', !0),
						  (this.o = ii(e[7] || '')))
						: ((this.h = !1), (this.i = new ui(null, this.h)));
			}
			function Xn(t) {
				return new Jn(t);
			}
			function Yn(t, e, n) {
				(t.j = n ? ii(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ''));
			}
			function Zn(t, e) {
				if (e) {
					if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
					t.m = e;
				} else t.m = null;
			}
			function ti(t, e, n) {
				e instanceof ui
					? ((t.i = e),
					  (function (t, e) {
							e &&
								!t.j &&
								(di(t),
								(t.i = null),
								t.g.forEach(function (t, e) {
									var n = e.toLowerCase();
									e != n && (pi(this, e), mi(this, n, t));
								}, t)),
								(t.j = e);
					  })(t.i, t.h))
					: (n || (e = ri(e, li)), (t.i = new ui(e, t.h)));
			}
			function ei(t, e, n) {
				t.i.set(e, n);
			}
			function ni(t) {
				return (
					ei(
						t,
						'zx',
						Math.floor(2147483648 * Math.random()).toString(36) +
							Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
					),
					t
				);
			}
			function ii(t, e) {
				return t ? (e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
			}
			function ri(t, e, n) {
				return 'string' == typeof t
					? ((t = encodeURI(t).replace(e, si)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
					: null;
			}
			function si(t) {
				return '%' + (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) + (15 & t).toString(16);
			}
			Jn.prototype.toString = function () {
				var t = [],
					e = this.j;
				e && t.push(ri(e, oi, !0), ':');
				var n = this.g;
				return (
					(n || 'file' == e) &&
						(t.push('//'),
						(e = this.s) && t.push(ri(e, oi, !0), '@'),
						t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
						null != (n = this.m) && t.push(':', String(n))),
					(n = this.l) &&
						(this.g && '/' != n.charAt(0) && t.push('/'), t.push(ri(n, '/' == n.charAt(0) ? ci : ai, !0))),
					(n = this.i.toString()) && t.push('?', n),
					(n = this.o) && t.push('#', ri(n, hi)),
					t.join('')
				);
			};
			var oi = /[#\/\?@]/g,
				ai = /[#\?:]/g,
				ci = /[#\?]/g,
				li = /[#\?@]/g,
				hi = /#/g;
			function ui(t, e) {
				(this.h = this.g = null), (this.i = t || null), (this.j = !!e);
			}
			function di(t) {
				t.g ||
					((t.g = new Map()),
					(t.h = 0),
					t.i &&
						(function (t, e) {
							if (t) {
								t = t.split('&');
								for (var n = 0; n < t.length; n++) {
									var i = t[n].indexOf('='),
										r = null;
									if (0 <= i) {
										var s = t[n].substring(0, i);
										r = t[n].substring(i + 1);
									} else s = t[n];
									e(s, r ? decodeURIComponent(r.replace(/\+/g, ' ')) : '');
								}
							}
						})(t.i, function (e, n) {
							t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
						}));
			}
			function pi(t, e) {
				di(t), (e = gi(t, e)), t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
			}
			function fi(t, e) {
				return di(t), (e = gi(t, e)), t.g.has(e);
			}
			function mi(t, e, n) {
				pi(t, e), 0 < n.length && ((t.i = null), t.g.set(gi(t, e), Wt(n)), (t.h += n.length));
			}
			function gi(t, e) {
				return (e = String(e)), t.j && (e = e.toLowerCase()), e;
			}
			((Dt = ui.prototype).add = function (t, e) {
				di(this), (this.i = null), (t = gi(this, t));
				var n = this.g.get(t);
				return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
			}),
				(Dt.forEach = function (t, e) {
					di(this),
						this.g.forEach(function (n, i) {
							n.forEach(function (n) {
								t.call(e, n, i, this);
							}, this);
						}, this);
				}),
				(Dt.ta = function () {
					di(this);
					const t = Array.from(this.g.values()),
						e = Array.from(this.g.keys()),
						n = [];
					for (let i = 0; i < e.length; i++) {
						const r = t[i];
						for (let t = 0; t < r.length; t++) n.push(e[i]);
					}
					return n;
				}),
				(Dt.Z = function (t) {
					di(this);
					let e = [];
					if ('string' == typeof t) fi(this, t) && (e = e.concat(this.g.get(gi(this, t))));
					else {
						t = Array.from(this.g.values());
						for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
					}
					return e;
				}),
				(Dt.set = function (t, e) {
					return (
						di(this),
						(this.i = null),
						fi(this, (t = gi(this, t))) && (this.h -= this.g.get(t).length),
						this.g.set(t, [e]),
						(this.h += 1),
						this
					);
				}),
				(Dt.get = function (t, e) {
					return t && 0 < (t = this.Z(t)).length ? String(t[0]) : e;
				}),
				(Dt.toString = function () {
					if (this.i) return this.i;
					if (!this.g) return '';
					const t = [],
						e = Array.from(this.g.keys());
					for (var n = 0; n < e.length; n++) {
						var i = e[n];
						const s = encodeURIComponent(String(i)),
							o = this.Z(i);
						for (i = 0; i < o.length; i++) {
							var r = s;
							'' !== o[i] && (r += '=' + encodeURIComponent(String(o[i]))), t.push(r);
						}
					}
					return (this.i = t.join('&'));
				});
			var yi = class {
				constructor(t, e) {
					(this.g = t), (this.map = e);
				}
			};
			function vi(t) {
				(this.l = t || wi),
					(t = Pt.PerformanceNavigationTiming
						? 0 < (t = Pt.performance.getEntriesByType('navigation')).length &&
						  ('hq' == t[0].nextHopProtocol || 'h2' == t[0].nextHopProtocol)
						: !!(Pt.g && Pt.g.Ka && Pt.g.Ka() && Pt.g.Ka().dc)),
					(this.j = t ? this.l : 1),
					(this.g = null),
					1 < this.j && (this.g = new Set()),
					(this.h = null),
					(this.i = []);
			}
			var wi = 10;
			function bi(t) {
				return !!t.h || (!!t.g && t.g.size >= t.j);
			}
			function _i(t) {
				return t.h ? 1 : t.g ? t.g.size : 0;
			}
			function Ei(t, e) {
				return t.h ? t.h == e : !!t.g && t.g.has(e);
			}
			function Ti(t, e) {
				t.g ? t.g.add(e) : (t.h = e);
			}
			function Ii(t, e) {
				t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
			}
			function Si(t) {
				if (null != t.h) return t.i.concat(t.h.F);
				if (null != t.g && 0 !== t.g.size) {
					let e = t.i;
					for (const n of t.g.values()) e = e.concat(n.F);
					return e;
				}
				return Wt(t.i);
			}
			vi.prototype.cancel = function () {
				if (((this.i = Si(this)), this.h)) this.h.cancel(), (this.h = null);
				else if (this.g && 0 !== this.g.size) {
					for (const t of this.g.values()) t.cancel();
					this.g.clear();
				}
			};
			var Ci = class {
				stringify(t) {
					return Pt.JSON.stringify(t, void 0);
				}
				parse(t) {
					return Pt.JSON.parse(t, void 0);
				}
			};
			function ki() {
				this.g = new Ci();
			}
			function Ai(t, e, n) {
				const i = n || '';
				try {
					Wn(t, function (t, n) {
						let r = t;
						Ut(t) && (r = $e(t)), e.push(i + n + '=' + encodeURIComponent(r));
					});
				} catch (t) {
					throw (e.push(i + 'type=' + encodeURIComponent('_badmap')), t);
				}
			}
			function xi(t, e, n, i, r) {
				try {
					(e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), r(i);
				} catch (t) {}
			}
			function Ri(t) {
				(this.l = t.ec || null), (this.j = t.ob || !1);
			}
			function Ni(t, e) {
				Be.call(this),
					(this.F = t),
					(this.u = e),
					(this.m = void 0),
					(this.readyState = Di),
					(this.status = 0),
					(this.responseType = this.responseText = this.response = this.statusText = ''),
					(this.onreadystatechange = null),
					(this.v = new Headers()),
					(this.h = null),
					(this.C = 'GET'),
					(this.B = ''),
					(this.g = !1),
					(this.A = this.j = this.l = null);
			}
			Ht(Ri, In),
				(Ri.prototype.g = function () {
					return new Ni(this.l, this.j);
				}),
				(Ri.prototype.i = (function (t) {
					return function () {
						return t;
					};
				})({})),
				Ht(Ni, Be);
			var Di = 0;
			function Li(t) {
				t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t));
			}
			function Oi(t) {
				(t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Mi(t);
			}
			function Mi(t) {
				t.onreadystatechange && t.onreadystatechange.call(t);
			}
			((Dt = Ni.prototype).open = function (t, e) {
				if (this.readyState != Di) throw (this.abort(), Error('Error reopening a connection'));
				(this.C = t), (this.B = e), (this.readyState = 1), Mi(this);
			}),
				(Dt.send = function (t) {
					if (1 != this.readyState) throw (this.abort(), Error('need to call open() first. '));
					this.g = !0;
					const e = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
					t && (e.body = t), (this.F || Pt).fetch(new Request(this.B, e)).then(this.$a.bind(this), this.ka.bind(this));
				}),
				(Dt.abort = function () {
					(this.response = this.responseText = ''),
						(this.v = new Headers()),
						(this.status = 0),
						this.j && this.j.cancel('Request was aborted.').catch(() => {}),
						1 <= this.readyState && this.g && 4 != this.readyState && ((this.g = !1), Oi(this)),
						(this.readyState = Di);
				}),
				(Dt.$a = function (t) {
					if (
						this.g &&
						((this.l = t),
						this.h ||
							((this.status = this.l.status),
							(this.statusText = this.l.statusText),
							(this.h = t.headers),
							(this.readyState = 2),
							Mi(this)),
						this.g && ((this.readyState = 3), Mi(this), this.g))
					)
						if ('arraybuffer' === this.responseType) t.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
						else if (void 0 !== Pt.ReadableStream && 'body' in t) {
							if (((this.j = t.body.getReader()), this.u)) {
								if (this.responseType)
									throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
								this.response = [];
							} else (this.response = this.responseText = ''), (this.A = new TextDecoder());
							Li(this);
						} else t.text().then(this.Za.bind(this), this.ka.bind(this));
				}),
				(Dt.Xa = function (t) {
					if (this.g) {
						if (this.u && t.value) this.response.push(t.value);
						else if (!this.u) {
							var e = t.value ? t.value : new Uint8Array(0);
							(e = this.A.decode(e, { stream: !t.done })) && (this.response = this.responseText += e);
						}
						t.done ? Oi(this) : Mi(this), 3 == this.readyState && Li(this);
					}
				}),
				(Dt.Za = function (t) {
					this.g && ((this.response = this.responseText = t), Oi(this));
				}),
				(Dt.Ya = function (t) {
					this.g && ((this.response = t), Oi(this));
				}),
				(Dt.ka = function () {
					this.g && Oi(this);
				}),
				(Dt.setRequestHeader = function (t, e) {
					this.v.append(t, e);
				}),
				(Dt.getResponseHeader = function (t) {
					return (this.h && this.h.get(t.toLowerCase())) || '';
				}),
				(Dt.getAllResponseHeaders = function () {
					if (!this.h) return '';
					const t = [],
						e = this.h.entries();
					for (var n = e.next(); !n.done; ) (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next());
					return t.join('\r\n');
				}),
				Object.defineProperty(Ni.prototype, 'withCredentials', {
					get: function () {
						return 'include' === this.m;
					},
					set: function (t) {
						this.m = t ? 'include' : 'same-origin';
					},
				});
			var Pi = Pt.JSON.parse;
			function Fi(t) {
				Be.call(this),
					(this.headers = new Map()),
					(this.u = t || null),
					(this.h = !1),
					(this.C = this.g = null),
					(this.I = ''),
					(this.m = 0),
					(this.j = ''),
					(this.l = this.G = this.v = this.F = !1),
					(this.B = 0),
					(this.A = null),
					(this.K = Ui),
					(this.L = this.M = !1);
			}
			Ht(Fi, Be);
			var Ui = '',
				Vi = /^https?$/i,
				ji = ['POST', 'PUT'];
			function Bi(t, e) {
				(t.h = !1), t.g && ((t.l = !0), t.g.abort(), (t.l = !1)), (t.j = e), (t.m = 5), zi(t), $i(t);
			}
			function zi(t) {
				t.F || ((t.F = !0), ze(t, 'complete'), ze(t, 'error'));
			}
			function qi(t) {
				if (t.h && void 0 !== Mt && (!t.C[1] || 4 != Gi(t) || 2 != t.da()))
					if (t.v && 4 == Gi(t)) rn(t.La, 0, t);
					else if ((ze(t, 'readystatechange'), 4 == Gi(t))) {
						t.h = !1;
						try {
							const o = t.da();
							t: switch (o) {
								case 200:
								case 201:
								case 202:
								case 204:
								case 206:
								case 304:
								case 1223:
									var e = !0;
									break t;
								default:
									e = !1;
							}
							var n;
							if (!(n = e)) {
								var i;
								if ((i = 0 === o)) {
									var r = String(t.I).match(Qn)[1] || null;
									!r && Pt.self && Pt.self.location && (r = Pt.self.location.protocol.slice(0, -1)),
										(i = !Vi.test(r ? r.toLowerCase() : ''));
								}
								n = i;
							}
							if (n) ze(t, 'complete'), ze(t, 'success');
							else {
								t.m = 6;
								try {
									var s = 2 < Gi(t) ? t.g.statusText : '';
								} catch (t) {
									s = '';
								}
								(t.j = s + ' [' + t.da() + ']'), zi(t);
							}
						} finally {
							$i(t);
						}
					}
			}
			function $i(t, e) {
				if (t.g) {
					Hi(t);
					const n = t.g,
						i = t.C[0] ? () => {} : null;
					(t.g = null), (t.C = null), e || ze(t, 'ready');
					try {
						n.onreadystatechange = i;
					} catch (t) {}
				}
			}
			function Hi(t) {
				t.g && t.L && (t.g.ontimeout = null), t.A && (Pt.clearTimeout(t.A), (t.A = null));
			}
			function Gi(t) {
				return t.g ? t.g.readyState : 0;
			}
			function Ki(t) {
				try {
					if (!t.g) return null;
					if ('response' in t.g) return t.g.response;
					switch (t.K) {
						case Ui:
						case 'text':
							return t.g.responseText;
						case 'arraybuffer':
							if ('mozResponseArrayBuffer' in t.g) return t.g.mozResponseArrayBuffer;
					}
					return null;
				} catch (t) {
					return null;
				}
			}
			function Wi(t) {
				let e = '';
				return (
					Ee(t, function (t, n) {
						(e += n), (e += ':'), (e += t), (e += '\r\n');
					}),
					e
				);
			}
			function Qi(t, e, n) {
				t: {
					for (i in n) {
						var i = !1;
						break t;
					}
					i = !0;
				}
				i || ((n = Wi(n)), 'string' == typeof t ? null != n && encodeURIComponent(String(n)) : ei(t, e, n));
			}
			function Ji(t, e, n) {
				return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
			}
			function Xi(t) {
				(this.Ga = 0),
					(this.j = []),
					(this.l = new un()),
					(this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null),
					(this.fb = this.W = 0),
					(this.cb = Ji('failFast', !1, t)),
					(this.G = this.v = this.u = this.m = this.h = null),
					(this.aa = !0),
					(this.Fa = this.V = -1),
					(this.ba = this.A = this.C = 0),
					(this.ab = Ji('baseRetryDelayMs', 5e3, t)),
					(this.hb = Ji('retryDelaySeedMs', 1e4, t)),
					(this.eb = Ji('forwardChannelMaxRetries', 2, t)),
					(this.xa = Ji('forwardChannelRequestTimeoutMs', 2e4, t)),
					(this.va = (t && t.xmlHttpFactory) || void 0),
					(this.Ha = (t && t.useFetchStreams) || !1),
					(this.L = void 0),
					(this.J = (t && t.supportsCrossDomainXhr) || !1),
					(this.K = ''),
					(this.i = new vi(t && t.concurrentRequestLimit)),
					(this.Ja = new ki()),
					(this.P = (t && t.fastHandshake) || !1),
					(this.O = (t && t.encodeInitMessageHeaders) || !1),
					this.P && this.O && (this.O = !1),
					(this.bb = (t && t.bc) || !1),
					t && t.Ea && this.l.Ea(),
					t && t.forceLongPolling && (this.aa = !1),
					(this.ca = (!this.P && this.aa && t && t.detectBufferingProxy) || !1),
					(this.qa = void 0),
					t && t.longPollingTimeout && 0 < t.longPollingTimeout && (this.qa = t.longPollingTimeout),
					(this.oa = void 0),
					(this.S = 0),
					(this.M = !1),
					(this.ma = this.B = null);
			}
			function Yi(t) {
				if ((tr(t), 3 == t.H)) {
					var e = t.W++,
						n = Xn(t.I);
					if (
						(ei(n, 'SID', t.K),
						ei(n, 'RID', e),
						ei(n, 'TYPE', 'terminate'),
						ir(t, n),
						((e = new Dn(t, t.l, e)).L = 2),
						(e.A = ni(Xn(n))),
						(n = !1),
						Pt.navigator && Pt.navigator.sendBeacon)
					)
						try {
							n = Pt.navigator.sendBeacon(e.A.toString(), '');
						} catch (t) {}
					!n && Pt.Image && ((new Image().src = e.A), (n = !0)),
						n || ((e.g = mr(e.l, null)), e.g.ha(e.A)),
						(e.G = Date.now()),
						zn(e);
				}
				pr(t);
			}
			function Zi(t) {
				t.g && (ar(t), t.g.cancel(), (t.g = null));
			}
			function tr(t) {
				Zi(t),
					t.u && (Pt.clearTimeout(t.u), (t.u = null)),
					lr(t),
					t.i.cancel(),
					t.m && ('number' == typeof t.m && Pt.clearTimeout(t.m), (t.m = null));
			}
			function er(t) {
				if (!bi(t.i) && !t.m) {
					t.m = !0;
					var e = t.Na;
					Je || Ze(), Xe || (Je(), (Xe = !0)), Ye.add(e, t), (t.C = 0);
				}
			}
			function nr(t, e) {
				var n;
				n = e ? e.m : t.W++;
				const i = Xn(t.I);
				ei(i, 'SID', t.K),
					ei(i, 'RID', n),
					ei(i, 'AID', t.V),
					ir(t, i),
					t.o && t.s && Qi(i, t.o, t.s),
					(n = new Dn(t, t.l, n, t.C + 1)),
					null === t.o && (n.I = t.s),
					e && (t.j = e.F.concat(t.j)),
					(e = rr(t, n, 1e3)),
					n.setTimeout(Math.round(0.5 * t.xa) + Math.round(0.5 * t.xa * Math.random())),
					Ti(t.i, n),
					Fn(n, i, e);
			}
			function ir(t, e) {
				t.na &&
					Ee(t.na, function (t, n) {
						ei(e, n, t);
					}),
					t.h &&
						Wn({}, function (t, n) {
							ei(e, n, t);
						});
			}
			function rr(t, e, n) {
				n = Math.min(t.j.length, n);
				var i = t.h ? qt(t.h.Va, t.h, t) : null;
				t: {
					var r = t.j;
					let e = -1;
					for (;;) {
						const t = ['count=' + n];
						-1 == e ? (0 < n ? ((e = r[0].g), t.push('ofs=' + e)) : (e = 0)) : t.push('ofs=' + e);
						let s = !0;
						for (let o = 0; o < n; o++) {
							let n = r[o].g;
							const a = r[o].map;
							if (((n -= e), 0 > n)) (e = Math.max(0, r[o].g - 100)), (s = !1);
							else
								try {
									Ai(a, t, 'req' + n + '_');
								} catch (t) {
									i && i(a);
								}
						}
						if (s) {
							i = t.join('&');
							break t;
						}
					}
				}
				return (t = t.j.splice(0, n)), (e.F = t), i;
			}
			function sr(t) {
				if (!t.g && !t.u) {
					t.ba = 1;
					var e = t.Ma;
					Je || Ze(), Xe || (Je(), (Xe = !0)), Ye.add(e, t), (t.A = 0);
				}
			}
			function or(t) {
				return !(t.g || t.u || 3 <= t.A || (t.ba++, (t.u = _n(qt(t.Ma, t), ur(t, t.A))), t.A++, 0));
			}
			function ar(t) {
				null != t.B && (Pt.clearTimeout(t.B), (t.B = null));
			}
			function cr(t) {
				(t.g = new Dn(t, t.l, 'rpc', t.ba)), null === t.o && (t.g.I = t.s), (t.g.O = 0);
				var e = Xn(t.wa);
				ei(e, 'RID', 'rpc'),
					ei(e, 'SID', t.K),
					ei(e, 'AID', t.V),
					ei(e, 'CI', t.G ? '0' : '1'),
					!t.G && t.qa && ei(e, 'TO', t.qa),
					ei(e, 'TYPE', 'xmlhttp'),
					ir(t, e),
					t.o && t.s && Qi(e, t.o, t.s),
					t.L && t.g.setTimeout(t.L);
				var n = t.g;
				(t = t.pa), (n.L = 1), (n.A = ni(Xn(e))), (n.u = null), (n.S = !0), Un(n, t);
			}
			function lr(t) {
				null != t.v && (Pt.clearTimeout(t.v), (t.v = null));
			}
			function hr(t, e) {
				var n = null;
				if (t.g == e) {
					lr(t), ar(t), (t.g = null);
					var i = 2;
				} else {
					if (!Ei(t.i, e)) return;
					(n = e.F), Ii(t.i, e), (i = 1);
				}
				if (0 != t.H)
					if (e.i)
						if (1 == i) {
							(n = e.u ? e.u.length : 0), (e = Date.now() - e.G);
							var r = t.C;
							ze((i = mn()), new bn(i, n)), er(t);
						} else sr(t);
					else if (
						3 == (r = e.s) ||
						(0 == r && 0 < e.ca) ||
						!(
							(1 == i &&
								(function (t, e) {
									return !(
										_i(t.i) >= t.i.j - (t.m ? 1 : 0) ||
										(t.m
											? ((t.j = e.F.concat(t.j)), 0)
											: 1 == t.H ||
											  2 == t.H ||
											  t.C >= (t.cb ? 0 : t.eb) ||
											  ((t.m = _n(qt(t.Na, t, e), ur(t, t.C))), t.C++, 0))
									);
								})(t, e)) ||
							(2 == i && or(t))
						)
					)
						switch ((n && 0 < n.length && ((e = t.i), (e.i = e.i.concat(n))), r)) {
							case 1:
								dr(t, 5);
								break;
							case 4:
								dr(t, 10);
								break;
							case 3:
								dr(t, 6);
								break;
							default:
								dr(t, 2);
						}
			}
			function ur(t, e) {
				let n = t.ab + Math.floor(Math.random() * t.hb);
				return t.isActive() || (n *= 2), n * e;
			}
			function dr(t, e) {
				if ((t.l.info('Error code ' + e), 2 == e)) {
					var n = null;
					t.h && (n = null);
					var i = qt(t.pb, t);
					n ||
						((n = new Jn('//www.google.com/images/cleardot.gif')),
						(Pt.location && 'http' == Pt.location.protocol) || Yn(n, 'https'),
						ni(n)),
						(function (t, e) {
							const n = new un();
							if (Pt.Image) {
								const i = new Image();
								(i.onload = $t(xi, n, i, 'TestLoadImage: loaded', !0, e)),
									(i.onerror = $t(xi, n, i, 'TestLoadImage: error', !1, e)),
									(i.onabort = $t(xi, n, i, 'TestLoadImage: abort', !1, e)),
									(i.ontimeout = $t(xi, n, i, 'TestLoadImage: timeout', !1, e)),
									Pt.setTimeout(function () {
										i.ontimeout && i.ontimeout();
									}, 1e4),
									(i.src = t);
							} else e(!1);
						})(n.toString(), i);
				} else wn(2);
				(t.H = 0), t.h && t.h.za(e), pr(t), tr(t);
			}
			function pr(t) {
				if (((t.H = 0), (t.ma = []), t.h)) {
					const e = Si(t.i);
					(0 == e.length && 0 == t.j.length) ||
						(Qt(t.ma, e), Qt(t.ma, t.j), (t.i.i.length = 0), Wt(t.j), (t.j.length = 0)),
						t.h.ya();
				}
			}
			function fr(t, e, n) {
				var i = n instanceof Jn ? Xn(n) : new Jn(n);
				if ('' != i.g) e && (i.g = e + '.' + i.g), Zn(i, i.m);
				else {
					var r = Pt.location;
					(i = r.protocol), (e = e ? e + '.' + r.hostname : r.hostname), (r = +r.port);
					var s = new Jn(null);
					i && Yn(s, i), e && (s.g = e), r && Zn(s, r), n && (s.l = n), (i = s);
				}
				return (n = t.F), (e = t.Da), n && e && ei(i, n, e), ei(i, 'VER', t.ra), ir(t, i), i;
			}
			function mr(t, e, n) {
				if (e && !t.J) throw Error("Can't create secondary domain capable XhrIo object.");
				return (e = t.Ha && !t.va ? new Fi(new Ri({ ob: n })) : new Fi(t.va)).Oa(t.J), e;
			}
			function gr() {}
			function yr() {
				if (oe && !(10 <= Number(me))) throw Error('Environmental error: no available transport.');
			}
			function vr(t, e) {
				Be.call(this),
					(this.g = new Xi(e)),
					(this.l = t),
					(this.h = (e && e.messageUrlParams) || null),
					(t = (e && e.messageHeaders) || null),
					e &&
						e.clientProtocolHeaderRequired &&
						(t ? (t['X-Client-Protocol'] = 'webchannel') : (t = { 'X-Client-Protocol': 'webchannel' })),
					(this.g.s = t),
					(t = (e && e.initMessageHeaders) || null),
					e &&
						e.messageContentType &&
						(t
							? (t['X-WebChannel-Content-Type'] = e.messageContentType)
							: (t = { 'X-WebChannel-Content-Type': e.messageContentType })),
					e && e.Ca && (t ? (t['X-WebChannel-Client-Profile'] = e.Ca) : (t = { 'X-WebChannel-Client-Profile': e.Ca })),
					(this.g.U = t),
					(t = e && e.cc) && !Yt(t) && (this.g.o = t),
					(this.A = (e && e.supportsCrossDomainXhr) || !1),
					(this.v = (e && e.sendRawJson) || !1),
					(e = e && e.httpSessionIdParam) &&
						!Yt(e) &&
						((this.g.F = e), null !== (t = this.h) && e in t && e in (t = this.h) && delete t[e]),
					(this.j = new _r(this));
			}
			function wr(t) {
				xn.call(this),
					t.__headers__ &&
						((this.headers = t.__headers__),
						(this.statusCode = t.__status__),
						delete t.__headers__,
						delete t.__status__);
				var e = t.__sm__;
				if (e) {
					t: {
						for (const n in e) {
							t = n;
							break t;
						}
						t = void 0;
					}
					(this.i = t) && ((t = this.i), (e = null !== e && t in e ? e[t] : void 0)), (this.data = e);
				} else this.data = t;
			}
			function br() {
				Rn.call(this), (this.status = 1);
			}
			function _r(t) {
				this.g = t;
			}
			function Er() {
				(this.blockSize = -1),
					(this.blockSize = 64),
					(this.g = Array(4)),
					(this.m = Array(this.blockSize)),
					(this.i = this.h = 0),
					this.reset();
			}
			function Tr(t, e, n) {
				n || (n = 0);
				var i = Array(16);
				if ('string' == typeof e)
					for (var r = 0; 16 > r; ++r)
						i[r] = e.charCodeAt(n++) | (e.charCodeAt(n++) << 8) | (e.charCodeAt(n++) << 16) | (e.charCodeAt(n++) << 24);
				else for (r = 0; 16 > r; ++r) i[r] = e[n++] | (e[n++] << 8) | (e[n++] << 16) | (e[n++] << 24);
				(e = t.g[0]), (n = t.g[1]), (r = t.g[2]);
				var s = t.g[3],
					o = (e + (s ^ (n & (r ^ s))) + i[0] + 3614090360) & 4294967295;
				(o =
					((n =
						(r =
							(s =
								(e =
									(n =
										(r =
											(s =
												(e =
													(n =
														(r =
															(s =
																(e =
																	(n =
																		(r =
																			(s =
																				(e =
																					(n =
																						(r =
																							(s =
																								(e =
																									(n =
																										(r =
																											(s =
																												(e =
																													(n =
																														(r =
																															(s =
																																(e =
																																	(n =
																																		(r =
																																			(s =
																																				(e =
																																					(n =
																																						(r =
																																							(s =
																																								(e =
																																									(n =
																																										(r =
																																											(s =
																																												(e =
																																													(n =
																																														(r =
																																															(s =
																																																(e =
																																																	(n =
																																																		(r =
																																																			(s =
																																																				(e =
																																																					(n =
																																																						(r =
																																																							(s =
																																																								(e =
																																																									(n =
																																																										(r =
																																																											(s =
																																																												(e =
																																																													(n =
																																																														(r =
																																																															(s =
																																																																(e =
																																																																	n +
																																																																	(((o <<
																																																																		7) &
																																																																		4294967295) |
																																																																		(o >>>
																																																																			25))) +
																																																																((((o =
																																																																	(s +
																																																																		(r ^
																																																																			(e &
																																																																				(n ^
																																																																					r))) +
																																																																		i[1] +
																																																																		3905402710) &
																																																																	4294967295) <<
																																																																	12) &
																																																																	4294967295) |
																																																																	(o >>>
																																																																		20))) +
																																																															((((o =
																																																																(r +
																																																																	(n ^
																																																																		(s &
																																																																			(e ^
																																																																				n))) +
																																																																	i[2] +
																																																																	606105819) &
																																																																4294967295) <<
																																																																17) &
																																																																4294967295) |
																																																																(o >>>
																																																																	15))) +
																																																														((((o =
																																																															(n +
																																																																(e ^
																																																																	(r &
																																																																		(s ^
																																																																			e))) +
																																																																i[3] +
																																																																3250441966) &
																																																															4294967295) <<
																																																															22) &
																																																															4294967295) |
																																																															(o >>>
																																																																10))) +
																																																													((((o =
																																																														(e +
																																																															(s ^
																																																																(n &
																																																																	(r ^
																																																																		s))) +
																																																															i[4] +
																																																															4118548399) &
																																																														4294967295) <<
																																																														7) &
																																																														4294967295) |
																																																														(o >>>
																																																															25))) +
																																																												((((o =
																																																													(s +
																																																														(r ^
																																																															(e &
																																																																(n ^
																																																																	r))) +
																																																														i[5] +
																																																														1200080426) &
																																																													4294967295) <<
																																																													12) &
																																																													4294967295) |
																																																													(o >>>
																																																														20))) +
																																																											((((o =
																																																												(r +
																																																													(n ^
																																																														(s &
																																																															(e ^
																																																																n))) +
																																																													i[6] +
																																																													2821735955) &
																																																												4294967295) <<
																																																												17) &
																																																												4294967295) |
																																																												(o >>>
																																																													15))) +
																																																										((((o =
																																																											(n +
																																																												(e ^
																																																													(r &
																																																														(s ^
																																																															e))) +
																																																												i[7] +
																																																												4249261313) &
																																																											4294967295) <<
																																																											22) &
																																																											4294967295) |
																																																											(o >>>
																																																												10))) +
																																																									((((o =
																																																										(e +
																																																											(s ^
																																																												(n &
																																																													(r ^
																																																														s))) +
																																																											i[8] +
																																																											1770035416) &
																																																										4294967295) <<
																																																										7) &
																																																										4294967295) |
																																																										(o >>>
																																																											25))) +
																																																								((((o =
																																																									(s +
																																																										(r ^
																																																											(e &
																																																												(n ^
																																																													r))) +
																																																										i[9] +
																																																										2336552879) &
																																																									4294967295) <<
																																																									12) &
																																																									4294967295) |
																																																									(o >>>
																																																										20))) +
																																																							((((o =
																																																								(r +
																																																									(n ^
																																																										(s &
																																																											(e ^
																																																												n))) +
																																																									i[10] +
																																																									4294925233) &
																																																								4294967295) <<
																																																								17) &
																																																								4294967295) |
																																																								(o >>>
																																																									15))) +
																																																						((((o =
																																																							(n +
																																																								(e ^
																																																									(r &
																																																										(s ^
																																																											e))) +
																																																								i[11] +
																																																								2304563134) &
																																																							4294967295) <<
																																																							22) &
																																																							4294967295) |
																																																							(o >>>
																																																								10))) +
																																																					((((o =
																																																						(e +
																																																							(s ^
																																																								(n &
																																																									(r ^
																																																										s))) +
																																																							i[12] +
																																																							1804603682) &
																																																						4294967295) <<
																																																						7) &
																																																						4294967295) |
																																																						(o >>>
																																																							25))) +
																																																				((((o =
																																																					(s +
																																																						(r ^
																																																							(e &
																																																								(n ^
																																																									r))) +
																																																						i[13] +
																																																						4254626195) &
																																																					4294967295) <<
																																																					12) &
																																																					4294967295) |
																																																					(o >>> 20))) +
																																																			((((o =
																																																				(r +
																																																					(n ^
																																																						(s &
																																																							(e ^
																																																								n))) +
																																																					i[14] +
																																																					2792965006) &
																																																				4294967295) <<
																																																				17) &
																																																				4294967295) |
																																																				(o >>> 15))) +
																																																		((((o =
																																																			(n +
																																																				(e ^
																																																					(r &
																																																						(s ^ e))) +
																																																				i[15] +
																																																				1236535329) &
																																																			4294967295) <<
																																																			22) &
																																																			4294967295) |
																																																			(o >>> 10))) +
																																																	((((o =
																																																		(e +
																																																			(r ^
																																																				(s & (n ^ r))) +
																																																			i[1] +
																																																			4129170786) &
																																																		4294967295) <<
																																																		5) &
																																																		4294967295) |
																																																		(o >>> 27))) +
																																																((((o =
																																																	(s +
																																																		(n ^
																																																			(r & (e ^ n))) +
																																																		i[6] +
																																																		3225465664) &
																																																	4294967295) <<
																																																	9) &
																																																	4294967295) |
																																																	(o >>> 23))) +
																																															((((o =
																																																(r +
																																																	(e ^ (n & (s ^ e))) +
																																																	i[11] +
																																																	643717713) &
																																																4294967295) <<
																																																14) &
																																																4294967295) |
																																																(o >>> 18))) +
																																														((((o =
																																															(n +
																																																(s ^ (e & (r ^ s))) +
																																																i[0] +
																																																3921069994) &
																																															4294967295) <<
																																															20) &
																																															4294967295) |
																																															(o >>> 12))) +
																																													((((o =
																																														(e +
																																															(r ^ (s & (n ^ r))) +
																																															i[5] +
																																															3593408605) &
																																														4294967295) <<
																																														5) &
																																														4294967295) |
																																														(o >>> 27))) +
																																												((((o =
																																													(s +
																																														(n ^ (r & (e ^ n))) +
																																														i[10] +
																																														38016083) &
																																													4294967295) <<
																																													9) &
																																													4294967295) |
																																													(o >>> 23))) +
																																											((((o =
																																												(r +
																																													(e ^ (n & (s ^ e))) +
																																													i[15] +
																																													3634488961) &
																																												4294967295) <<
																																												14) &
																																												4294967295) |
																																												(o >>> 18))) +
																																										((((o =
																																											(n +
																																												(s ^ (e & (r ^ s))) +
																																												i[4] +
																																												3889429448) &
																																											4294967295) <<
																																											20) &
																																											4294967295) |
																																											(o >>> 12))) +
																																									((((o =
																																										(e +
																																											(r ^ (s & (n ^ r))) +
																																											i[9] +
																																											568446438) &
																																										4294967295) <<
																																										5) &
																																										4294967295) |
																																										(o >>> 27))) +
																																								((((o =
																																									(s +
																																										(n ^ (r & (e ^ n))) +
																																										i[14] +
																																										3275163606) &
																																									4294967295) <<
																																									9) &
																																									4294967295) |
																																									(o >>> 23))) +
																																							((((o =
																																								(r +
																																									(e ^ (n & (s ^ e))) +
																																									i[3] +
																																									4107603335) &
																																								4294967295) <<
																																								14) &
																																								4294967295) |
																																								(o >>> 18))) +
																																						((((o =
																																							(n +
																																								(s ^ (e & (r ^ s))) +
																																								i[8] +
																																								1163531501) &
																																							4294967295) <<
																																							20) &
																																							4294967295) |
																																							(o >>> 12))) +
																																					((((o =
																																						(e +
																																							(r ^ (s & (n ^ r))) +
																																							i[13] +
																																							2850285829) &
																																						4294967295) <<
																																						5) &
																																						4294967295) |
																																						(o >>> 27))) +
																																				((((o =
																																					(s +
																																						(n ^ (r & (e ^ n))) +
																																						i[2] +
																																						4243563512) &
																																					4294967295) <<
																																					9) &
																																					4294967295) |
																																					(o >>> 23))) +
																																			((((o =
																																				(r + (e ^ (n & (s ^ e))) + i[7] + 1735328473) &
																																				4294967295) <<
																																				14) &
																																				4294967295) |
																																				(o >>> 18))) +
																																		((((o =
																																			(n + (s ^ (e & (r ^ s))) + i[12] + 2368359562) &
																																			4294967295) <<
																																			20) &
																																			4294967295) |
																																			(o >>> 12))) +
																																	((((o =
																																		(e + (n ^ r ^ s) + i[5] + 4294588738) &
																																		4294967295) <<
																																		4) &
																																		4294967295) |
																																		(o >>> 28))) +
																																((((o =
																																	(s + (e ^ n ^ r) + i[8] + 2272392833) & 4294967295) <<
																																	11) &
																																	4294967295) |
																																	(o >>> 21))) +
																															((((o =
																																(r + (s ^ e ^ n) + i[11] + 1839030562) & 4294967295) <<
																																16) &
																																4294967295) |
																																(o >>> 16))) +
																														((((o =
																															(n + (r ^ s ^ e) + i[14] + 4259657740) & 4294967295) <<
																															23) &
																															4294967295) |
																															(o >>> 9))) +
																													((((o = (e + (n ^ r ^ s) + i[1] + 2763975236) & 4294967295) <<
																														4) &
																														4294967295) |
																														(o >>> 28))) +
																												((((o = (s + (e ^ n ^ r) + i[4] + 1272893353) & 4294967295) <<
																													11) &
																													4294967295) |
																													(o >>> 21))) +
																											((((o = (r + (s ^ e ^ n) + i[7] + 4139469664) & 4294967295) <<
																												16) &
																												4294967295) |
																												(o >>> 16))) +
																										((((o = (n + (r ^ s ^ e) + i[10] + 3200236656) & 4294967295) <<
																											23) &
																											4294967295) |
																											(o >>> 9))) +
																									((((o = (e + (n ^ r ^ s) + i[13] + 681279174) & 4294967295) << 4) &
																										4294967295) |
																										(o >>> 28))) +
																								((((o = (s + (e ^ n ^ r) + i[0] + 3936430074) & 4294967295) << 11) &
																									4294967295) |
																									(o >>> 21))) +
																							((((o = (r + (s ^ e ^ n) + i[3] + 3572445317) & 4294967295) << 16) &
																								4294967295) |
																								(o >>> 16))) +
																						((((o = (n + (r ^ s ^ e) + i[6] + 76029189) & 4294967295) << 23) &
																							4294967295) |
																							(o >>> 9))) +
																					((((o = (e + (n ^ r ^ s) + i[9] + 3654602809) & 4294967295) << 4) &
																						4294967295) |
																						(o >>> 28))) +
																				((((o = (s + (e ^ n ^ r) + i[12] + 3873151461) & 4294967295) << 11) &
																					4294967295) |
																					(o >>> 21))) +
																			((((o = (r + (s ^ e ^ n) + i[15] + 530742520) & 4294967295) << 16) & 4294967295) |
																				(o >>> 16))) +
																		((((o = (n + (r ^ s ^ e) + i[2] + 3299628645) & 4294967295) << 23) & 4294967295) |
																			(o >>> 9))) +
																	((((o = (e + (r ^ (n | ~s)) + i[0] + 4096336452) & 4294967295) << 6) & 4294967295) |
																		(o >>> 26))) +
																((((o = (s + (n ^ (e | ~r)) + i[7] + 1126891415) & 4294967295) << 10) & 4294967295) |
																	(o >>> 22))) +
															((((o = (r + (e ^ (s | ~n)) + i[14] + 2878612391) & 4294967295) << 15) & 4294967295) |
																(o >>> 17))) +
														((((o = (n + (s ^ (r | ~e)) + i[5] + 4237533241) & 4294967295) << 21) & 4294967295) |
															(o >>> 11))) +
													((((o = (e + (r ^ (n | ~s)) + i[12] + 1700485571) & 4294967295) << 6) & 4294967295) |
														(o >>> 26))) +
												((((o = (s + (n ^ (e | ~r)) + i[3] + 2399980690) & 4294967295) << 10) & 4294967295) |
													(o >>> 22))) +
											((((o = (r + (e ^ (s | ~n)) + i[10] + 4293915773) & 4294967295) << 15) & 4294967295) |
												(o >>> 17))) +
										((((o = (n + (s ^ (r | ~e)) + i[1] + 2240044497) & 4294967295) << 21) & 4294967295) | (o >>> 11))) +
									((((o = (e + (r ^ (n | ~s)) + i[8] + 1873313359) & 4294967295) << 6) & 4294967295) | (o >>> 26))) +
								((((o = (s + (n ^ (e | ~r)) + i[15] + 4264355552) & 4294967295) << 10) & 4294967295) | (o >>> 22))) +
							((((o = (r + (e ^ (s | ~n)) + i[6] + 2734768916) & 4294967295) << 15) & 4294967295) | (o >>> 17))) +
						((((o = (n + (s ^ (r | ~e)) + i[13] + 1309151649) & 4294967295) << 21) & 4294967295) | (o >>> 11))) +
						((s =
							(e =
								n + ((((o = (e + (r ^ (n | ~s)) + i[4] + 4149444226) & 4294967295) << 6) & 4294967295) | (o >>> 26))) +
							((((o = (s + (n ^ (e | ~r)) + i[11] + 3174756917) & 4294967295) << 10) & 4294967295) | (o >>> 22))) ^
							((r =
								s + ((((o = (r + (e ^ (s | ~n)) + i[2] + 718787259) & 4294967295) << 15) & 4294967295) | (o >>> 17))) |
								~e)) +
						i[9] +
						3951481745) &
					4294967295),
					(t.g[0] = (t.g[0] + e) & 4294967295),
					(t.g[1] = (t.g[1] + (r + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
					(t.g[2] = (t.g[2] + r) & 4294967295),
					(t.g[3] = (t.g[3] + s) & 4294967295);
			}
			function Ir(t, e) {
				this.h = e;
				for (var n = [], i = !0, r = t.length - 1; 0 <= r; r--) {
					var s = 0 | t[r];
					(i && s == e) || ((n[r] = s), (i = !1));
				}
				this.g = n;
			}
			((Dt = Fi.prototype).Oa = function (t) {
				this.M = t;
			}),
				(Dt.ha = function (t, e, n, i) {
					if (this.g) throw Error('[goog.net.XhrIo] Object is active with another request=' + this.I + '; newUri=' + t);
					(e = e ? e.toUpperCase() : 'GET'),
						(this.I = t),
						(this.j = ''),
						(this.m = 0),
						(this.F = !1),
						(this.h = !0),
						(this.g = this.u ? this.u.g() : kn.g()),
						(this.C = this.u ? Sn(this.u) : Sn(kn)),
						(this.g.onreadystatechange = qt(this.La, this));
					try {
						(this.G = !0), this.g.open(e, String(t), !0), (this.G = !1);
					} catch (t) {
						return void Bi(this, t);
					}
					if (((t = n || ''), (n = new Map(this.headers)), i))
						if (Object.getPrototypeOf(i) === Object.prototype) for (var r in i) n.set(r, i[r]);
						else {
							if ('function' != typeof i.keys || 'function' != typeof i.get)
								throw Error('Unknown input type for opt_headers: ' + String(i));
							for (const t of i.keys()) n.set(t, i.get(t));
						}
					(i = Array.from(n.keys()).find((t) => 'content-type' == t.toLowerCase())),
						(r = Pt.FormData && t instanceof Pt.FormData),
						!(0 <= Kt(ji, e)) || i || r || n.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
					for (const [t, e] of n) this.g.setRequestHeader(t, e);
					this.K && (this.g.responseType = this.K),
						'withCredentials' in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
					try {
						Hi(this),
							0 < this.B &&
								((this.L = (function (t) {
									return oe && 'number' == typeof t.timeout && void 0 !== t.ontimeout;
								})(this.g))
									? ((this.g.timeout = this.B), (this.g.ontimeout = qt(this.ua, this)))
									: (this.A = rn(this.ua, this.B, this))),
							(this.v = !0),
							this.g.send(t),
							(this.v = !1);
					} catch (t) {
						Bi(this, t);
					}
				}),
				(Dt.ua = function () {
					void 0 !== Mt &&
						this.g &&
						((this.j = 'Timed out after ' + this.B + 'ms, aborting'), (this.m = 8), ze(this, 'timeout'), this.abort(8));
				}),
				(Dt.abort = function (t) {
					this.g &&
						this.h &&
						((this.h = !1),
						(this.l = !0),
						this.g.abort(),
						(this.l = !1),
						(this.m = t || 7),
						ze(this, 'complete'),
						ze(this, 'abort'),
						$i(this));
				}),
				(Dt.N = function () {
					this.g && (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)), $i(this, !0)),
						Fi.$.N.call(this);
				}),
				(Dt.La = function () {
					this.s || (this.G || this.v || this.l ? qi(this) : this.kb());
				}),
				(Dt.kb = function () {
					qi(this);
				}),
				(Dt.isActive = function () {
					return !!this.g;
				}),
				(Dt.da = function () {
					try {
						return 2 < Gi(this) ? this.g.status : -1;
					} catch (t) {
						return -1;
					}
				}),
				(Dt.ja = function () {
					try {
						return this.g ? this.g.responseText : '';
					} catch (t) {
						return '';
					}
				}),
				(Dt.Wa = function (t) {
					if (this.g) {
						var e = this.g.responseText;
						return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Pi(e);
					}
				}),
				(Dt.Ia = function () {
					return this.m;
				}),
				(Dt.Sa = function () {
					return 'string' == typeof this.j ? this.j : String(this.j);
				}),
				((Dt = Xi.prototype).ra = 8),
				(Dt.H = 1),
				(Dt.Na = function (t) {
					if (this.m)
						if (((this.m = null), 1 == this.H)) {
							if (!t) {
								(this.W = Math.floor(1e5 * Math.random())), (t = this.W++);
								const r = new Dn(this, this.l, t);
								let s = this.s;
								if (
									(this.U && (s ? ((s = Te(s)), Se(s, this.U)) : (s = this.U)),
									null !== this.o || this.O || ((r.I = s), (s = null)),
									this.P)
								)
									t: {
										for (var e = 0, n = 0; n < this.j.length; n++) {
											var i = this.j[n];
											if (
												void 0 ===
												(i = '__data__' in i.map && 'string' == typeof (i = i.map.__data__) ? i.length : void 0)
											)
												break;
											if (4096 < (e += i)) {
												e = n;
												break t;
											}
											if (4096 === e || n === this.j.length - 1) {
												e = n + 1;
												break t;
											}
										}
										e = 1e3;
									}
								else e = 1e3;
								(e = rr(this, r, e)),
									ei((n = Xn(this.I)), 'RID', t),
									ei(n, 'CVER', 22),
									this.F && ei(n, 'X-HTTP-Session-Id', this.F),
									ir(this, n),
									s &&
										(this.O
											? (e = 'headers=' + encodeURIComponent(String(Wi(s))) + '&' + e)
											: this.o && Qi(n, this.o, s)),
									Ti(this.i, r),
									this.bb && ei(n, 'TYPE', 'init'),
									this.P ? (ei(n, '$req', e), ei(n, 'SID', 'null'), (r.aa = !0), Fn(r, n, null)) : Fn(r, n, e),
									(this.H = 2);
							}
						} else 3 == this.H && (t ? nr(this, t) : 0 == this.j.length || bi(this.i) || nr(this));
				}),
				(Dt.Ma = function () {
					if (((this.u = null), cr(this), this.ca && !(this.M || null == this.g || 0 >= this.S))) {
						var t = 2 * this.S;
						this.l.info('BP detection timer enabled: ' + t), (this.B = _n(qt(this.jb, this), t));
					}
				}),
				(Dt.jb = function () {
					this.B &&
						((this.B = null),
						this.l.info('BP detection timeout reached.'),
						this.l.info('Buffering proxy detected and switch to long-polling!'),
						(this.G = !1),
						(this.M = !0),
						wn(10),
						Zi(this),
						cr(this));
				}),
				(Dt.ib = function () {
					null != this.v && ((this.v = null), Zi(this), or(this), wn(19));
				}),
				(Dt.pb = function (t) {
					t
						? (this.l.info('Successfully pinged google.com'), wn(2))
						: (this.l.info('Failed to ping google.com'), wn(1));
				}),
				(Dt.isActive = function () {
					return !!this.h && this.h.isActive(this);
				}),
				((Dt = gr.prototype).Ba = function () {}),
				(Dt.Aa = function () {}),
				(Dt.za = function () {}),
				(Dt.ya = function () {}),
				(Dt.isActive = function () {
					return !0;
				}),
				(Dt.Va = function () {}),
				(yr.prototype.g = function (t, e) {
					return new vr(t, e);
				}),
				Ht(vr, Be),
				(vr.prototype.m = function () {
					(this.g.h = this.j), this.A && (this.g.J = !0);
					var t = this.g,
						e = this.l,
						n = this.h || void 0;
					wn(0), (t.Y = e), (t.na = n || {}), (t.G = t.aa), (t.I = fr(t, null, t.Y)), er(t);
				}),
				(vr.prototype.close = function () {
					Yi(this.g);
				}),
				(vr.prototype.u = function (t) {
					var e = this.g;
					if ('string' == typeof t) {
						var n = {};
						(n.__data__ = t), (t = n);
					} else this.v && (((n = {}).__data__ = $e(t)), (t = n));
					e.j.push(new yi(e.fb++, t)), 3 == e.H && er(e);
				}),
				(vr.prototype.N = function () {
					(this.g.h = null), delete this.j, Yi(this.g), delete this.g, vr.$.N.call(this);
				}),
				Ht(wr, xn),
				Ht(br, Rn),
				Ht(_r, gr),
				(_r.prototype.Ba = function () {
					ze(this.g, 'a');
				}),
				(_r.prototype.Aa = function (t) {
					ze(this.g, new wr(t));
				}),
				(_r.prototype.za = function (t) {
					ze(this.g, new br());
				}),
				(_r.prototype.ya = function () {
					ze(this.g, 'b');
				}),
				Ht(Er, function () {
					this.blockSize = -1;
				}),
				(Er.prototype.reset = function () {
					(this.g[0] = 1732584193),
						(this.g[1] = 4023233417),
						(this.g[2] = 2562383102),
						(this.g[3] = 271733878),
						(this.i = this.h = 0);
				}),
				(Er.prototype.j = function (t, e) {
					void 0 === e && (e = t.length);
					for (var n = e - this.blockSize, i = this.m, r = this.h, s = 0; s < e; ) {
						if (0 == r) for (; s <= n; ) Tr(this, t, s), (s += this.blockSize);
						if ('string' == typeof t) {
							for (; s < e; )
								if (((i[r++] = t.charCodeAt(s++)), r == this.blockSize)) {
									Tr(this, i), (r = 0);
									break;
								}
						} else
							for (; s < e; )
								if (((i[r++] = t[s++]), r == this.blockSize)) {
									Tr(this, i), (r = 0);
									break;
								}
					}
					(this.h = r), (this.i += e);
				}),
				(Er.prototype.l = function () {
					var t = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
					t[0] = 128;
					for (var e = 1; e < t.length - 8; ++e) t[e] = 0;
					var n = 8 * this.i;
					for (e = t.length - 8; e < t.length; ++e) (t[e] = 255 & n), (n /= 256);
					for (this.j(t), t = Array(16), e = n = 0; 4 > e; ++e)
						for (var i = 0; 32 > i; i += 8) t[n++] = (this.g[e] >>> i) & 255;
					return t;
				});
			var Sr = {};
			function Cr(t) {
				return -128 <= t && 128 > t
					? (function (t, e) {
							var n = Sr;
							return Object.prototype.hasOwnProperty.call(n, t)
								? n[t]
								: (n[t] = (function (t) {
										return new Ir([0 | t], 0 > t ? -1 : 0);
								  })(t));
					  })(t)
					: new Ir([0 | t], 0 > t ? -1 : 0);
			}
			function kr(t) {
				if (isNaN(t) || !isFinite(t)) return xr;
				if (0 > t) return Or(kr(-t));
				for (var e = [], n = 1, i = 0; t >= n; i++) (e[i] = (t / n) | 0), (n *= Ar);
				return new Ir(e, 0);
			}
			var Ar = 4294967296,
				xr = Cr(0),
				Rr = Cr(1),
				Nr = Cr(16777216);
			function Dr(t) {
				if (0 != t.h) return !1;
				for (var e = 0; e < t.g.length; e++) if (0 != t.g[e]) return !1;
				return !0;
			}
			function Lr(t) {
				return -1 == t.h;
			}
			function Or(t) {
				for (var e = t.g.length, n = [], i = 0; i < e; i++) n[i] = ~t.g[i];
				return new Ir(n, ~t.h).add(Rr);
			}
			function Mr(t, e) {
				return t.add(Or(e));
			}
			function Pr(t, e) {
				for (; (65535 & t[e]) != t[e]; ) (t[e + 1] += t[e] >>> 16), (t[e] &= 65535), e++;
			}
			function Fr(t, e) {
				(this.g = t), (this.h = e);
			}
			function Ur(t, e) {
				if (Dr(e)) throw Error('division by zero');
				if (Dr(t)) return new Fr(xr, xr);
				if (Lr(t)) return (e = Ur(Or(t), e)), new Fr(Or(e.g), Or(e.h));
				if (Lr(e)) return (e = Ur(t, Or(e))), new Fr(Or(e.g), e.h);
				if (30 < t.g.length) {
					if (Lr(t) || Lr(e)) throw Error('slowDivide_ only works with positive integers.');
					for (var n = Rr, i = e; 0 >= i.X(t); ) (n = Vr(n)), (i = Vr(i));
					var r = jr(n, 1),
						s = jr(i, 1);
					for (i = jr(i, 2), n = jr(n, 2); !Dr(i); ) {
						var o = s.add(i);
						0 >= o.X(t) && ((r = r.add(n)), (s = o)), (i = jr(i, 1)), (n = jr(n, 1));
					}
					return (e = Mr(t, r.R(e))), new Fr(r, e);
				}
				for (r = xr; 0 <= t.X(e); ) {
					for (
						n = Math.max(1, Math.floor(t.ea() / e.ea())),
							i = 48 >= (i = Math.ceil(Math.log(n) / Math.LN2)) ? 1 : Math.pow(2, i - 48),
							o = (s = kr(n)).R(e);
						Lr(o) || 0 < o.X(t);

					)
						o = (s = kr((n -= i))).R(e);
					Dr(s) && (s = Rr), (r = r.add(s)), (t = Mr(t, o));
				}
				return new Fr(r, t);
			}
			function Vr(t) {
				for (var e = t.g.length + 1, n = [], i = 0; i < e; i++) n[i] = (t.D(i) << 1) | (t.D(i - 1) >>> 31);
				return new Ir(n, t.h);
			}
			function jr(t, e) {
				var n = e >> 5;
				e %= 32;
				for (var i = t.g.length - n, r = [], s = 0; s < i; s++)
					r[s] = 0 < e ? (t.D(s + n) >>> e) | (t.D(s + n + 1) << (32 - e)) : t.D(s + n);
				return new Ir(r, t.h);
			}
			((Dt = Ir.prototype).ea = function () {
				if (Lr(this)) return -Or(this).ea();
				for (var t = 0, e = 1, n = 0; n < this.g.length; n++) {
					var i = this.D(n);
					(t += (0 <= i ? i : Ar + i) * e), (e *= Ar);
				}
				return t;
			}),
				(Dt.toString = function (t) {
					if (2 > (t = t || 10) || 36 < t) throw Error('radix out of range: ' + t);
					if (Dr(this)) return '0';
					if (Lr(this)) return '-' + Or(this).toString(t);
					for (var e = kr(Math.pow(t, 6)), n = this, i = ''; ; ) {
						var r = Ur(n, e).g,
							s = ((0 < (n = Mr(n, r.R(e))).g.length ? n.g[0] : n.h) >>> 0).toString(t);
						if (Dr((n = r))) return s + i;
						for (; 6 > s.length; ) s = '0' + s;
						i = s + i;
					}
				}),
				(Dt.D = function (t) {
					return 0 > t ? 0 : t < this.g.length ? this.g[t] : this.h;
				}),
				(Dt.X = function (t) {
					return Lr((t = Mr(this, t))) ? -1 : Dr(t) ? 0 : 1;
				}),
				(Dt.abs = function () {
					return Lr(this) ? Or(this) : this;
				}),
				(Dt.add = function (t) {
					for (var e = Math.max(this.g.length, t.g.length), n = [], i = 0, r = 0; r <= e; r++) {
						var s = i + (65535 & this.D(r)) + (65535 & t.D(r)),
							o = (s >>> 16) + (this.D(r) >>> 16) + (t.D(r) >>> 16);
						(i = o >>> 16), (s &= 65535), (o &= 65535), (n[r] = (o << 16) | s);
					}
					return new Ir(n, -2147483648 & n[n.length - 1] ? -1 : 0);
				}),
				(Dt.R = function (t) {
					if (Dr(this) || Dr(t)) return xr;
					if (Lr(this)) return Lr(t) ? Or(this).R(Or(t)) : Or(Or(this).R(t));
					if (Lr(t)) return Or(this.R(Or(t)));
					if (0 > this.X(Nr) && 0 > t.X(Nr)) return kr(this.ea() * t.ea());
					for (var e = this.g.length + t.g.length, n = [], i = 0; i < 2 * e; i++) n[i] = 0;
					for (i = 0; i < this.g.length; i++)
						for (var r = 0; r < t.g.length; r++) {
							var s = this.D(i) >>> 16,
								o = 65535 & this.D(i),
								a = t.D(r) >>> 16,
								c = 65535 & t.D(r);
							(n[2 * i + 2 * r] += o * c),
								Pr(n, 2 * i + 2 * r),
								(n[2 * i + 2 * r + 1] += s * c),
								Pr(n, 2 * i + 2 * r + 1),
								(n[2 * i + 2 * r + 1] += o * a),
								Pr(n, 2 * i + 2 * r + 1),
								(n[2 * i + 2 * r + 2] += s * a),
								Pr(n, 2 * i + 2 * r + 2);
						}
					for (i = 0; i < e; i++) n[i] = (n[2 * i + 1] << 16) | n[2 * i];
					for (i = e; i < 2 * e; i++) n[i] = 0;
					return new Ir(n, 0);
				}),
				(Dt.gb = function (t) {
					return Ur(this, t).h;
				}),
				(Dt.and = function (t) {
					for (var e = Math.max(this.g.length, t.g.length), n = [], i = 0; i < e; i++) n[i] = this.D(i) & t.D(i);
					return new Ir(n, this.h & t.h);
				}),
				(Dt.or = function (t) {
					for (var e = Math.max(this.g.length, t.g.length), n = [], i = 0; i < e; i++) n[i] = this.D(i) | t.D(i);
					return new Ir(n, this.h | t.h);
				}),
				(Dt.xor = function (t) {
					for (var e = Math.max(this.g.length, t.g.length), n = [], i = 0; i < e; i++) n[i] = this.D(i) ^ t.D(i);
					return new Ir(n, this.h ^ t.h);
				}),
				(yr.prototype.createWebChannel = yr.prototype.g),
				(vr.prototype.send = vr.prototype.u),
				(vr.prototype.open = vr.prototype.m),
				(vr.prototype.close = vr.prototype.close),
				(En.NO_ERROR = 0),
				(En.TIMEOUT = 8),
				(En.HTTP_ERROR = 6),
				(Tn.COMPLETE = 'complete'),
				(Cn.EventType = An),
				(An.OPEN = 'a'),
				(An.CLOSE = 'b'),
				(An.ERROR = 'c'),
				(An.MESSAGE = 'd'),
				(Be.prototype.listen = Be.prototype.O),
				(Fi.prototype.listenOnce = Fi.prototype.P),
				(Fi.prototype.getLastError = Fi.prototype.Sa),
				(Fi.prototype.getLastErrorCode = Fi.prototype.Ia),
				(Fi.prototype.getStatus = Fi.prototype.da),
				(Fi.prototype.getResponseJson = Fi.prototype.Wa),
				(Fi.prototype.getResponseText = Fi.prototype.ja),
				(Fi.prototype.send = Fi.prototype.ha),
				(Fi.prototype.setWithCredentials = Fi.prototype.Oa),
				(Er.prototype.digest = Er.prototype.l),
				(Er.prototype.reset = Er.prototype.reset),
				(Er.prototype.update = Er.prototype.j),
				(Ir.prototype.add = Ir.prototype.add),
				(Ir.prototype.multiply = Ir.prototype.R),
				(Ir.prototype.modulo = Ir.prototype.gb),
				(Ir.prototype.compare = Ir.prototype.X),
				(Ir.prototype.toNumber = Ir.prototype.ea),
				(Ir.prototype.toString = Ir.prototype.toString),
				(Ir.prototype.getBits = Ir.prototype.D),
				(Ir.fromNumber = kr),
				(Ir.fromString = function t(e, n) {
					if (0 == e.length) throw Error('number format error: empty string');
					if (2 > (n = n || 10) || 36 < n) throw Error('radix out of range: ' + n);
					if ('-' == e.charAt(0)) return Or(t(e.substring(1), n));
					if (0 <= e.indexOf('-')) throw Error('number format error: interior "-" character');
					for (var i = kr(Math.pow(n, 8)), r = xr, s = 0; s < e.length; s += 8) {
						var o = Math.min(8, e.length - s),
							a = parseInt(e.substring(s, s + o), n);
						8 > o ? ((o = kr(Math.pow(n, o))), (r = r.R(o).add(kr(a)))) : (r = (r = r.R(i)).add(kr(a)));
					}
					return r;
				});
			var Br = (Ot.createWebChannelTransport = function () {
					return new yr();
				}),
				zr = (Ot.getStatEventTarget = function () {
					return mn();
				}),
				qr = (Ot.ErrorCode = En),
				$r = (Ot.EventType = Tn),
				Hr = (Ot.Event = pn),
				Gr = (Ot.Stat = {
					xb: 0,
					Ab: 1,
					Bb: 2,
					Ub: 3,
					Zb: 4,
					Wb: 5,
					Xb: 6,
					Vb: 7,
					Tb: 8,
					Yb: 9,
					PROXY: 10,
					NOPROXY: 11,
					Rb: 12,
					Nb: 13,
					Ob: 14,
					Mb: 15,
					Pb: 16,
					Qb: 17,
					tb: 18,
					sb: 19,
					ub: 20,
				}),
				Kr = ((Ot.FetchXmlHttpFactory = Ri), (Ot.WebChannel = Cn)),
				Wr = (Ot.XhrIo = Fi),
				Qr = (Ot.Md5 = Er),
				Jr = (Ot.Integer = Ir);
			const Xr = '@firebase/firestore';
			class Yr {
				constructor(t) {
					this.uid = t;
				}
				isAuthenticated() {
					return null != this.uid;
				}
				toKey() {
					return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
				}
				isEqual(t) {
					return t.uid === this.uid;
				}
			}
			(Yr.UNAUTHENTICATED = new Yr(null)),
				(Yr.GOOGLE_CREDENTIALS = new Yr('google-credentials-uid')),
				(Yr.FIRST_PARTY = new Yr('first-party-uid')),
				(Yr.MOCK_USER = new Yr('mock-user'));
			let Zr = '10.7.2';
			const ts = new j('@firebase/firestore');
			function es() {
				return ts.logLevel;
			}
			function ns(t, ...e) {
				if (ts.logLevel <= M.DEBUG) {
					const n = e.map(ss);
					ts.debug(`Firestore (${Zr}): ${t}`, ...n);
				}
			}
			function is(t, ...e) {
				if (ts.logLevel <= M.ERROR) {
					const n = e.map(ss);
					ts.error(`Firestore (${Zr}): ${t}`, ...n);
				}
			}
			function rs(t, ...e) {
				if (ts.logLevel <= M.WARN) {
					const n = e.map(ss);
					ts.warn(`Firestore (${Zr}): ${t}`, ...n);
				}
			}
			function ss(t) {
				if ('string' == typeof t) return t;
				try {
					return (function (t) {
						return JSON.stringify(t);
					})(t);
				} catch (e) {
					return t;
				}
			}
			function os(t = 'Unexpected state') {
				const e = `FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: ` + t;
				throw (is(e), new Error(e));
			}
			function as(t, e) {
				t || os();
			}
			function cs(t, e) {
				return t;
			}
			const ls = {
				OK: 'ok',
				CANCELLED: 'cancelled',
				UNKNOWN: 'unknown',
				INVALID_ARGUMENT: 'invalid-argument',
				DEADLINE_EXCEEDED: 'deadline-exceeded',
				NOT_FOUND: 'not-found',
				ALREADY_EXISTS: 'already-exists',
				PERMISSION_DENIED: 'permission-denied',
				UNAUTHENTICATED: 'unauthenticated',
				RESOURCE_EXHAUSTED: 'resource-exhausted',
				FAILED_PRECONDITION: 'failed-precondition',
				ABORTED: 'aborted',
				OUT_OF_RANGE: 'out-of-range',
				UNIMPLEMENTED: 'unimplemented',
				INTERNAL: 'internal',
				UNAVAILABLE: 'unavailable',
				DATA_LOSS: 'data-loss',
			};
			class hs extends w {
				constructor(t, e) {
					super(t, e),
						(this.code = t),
						(this.message = e),
						(this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`);
				}
			}
			class us {
				constructor() {
					this.promise = new Promise((t, e) => {
						(this.resolve = t), (this.reject = e);
					});
				}
			}
			class ds {
				constructor(t, e) {
					(this.user = e),
						(this.type = 'OAuth'),
						(this.headers = new Map()),
						this.headers.set('Authorization', `Bearer ${t}`);
				}
			}
			class ps {
				getToken() {
					return Promise.resolve(null);
				}
				invalidateToken() {}
				start(t, e) {
					t.enqueueRetryable(() => e(Yr.UNAUTHENTICATED));
				}
				shutdown() {}
			}
			class fs {
				constructor(t) {
					(this.token = t), (this.changeListener = null);
				}
				getToken() {
					return Promise.resolve(this.token);
				}
				invalidateToken() {}
				start(t, e) {
					(this.changeListener = e), t.enqueueRetryable(() => e(this.token.user));
				}
				shutdown() {
					this.changeListener = null;
				}
			}
			class ms {
				constructor(t) {
					(this.t = t),
						(this.currentUser = Yr.UNAUTHENTICATED),
						(this.i = 0),
						(this.forceRefresh = !1),
						(this.auth = null);
				}
				start(t, e) {
					let n = this.i;
					const i = (t) => (this.i !== n ? ((n = this.i), e(t)) : Promise.resolve());
					let r = new us();
					this.o = () => {
						this.i++,
							(this.currentUser = this.u()),
							r.resolve(),
							(r = new us()),
							t.enqueueRetryable(() => i(this.currentUser));
					};
					const s = () => {
							const e = r;
							t.enqueueRetryable(async () => {
								await e.promise, await i(this.currentUser);
							});
						},
						o = (t) => {
							ns('FirebaseAuthCredentialsProvider', 'Auth detected'),
								(this.auth = t),
								this.auth.addAuthTokenListener(this.o),
								s();
						};
					this.t.onInit((t) => o(t)),
						setTimeout(() => {
							if (!this.auth) {
								const t = this.t.getImmediate({ optional: !0 });
								t
									? o(t)
									: (ns('FirebaseAuthCredentialsProvider', 'Auth not yet detected'), r.resolve(), (r = new us()));
							}
						}, 0),
						s();
				}
				getToken() {
					const t = this.i,
						e = this.forceRefresh;
					return (
						(this.forceRefresh = !1),
						this.auth
							? this.auth
									.getToken(e)
									.then((e) =>
										this.i !== t
											? (ns('FirebaseAuthCredentialsProvider', 'getToken aborted due to token change.'),
											  this.getToken())
											: e
											? (as('string' == typeof e.accessToken), new ds(e.accessToken, this.currentUser))
											: null
									)
							: Promise.resolve(null)
					);
				}
				invalidateToken() {
					this.forceRefresh = !0;
				}
				shutdown() {
					this.auth && this.auth.removeAuthTokenListener(this.o);
				}
				u() {
					const t = this.auth && this.auth.getUid();
					return as(null === t || 'string' == typeof t), new Yr(t);
				}
			}
			class gs {
				constructor(t, e, n) {
					(this.l = t),
						(this.h = e),
						(this.P = n),
						(this.type = 'FirstParty'),
						(this.user = Yr.FIRST_PARTY),
						(this.I = new Map());
				}
				T() {
					return this.P ? this.P() : null;
				}
				get headers() {
					this.I.set('X-Goog-AuthUser', this.l);
					const t = this.T();
					return (
						t && this.I.set('Authorization', t), this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h), this.I
					);
				}
			}
			class ys {
				constructor(t, e, n) {
					(this.l = t), (this.h = e), (this.P = n);
				}
				getToken() {
					return Promise.resolve(new gs(this.l, this.h, this.P));
				}
				start(t, e) {
					t.enqueueRetryable(() => e(Yr.FIRST_PARTY));
				}
				shutdown() {}
				invalidateToken() {}
			}
			class vs {
				constructor(t) {
					(this.value = t),
						(this.type = 'AppCheck'),
						(this.headers = new Map()),
						t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
				}
			}
			class ws {
				constructor(t) {
					(this.A = t), (this.forceRefresh = !1), (this.appCheck = null), (this.R = null);
				}
				start(t, e) {
					const n = (t) => {
						null != t.error &&
							ns(
								'FirebaseAppCheckTokenProvider',
								`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`
							);
						const n = t.token !== this.R;
						return (
							(this.R = t.token),
							ns('FirebaseAppCheckTokenProvider', `Received ${n ? 'new' : 'existing'} token.`),
							n ? e(t.token) : Promise.resolve()
						);
					};
					this.o = (e) => {
						t.enqueueRetryable(() => n(e));
					};
					const i = (t) => {
						ns('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
							(this.appCheck = t),
							this.appCheck.addTokenListener(this.o);
					};
					this.A.onInit((t) => i(t)),
						setTimeout(() => {
							if (!this.appCheck) {
								const t = this.A.getImmediate({ optional: !0 });
								t ? i(t) : ns('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
							}
						}, 0);
				}
				getToken() {
					const t = this.forceRefresh;
					return (
						(this.forceRefresh = !1),
						this.appCheck
							? this.appCheck
									.getToken(t)
									.then((t) => (t ? (as('string' == typeof t.token), (this.R = t.token), new vs(t.token)) : null))
							: Promise.resolve(null)
					);
				}
				invalidateToken() {
					this.forceRefresh = !0;
				}
				shutdown() {
					this.appCheck && this.appCheck.removeTokenListener(this.o);
				}
			}
			function bs(t) {
				const e = 'undefined' != typeof self && (self.crypto || self.msCrypto),
					n = new Uint8Array(t);
				if (e && 'function' == typeof e.getRandomValues) e.getRandomValues(n);
				else for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
				return n;
			}
			class _s {
				static newId() {
					const t = 62 * Math.floor(256 / 62);
					let e = '';
					for (; e.length < 20; ) {
						const n = bs(40);
						for (let i = 0; i < n.length; ++i)
							e.length < 20 &&
								n[i] < t &&
								(e += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(n[i] % 62));
					}
					return e;
				}
			}
			function Es(t, e) {
				return t < e ? -1 : t > e ? 1 : 0;
			}
			function Ts(t, e, n) {
				return t.length === e.length && t.every((t, i) => n(t, e[i]));
			}
			class Is {
				constructor(t, e) {
					if (((this.seconds = t), (this.nanoseconds = e), e < 0))
						throw new hs(ls.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + e);
					if (e >= 1e9) throw new hs(ls.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + e);
					if (t < -62135596800) throw new hs(ls.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + t);
					if (t >= 253402300800) throw new hs(ls.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + t);
				}
				static now() {
					return Is.fromMillis(Date.now());
				}
				static fromDate(t) {
					return Is.fromMillis(t.getTime());
				}
				static fromMillis(t) {
					const e = Math.floor(t / 1e3),
						n = Math.floor(1e6 * (t - 1e3 * e));
					return new Is(e, n);
				}
				toDate() {
					return new Date(this.toMillis());
				}
				toMillis() {
					return 1e3 * this.seconds + this.nanoseconds / 1e6;
				}
				_compareTo(t) {
					return this.seconds === t.seconds ? Es(this.nanoseconds, t.nanoseconds) : Es(this.seconds, t.seconds);
				}
				isEqual(t) {
					return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
				}
				toString() {
					return 'Timestamp(seconds=' + this.seconds + ', nanoseconds=' + this.nanoseconds + ')';
				}
				toJSON() {
					return { seconds: this.seconds, nanoseconds: this.nanoseconds };
				}
				valueOf() {
					const t = this.seconds - -62135596800;
					return String(t).padStart(12, '0') + '.' + String(this.nanoseconds).padStart(9, '0');
				}
			}
			class Ss {
				constructor(t) {
					this.timestamp = t;
				}
				static fromTimestamp(t) {
					return new Ss(t);
				}
				static min() {
					return new Ss(new Is(0, 0));
				}
				static max() {
					return new Ss(new Is(253402300799, 999999999));
				}
				compareTo(t) {
					return this.timestamp._compareTo(t.timestamp);
				}
				isEqual(t) {
					return this.timestamp.isEqual(t.timestamp);
				}
				toMicroseconds() {
					return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
				}
				toString() {
					return 'SnapshotVersion(' + this.timestamp.toString() + ')';
				}
				toTimestamp() {
					return this.timestamp;
				}
			}
			class Cs {
				constructor(t, e, n) {
					void 0 === e ? (e = 0) : e > t.length && os(),
						void 0 === n ? (n = t.length - e) : n > t.length - e && os(),
						(this.segments = t),
						(this.offset = e),
						(this.len = n);
				}
				get length() {
					return this.len;
				}
				isEqual(t) {
					return 0 === Cs.comparator(this, t);
				}
				child(t) {
					const e = this.segments.slice(this.offset, this.limit());
					return (
						t instanceof Cs
							? t.forEach((t) => {
									e.push(t);
							  })
							: e.push(t),
						this.construct(e)
					);
				}
				limit() {
					return this.offset + this.length;
				}
				popFirst(t) {
					return (t = void 0 === t ? 1 : t), this.construct(this.segments, this.offset + t, this.length - t);
				}
				popLast() {
					return this.construct(this.segments, this.offset, this.length - 1);
				}
				firstSegment() {
					return this.segments[this.offset];
				}
				lastSegment() {
					return this.get(this.length - 1);
				}
				get(t) {
					return this.segments[this.offset + t];
				}
				isEmpty() {
					return 0 === this.length;
				}
				isPrefixOf(t) {
					if (t.length < this.length) return !1;
					for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
					return !0;
				}
				isImmediateParentOf(t) {
					if (this.length + 1 !== t.length) return !1;
					for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
					return !0;
				}
				forEach(t) {
					for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
				}
				toArray() {
					return this.segments.slice(this.offset, this.limit());
				}
				static comparator(t, e) {
					const n = Math.min(t.length, e.length);
					for (let i = 0; i < n; i++) {
						const n = t.get(i),
							r = e.get(i);
						if (n < r) return -1;
						if (n > r) return 1;
					}
					return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
				}
			}
			class ks extends Cs {
				construct(t, e, n) {
					return new ks(t, e, n);
				}
				canonicalString() {
					return this.toArray().join('/');
				}
				toString() {
					return this.canonicalString();
				}
				toUriEncodedString() {
					return this.toArray().map(encodeURIComponent).join('/');
				}
				static fromString(...t) {
					const e = [];
					for (const n of t) {
						if (n.indexOf('//') >= 0)
							throw new hs(ls.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
						e.push(...n.split('/').filter((t) => t.length > 0));
					}
					return new ks(e);
				}
				static emptyPath() {
					return new ks([]);
				}
			}
			const As = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
			class xs extends Cs {
				construct(t, e, n) {
					return new xs(t, e, n);
				}
				static isValidIdentifier(t) {
					return As.test(t);
				}
				canonicalString() {
					return this.toArray()
						.map(
							(t) => (
								(t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`')), xs.isValidIdentifier(t) || (t = '`' + t + '`'), t
							)
						)
						.join('.');
				}
				toString() {
					return this.canonicalString();
				}
				isKeyField() {
					return 1 === this.length && '__name__' === this.get(0);
				}
				static keyField() {
					return new xs(['__name__']);
				}
				static fromServerFormat(t) {
					const e = [];
					let n = '',
						i = 0;
					const r = () => {
						if (0 === n.length)
							throw new hs(
								ls.INVALID_ARGUMENT,
								`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
							);
						e.push(n), (n = '');
					};
					let s = !1;
					for (; i < t.length; ) {
						const e = t[i];
						if ('\\' === e) {
							if (i + 1 === t.length) throw new hs(ls.INVALID_ARGUMENT, 'Path has trailing escape character: ' + t);
							const e = t[i + 1];
							if ('\\' !== e && '.' !== e && '`' !== e)
								throw new hs(ls.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + t);
							(n += e), (i += 2);
						} else '`' === e ? ((s = !s), i++) : '.' !== e || s ? ((n += e), i++) : (r(), i++);
					}
					if ((r(), s)) throw new hs(ls.INVALID_ARGUMENT, 'Unterminated ` in path: ' + t);
					return new xs(e);
				}
				static emptyPath() {
					return new xs([]);
				}
			}
			class Rs {
				constructor(t) {
					this.path = t;
				}
				static fromPath(t) {
					return new Rs(ks.fromString(t));
				}
				static fromName(t) {
					return new Rs(ks.fromString(t).popFirst(5));
				}
				static empty() {
					return new Rs(ks.emptyPath());
				}
				get collectionGroup() {
					return this.path.popLast().lastSegment();
				}
				hasCollectionId(t) {
					return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
				}
				getCollectionGroup() {
					return this.path.get(this.path.length - 2);
				}
				getCollectionPath() {
					return this.path.popLast();
				}
				isEqual(t) {
					return null !== t && 0 === ks.comparator(this.path, t.path);
				}
				toString() {
					return this.path.toString();
				}
				static comparator(t, e) {
					return ks.comparator(t.path, e.path);
				}
				static isDocumentKey(t) {
					return t.length % 2 == 0;
				}
				static fromSegments(t) {
					return new Rs(new ks(t.slice()));
				}
			}
			function Ns(t) {
				return new Ds(t.readTime, t.key, -1);
			}
			class Ds {
				constructor(t, e, n) {
					(this.readTime = t), (this.documentKey = e), (this.largestBatchId = n);
				}
				static min() {
					return new Ds(Ss.min(), Rs.empty(), -1);
				}
				static max() {
					return new Ds(Ss.max(), Rs.empty(), -1);
				}
			}
			function Ls(t, e) {
				let n = t.readTime.compareTo(e.readTime);
				return 0 !== n
					? n
					: ((n = Rs.comparator(t.documentKey, e.documentKey)), 0 !== n ? n : Es(t.largestBatchId, e.largestBatchId));
			}
			const Os =
				'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
			class Ms {
				constructor() {
					this.onCommittedListeners = [];
				}
				addOnCommittedListener(t) {
					this.onCommittedListeners.push(t);
				}
				raiseOnCommittedEvent() {
					this.onCommittedListeners.forEach((t) => t());
				}
			}
			async function Ps(t) {
				if (t.code !== ls.FAILED_PRECONDITION || t.message !== Os) throw t;
				ns('LocalStore', 'Unexpectedly lost primary lease');
			}
			class Fs {
				constructor(t) {
					(this.nextCallback = null),
						(this.catchCallback = null),
						(this.result = void 0),
						(this.error = void 0),
						(this.isDone = !1),
						(this.callbackAttached = !1),
						t(
							(t) => {
								(this.isDone = !0), (this.result = t), this.nextCallback && this.nextCallback(t);
							},
							(t) => {
								(this.isDone = !0), (this.error = t), this.catchCallback && this.catchCallback(t);
							}
						);
				}
				catch(t) {
					return this.next(void 0, t);
				}
				next(t, e) {
					return (
						this.callbackAttached && os(),
						(this.callbackAttached = !0),
						this.isDone
							? this.error
								? this.wrapFailure(e, this.error)
								: this.wrapSuccess(t, this.result)
							: new Fs((n, i) => {
									(this.nextCallback = (e) => {
										this.wrapSuccess(t, e).next(n, i);
									}),
										(this.catchCallback = (t) => {
											this.wrapFailure(e, t).next(n, i);
										});
							  })
					);
				}
				toPromise() {
					return new Promise((t, e) => {
						this.next(t, e);
					});
				}
				wrapUserFunction(t) {
					try {
						const e = t();
						return e instanceof Fs ? e : Fs.resolve(e);
					} catch (t) {
						return Fs.reject(t);
					}
				}
				wrapSuccess(t, e) {
					return t ? this.wrapUserFunction(() => t(e)) : Fs.resolve(e);
				}
				wrapFailure(t, e) {
					return t ? this.wrapUserFunction(() => t(e)) : Fs.reject(e);
				}
				static resolve(t) {
					return new Fs((e, n) => {
						e(t);
					});
				}
				static reject(t) {
					return new Fs((e, n) => {
						n(t);
					});
				}
				static waitFor(t) {
					return new Fs((e, n) => {
						let i = 0,
							r = 0,
							s = !1;
						t.forEach((t) => {
							++i,
								t.next(
									() => {
										++r, s && r === i && e();
									},
									(t) => n(t)
								);
						}),
							(s = !0),
							r === i && e();
					});
				}
				static or(t) {
					let e = Fs.resolve(!1);
					for (const n of t) e = e.next((t) => (t ? Fs.resolve(t) : n()));
					return e;
				}
				static forEach(t, e) {
					const n = [];
					return (
						t.forEach((t, i) => {
							n.push(e.call(this, t, i));
						}),
						this.waitFor(n)
					);
				}
				static mapArray(t, e) {
					return new Fs((n, i) => {
						const r = t.length,
							s = new Array(r);
						let o = 0;
						for (let a = 0; a < r; a++) {
							const c = a;
							e(t[c]).next(
								(t) => {
									(s[c] = t), ++o, o === r && n(s);
								},
								(t) => i(t)
							);
						}
					});
				}
				static doWhile(t, e) {
					return new Fs((n, i) => {
						const r = () => {
							!0 === t()
								? e().next(() => {
										r();
								  }, i)
								: n();
						};
						r();
					});
				}
			}
			class Us {
				constructor(t, e) {
					(this.action = t),
						(this.transaction = e),
						(this.aborted = !1),
						(this.V = new us()),
						(this.transaction.oncomplete = () => {
							this.V.resolve();
						}),
						(this.transaction.onabort = () => {
							e.error ? this.V.reject(new Bs(t, e.error)) : this.V.resolve();
						}),
						(this.transaction.onerror = (e) => {
							const n = Gs(e.target.error);
							this.V.reject(new Bs(t, n));
						});
				}
				static open(t, e, n, i) {
					try {
						return new Us(e, t.transaction(i, n));
					} catch (t) {
						throw new Bs(e, t);
					}
				}
				get m() {
					return this.V.promise;
				}
				abort(t) {
					t && this.V.reject(t),
						this.aborted ||
							(ns('SimpleDb', 'Aborting transaction:', t ? t.message : 'Client-initiated abort'),
							(this.aborted = !0),
							this.transaction.abort());
				}
				g() {
					const t = this.transaction;
					this.aborted || 'function' != typeof t.commit || t.commit();
				}
				store(t) {
					const e = this.transaction.objectStore(t);
					return new qs(e);
				}
			}
			class Vs {
				constructor(t, e, n) {
					(this.name = t),
						(this.version = e),
						(this.p = n),
						12.2 === Vs.S(y()) &&
							is(
								'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.'
							);
				}
				static delete(t) {
					return ns('SimpleDb', 'Removing database:', t), $s(window.indexedDB.deleteDatabase(t)).toPromise();
				}
				static D() {
					if (!v()) return !1;
					if (Vs.C()) return !0;
					const t = y(),
						e = Vs.S(t),
						n = 0 < e && e < 10,
						i = Vs.v(t),
						r = 0 < i && i < 4.5;
					return !(t.indexOf('MSIE ') > 0 || t.indexOf('Trident/') > 0 || t.indexOf('Edge/') > 0 || n || r);
				}
				static C() {
					var t;
					return (
						'undefined' != typeof process &&
						'YES' === (null === (t = process.__PRIVATE_env) || void 0 === t ? void 0 : t.F)
					);
				}
				static M(t, e) {
					return t.store(e);
				}
				static S(t) {
					const e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
						n = e ? e[1].split('_').slice(0, 2).join('.') : '-1';
					return Number(n);
				}
				static v(t) {
					const e = t.match(/Android ([\d.]+)/i),
						n = e ? e[1].split('.').slice(0, 2).join('.') : '-1';
					return Number(n);
				}
				async O(t) {
					return (
						this.db ||
							(ns('SimpleDb', 'Opening database:', this.name),
							(this.db = await new Promise((e, n) => {
								const i = indexedDB.open(this.name, this.version);
								(i.onsuccess = (t) => {
									const n = t.target.result;
									e(n);
								}),
									(i.onblocked = () => {
										n(
											new Bs(
												t,
												'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.'
											)
										);
									}),
									(i.onerror = (e) => {
										const i = e.target.error;
										'VersionError' === i.name
											? n(
													new hs(
														ls.FAILED_PRECONDITION,
														'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.'
													)
											  )
											: 'InvalidStateError' === i.name
											? n(
													new hs(
														ls.FAILED_PRECONDITION,
														'Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: ' +
															i
													)
											  )
											: n(new Bs(t, i));
									}),
									(i.onupgradeneeded = (t) => {
										ns('SimpleDb', 'Database "' + this.name + '" requires upgrade from version:', t.oldVersion);
										const e = t.target.result;
										this.p.N(e, i.transaction, t.oldVersion, this.version).next(() => {
											ns('SimpleDb', 'Database upgrade to version ' + this.version + ' complete');
										});
									});
							}))),
						this.B && (this.db.onversionchange = (t) => this.B(t)),
						this.db
					);
				}
				L(t) {
					(this.B = t), this.db && (this.db.onversionchange = (e) => t(e));
				}
				async runTransaction(t, e, n, i) {
					const r = 'readonly' === e;
					let s = 0;
					for (;;) {
						++s;
						try {
							this.db = await this.O(t);
							const e = Us.open(this.db, t, r ? 'readonly' : 'readwrite', n),
								s = i(e)
									.next((t) => (e.g(), t))
									.catch((t) => (e.abort(t), Fs.reject(t)))
									.toPromise();
							return s.catch(() => {}), await e.m, s;
						} catch (t) {
							const e = t,
								n = 'FirebaseError' !== e.name && s < 3;
							if ((ns('SimpleDb', 'Transaction failed with error:', e.message, 'Retrying:', n), this.close(), !n))
								return Promise.reject(e);
						}
					}
				}
				close() {
					this.db && this.db.close(), (this.db = void 0);
				}
			}
			class js {
				constructor(t) {
					(this.k = t), (this.q = !1), (this.K = null);
				}
				get isDone() {
					return this.q;
				}
				get $() {
					return this.K;
				}
				set cursor(t) {
					this.k = t;
				}
				done() {
					this.q = !0;
				}
				U(t) {
					this.K = t;
				}
				delete() {
					return $s(this.k.delete());
				}
			}
			class Bs extends hs {
				constructor(t, e) {
					super(ls.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${e}`), (this.name = 'IndexedDbTransactionError');
				}
			}
			function zs(t) {
				return 'IndexedDbTransactionError' === t.name;
			}
			class qs {
				constructor(t) {
					this.store = t;
				}
				put(t, e) {
					let n;
					return (
						void 0 !== e
							? (ns('SimpleDb', 'PUT', this.store.name, t, e), (n = this.store.put(e, t)))
							: (ns('SimpleDb', 'PUT', this.store.name, '<auto-key>', t), (n = this.store.put(t))),
						$s(n)
					);
				}
				add(t) {
					return ns('SimpleDb', 'ADD', this.store.name, t, t), $s(this.store.add(t));
				}
				get(t) {
					return $s(this.store.get(t)).next(
						(e) => (void 0 === e && (e = null), ns('SimpleDb', 'GET', this.store.name, t, e), e)
					);
				}
				delete(t) {
					return ns('SimpleDb', 'DELETE', this.store.name, t), $s(this.store.delete(t));
				}
				count() {
					return ns('SimpleDb', 'COUNT', this.store.name), $s(this.store.count());
				}
				W(t, e) {
					const n = this.options(t, e),
						i = n.index ? this.store.index(n.index) : this.store;
					if ('function' == typeof i.getAll) {
						const t = i.getAll(n.range);
						return new Fs((e, n) => {
							(t.onerror = (t) => {
								n(t.target.error);
							}),
								(t.onsuccess = (t) => {
									e(t.target.result);
								});
						});
					}
					{
						const t = this.cursor(n),
							e = [];
						return this.G(t, (t, n) => {
							e.push(n);
						}).next(() => e);
					}
				}
				j(t, e) {
					const n = this.store.getAll(t, null === e ? void 0 : e);
					return new Fs((t, e) => {
						(n.onerror = (t) => {
							e(t.target.error);
						}),
							(n.onsuccess = (e) => {
								t(e.target.result);
							});
					});
				}
				H(t, e) {
					ns('SimpleDb', 'DELETE ALL', this.store.name);
					const n = this.options(t, e);
					n.J = !1;
					const i = this.cursor(n);
					return this.G(i, (t, e, n) => n.delete());
				}
				Y(t, e) {
					let n;
					e ? (n = t) : ((n = {}), (e = t));
					const i = this.cursor(n);
					return this.G(i, e);
				}
				Z(t) {
					const e = this.cursor({});
					return new Fs((n, i) => {
						(e.onerror = (t) => {
							const e = Gs(t.target.error);
							i(e);
						}),
							(e.onsuccess = (e) => {
								const i = e.target.result;
								i
									? t(i.primaryKey, i.value).next((t) => {
											t ? i.continue() : n();
									  })
									: n();
							});
					});
				}
				G(t, e) {
					const n = [];
					return new Fs((i, r) => {
						(t.onerror = (t) => {
							r(t.target.error);
						}),
							(t.onsuccess = (t) => {
								const r = t.target.result;
								if (!r) return void i();
								const s = new js(r),
									o = e(r.primaryKey, r.value, s);
								if (o instanceof Fs) {
									const t = o.catch((t) => (s.done(), Fs.reject(t)));
									n.push(t);
								}
								s.isDone ? i() : null === s.$ ? r.continue() : r.continue(s.$);
							});
					}).next(() => Fs.waitFor(n));
				}
				options(t, e) {
					let n;
					return void 0 !== t && ('string' == typeof t ? (n = t) : (e = t)), { index: n, range: e };
				}
				cursor(t) {
					let e = 'next';
					if ((t.reverse && (e = 'prev'), t.index)) {
						const n = this.store.index(t.index);
						return t.J ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
					}
					return this.store.openCursor(t.range, e);
				}
			}
			function $s(t) {
				return new Fs((e, n) => {
					(t.onsuccess = (t) => {
						const n = t.target.result;
						e(n);
					}),
						(t.onerror = (t) => {
							const e = Gs(t.target.error);
							n(e);
						});
				});
			}
			let Hs = !1;
			function Gs(t) {
				const e = Vs.S(y());
				if (e >= 12.2 && e < 13) {
					const e = 'An internal error was encountered in the Indexed Database server';
					if (t.message.indexOf(e) >= 0) {
						const t = new hs(
							'internal',
							`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`
						);
						return (
							Hs ||
								((Hs = !0),
								setTimeout(() => {
									throw t;
								}, 0)),
							t
						);
					}
				}
				return t;
			}
			class Ks {
				constructor(t, e) {
					(this.previousValue = t),
						e && ((e.sequenceNumberHandler = (t) => this.se(t)), (this.oe = (t) => e.writeSequenceNumber(t)));
				}
				se(t) {
					return (this.previousValue = Math.max(t, this.previousValue)), this.previousValue;
				}
				next() {
					const t = ++this.previousValue;
					return this.oe && this.oe(t), t;
				}
			}
			function Ws(t) {
				return null == t;
			}
			function Qs(t) {
				return 0 === t && 1 / t == -1 / 0;
			}
			Ks._e = -1;
			function Js(t) {
				let e = 0;
				for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
				return e;
			}
			function Xs(t, e) {
				for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
			}
			function Ys(t) {
				for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
				return !0;
			}
			class Zs {
				constructor(t, e) {
					(this.comparator = t), (this.root = e || eo.EMPTY);
				}
				insert(t, e) {
					return new Zs(
						this.comparator,
						this.root.insert(t, e, this.comparator).copy(null, null, eo.BLACK, null, null)
					);
				}
				remove(t) {
					return new Zs(this.comparator, this.root.remove(t, this.comparator).copy(null, null, eo.BLACK, null, null));
				}
				get(t) {
					let e = this.root;
					for (; !e.isEmpty(); ) {
						const n = this.comparator(t, e.key);
						if (0 === n) return e.value;
						n < 0 ? (e = e.left) : n > 0 && (e = e.right);
					}
					return null;
				}
				indexOf(t) {
					let e = 0,
						n = this.root;
					for (; !n.isEmpty(); ) {
						const i = this.comparator(t, n.key);
						if (0 === i) return e + n.left.size;
						i < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
					}
					return -1;
				}
				isEmpty() {
					return this.root.isEmpty();
				}
				get size() {
					return this.root.size;
				}
				minKey() {
					return this.root.minKey();
				}
				maxKey() {
					return this.root.maxKey();
				}
				inorderTraversal(t) {
					return this.root.inorderTraversal(t);
				}
				forEach(t) {
					this.inorderTraversal((e, n) => (t(e, n), !1));
				}
				toString() {
					const t = [];
					return this.inorderTraversal((e, n) => (t.push(`${e}:${n}`), !1)), `{${t.join(', ')}}`;
				}
				reverseTraversal(t) {
					return this.root.reverseTraversal(t);
				}
				getIterator() {
					return new to(this.root, null, this.comparator, !1);
				}
				getIteratorFrom(t) {
					return new to(this.root, t, this.comparator, !1);
				}
				getReverseIterator() {
					return new to(this.root, null, this.comparator, !0);
				}
				getReverseIteratorFrom(t) {
					return new to(this.root, t, this.comparator, !0);
				}
			}
			class to {
				constructor(t, e, n, i) {
					(this.isReverse = i), (this.nodeStack = []);
					let r = 1;
					for (; !t.isEmpty(); )
						if (((r = e ? n(t.key, e) : 1), e && i && (r *= -1), r < 0)) t = this.isReverse ? t.left : t.right;
						else {
							if (0 === r) {
								this.nodeStack.push(t);
								break;
							}
							this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
						}
				}
				getNext() {
					let t = this.nodeStack.pop();
					const e = { key: t.key, value: t.value };
					if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
					else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
					return e;
				}
				hasNext() {
					return this.nodeStack.length > 0;
				}
				peek() {
					if (0 === this.nodeStack.length) return null;
					const t = this.nodeStack[this.nodeStack.length - 1];
					return { key: t.key, value: t.value };
				}
			}
			class eo {
				constructor(t, e, n, i, r) {
					(this.key = t),
						(this.value = e),
						(this.color = null != n ? n : eo.RED),
						(this.left = null != i ? i : eo.EMPTY),
						(this.right = null != r ? r : eo.EMPTY),
						(this.size = this.left.size + 1 + this.right.size);
				}
				copy(t, e, n, i, r) {
					return new eo(
						null != t ? t : this.key,
						null != e ? e : this.value,
						null != n ? n : this.color,
						null != i ? i : this.left,
						null != r ? r : this.right
					);
				}
				isEmpty() {
					return !1;
				}
				inorderTraversal(t) {
					return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
				}
				reverseTraversal(t) {
					return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
				}
				min() {
					return this.left.isEmpty() ? this : this.left.min();
				}
				minKey() {
					return this.min().key;
				}
				maxKey() {
					return this.right.isEmpty() ? this.key : this.right.maxKey();
				}
				insert(t, e, n) {
					let i = this;
					const r = n(t, i.key);
					return (
						(i =
							r < 0
								? i.copy(null, null, null, i.left.insert(t, e, n), null)
								: 0 === r
								? i.copy(null, e, null, null, null)
								: i.copy(null, null, null, null, i.right.insert(t, e, n))),
						i.fixUp()
					);
				}
				removeMin() {
					if (this.left.isEmpty()) return eo.EMPTY;
					let t = this;
					return (
						t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
						(t = t.copy(null, null, null, t.left.removeMin(), null)),
						t.fixUp()
					);
				}
				remove(t, e) {
					let n,
						i = this;
					if (e(t, i.key) < 0)
						i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()),
							(i = i.copy(null, null, null, i.left.remove(t, e), null));
					else {
						if (
							(i.left.isRed() && (i = i.rotateRight()),
							i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()),
							0 === e(t, i.key))
						) {
							if (i.right.isEmpty()) return eo.EMPTY;
							(n = i.right.min()), (i = i.copy(n.key, n.value, null, null, i.right.removeMin()));
						}
						i = i.copy(null, null, null, null, i.right.remove(t, e));
					}
					return i.fixUp();
				}
				isRed() {
					return this.color;
				}
				fixUp() {
					let t = this;
					return (
						t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
						t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
						t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
						t
					);
				}
				moveRedLeft() {
					let t = this.colorFlip();
					return (
						t.right.left.isRed() &&
							((t = t.copy(null, null, null, null, t.right.rotateRight())), (t = t.rotateLeft()), (t = t.colorFlip())),
						t
					);
				}
				moveRedRight() {
					let t = this.colorFlip();
					return t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t;
				}
				rotateLeft() {
					const t = this.copy(null, null, eo.RED, null, this.right.left);
					return this.right.copy(null, null, this.color, t, null);
				}
				rotateRight() {
					const t = this.copy(null, null, eo.RED, this.left.right, null);
					return this.left.copy(null, null, this.color, null, t);
				}
				colorFlip() {
					const t = this.left.copy(null, null, !this.left.color, null, null),
						e = this.right.copy(null, null, !this.right.color, null, null);
					return this.copy(null, null, !this.color, t, e);
				}
				checkMaxDepth() {
					const t = this.check();
					return Math.pow(2, t) <= this.size + 1;
				}
				check() {
					if (this.isRed() && this.left.isRed()) throw os();
					if (this.right.isRed()) throw os();
					const t = this.left.check();
					if (t !== this.right.check()) throw os();
					return t + (this.isRed() ? 0 : 1);
				}
			}
			(eo.EMPTY = null),
				(eo.RED = !0),
				(eo.BLACK = !1),
				(eo.EMPTY = new (class {
					constructor() {
						this.size = 0;
					}
					get key() {
						throw os();
					}
					get value() {
						throw os();
					}
					get color() {
						throw os();
					}
					get left() {
						throw os();
					}
					get right() {
						throw os();
					}
					copy(t, e, n, i, r) {
						return this;
					}
					insert(t, e, n) {
						return new eo(t, e);
					}
					remove(t, e) {
						return this;
					}
					isEmpty() {
						return !0;
					}
					inorderTraversal(t) {
						return !1;
					}
					reverseTraversal(t) {
						return !1;
					}
					minKey() {
						return null;
					}
					maxKey() {
						return null;
					}
					isRed() {
						return !1;
					}
					checkMaxDepth() {
						return !0;
					}
					check() {
						return 0;
					}
				})());
			class no {
				constructor(t) {
					(this.comparator = t), (this.data = new Zs(this.comparator));
				}
				has(t) {
					return null !== this.data.get(t);
				}
				first() {
					return this.data.minKey();
				}
				last() {
					return this.data.maxKey();
				}
				get size() {
					return this.data.size;
				}
				indexOf(t) {
					return this.data.indexOf(t);
				}
				forEach(t) {
					this.data.inorderTraversal((e, n) => (t(e), !1));
				}
				forEachInRange(t, e) {
					const n = this.data.getIteratorFrom(t[0]);
					for (; n.hasNext(); ) {
						const i = n.getNext();
						if (this.comparator(i.key, t[1]) >= 0) return;
						e(i.key);
					}
				}
				forEachWhile(t, e) {
					let n;
					for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); )
						if (!t(n.getNext().key)) return;
				}
				firstAfterOrEqual(t) {
					const e = this.data.getIteratorFrom(t);
					return e.hasNext() ? e.getNext().key : null;
				}
				getIterator() {
					return new io(this.data.getIterator());
				}
				getIteratorFrom(t) {
					return new io(this.data.getIteratorFrom(t));
				}
				add(t) {
					return this.copy(this.data.remove(t).insert(t, !0));
				}
				delete(t) {
					return this.has(t) ? this.copy(this.data.remove(t)) : this;
				}
				isEmpty() {
					return this.data.isEmpty();
				}
				unionWith(t) {
					let e = this;
					return (
						e.size < t.size && ((e = t), (t = this)),
						t.forEach((t) => {
							e = e.add(t);
						}),
						e
					);
				}
				isEqual(t) {
					if (!(t instanceof no)) return !1;
					if (this.size !== t.size) return !1;
					const e = this.data.getIterator(),
						n = t.data.getIterator();
					for (; e.hasNext(); ) {
						const t = e.getNext().key,
							i = n.getNext().key;
						if (0 !== this.comparator(t, i)) return !1;
					}
					return !0;
				}
				toArray() {
					const t = [];
					return (
						this.forEach((e) => {
							t.push(e);
						}),
						t
					);
				}
				toString() {
					const t = [];
					return this.forEach((e) => t.push(e)), 'SortedSet(' + t.toString() + ')';
				}
				copy(t) {
					const e = new no(this.comparator);
					return (e.data = t), e;
				}
			}
			class io {
				constructor(t) {
					this.iter = t;
				}
				getNext() {
					return this.iter.getNext().key;
				}
				hasNext() {
					return this.iter.hasNext();
				}
			}
			class ro {
				constructor(t) {
					(this.fields = t), t.sort(xs.comparator);
				}
				static empty() {
					return new ro([]);
				}
				unionWith(t) {
					let e = new no(xs.comparator);
					for (const t of this.fields) e = e.add(t);
					for (const n of t) e = e.add(n);
					return new ro(e.toArray());
				}
				covers(t) {
					for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
					return !1;
				}
				isEqual(t) {
					return Ts(this.fields, t.fields, (t, e) => t.isEqual(e));
				}
			}
			class so extends Error {
				constructor() {
					super(...arguments), (this.name = 'Base64DecodeError');
				}
			}
			class oo {
				constructor(t) {
					this.binaryString = t;
				}
				static fromBase64String(t) {
					const e = (function (t) {
						try {
							return atob(t);
						} catch (t) {
							throw 'undefined' != typeof DOMException && t instanceof DOMException
								? new so('Invalid base64 string: ' + t)
								: t;
						}
					})(t);
					return new oo(e);
				}
				static fromUint8Array(t) {
					const e = (function (t) {
						let e = '';
						for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
						return e;
					})(t);
					return new oo(e);
				}
				[Symbol.iterator]() {
					let t = 0;
					return {
						next: () =>
							t < this.binaryString.length
								? { value: this.binaryString.charCodeAt(t++), done: !1 }
								: { value: void 0, done: !0 },
					};
				}
				toBase64() {
					return (t = this.binaryString), btoa(t);
					var t;
				}
				toUint8Array() {
					return (function (t) {
						const e = new Uint8Array(t.length);
						for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
						return e;
					})(this.binaryString);
				}
				approximateByteSize() {
					return 2 * this.binaryString.length;
				}
				compareTo(t) {
					return Es(this.binaryString, t.binaryString);
				}
				isEqual(t) {
					return this.binaryString === t.binaryString;
				}
			}
			oo.EMPTY_BYTE_STRING = new oo('');
			const ao = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
			function co(t) {
				if ((as(!!t), 'string' == typeof t)) {
					let e = 0;
					const n = ao.exec(t);
					if ((as(!!n), n[1])) {
						let t = n[1];
						(t = (t + '000000000').substr(0, 9)), (e = Number(t));
					}
					const i = new Date(t);
					return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
				}
				return { seconds: lo(t.seconds), nanos: lo(t.nanos) };
			}
			function lo(t) {
				return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0;
			}
			function ho(t) {
				return 'string' == typeof t ? oo.fromBase64String(t) : oo.fromUint8Array(t);
			}
			function uo(t) {
				var e, n;
				return (
					'server_timestamp' ===
					(null ===
						(n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {})
							.__type__) || void 0 === n
						? void 0
						: n.stringValue)
				);
			}
			function po(t) {
				const e = t.mapValue.fields.__previous_value__;
				return uo(e) ? po(e) : e;
			}
			function fo(t) {
				const e = co(t.mapValue.fields.__local_write_time__.timestampValue);
				return new Is(e.seconds, e.nanos);
			}
			class mo {
				constructor(t, e, n, i, r, s, o, a, c) {
					(this.databaseId = t),
						(this.appId = e),
						(this.persistenceKey = n),
						(this.host = i),
						(this.ssl = r),
						(this.forceLongPolling = s),
						(this.autoDetectLongPolling = o),
						(this.longPollingOptions = a),
						(this.useFetchStreams = c);
				}
			}
			class go {
				constructor(t, e) {
					(this.projectId = t), (this.database = e || '(default)');
				}
				static empty() {
					return new go('', '');
				}
				get isDefaultDatabase() {
					return '(default)' === this.database;
				}
				isEqual(t) {
					return t instanceof go && t.projectId === this.projectId && t.database === this.database;
				}
			}
			const yo = { mapValue: { fields: { __type__: { stringValue: '__max__' } } } };
			function vo(t) {
				return 'nullValue' in t
					? 0
					: 'booleanValue' in t
					? 1
					: 'integerValue' in t || 'doubleValue' in t
					? 2
					: 'timestampValue' in t
					? 3
					: 'stringValue' in t
					? 5
					: 'bytesValue' in t
					? 6
					: 'referenceValue' in t
					? 7
					: 'geoPointValue' in t
					? 8
					: 'arrayValue' in t
					? 9
					: 'mapValue' in t
					? uo(t)
						? 4
						: No(t)
						? 9007199254740991
						: 10
					: os();
			}
			function wo(t, e) {
				if (t === e) return !0;
				const n = vo(t);
				if (n !== vo(e)) return !1;
				switch (n) {
					case 0:
					case 9007199254740991:
						return !0;
					case 1:
						return t.booleanValue === e.booleanValue;
					case 4:
						return fo(t).isEqual(fo(e));
					case 3:
						return (function (t, e) {
							if (
								'string' == typeof t.timestampValue &&
								'string' == typeof e.timestampValue &&
								t.timestampValue.length === e.timestampValue.length
							)
								return t.timestampValue === e.timestampValue;
							const n = co(t.timestampValue),
								i = co(e.timestampValue);
							return n.seconds === i.seconds && n.nanos === i.nanos;
						})(t, e);
					case 5:
						return t.stringValue === e.stringValue;
					case 6:
						return (function (t, e) {
							return ho(t.bytesValue).isEqual(ho(e.bytesValue));
						})(t, e);
					case 7:
						return t.referenceValue === e.referenceValue;
					case 8:
						return (function (t, e) {
							return (
								lo(t.geoPointValue.latitude) === lo(e.geoPointValue.latitude) &&
								lo(t.geoPointValue.longitude) === lo(e.geoPointValue.longitude)
							);
						})(t, e);
					case 2:
						return (function (t, e) {
							if ('integerValue' in t && 'integerValue' in e) return lo(t.integerValue) === lo(e.integerValue);
							if ('doubleValue' in t && 'doubleValue' in e) {
								const n = lo(t.doubleValue),
									i = lo(e.doubleValue);
								return n === i ? Qs(n) === Qs(i) : isNaN(n) && isNaN(i);
							}
							return !1;
						})(t, e);
					case 9:
						return Ts(t.arrayValue.values || [], e.arrayValue.values || [], wo);
					case 10:
						return (function (t, e) {
							const n = t.mapValue.fields || {},
								i = e.mapValue.fields || {};
							if (Js(n) !== Js(i)) return !1;
							for (const t in n) if (n.hasOwnProperty(t) && (void 0 === i[t] || !wo(n[t], i[t]))) return !1;
							return !0;
						})(t, e);
					default:
						return os();
				}
			}
			function bo(t, e) {
				return void 0 !== (t.values || []).find((t) => wo(t, e));
			}
			function _o(t, e) {
				if (t === e) return 0;
				const n = vo(t),
					i = vo(e);
				if (n !== i) return Es(n, i);
				switch (n) {
					case 0:
					case 9007199254740991:
						return 0;
					case 1:
						return Es(t.booleanValue, e.booleanValue);
					case 2:
						return (function (t, e) {
							const n = lo(t.integerValue || t.doubleValue),
								i = lo(e.integerValue || e.doubleValue);
							return n < i ? -1 : n > i ? 1 : n === i ? 0 : isNaN(n) ? (isNaN(i) ? 0 : -1) : 1;
						})(t, e);
					case 3:
						return Eo(t.timestampValue, e.timestampValue);
					case 4:
						return Eo(fo(t), fo(e));
					case 5:
						return Es(t.stringValue, e.stringValue);
					case 6:
						return (function (t, e) {
							const n = ho(t),
								i = ho(e);
							return n.compareTo(i);
						})(t.bytesValue, e.bytesValue);
					case 7:
						return (function (t, e) {
							const n = t.split('/'),
								i = e.split('/');
							for (let t = 0; t < n.length && t < i.length; t++) {
								const e = Es(n[t], i[t]);
								if (0 !== e) return e;
							}
							return Es(n.length, i.length);
						})(t.referenceValue, e.referenceValue);
					case 8:
						return (function (t, e) {
							const n = Es(lo(t.latitude), lo(e.latitude));
							return 0 !== n ? n : Es(lo(t.longitude), lo(e.longitude));
						})(t.geoPointValue, e.geoPointValue);
					case 9:
						return (function (t, e) {
							const n = t.values || [],
								i = e.values || [];
							for (let t = 0; t < n.length && t < i.length; ++t) {
								const e = _o(n[t], i[t]);
								if (e) return e;
							}
							return Es(n.length, i.length);
						})(t.arrayValue, e.arrayValue);
					case 10:
						return (function (t, e) {
							if (t === yo.mapValue && e === yo.mapValue) return 0;
							if (t === yo.mapValue) return 1;
							if (e === yo.mapValue) return -1;
							const n = t.fields || {},
								i = Object.keys(n),
								r = e.fields || {},
								s = Object.keys(r);
							i.sort(), s.sort();
							for (let t = 0; t < i.length && t < s.length; ++t) {
								const e = Es(i[t], s[t]);
								if (0 !== e) return e;
								const o = _o(n[i[t]], r[s[t]]);
								if (0 !== o) return o;
							}
							return Es(i.length, s.length);
						})(t.mapValue, e.mapValue);
					default:
						throw os();
				}
			}
			function Eo(t, e) {
				if ('string' == typeof t && 'string' == typeof e && t.length === e.length) return Es(t, e);
				const n = co(t),
					i = co(e),
					r = Es(n.seconds, i.seconds);
				return 0 !== r ? r : Es(n.nanos, i.nanos);
			}
			function To(t) {
				return Io(t);
			}
			function Io(t) {
				return 'nullValue' in t
					? 'null'
					: 'booleanValue' in t
					? '' + t.booleanValue
					: 'integerValue' in t
					? '' + t.integerValue
					: 'doubleValue' in t
					? '' + t.doubleValue
					: 'timestampValue' in t
					? (function (t) {
							const e = co(t);
							return `time(${e.seconds},${e.nanos})`;
					  })(t.timestampValue)
					: 'stringValue' in t
					? t.stringValue
					: 'bytesValue' in t
					? (function (t) {
							return ho(t).toBase64();
					  })(t.bytesValue)
					: 'referenceValue' in t
					? (function (t) {
							return Rs.fromName(t).toString();
					  })(t.referenceValue)
					: 'geoPointValue' in t
					? (function (t) {
							return `geo(${t.latitude},${t.longitude})`;
					  })(t.geoPointValue)
					: 'arrayValue' in t
					? (function (t) {
							let e = '[',
								n = !0;
							for (const i of t.values || []) n ? (n = !1) : (e += ','), (e += Io(i));
							return e + ']';
					  })(t.arrayValue)
					: 'mapValue' in t
					? (function (t) {
							const e = Object.keys(t.fields || {}).sort();
							let n = '{',
								i = !0;
							for (const r of e) i ? (i = !1) : (n += ','), (n += `${r}:${Io(t.fields[r])}`);
							return n + '}';
					  })(t.mapValue)
					: os();
			}
			function So(t) {
				return !!t && 'integerValue' in t;
			}
			function Co(t) {
				return !!t && 'arrayValue' in t;
			}
			function ko(t) {
				return !!t && 'nullValue' in t;
			}
			function Ao(t) {
				return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
			}
			function xo(t) {
				return !!t && 'mapValue' in t;
			}
			function Ro(t) {
				if (t.geoPointValue) return { geoPointValue: Object.assign({}, t.geoPointValue) };
				if (t.timestampValue && 'object' == typeof t.timestampValue)
					return { timestampValue: Object.assign({}, t.timestampValue) };
				if (t.mapValue) {
					const e = { mapValue: { fields: {} } };
					return Xs(t.mapValue.fields, (t, n) => (e.mapValue.fields[t] = Ro(n))), e;
				}
				if (t.arrayValue) {
					const e = { arrayValue: { values: [] } };
					for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
						e.arrayValue.values[n] = Ro(t.arrayValue.values[n]);
					return e;
				}
				return Object.assign({}, t);
			}
			function No(t) {
				return '__max__' === (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue;
			}
			class Do {
				constructor(t) {
					this.value = t;
				}
				static empty() {
					return new Do({ mapValue: {} });
				}
				field(t) {
					if (t.isEmpty()) return this.value;
					{
						let e = this.value;
						for (let n = 0; n < t.length - 1; ++n) if (((e = (e.mapValue.fields || {})[t.get(n)]), !xo(e))) return null;
						return (e = (e.mapValue.fields || {})[t.lastSegment()]), e || null;
					}
				}
				set(t, e) {
					this.getFieldsMap(t.popLast())[t.lastSegment()] = Ro(e);
				}
				setAll(t) {
					let e = xs.emptyPath(),
						n = {},
						i = [];
					t.forEach((t, r) => {
						if (!e.isImmediateParentOf(r)) {
							const t = this.getFieldsMap(e);
							this.applyChanges(t, n, i), (n = {}), (i = []), (e = r.popLast());
						}
						t ? (n[r.lastSegment()] = Ro(t)) : i.push(r.lastSegment());
					});
					const r = this.getFieldsMap(e);
					this.applyChanges(r, n, i);
				}
				delete(t) {
					const e = this.field(t.popLast());
					xo(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
				}
				isEqual(t) {
					return wo(this.value, t.value);
				}
				getFieldsMap(t) {
					let e = this.value;
					e.mapValue.fields || (e.mapValue = { fields: {} });
					for (let n = 0; n < t.length; ++n) {
						let i = e.mapValue.fields[t.get(n)];
						(xo(i) && i.mapValue.fields) || ((i = { mapValue: { fields: {} } }), (e.mapValue.fields[t.get(n)] = i)),
							(e = i);
					}
					return e.mapValue.fields;
				}
				applyChanges(t, e, n) {
					Xs(e, (e, n) => (t[e] = n));
					for (const e of n) delete t[e];
				}
				clone() {
					return new Do(Ro(this.value));
				}
			}
			function Lo(t) {
				const e = [];
				return (
					Xs(t.fields, (t, n) => {
						const i = new xs([t]);
						if (xo(n)) {
							const t = Lo(n.mapValue).fields;
							if (0 === t.length) e.push(i);
							else for (const n of t) e.push(i.child(n));
						} else e.push(i);
					}),
					new ro(e)
				);
			}
			class Oo {
				constructor(t, e, n, i, r, s, o) {
					(this.key = t),
						(this.documentType = e),
						(this.version = n),
						(this.readTime = i),
						(this.createTime = r),
						(this.data = s),
						(this.documentState = o);
				}
				static newInvalidDocument(t) {
					return new Oo(t, 0, Ss.min(), Ss.min(), Ss.min(), Do.empty(), 0);
				}
				static newFoundDocument(t, e, n, i) {
					return new Oo(t, 1, e, Ss.min(), n, i, 0);
				}
				static newNoDocument(t, e) {
					return new Oo(t, 2, e, Ss.min(), Ss.min(), Do.empty(), 0);
				}
				static newUnknownDocument(t, e) {
					return new Oo(t, 3, e, Ss.min(), Ss.min(), Do.empty(), 2);
				}
				convertToFoundDocument(t, e) {
					return (
						!this.createTime.isEqual(Ss.min()) ||
							(2 !== this.documentType && 0 !== this.documentType) ||
							(this.createTime = t),
						(this.version = t),
						(this.documentType = 1),
						(this.data = e),
						(this.documentState = 0),
						this
					);
				}
				convertToNoDocument(t) {
					return (this.version = t), (this.documentType = 2), (this.data = Do.empty()), (this.documentState = 0), this;
				}
				convertToUnknownDocument(t) {
					return (this.version = t), (this.documentType = 3), (this.data = Do.empty()), (this.documentState = 2), this;
				}
				setHasCommittedMutations() {
					return (this.documentState = 2), this;
				}
				setHasLocalMutations() {
					return (this.documentState = 1), (this.version = Ss.min()), this;
				}
				setReadTime(t) {
					return (this.readTime = t), this;
				}
				get hasLocalMutations() {
					return 1 === this.documentState;
				}
				get hasCommittedMutations() {
					return 2 === this.documentState;
				}
				get hasPendingWrites() {
					return this.hasLocalMutations || this.hasCommittedMutations;
				}
				isValidDocument() {
					return 0 !== this.documentType;
				}
				isFoundDocument() {
					return 1 === this.documentType;
				}
				isNoDocument() {
					return 2 === this.documentType;
				}
				isUnknownDocument() {
					return 3 === this.documentType;
				}
				isEqual(t) {
					return (
						t instanceof Oo &&
						this.key.isEqual(t.key) &&
						this.version.isEqual(t.version) &&
						this.documentType === t.documentType &&
						this.documentState === t.documentState &&
						this.data.isEqual(t.data)
					);
				}
				mutableCopy() {
					return new Oo(
						this.key,
						this.documentType,
						this.version,
						this.readTime,
						this.createTime,
						this.data.clone(),
						this.documentState
					);
				}
				toString() {
					return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${
						this.createTime
					}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
				}
			}
			class Mo {
				constructor(t, e) {
					(this.position = t), (this.inclusive = e);
				}
			}
			function Po(t, e, n) {
				let i = 0;
				for (let r = 0; r < t.position.length; r++) {
					const s = e[r],
						o = t.position[r];
					if (
						((i = s.field.isKeyField()
							? Rs.comparator(Rs.fromName(o.referenceValue), n.key)
							: _o(o, n.data.field(s.field))),
						'desc' === s.dir && (i *= -1),
						0 !== i)
					)
						break;
				}
				return i;
			}
			function Fo(t, e) {
				if (null === t) return null === e;
				if (null === e) return !1;
				if (t.inclusive !== e.inclusive || t.position.length !== e.position.length) return !1;
				for (let n = 0; n < t.position.length; n++) if (!wo(t.position[n], e.position[n])) return !1;
				return !0;
			}
			class Uo {
				constructor(t, e = 'asc') {
					(this.field = t), (this.dir = e);
				}
			}
			function Vo(t, e) {
				return t.dir === e.dir && t.field.isEqual(e.field);
			}
			class jo {}
			class Bo extends jo {
				constructor(t, e, n) {
					super(), (this.field = t), (this.op = e), (this.value = n);
				}
				static create(t, e, n) {
					return t.isKeyField()
						? 'in' === e || 'not-in' === e
							? this.createKeyFieldInFilter(t, e, n)
							: new Wo(t, e, n)
						: 'array-contains' === e
						? new Yo(t, n)
						: 'in' === e
						? new Zo(t, n)
						: 'not-in' === e
						? new ta(t, n)
						: 'array-contains-any' === e
						? new ea(t, n)
						: new Bo(t, e, n);
				}
				static createKeyFieldInFilter(t, e, n) {
					return 'in' === e ? new Qo(t, n) : new Jo(t, n);
				}
				matches(t) {
					const e = t.data.field(this.field);
					return '!=' === this.op
						? null !== e && this.matchesComparison(_o(e, this.value))
						: null !== e && vo(this.value) === vo(e) && this.matchesComparison(_o(e, this.value));
				}
				matchesComparison(t) {
					switch (this.op) {
						case '<':
							return t < 0;
						case '<=':
							return t <= 0;
						case '==':
							return 0 === t;
						case '!=':
							return 0 !== t;
						case '>':
							return t > 0;
						case '>=':
							return t >= 0;
						default:
							return os();
					}
				}
				isInequality() {
					return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
				}
				getFlattenedFilters() {
					return [this];
				}
				getFilters() {
					return [this];
				}
			}
			class zo extends jo {
				constructor(t, e) {
					super(), (this.filters = t), (this.op = e), (this.ue = null);
				}
				static create(t, e) {
					return new zo(t, e);
				}
				matches(t) {
					return qo(this)
						? void 0 === this.filters.find((e) => !e.matches(t))
						: void 0 !== this.filters.find((e) => e.matches(t));
				}
				getFlattenedFilters() {
					return (
						null !== this.ue || (this.ue = this.filters.reduce((t, e) => t.concat(e.getFlattenedFilters()), [])),
						this.ue
					);
				}
				getFilters() {
					return Object.assign([], this.filters);
				}
			}
			function qo(t) {
				return 'and' === t.op;
			}
			function $o(t) {
				return (
					(function (t) {
						for (const e of t.filters) if (e instanceof zo) return !1;
						return !0;
					})(t) && qo(t)
				);
			}
			function Ho(t) {
				if (t instanceof Bo) return t.field.canonicalString() + t.op.toString() + To(t.value);
				if ($o(t)) return t.filters.map((t) => Ho(t)).join(',');
				{
					const e = t.filters.map((t) => Ho(t)).join(',');
					return `${t.op}(${e})`;
				}
			}
			function Go(t, e) {
				return t instanceof Bo
					? (function (t, e) {
							return e instanceof Bo && t.op === e.op && t.field.isEqual(e.field) && wo(t.value, e.value);
					  })(t, e)
					: t instanceof zo
					? (function (t, e) {
							return (
								e instanceof zo &&
								t.op === e.op &&
								t.filters.length === e.filters.length &&
								t.filters.reduce((t, n, i) => t && Go(n, e.filters[i]), !0)
							);
					  })(t, e)
					: void os();
			}
			function Ko(t) {
				return t instanceof Bo
					? (function (t) {
							return `${t.field.canonicalString()} ${t.op} ${To(t.value)}`;
					  })(t)
					: t instanceof zo
					? (function (t) {
							return t.op.toString() + ' {' + t.getFilters().map(Ko).join(' ,') + '}';
					  })(t)
					: 'Filter';
			}
			class Wo extends Bo {
				constructor(t, e, n) {
					super(t, e, n), (this.key = Rs.fromName(n.referenceValue));
				}
				matches(t) {
					const e = Rs.comparator(t.key, this.key);
					return this.matchesComparison(e);
				}
			}
			class Qo extends Bo {
				constructor(t, e) {
					super(t, 'in', e), (this.keys = Xo(0, e));
				}
				matches(t) {
					return this.keys.some((e) => e.isEqual(t.key));
				}
			}
			class Jo extends Bo {
				constructor(t, e) {
					super(t, 'not-in', e), (this.keys = Xo(0, e));
				}
				matches(t) {
					return !this.keys.some((e) => e.isEqual(t.key));
				}
			}
			function Xo(t, e) {
				var n;
				return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t) =>
					Rs.fromName(t.referenceValue)
				);
			}
			class Yo extends Bo {
				constructor(t, e) {
					super(t, 'array-contains', e);
				}
				matches(t) {
					const e = t.data.field(this.field);
					return Co(e) && bo(e.arrayValue, this.value);
				}
			}
			class Zo extends Bo {
				constructor(t, e) {
					super(t, 'in', e);
				}
				matches(t) {
					const e = t.data.field(this.field);
					return null !== e && bo(this.value.arrayValue, e);
				}
			}
			class ta extends Bo {
				constructor(t, e) {
					super(t, 'not-in', e);
				}
				matches(t) {
					if (bo(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
					const e = t.data.field(this.field);
					return null !== e && !bo(this.value.arrayValue, e);
				}
			}
			class ea extends Bo {
				constructor(t, e) {
					super(t, 'array-contains-any', e);
				}
				matches(t) {
					const e = t.data.field(this.field);
					return !(!Co(e) || !e.arrayValue.values) && e.arrayValue.values.some((t) => bo(this.value.arrayValue, t));
				}
			}
			class na {
				constructor(t, e = null, n = [], i = [], r = null, s = null, o = null) {
					(this.path = t),
						(this.collectionGroup = e),
						(this.orderBy = n),
						(this.filters = i),
						(this.limit = r),
						(this.startAt = s),
						(this.endAt = o),
						(this.ce = null);
				}
			}
			function ia(t, e = null, n = [], i = [], r = null, s = null, o = null) {
				return new na(t, e, n, i, r, s, o);
			}
			function ra(t) {
				const e = cs(t);
				if (null === e.ce) {
					let t = e.path.canonicalString();
					null !== e.collectionGroup && (t += '|cg:' + e.collectionGroup),
						(t += '|f:'),
						(t += e.filters.map((t) => Ho(t)).join(',')),
						(t += '|ob:'),
						(t += e.orderBy
							.map((t) =>
								(function (t) {
									return t.field.canonicalString() + t.dir;
								})(t)
							)
							.join(',')),
						Ws(e.limit) || ((t += '|l:'), (t += e.limit)),
						e.startAt &&
							((t += '|lb:'),
							(t += e.startAt.inclusive ? 'b:' : 'a:'),
							(t += e.startAt.position.map((t) => To(t)).join(','))),
						e.endAt &&
							((t += '|ub:'),
							(t += e.endAt.inclusive ? 'a:' : 'b:'),
							(t += e.endAt.position.map((t) => To(t)).join(','))),
						(e.ce = t);
				}
				return e.ce;
			}
			function sa(t, e) {
				if (t.limit !== e.limit) return !1;
				if (t.orderBy.length !== e.orderBy.length) return !1;
				for (let n = 0; n < t.orderBy.length; n++) if (!Vo(t.orderBy[n], e.orderBy[n])) return !1;
				if (t.filters.length !== e.filters.length) return !1;
				for (let n = 0; n < t.filters.length; n++) if (!Go(t.filters[n], e.filters[n])) return !1;
				return (
					t.collectionGroup === e.collectionGroup &&
					!!t.path.isEqual(e.path) &&
					!!Fo(t.startAt, e.startAt) &&
					Fo(t.endAt, e.endAt)
				);
			}
			function oa(t) {
				return Rs.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
			}
			class aa {
				constructor(t, e = null, n = [], i = [], r = null, s = 'F', o = null, a = null) {
					(this.path = t),
						(this.collectionGroup = e),
						(this.explicitOrderBy = n),
						(this.filters = i),
						(this.limit = r),
						(this.limitType = s),
						(this.startAt = o),
						(this.endAt = a),
						(this.le = null),
						(this.he = null),
						(this.Pe = null),
						this.startAt,
						this.endAt;
				}
			}
			function ca(t) {
				return new aa(t);
			}
			function la(t) {
				return (
					0 === t.filters.length &&
					null === t.limit &&
					null == t.startAt &&
					null == t.endAt &&
					(0 === t.explicitOrderBy.length ||
						(1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField()))
				);
			}
			function ha(t) {
				const e = cs(t);
				if (null === e.le) {
					e.le = [];
					const t = new Set();
					for (const n of e.explicitOrderBy) e.le.push(n), t.add(n.field.canonicalString());
					const n = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : 'asc',
						i = (function (t) {
							let e = new no(xs.comparator);
							return (
								t.filters.forEach((t) => {
									t.getFlattenedFilters().forEach((t) => {
										t.isInequality() && (e = e.add(t.field));
									});
								}),
								e
							);
						})(e);
					i.forEach((i) => {
						t.has(i.canonicalString()) || i.isKeyField() || e.le.push(new Uo(i, n));
					}),
						t.has(xs.keyField().canonicalString()) || e.le.push(new Uo(xs.keyField(), n));
				}
				return e.le;
			}
			function ua(t) {
				const e = cs(t);
				return (
					e.he ||
						(e.he = (function (t, e) {
							if ('F' === t.limitType) return ia(t.path, t.collectionGroup, e, t.filters, t.limit, t.startAt, t.endAt);
							{
								e = e.map((t) => {
									const e = 'desc' === t.dir ? 'asc' : 'desc';
									return new Uo(t.field, e);
								});
								const n = t.endAt ? new Mo(t.endAt.position, t.endAt.inclusive) : null,
									i = t.startAt ? new Mo(t.startAt.position, t.startAt.inclusive) : null;
								return ia(t.path, t.collectionGroup, e, t.filters, t.limit, n, i);
							}
						})(e, ha(t))),
					e.he
				);
			}
			function da(t, e, n) {
				return new aa(
					t.path,
					t.collectionGroup,
					t.explicitOrderBy.slice(),
					t.filters.slice(),
					e,
					n,
					t.startAt,
					t.endAt
				);
			}
			function pa(t, e) {
				return sa(ua(t), ua(e)) && t.limitType === e.limitType;
			}
			function fa(t) {
				return `${ra(ua(t))}|lt:${t.limitType}`;
			}
			function ma(t) {
				return `Query(target=${(function (t) {
					let e = t.path.canonicalString();
					return (
						null !== t.collectionGroup && (e += ' collectionGroup=' + t.collectionGroup),
						t.filters.length > 0 && (e += `, filters: [${t.filters.map((t) => Ko(t)).join(', ')}]`),
						Ws(t.limit) || (e += ', limit: ' + t.limit),
						t.orderBy.length > 0 &&
							(e += `, orderBy: [${t.orderBy
								.map((t) =>
									(function (t) {
										return `${t.field.canonicalString()} (${t.dir})`;
									})(t)
								)
								.join(', ')}]`),
						t.startAt &&
							((e += ', startAt: '),
							(e += t.startAt.inclusive ? 'b:' : 'a:'),
							(e += t.startAt.position.map((t) => To(t)).join(','))),
						t.endAt &&
							((e += ', endAt: '),
							(e += t.endAt.inclusive ? 'a:' : 'b:'),
							(e += t.endAt.position.map((t) => To(t)).join(','))),
						`Target(${e})`
					);
				})(ua(t))}; limitType=${t.limitType})`;
			}
			function ga(t, e) {
				return (
					e.isFoundDocument() &&
					(function (t, e) {
						const n = e.key.path;
						return null !== t.collectionGroup
							? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n)
							: Rs.isDocumentKey(t.path)
							? t.path.isEqual(n)
							: t.path.isImmediateParentOf(n);
					})(t, e) &&
					(function (t, e) {
						for (const n of ha(t)) if (!n.field.isKeyField() && null === e.data.field(n.field)) return !1;
						return !0;
					})(t, e) &&
					(function (t, e) {
						for (const n of t.filters) if (!n.matches(e)) return !1;
						return !0;
					})(t, e) &&
					(function (t, e) {
						return !(
							(t.startAt &&
								!(function (t, e, n) {
									const i = Po(t, e, n);
									return t.inclusive ? i <= 0 : i < 0;
								})(t.startAt, ha(t), e)) ||
							(t.endAt &&
								!(function (t, e, n) {
									const i = Po(t, e, n);
									return t.inclusive ? i >= 0 : i > 0;
								})(t.endAt, ha(t), e))
						);
					})(t, e)
				);
			}
			function ya(t) {
				return (e, n) => {
					let i = !1;
					for (const r of ha(t)) {
						const t = va(r, e, n);
						if (0 !== t) return t;
						i = i || r.field.isKeyField();
					}
					return 0;
				};
			}
			function va(t, e, n) {
				const i = t.field.isKeyField()
					? Rs.comparator(e.key, n.key)
					: (function (t, e, n) {
							const i = e.data.field(t),
								r = n.data.field(t);
							return null !== i && null !== r ? _o(i, r) : os();
					  })(t.field, e, n);
				switch (t.dir) {
					case 'asc':
						return i;
					case 'desc':
						return -1 * i;
					default:
						return os();
				}
			}
			class wa {
				constructor(t, e) {
					(this.mapKeyFn = t), (this.equalsFn = e), (this.inner = {}), (this.innerSize = 0);
				}
				get(t) {
					const e = this.mapKeyFn(t),
						n = this.inner[e];
					if (void 0 !== n) for (const [e, i] of n) if (this.equalsFn(e, t)) return i;
				}
				has(t) {
					return void 0 !== this.get(t);
				}
				set(t, e) {
					const n = this.mapKeyFn(t),
						i = this.inner[n];
					if (void 0 === i) return (this.inner[n] = [[t, e]]), void this.innerSize++;
					for (let n = 0; n < i.length; n++) if (this.equalsFn(i[n][0], t)) return void (i[n] = [t, e]);
					i.push([t, e]), this.innerSize++;
				}
				delete(t) {
					const e = this.mapKeyFn(t),
						n = this.inner[e];
					if (void 0 === n) return !1;
					for (let i = 0; i < n.length; i++)
						if (this.equalsFn(n[i][0], t))
							return 1 === n.length ? delete this.inner[e] : n.splice(i, 1), this.innerSize--, !0;
					return !1;
				}
				forEach(t) {
					Xs(this.inner, (e, n) => {
						for (const [e, i] of n) t(e, i);
					});
				}
				isEmpty() {
					return Ys(this.inner);
				}
				size() {
					return this.innerSize;
				}
			}
			const ba = new Zs(Rs.comparator);
			function _a() {
				return ba;
			}
			const Ea = new Zs(Rs.comparator);
			function Ta(...t) {
				let e = Ea;
				for (const n of t) e = e.insert(n.key, n);
				return e;
			}
			function Ia(t) {
				let e = Ea;
				return t.forEach((t, n) => (e = e.insert(t, n.overlayedDocument))), e;
			}
			function Sa() {
				return ka();
			}
			function Ca() {
				return ka();
			}
			function ka() {
				return new wa(
					(t) => t.toString(),
					(t, e) => t.isEqual(e)
				);
			}
			const Aa = new Zs(Rs.comparator),
				xa = new no(Rs.comparator);
			function Ra(...t) {
				let e = xa;
				for (const n of t) e = e.add(n);
				return e;
			}
			const Na = new no(Es);
			function Da(t, e) {
				if (t.useProto3Json) {
					if (isNaN(e)) return { doubleValue: 'NaN' };
					if (e === 1 / 0) return { doubleValue: 'Infinity' };
					if (e === -1 / 0) return { doubleValue: '-Infinity' };
				}
				return { doubleValue: Qs(e) ? '-0' : e };
			}
			function La(t) {
				return { integerValue: '' + t };
			}
			function Oa(t, e) {
				return (function (t) {
					return (
						'number' == typeof t &&
						Number.isInteger(t) &&
						!Qs(t) &&
						t <= Number.MAX_SAFE_INTEGER &&
						t >= Number.MIN_SAFE_INTEGER
					);
				})(e)
					? La(e)
					: Da(t, e);
			}
			class Ma {
				constructor() {
					this._ = void 0;
				}
			}
			function Pa(t, e, n) {
				return t instanceof Va
					? (function (t, e) {
							const n = {
								fields: {
									__type__: { stringValue: 'server_timestamp' },
									__local_write_time__: { timestampValue: { seconds: t.seconds, nanos: t.nanoseconds } },
								},
							};
							return e && uo(e) && (e = po(e)), e && (n.fields.__previous_value__ = e), { mapValue: n };
					  })(n, e)
					: t instanceof ja
					? Ba(t, e)
					: t instanceof za
					? qa(t, e)
					: (function (t, e) {
							const n = Ua(t, e),
								i = Ha(n) + Ha(t.Ie);
							return So(n) && So(t.Ie) ? La(i) : Da(t.serializer, i);
					  })(t, e);
			}
			function Fa(t, e, n) {
				return t instanceof ja ? Ba(t, e) : t instanceof za ? qa(t, e) : n;
			}
			function Ua(t, e) {
				return t instanceof $a
					? (function (t) {
							return (
								So(t) ||
								(function (t) {
									return !!t && 'doubleValue' in t;
								})(t)
							);
					  })(e)
						? e
						: { integerValue: 0 }
					: null;
			}
			class Va extends Ma {}
			class ja extends Ma {
				constructor(t) {
					super(), (this.elements = t);
				}
			}
			function Ba(t, e) {
				const n = Ga(e);
				for (const e of t.elements) n.some((t) => wo(t, e)) || n.push(e);
				return { arrayValue: { values: n } };
			}
			class za extends Ma {
				constructor(t) {
					super(), (this.elements = t);
				}
			}
			function qa(t, e) {
				let n = Ga(e);
				for (const e of t.elements) n = n.filter((t) => !wo(t, e));
				return { arrayValue: { values: n } };
			}
			class $a extends Ma {
				constructor(t, e) {
					super(), (this.serializer = t), (this.Ie = e);
				}
			}
			function Ha(t) {
				return lo(t.integerValue || t.doubleValue);
			}
			function Ga(t) {
				return Co(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
			}
			class Ka {
				constructor(t, e) {
					(this.version = t), (this.transformResults = e);
				}
			}
			class Wa {
				constructor(t, e) {
					(this.updateTime = t), (this.exists = e);
				}
				static none() {
					return new Wa();
				}
				static exists(t) {
					return new Wa(void 0, t);
				}
				static updateTime(t) {
					return new Wa(t);
				}
				get isNone() {
					return void 0 === this.updateTime && void 0 === this.exists;
				}
				isEqual(t) {
					return (
						this.exists === t.exists &&
						(this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
					);
				}
			}
			function Qa(t, e) {
				return void 0 !== t.updateTime
					? e.isFoundDocument() && e.version.isEqual(t.updateTime)
					: void 0 === t.exists || t.exists === e.isFoundDocument();
			}
			class Ja {}
			function Xa(t, e) {
				if (!t.hasLocalMutations || (e && 0 === e.fields.length)) return null;
				if (null === e) return t.isNoDocument() ? new ac(t.key, Wa.none()) : new nc(t.key, t.data, Wa.none());
				{
					const n = t.data,
						i = Do.empty();
					let r = new no(xs.comparator);
					for (let t of e.fields)
						if (!r.has(t)) {
							let e = n.field(t);
							null === e && t.length > 1 && ((t = t.popLast()), (e = n.field(t))),
								null === e ? i.delete(t) : i.set(t, e),
								(r = r.add(t));
						}
					return new ic(t.key, i, new ro(r.toArray()), Wa.none());
				}
			}
			function Ya(t, e, n) {
				t instanceof nc
					? (function (t, e, n) {
							const i = t.value.clone(),
								r = sc(t.fieldTransforms, e, n.transformResults);
							i.setAll(r), e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
					  })(t, e, n)
					: t instanceof ic
					? (function (t, e, n) {
							if (!Qa(t.precondition, e)) return void e.convertToUnknownDocument(n.version);
							const i = sc(t.fieldTransforms, e, n.transformResults),
								r = e.data;
							r.setAll(rc(t)), r.setAll(i), e.convertToFoundDocument(n.version, r).setHasCommittedMutations();
					  })(t, e, n)
					: (function (t, e, n) {
							e.convertToNoDocument(n.version).setHasCommittedMutations();
					  })(0, e, n);
			}
			function Za(t, e, n, i) {
				return t instanceof nc
					? (function (t, e, n, i) {
							if (!Qa(t.precondition, e)) return n;
							const r = t.value.clone(),
								s = oc(t.fieldTransforms, i, e);
							return r.setAll(s), e.convertToFoundDocument(e.version, r).setHasLocalMutations(), null;
					  })(t, e, n, i)
					: t instanceof ic
					? (function (t, e, n, i) {
							if (!Qa(t.precondition, e)) return n;
							const r = oc(t.fieldTransforms, i, e),
								s = e.data;
							return (
								s.setAll(rc(t)),
								s.setAll(r),
								e.convertToFoundDocument(e.version, s).setHasLocalMutations(),
								null === n ? null : n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t) => t.field))
							);
					  })(t, e, n, i)
					: (function (t, e, n) {
							return Qa(t.precondition, e) ? (e.convertToNoDocument(e.version).setHasLocalMutations(), null) : n;
					  })(t, e, n);
			}
			function tc(t, e) {
				let n = null;
				for (const i of t.fieldTransforms) {
					const t = e.data.field(i.field),
						r = Ua(i.transform, t || null);
					null != r && (null === n && (n = Do.empty()), n.set(i.field, r));
				}
				return n || null;
			}
			function ec(t, e) {
				return (
					t.type === e.type &&
					!!t.key.isEqual(e.key) &&
					!!t.precondition.isEqual(e.precondition) &&
					!!(function (t, e) {
						return (
							(void 0 === t && void 0 === e) ||
							(!(!t || !e) &&
								Ts(t, e, (t, e) =>
									(function (t, e) {
										return (
											t.field.isEqual(e.field) &&
											(function (t, e) {
												return (t instanceof ja && e instanceof ja) || (t instanceof za && e instanceof za)
													? Ts(t.elements, e.elements, wo)
													: t instanceof $a && e instanceof $a
													? wo(t.Ie, e.Ie)
													: t instanceof Va && e instanceof Va;
											})(t.transform, e.transform)
										);
									})(t, e)
								))
						);
					})(t.fieldTransforms, e.fieldTransforms) &&
					(0 === t.type
						? t.value.isEqual(e.value)
						: 1 !== t.type || (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
				);
			}
			class nc extends Ja {
				constructor(t, e, n, i = []) {
					super(),
						(this.key = t),
						(this.value = e),
						(this.precondition = n),
						(this.fieldTransforms = i),
						(this.type = 0);
				}
				getFieldMask() {
					return null;
				}
			}
			class ic extends Ja {
				constructor(t, e, n, i, r = []) {
					super(),
						(this.key = t),
						(this.data = e),
						(this.fieldMask = n),
						(this.precondition = i),
						(this.fieldTransforms = r),
						(this.type = 1);
				}
				getFieldMask() {
					return this.fieldMask;
				}
			}
			function rc(t) {
				const e = new Map();
				return (
					t.fieldMask.fields.forEach((n) => {
						if (!n.isEmpty()) {
							const i = t.data.field(n);
							e.set(n, i);
						}
					}),
					e
				);
			}
			function sc(t, e, n) {
				const i = new Map();
				as(t.length === n.length);
				for (let r = 0; r < n.length; r++) {
					const s = t[r],
						o = s.transform,
						a = e.data.field(s.field);
					i.set(s.field, Fa(o, a, n[r]));
				}
				return i;
			}
			function oc(t, e, n) {
				const i = new Map();
				for (const r of t) {
					const t = r.transform,
						s = n.data.field(r.field);
					i.set(r.field, Pa(t, s, e));
				}
				return i;
			}
			class ac extends Ja {
				constructor(t, e) {
					super(), (this.key = t), (this.precondition = e), (this.type = 2), (this.fieldTransforms = []);
				}
				getFieldMask() {
					return null;
				}
			}
			class cc extends Ja {
				constructor(t, e) {
					super(), (this.key = t), (this.precondition = e), (this.type = 3), (this.fieldTransforms = []);
				}
				getFieldMask() {
					return null;
				}
			}
			class lc {
				constructor(t, e, n, i) {
					(this.batchId = t), (this.localWriteTime = e), (this.baseMutations = n), (this.mutations = i);
				}
				applyToRemoteDocument(t, e) {
					const n = e.mutationResults;
					for (let e = 0; e < this.mutations.length; e++) {
						const i = this.mutations[e];
						i.key.isEqual(t.key) && Ya(i, t, n[e]);
					}
				}
				applyToLocalView(t, e) {
					for (const n of this.baseMutations) n.key.isEqual(t.key) && (e = Za(n, t, e, this.localWriteTime));
					for (const n of this.mutations) n.key.isEqual(t.key) && (e = Za(n, t, e, this.localWriteTime));
					return e;
				}
				applyToLocalDocumentSet(t, e) {
					const n = Ca();
					return (
						this.mutations.forEach((i) => {
							const r = t.get(i.key),
								s = r.overlayedDocument;
							let o = this.applyToLocalView(s, r.mutatedFields);
							o = e.has(i.key) ? null : o;
							const a = Xa(s, o);
							null !== a && n.set(i.key, a), s.isValidDocument() || s.convertToNoDocument(Ss.min());
						}),
						n
					);
				}
				keys() {
					return this.mutations.reduce((t, e) => t.add(e.key), Ra());
				}
				isEqual(t) {
					return (
						this.batchId === t.batchId &&
						Ts(this.mutations, t.mutations, (t, e) => ec(t, e)) &&
						Ts(this.baseMutations, t.baseMutations, (t, e) => ec(t, e))
					);
				}
			}
			class hc {
				constructor(t, e, n, i) {
					(this.batch = t), (this.commitVersion = e), (this.mutationResults = n), (this.docVersions = i);
				}
				static from(t, e, n) {
					as(t.mutations.length === n.length);
					let i = Aa;
					const r = t.mutations;
					for (let t = 0; t < r.length; t++) i = i.insert(r[t].key, n[t].version);
					return new hc(t, e, n, i);
				}
			}
			class uc {
				constructor(t, e) {
					(this.largestBatchId = t), (this.mutation = e);
				}
				getKey() {
					return this.mutation.key;
				}
				isEqual(t) {
					return null !== t && this.mutation === t.mutation;
				}
				toString() {
					return `Overlay{\n      largestBatchId: ${
						this.largestBatchId
					},\n      mutation: ${this.mutation.toString()}\n    }`;
				}
			}
			class dc {
				constructor(t, e) {
					(this.count = t), (this.unchangedNames = e);
				}
			}
			var pc, fc;
			function mc(t) {
				if (void 0 === t) return is('GRPC error has no .code'), ls.UNKNOWN;
				switch (t) {
					case pc.OK:
						return ls.OK;
					case pc.CANCELLED:
						return ls.CANCELLED;
					case pc.UNKNOWN:
						return ls.UNKNOWN;
					case pc.DEADLINE_EXCEEDED:
						return ls.DEADLINE_EXCEEDED;
					case pc.RESOURCE_EXHAUSTED:
						return ls.RESOURCE_EXHAUSTED;
					case pc.INTERNAL:
						return ls.INTERNAL;
					case pc.UNAVAILABLE:
						return ls.UNAVAILABLE;
					case pc.UNAUTHENTICATED:
						return ls.UNAUTHENTICATED;
					case pc.INVALID_ARGUMENT:
						return ls.INVALID_ARGUMENT;
					case pc.NOT_FOUND:
						return ls.NOT_FOUND;
					case pc.ALREADY_EXISTS:
						return ls.ALREADY_EXISTS;
					case pc.PERMISSION_DENIED:
						return ls.PERMISSION_DENIED;
					case pc.FAILED_PRECONDITION:
						return ls.FAILED_PRECONDITION;
					case pc.ABORTED:
						return ls.ABORTED;
					case pc.OUT_OF_RANGE:
						return ls.OUT_OF_RANGE;
					case pc.UNIMPLEMENTED:
						return ls.UNIMPLEMENTED;
					case pc.DATA_LOSS:
						return ls.DATA_LOSS;
					default:
						return os();
				}
			}
			((fc = pc || (pc = {}))[(fc.OK = 0)] = 'OK'),
				(fc[(fc.CANCELLED = 1)] = 'CANCELLED'),
				(fc[(fc.UNKNOWN = 2)] = 'UNKNOWN'),
				(fc[(fc.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
				(fc[(fc.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
				(fc[(fc.NOT_FOUND = 5)] = 'NOT_FOUND'),
				(fc[(fc.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
				(fc[(fc.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
				(fc[(fc.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
				(fc[(fc.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
				(fc[(fc.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
				(fc[(fc.ABORTED = 10)] = 'ABORTED'),
				(fc[(fc.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
				(fc[(fc.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
				(fc[(fc.INTERNAL = 13)] = 'INTERNAL'),
				(fc[(fc.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
				(fc[(fc.DATA_LOSS = 15)] = 'DATA_LOSS');
			const gc = new Jr([4294967295, 4294967295], 0);
			function yc(t) {
				const e = new TextEncoder().encode(t),
					n = new Qr();
				return n.update(e), new Uint8Array(n.digest());
			}
			function vc(t) {
				const e = new DataView(t.buffer),
					n = e.getUint32(0, !0),
					i = e.getUint32(4, !0),
					r = e.getUint32(8, !0),
					s = e.getUint32(12, !0);
				return [new Jr([n, i], 0), new Jr([r, s], 0)];
			}
			class wc {
				constructor(t, e, n) {
					if (((this.bitmap = t), (this.padding = e), (this.hashCount = n), e < 0 || e >= 8))
						throw new bc(`Invalid padding: ${e}`);
					if (n < 0) throw new bc(`Invalid hash count: ${n}`);
					if (t.length > 0 && 0 === this.hashCount) throw new bc(`Invalid hash count: ${n}`);
					if (0 === t.length && 0 !== e) throw new bc(`Invalid padding when bitmap length is 0: ${e}`);
					(this.Te = 8 * t.length - e), (this.Ee = Jr.fromNumber(this.Te));
				}
				de(t, e, n) {
					let i = t.add(e.multiply(Jr.fromNumber(n)));
					return 1 === i.compare(gc) && (i = new Jr([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.Ee).toNumber();
				}
				Ae(t) {
					return !!(this.bitmap[Math.floor(t / 8)] & (1 << t % 8));
				}
				mightContain(t) {
					if (0 === this.Te) return !1;
					const e = yc(t),
						[n, i] = vc(e);
					for (let t = 0; t < this.hashCount; t++) {
						const e = this.de(n, i, t);
						if (!this.Ae(e)) return !1;
					}
					return !0;
				}
				static create(t, e, n) {
					const i = t % 8 == 0 ? 0 : 8 - (t % 8),
						r = new Uint8Array(Math.ceil(t / 8)),
						s = new wc(r, i, e);
					return n.forEach((t) => s.insert(t)), s;
				}
				insert(t) {
					if (0 === this.Te) return;
					const e = yc(t),
						[n, i] = vc(e);
					for (let t = 0; t < this.hashCount; t++) {
						const e = this.de(n, i, t);
						this.Re(e);
					}
				}
				Re(t) {
					const e = Math.floor(t / 8),
						n = t % 8;
					this.bitmap[e] |= 1 << n;
				}
			}
			class bc extends Error {
				constructor() {
					super(...arguments), (this.name = 'BloomFilterError');
				}
			}
			class _c {
				constructor(t, e, n, i, r) {
					(this.snapshotVersion = t),
						(this.targetChanges = e),
						(this.targetMismatches = n),
						(this.documentUpdates = i),
						(this.resolvedLimboDocuments = r);
				}
				static createSynthesizedRemoteEventForCurrentChange(t, e, n) {
					const i = new Map();
					return (
						i.set(t, Ec.createSynthesizedTargetChangeForCurrentChange(t, e, n)),
						new _c(Ss.min(), i, new Zs(Es), _a(), Ra())
					);
				}
			}
			class Ec {
				constructor(t, e, n, i, r) {
					(this.resumeToken = t),
						(this.current = e),
						(this.addedDocuments = n),
						(this.modifiedDocuments = i),
						(this.removedDocuments = r);
				}
				static createSynthesizedTargetChangeForCurrentChange(t, e, n) {
					return new Ec(n, e, Ra(), Ra(), Ra());
				}
			}
			class Tc {
				constructor(t, e, n, i) {
					(this.Ve = t), (this.removedTargetIds = e), (this.key = n), (this.me = i);
				}
			}
			class Ic {
				constructor(t, e) {
					(this.targetId = t), (this.fe = e);
				}
			}
			class Sc {
				constructor(t, e, n = oo.EMPTY_BYTE_STRING, i = null) {
					(this.state = t), (this.targetIds = e), (this.resumeToken = n), (this.cause = i);
				}
			}
			class Cc {
				constructor() {
					(this.ge = 0), (this.pe = xc()), (this.ye = oo.EMPTY_BYTE_STRING), (this.we = !1), (this.Se = !0);
				}
				get current() {
					return this.we;
				}
				get resumeToken() {
					return this.ye;
				}
				get be() {
					return 0 !== this.ge;
				}
				get De() {
					return this.Se;
				}
				Ce(t) {
					t.approximateByteSize() > 0 && ((this.Se = !0), (this.ye = t));
				}
				ve() {
					let t = Ra(),
						e = Ra(),
						n = Ra();
					return (
						this.pe.forEach((i, r) => {
							switch (r) {
								case 0:
									t = t.add(i);
									break;
								case 2:
									e = e.add(i);
									break;
								case 1:
									n = n.add(i);
									break;
								default:
									os();
							}
						}),
						new Ec(this.ye, this.we, t, e, n)
					);
				}
				Fe() {
					(this.Se = !1), (this.pe = xc());
				}
				Me(t, e) {
					(this.Se = !0), (this.pe = this.pe.insert(t, e));
				}
				xe(t) {
					(this.Se = !0), (this.pe = this.pe.remove(t));
				}
				Oe() {
					this.ge += 1;
				}
				Ne() {
					(this.ge -= 1), as(this.ge >= 0);
				}
				Be() {
					(this.Se = !0), (this.we = !0);
				}
			}
			class kc {
				constructor(t) {
					(this.Le = t), (this.ke = new Map()), (this.qe = _a()), (this.Qe = Ac()), (this.Ke = new Zs(Es));
				}
				$e(t) {
					for (const e of t.Ve) t.me && t.me.isFoundDocument() ? this.Ue(e, t.me) : this.We(e, t.key, t.me);
					for (const e of t.removedTargetIds) this.We(e, t.key, t.me);
				}
				Ge(t) {
					this.forEachTarget(t, (e) => {
						const n = this.ze(e);
						switch (t.state) {
							case 0:
								this.je(e) && n.Ce(t.resumeToken);
								break;
							case 1:
								n.Ne(), n.be || n.Fe(), n.Ce(t.resumeToken);
								break;
							case 2:
								n.Ne(), n.be || this.removeTarget(e);
								break;
							case 3:
								this.je(e) && (n.Be(), n.Ce(t.resumeToken));
								break;
							case 4:
								this.je(e) && (this.He(e), n.Ce(t.resumeToken));
								break;
							default:
								os();
						}
					});
				}
				forEachTarget(t, e) {
					t.targetIds.length > 0
						? t.targetIds.forEach(e)
						: this.ke.forEach((t, n) => {
								this.je(n) && e(n);
						  });
				}
				Je(t) {
					const e = t.targetId,
						n = t.fe.count,
						i = this.Ye(e);
					if (i) {
						const r = i.target;
						if (oa(r))
							if (0 === n) {
								const t = new Rs(r.path);
								this.We(e, t, Oo.newNoDocument(t, Ss.min()));
							} else as(1 === n);
						else {
							const i = this.Ze(e);
							if (i !== n) {
								const n = this.Xe(t),
									r = n ? this.et(n, t, i) : 1;
								if (0 !== r) {
									this.He(e);
									const t =
										2 === r ? 'TargetPurposeExistenceFilterMismatchBloom' : 'TargetPurposeExistenceFilterMismatch';
									this.Ke = this.Ke.insert(e, t);
								}
							}
						}
					}
				}
				Xe(t) {
					const e = t.fe.unchangedNames;
					if (!e || !e.bits) return null;
					const {
						bits: { bitmap: n = '', padding: i = 0 },
						hashCount: r = 0,
					} = e;
					let s, o;
					try {
						s = ho(n).toUint8Array();
					} catch (t) {
						if (t instanceof so)
							return (
								rs(
									'Decoding the base64 bloom filter in existence filter failed (' +
										t.message +
										'); ignoring the bloom filter and falling back to full re-query.'
								),
								null
							);
						throw t;
					}
					try {
						o = new wc(s, i, r);
					} catch (t) {
						return rs(t instanceof bc ? 'BloomFilter error: ' : 'Applying bloom filter failed: ', t), null;
					}
					return 0 === o.Te ? null : o;
				}
				et(t, e, n) {
					return e.fe.count === n - this.rt(t, e.targetId) ? 0 : 2;
				}
				rt(t, e) {
					const n = this.Le.getRemoteKeysForTarget(e);
					let i = 0;
					return (
						n.forEach((n) => {
							const r = this.Le.nt(),
								s = `projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;
							t.mightContain(s) || (this.We(e, n, null), i++);
						}),
						i
					);
				}
				it(t) {
					const e = new Map();
					this.ke.forEach((n, i) => {
						const r = this.Ye(i);
						if (r) {
							if (n.current && oa(r.target)) {
								const e = new Rs(r.target.path);
								null !== this.qe.get(e) || this.st(i, e) || this.We(i, e, Oo.newNoDocument(e, t));
							}
							n.De && (e.set(i, n.ve()), n.Fe());
						}
					});
					let n = Ra();
					this.Qe.forEach((t, e) => {
						let i = !0;
						e.forEachWhile((t) => {
							const e = this.Ye(t);
							return !e || 'TargetPurposeLimboResolution' === e.purpose || ((i = !1), !1);
						}),
							i && (n = n.add(t));
					}),
						this.qe.forEach((e, n) => n.setReadTime(t));
					const i = new _c(t, e, this.Ke, this.qe, n);
					return (this.qe = _a()), (this.Qe = Ac()), (this.Ke = new Zs(Es)), i;
				}
				Ue(t, e) {
					if (!this.je(t)) return;
					const n = this.st(t, e.key) ? 2 : 0;
					this.ze(t).Me(e.key, n),
						(this.qe = this.qe.insert(e.key, e)),
						(this.Qe = this.Qe.insert(e.key, this.ot(e.key).add(t)));
				}
				We(t, e, n) {
					if (!this.je(t)) return;
					const i = this.ze(t);
					this.st(t, e) ? i.Me(e, 1) : i.xe(e),
						(this.Qe = this.Qe.insert(e, this.ot(e).delete(t))),
						n && (this.qe = this.qe.insert(e, n));
				}
				removeTarget(t) {
					this.ke.delete(t);
				}
				Ze(t) {
					const e = this.ze(t).ve();
					return this.Le.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
				}
				Oe(t) {
					this.ze(t).Oe();
				}
				ze(t) {
					let e = this.ke.get(t);
					return e || ((e = new Cc()), this.ke.set(t, e)), e;
				}
				ot(t) {
					let e = this.Qe.get(t);
					return e || ((e = new no(Es)), (this.Qe = this.Qe.insert(t, e))), e;
				}
				je(t) {
					const e = null !== this.Ye(t);
					return e || ns('WatchChangeAggregator', 'Detected inactive target', t), e;
				}
				Ye(t) {
					const e = this.ke.get(t);
					return e && e.be ? null : this.Le._t(t);
				}
				He(t) {
					this.ke.set(t, new Cc()),
						this.Le.getRemoteKeysForTarget(t).forEach((e) => {
							this.We(t, e, null);
						});
				}
				st(t, e) {
					return this.Le.getRemoteKeysForTarget(t).has(e);
				}
			}
			function Ac() {
				return new Zs(Rs.comparator);
			}
			function xc() {
				return new Zs(Rs.comparator);
			}
			const Rc = { asc: 'ASCENDING', desc: 'DESCENDING' },
				Nc = {
					'<': 'LESS_THAN',
					'<=': 'LESS_THAN_OR_EQUAL',
					'>': 'GREATER_THAN',
					'>=': 'GREATER_THAN_OR_EQUAL',
					'==': 'EQUAL',
					'!=': 'NOT_EQUAL',
					'array-contains': 'ARRAY_CONTAINS',
					in: 'IN',
					'not-in': 'NOT_IN',
					'array-contains-any': 'ARRAY_CONTAINS_ANY',
				},
				Dc = { and: 'AND', or: 'OR' };
			class Lc {
				constructor(t, e) {
					(this.databaseId = t), (this.useProto3Json = e);
				}
			}
			function Oc(t, e) {
				return t.useProto3Json || Ws(e) ? e : { value: e };
			}
			function Mc(t, e) {
				return t.useProto3Json
					? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${(
							'000000000' + e.nanoseconds
					  ).slice(-9)}Z`
					: { seconds: '' + e.seconds, nanos: e.nanoseconds };
			}
			function Pc(t, e) {
				return t.useProto3Json ? e.toBase64() : e.toUint8Array();
			}
			function Fc(t, e) {
				return Mc(t, e.toTimestamp());
			}
			function Uc(t) {
				return (
					as(!!t),
					Ss.fromTimestamp(
						(function (t) {
							const e = co(t);
							return new Is(e.seconds, e.nanos);
						})(t)
					)
				);
			}
			function Vc(t, e) {
				return jc(t, e).canonicalString();
			}
			function jc(t, e) {
				const n = (function (t) {
					return new ks(['projects', t.projectId, 'databases', t.database]);
				})(t).child('documents');
				return void 0 === e ? n : n.child(e);
			}
			function Bc(t) {
				const e = ks.fromString(t);
				return as(sl(e)), e;
			}
			function zc(t, e) {
				return Vc(t.databaseId, e.path);
			}
			function qc(t, e) {
				const n = Bc(e);
				if (n.get(1) !== t.databaseId.projectId)
					throw new hs(
						ls.INVALID_ARGUMENT,
						'Tried to deserialize key from different project: ' + n.get(1) + ' vs ' + t.databaseId.projectId
					);
				if (n.get(3) !== t.databaseId.database)
					throw new hs(
						ls.INVALID_ARGUMENT,
						'Tried to deserialize key from different database: ' + n.get(3) + ' vs ' + t.databaseId.database
					);
				return new Rs(Gc(n));
			}
			function $c(t, e) {
				return Vc(t.databaseId, e);
			}
			function Hc(t) {
				return new ks(['projects', t.databaseId.projectId, 'databases', t.databaseId.database]).canonicalString();
			}
			function Gc(t) {
				return as(t.length > 4 && 'documents' === t.get(4)), t.popFirst(5);
			}
			function Kc(t, e, n) {
				return { name: zc(t, e), fields: n.value.mapValue.fields };
			}
			function Wc(t, e) {
				return { documents: [$c(t, e.path)] };
			}
			function Qc(t, e) {
				const n = { structuredQuery: {} },
					i = e.path;
				let r;
				null !== e.collectionGroup
					? ((r = i), (n.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]))
					: ((r = i.popLast()), (n.structuredQuery.from = [{ collectionId: i.lastSegment() }])),
					(n.parent = $c(t, r));
				const s = (function (t) {
					if (0 !== t.length) return il(zo.create(t, 'and'));
				})(e.filters);
				s && (n.structuredQuery.where = s);
				const o = (function (t) {
					if (0 !== t.length)
						return t.map((t) =>
							(function (t) {
								return { field: el(t.field), direction: Yc(t.dir) };
							})(t)
						);
				})(e.orderBy);
				o && (n.structuredQuery.orderBy = o);
				const a = Oc(t, e.limit);
				return (
					null !== a && (n.structuredQuery.limit = a),
					e.startAt &&
						(n.structuredQuery.startAt = (function (t) {
							return { before: t.inclusive, values: t.position };
						})(e.startAt)),
					e.endAt &&
						(n.structuredQuery.endAt = (function (t) {
							return { before: !t.inclusive, values: t.position };
						})(e.endAt)),
					{ ut: n, parent: r }
				);
			}
			function Jc(t) {
				let e = (function (t) {
					const e = Bc(t);
					return 4 === e.length ? ks.emptyPath() : Gc(e);
				})(t.parent);
				const n = t.structuredQuery,
					i = n.from ? n.from.length : 0;
				let r = null;
				if (i > 0) {
					as(1 === i);
					const t = n.from[0];
					t.allDescendants ? (r = t.collectionId) : (e = e.child(t.collectionId));
				}
				let s = [];
				n.where &&
					(s = (function (t) {
						const e = Xc(t);
						return e instanceof zo && $o(e) ? e.getFilters() : [e];
					})(n.where));
				let o = [];
				n.orderBy &&
					(o = (function (t) {
						return t.map((t) =>
							(function (t) {
								return new Uo(
									nl(t.field),
									(function (t) {
										switch (t) {
											case 'ASCENDING':
												return 'asc';
											case 'DESCENDING':
												return 'desc';
											default:
												return;
										}
									})(t.direction)
								);
							})(t)
						);
					})(n.orderBy));
				let a = null;
				n.limit &&
					(a = (function (t) {
						let e;
						return (e = 'object' == typeof t ? t.value : t), Ws(e) ? null : e;
					})(n.limit));
				let c = null;
				n.startAt &&
					(c = (function (t) {
						const e = !!t.before,
							n = t.values || [];
						return new Mo(n, e);
					})(n.startAt));
				let l = null;
				return (
					n.endAt &&
						(l = (function (t) {
							const e = !t.before,
								n = t.values || [];
							return new Mo(n, e);
						})(n.endAt)),
					(function (t, e, n, i, r, s, o, a) {
						return new aa(t, e, n, i, r, s, o, a);
					})(e, r, o, s, a, 'F', c, l)
				);
			}
			function Xc(t) {
				return void 0 !== t.unaryFilter
					? (function (t) {
							switch (t.unaryFilter.op) {
								case 'IS_NAN':
									const e = nl(t.unaryFilter.field);
									return Bo.create(e, '==', { doubleValue: NaN });
								case 'IS_NULL':
									const n = nl(t.unaryFilter.field);
									return Bo.create(n, '==', { nullValue: 'NULL_VALUE' });
								case 'IS_NOT_NAN':
									const i = nl(t.unaryFilter.field);
									return Bo.create(i, '!=', { doubleValue: NaN });
								case 'IS_NOT_NULL':
									const r = nl(t.unaryFilter.field);
									return Bo.create(r, '!=', { nullValue: 'NULL_VALUE' });
								default:
									return os();
							}
					  })(t)
					: void 0 !== t.fieldFilter
					? (function (t) {
							return Bo.create(
								nl(t.fieldFilter.field),
								(function (t) {
									switch (t) {
										case 'EQUAL':
											return '==';
										case 'NOT_EQUAL':
											return '!=';
										case 'GREATER_THAN':
											return '>';
										case 'GREATER_THAN_OR_EQUAL':
											return '>=';
										case 'LESS_THAN':
											return '<';
										case 'LESS_THAN_OR_EQUAL':
											return '<=';
										case 'ARRAY_CONTAINS':
											return 'array-contains';
										case 'IN':
											return 'in';
										case 'NOT_IN':
											return 'not-in';
										case 'ARRAY_CONTAINS_ANY':
											return 'array-contains-any';
										default:
											return os();
									}
								})(t.fieldFilter.op),
								t.fieldFilter.value
							);
					  })(t)
					: void 0 !== t.compositeFilter
					? (function (t) {
							return zo.create(
								t.compositeFilter.filters.map((t) => Xc(t)),
								(function (t) {
									switch (t) {
										case 'AND':
											return 'and';
										case 'OR':
											return 'or';
										default:
											return os();
									}
								})(t.compositeFilter.op)
							);
					  })(t)
					: os();
			}
			function Yc(t) {
				return Rc[t];
			}
			function Zc(t) {
				return Nc[t];
			}
			function tl(t) {
				return Dc[t];
			}
			function el(t) {
				return { fieldPath: t.canonicalString() };
			}
			function nl(t) {
				return xs.fromServerFormat(t.fieldPath);
			}
			function il(t) {
				return t instanceof Bo
					? (function (t) {
							if ('==' === t.op) {
								if (Ao(t.value)) return { unaryFilter: { field: el(t.field), op: 'IS_NAN' } };
								if (ko(t.value)) return { unaryFilter: { field: el(t.field), op: 'IS_NULL' } };
							} else if ('!=' === t.op) {
								if (Ao(t.value)) return { unaryFilter: { field: el(t.field), op: 'IS_NOT_NAN' } };
								if (ko(t.value)) return { unaryFilter: { field: el(t.field), op: 'IS_NOT_NULL' } };
							}
							return { fieldFilter: { field: el(t.field), op: Zc(t.op), value: t.value } };
					  })(t)
					: t instanceof zo
					? (function (t) {
							const e = t.getFilters().map((t) => il(t));
							return 1 === e.length ? e[0] : { compositeFilter: { op: tl(t.op), filters: e } };
					  })(t)
					: os();
			}
			function rl(t) {
				const e = [];
				return t.fields.forEach((t) => e.push(t.canonicalString())), { fieldPaths: e };
			}
			function sl(t) {
				return t.length >= 4 && 'projects' === t.get(0) && 'databases' === t.get(2);
			}
			class ol {
				constructor(t, e, n, i, r = Ss.min(), s = Ss.min(), o = oo.EMPTY_BYTE_STRING, a = null) {
					(this.target = t),
						(this.targetId = e),
						(this.purpose = n),
						(this.sequenceNumber = i),
						(this.snapshotVersion = r),
						(this.lastLimboFreeSnapshotVersion = s),
						(this.resumeToken = o),
						(this.expectedCount = a);
				}
				withSequenceNumber(t) {
					return new ol(
						this.target,
						this.targetId,
						this.purpose,
						t,
						this.snapshotVersion,
						this.lastLimboFreeSnapshotVersion,
						this.resumeToken,
						this.expectedCount
					);
				}
				withResumeToken(t, e) {
					return new ol(
						this.target,
						this.targetId,
						this.purpose,
						this.sequenceNumber,
						e,
						this.lastLimboFreeSnapshotVersion,
						t,
						null
					);
				}
				withExpectedCount(t) {
					return new ol(
						this.target,
						this.targetId,
						this.purpose,
						this.sequenceNumber,
						this.snapshotVersion,
						this.lastLimboFreeSnapshotVersion,
						this.resumeToken,
						t
					);
				}
				withLastLimboFreeSnapshotVersion(t) {
					return new ol(
						this.target,
						this.targetId,
						this.purpose,
						this.sequenceNumber,
						this.snapshotVersion,
						t,
						this.resumeToken,
						this.expectedCount
					);
				}
			}
			class al {
				constructor(t) {
					this.ct = t;
				}
			}
			function cl(t) {
				const e = Jc({ parent: t.parent, structuredQuery: t.structuredQuery });
				return 'LAST' === t.limitType ? da(e, e.limit, 'L') : e;
			}
			class ll {
				constructor() {}
				Pt(t, e) {
					this.It(t, e), e.Tt();
				}
				It(t, e) {
					if ('nullValue' in t) this.Et(e, 5);
					else if ('booleanValue' in t) this.Et(e, 10), e.dt(t.booleanValue ? 1 : 0);
					else if ('integerValue' in t) this.Et(e, 15), e.dt(lo(t.integerValue));
					else if ('doubleValue' in t) {
						const n = lo(t.doubleValue);
						isNaN(n) ? this.Et(e, 13) : (this.Et(e, 15), Qs(n) ? e.dt(0) : e.dt(n));
					} else if ('timestampValue' in t) {
						const n = t.timestampValue;
						this.Et(e, 20), 'string' == typeof n ? e.At(n) : (e.At(`${n.seconds || ''}`), e.dt(n.nanos || 0));
					} else if ('stringValue' in t) this.Rt(t.stringValue, e), this.Vt(e);
					else if ('bytesValue' in t) this.Et(e, 30), e.ft(ho(t.bytesValue)), this.Vt(e);
					else if ('referenceValue' in t) this.gt(t.referenceValue, e);
					else if ('geoPointValue' in t) {
						const n = t.geoPointValue;
						this.Et(e, 45), e.dt(n.latitude || 0), e.dt(n.longitude || 0);
					} else
						'mapValue' in t
							? No(t)
								? this.Et(e, Number.MAX_SAFE_INTEGER)
								: (this.yt(t.mapValue, e), this.Vt(e))
							: 'arrayValue' in t
							? (this.wt(t.arrayValue, e), this.Vt(e))
							: os();
				}
				Rt(t, e) {
					this.Et(e, 25), this.St(t, e);
				}
				St(t, e) {
					e.At(t);
				}
				yt(t, e) {
					const n = t.fields || {};
					this.Et(e, 55);
					for (const t of Object.keys(n)) this.Rt(t, e), this.It(n[t], e);
				}
				wt(t, e) {
					const n = t.values || [];
					this.Et(e, 50);
					for (const t of n) this.It(t, e);
				}
				gt(t, e) {
					this.Et(e, 37),
						Rs.fromName(t).path.forEach((t) => {
							this.Et(e, 60), this.St(t, e);
						});
				}
				Et(t, e) {
					t.dt(e);
				}
				Vt(t) {
					t.dt(2);
				}
			}
			ll.bt = new ll();
			class hl {
				constructor() {
					this._n = new ul();
				}
				addToCollectionParentIndex(t, e) {
					return this._n.add(e), Fs.resolve();
				}
				getCollectionParents(t, e) {
					return Fs.resolve(this._n.getEntries(e));
				}
				addFieldIndex(t, e) {
					return Fs.resolve();
				}
				deleteFieldIndex(t, e) {
					return Fs.resolve();
				}
				deleteAllFieldIndexes(t) {
					return Fs.resolve();
				}
				createTargetIndexes(t, e) {
					return Fs.resolve();
				}
				getDocumentsMatchingTarget(t, e) {
					return Fs.resolve(null);
				}
				getIndexType(t, e) {
					return Fs.resolve(0);
				}
				getFieldIndexes(t, e) {
					return Fs.resolve([]);
				}
				getNextCollectionGroupToUpdate(t) {
					return Fs.resolve(null);
				}
				getMinOffset(t, e) {
					return Fs.resolve(Ds.min());
				}
				getMinOffsetFromCollectionGroup(t, e) {
					return Fs.resolve(Ds.min());
				}
				updateCollectionGroup(t, e, n) {
					return Fs.resolve();
				}
				updateIndexEntries(t, e) {
					return Fs.resolve();
				}
			}
			class ul {
				constructor() {
					this.index = {};
				}
				add(t) {
					const e = t.lastSegment(),
						n = t.popLast(),
						i = this.index[e] || new no(ks.comparator),
						r = !i.has(n);
					return (this.index[e] = i.add(n)), r;
				}
				has(t) {
					const e = t.lastSegment(),
						n = t.popLast(),
						i = this.index[e];
					return i && i.has(n);
				}
				getEntries(t) {
					return (this.index[t] || new no(ks.comparator)).toArray();
				}
			}
			new Uint8Array(0);
			class dl {
				constructor(t, e, n) {
					(this.cacheSizeCollectionThreshold = t),
						(this.percentileToCollect = e),
						(this.maximumSequenceNumbersToCollect = n);
				}
				static withCacheSize(t) {
					return new dl(t, dl.DEFAULT_COLLECTION_PERCENTILE, dl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
				}
			}
			(dl.DEFAULT_COLLECTION_PERCENTILE = 10),
				(dl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
				(dl.DEFAULT = new dl(41943040, dl.DEFAULT_COLLECTION_PERCENTILE, dl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)),
				(dl.DISABLED = new dl(-1, 0, 0));
			class pl {
				constructor(t) {
					this.On = t;
				}
				next() {
					return (this.On += 2), this.On;
				}
				static Nn() {
					return new pl(0);
				}
				static Bn() {
					return new pl(-1);
				}
			}
			class fl {
				constructor() {
					(this.changes = new wa(
						(t) => t.toString(),
						(t, e) => t.isEqual(e)
					)),
						(this.changesApplied = !1);
				}
				addEntry(t) {
					this.assertNotApplied(), this.changes.set(t.key, t);
				}
				removeEntry(t, e) {
					this.assertNotApplied(), this.changes.set(t, Oo.newInvalidDocument(t).setReadTime(e));
				}
				getEntry(t, e) {
					this.assertNotApplied();
					const n = this.changes.get(e);
					return void 0 !== n ? Fs.resolve(n) : this.getFromCache(t, e);
				}
				getEntries(t, e) {
					return this.getAllFromCache(t, e);
				}
				apply(t) {
					return this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t);
				}
				assertNotApplied() {}
			}
			class ml {
				constructor(t, e) {
					(this.overlayedDocument = t), (this.mutatedFields = e);
				}
			}
			class gl {
				constructor(t, e, n, i) {
					(this.remoteDocumentCache = t),
						(this.mutationQueue = e),
						(this.documentOverlayCache = n),
						(this.indexManager = i);
				}
				getDocument(t, e) {
					let n = null;
					return this.documentOverlayCache
						.getOverlay(t, e)
						.next((i) => ((n = i), this.remoteDocumentCache.getEntry(t, e)))
						.next((t) => (null !== n && Za(n.mutation, t, ro.empty(), Is.now()), t));
				}
				getDocuments(t, e) {
					return this.remoteDocumentCache
						.getEntries(t, e)
						.next((e) => this.getLocalViewOfDocuments(t, e, Ra()).next(() => e));
				}
				getLocalViewOfDocuments(t, e, n = Ra()) {
					const i = Sa();
					return this.populateOverlays(t, i, e).next(() =>
						this.computeViews(t, e, i, n).next((t) => {
							let e = Ta();
							return (
								t.forEach((t, n) => {
									e = e.insert(t, n.overlayedDocument);
								}),
								e
							);
						})
					);
				}
				getOverlayedDocuments(t, e) {
					const n = Sa();
					return this.populateOverlays(t, n, e).next(() => this.computeViews(t, e, n, Ra()));
				}
				populateOverlays(t, e, n) {
					const i = [];
					return (
						n.forEach((t) => {
							e.has(t) || i.push(t);
						}),
						this.documentOverlayCache.getOverlays(t, i).next((t) => {
							t.forEach((t, n) => {
								e.set(t, n);
							});
						})
					);
				}
				computeViews(t, e, n, i) {
					let r = _a();
					const s = ka(),
						o = ka();
					return (
						e.forEach((t, e) => {
							const o = n.get(e.key);
							i.has(e.key) && (void 0 === o || o.mutation instanceof ic)
								? (r = r.insert(e.key, e))
								: void 0 !== o
								? (s.set(e.key, o.mutation.getFieldMask()), Za(o.mutation, e, o.mutation.getFieldMask(), Is.now()))
								: s.set(e.key, ro.empty());
						}),
						this.recalculateAndSaveOverlays(t, r).next(
							(t) => (
								t.forEach((t, e) => s.set(t, e)),
								e.forEach((t, e) => {
									var n;
									return o.set(t, new ml(e, null !== (n = s.get(t)) && void 0 !== n ? n : null));
								}),
								o
							)
						)
					);
				}
				recalculateAndSaveOverlays(t, e) {
					const n = ka();
					let i = new Zs((t, e) => t - e),
						r = Ra();
					return this.mutationQueue
						.getAllMutationBatchesAffectingDocumentKeys(t, e)
						.next((t) => {
							for (const r of t)
								r.keys().forEach((t) => {
									const s = e.get(t);
									if (null === s) return;
									let o = n.get(t) || ro.empty();
									(o = r.applyToLocalView(s, o)), n.set(t, o);
									const a = (i.get(r.batchId) || Ra()).add(t);
									i = i.insert(r.batchId, a);
								});
						})
						.next(() => {
							const s = [],
								o = i.getReverseIterator();
							for (; o.hasNext(); ) {
								const i = o.getNext(),
									a = i.key,
									c = i.value,
									l = Ca();
								c.forEach((t) => {
									if (!r.has(t)) {
										const i = Xa(e.get(t), n.get(t));
										null !== i && l.set(t, i), (r = r.add(t));
									}
								}),
									s.push(this.documentOverlayCache.saveOverlays(t, a, l));
							}
							return Fs.waitFor(s);
						})
						.next(() => n);
				}
				recalculateAndSaveOverlaysForDocumentKeys(t, e) {
					return this.remoteDocumentCache.getEntries(t, e).next((e) => this.recalculateAndSaveOverlays(t, e));
				}
				getDocumentsMatchingQuery(t, e, n, i) {
					return (function (t) {
						return Rs.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
					})(e)
						? this.getDocumentsMatchingDocumentQuery(t, e.path)
						: (function (t) {
								return null !== t.collectionGroup;
						  })(e)
						? this.getDocumentsMatchingCollectionGroupQuery(t, e, n, i)
						: this.getDocumentsMatchingCollectionQuery(t, e, n, i);
				}
				getNextDocuments(t, e, n, i) {
					return this.remoteDocumentCache.getAllFromCollectionGroup(t, e, n, i).next((r) => {
						const s =
							i - r.size > 0
								? this.documentOverlayCache.getOverlaysForCollectionGroup(t, e, n.largestBatchId, i - r.size)
								: Fs.resolve(Sa());
						let o = -1,
							a = r;
						return s.next((e) =>
							Fs.forEach(
								e,
								(e, n) => (
									o < n.largestBatchId && (o = n.largestBatchId),
									r.get(e)
										? Fs.resolve()
										: this.remoteDocumentCache.getEntry(t, e).next((t) => {
												a = a.insert(e, t);
										  })
								)
							)
								.next(() => this.populateOverlays(t, e, r))
								.next(() => this.computeViews(t, a, e, Ra()))
								.next((t) => ({ batchId: o, changes: Ia(t) }))
						);
					});
				}
				getDocumentsMatchingDocumentQuery(t, e) {
					return this.getDocument(t, new Rs(e)).next((t) => {
						let e = Ta();
						return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
					});
				}
				getDocumentsMatchingCollectionGroupQuery(t, e, n, i) {
					const r = e.collectionGroup;
					let s = Ta();
					return this.indexManager.getCollectionParents(t, r).next((o) =>
						Fs.forEach(o, (o) => {
							const a = (function (t, e) {
								return new aa(
									e,
									null,
									t.explicitOrderBy.slice(),
									t.filters.slice(),
									t.limit,
									t.limitType,
									t.startAt,
									t.endAt
								);
							})(e, o.child(r));
							return this.getDocumentsMatchingCollectionQuery(t, a, n, i).next((t) => {
								t.forEach((t, e) => {
									s = s.insert(t, e);
								});
							});
						}).next(() => s)
					);
				}
				getDocumentsMatchingCollectionQuery(t, e, n, i) {
					let r;
					return this.documentOverlayCache
						.getOverlaysForCollection(t, e.path, n.largestBatchId)
						.next((s) => ((r = s), this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, n, r, i)))
						.next((t) => {
							r.forEach((e, n) => {
								const i = n.getKey();
								null === t.get(i) && (t = t.insert(i, Oo.newInvalidDocument(i)));
							});
							let n = Ta();
							return (
								t.forEach((t, i) => {
									const s = r.get(t);
									void 0 !== s && Za(s.mutation, i, ro.empty(), Is.now()), ga(e, i) && (n = n.insert(t, i));
								}),
								n
							);
						});
				}
			}
			class yl {
				constructor(t) {
					(this.serializer = t), (this.cr = new Map()), (this.lr = new Map());
				}
				getBundleMetadata(t, e) {
					return Fs.resolve(this.cr.get(e));
				}
				saveBundleMetadata(t, e) {
					return (
						this.cr.set(
							e.id,
							(function (t) {
								return { id: t.id, version: t.version, createTime: Uc(t.createTime) };
							})(e)
						),
						Fs.resolve()
					);
				}
				getNamedQuery(t, e) {
					return Fs.resolve(this.lr.get(e));
				}
				saveNamedQuery(t, e) {
					return (
						this.lr.set(
							e.name,
							(function (t) {
								return { name: t.name, query: cl(t.bundledQuery), readTime: Uc(t.readTime) };
							})(e)
						),
						Fs.resolve()
					);
				}
			}
			class vl {
				constructor() {
					(this.overlays = new Zs(Rs.comparator)), (this.hr = new Map());
				}
				getOverlay(t, e) {
					return Fs.resolve(this.overlays.get(e));
				}
				getOverlays(t, e) {
					const n = Sa();
					return Fs.forEach(e, (e) =>
						this.getOverlay(t, e).next((t) => {
							null !== t && n.set(e, t);
						})
					).next(() => n);
				}
				saveOverlays(t, e, n) {
					return (
						n.forEach((n, i) => {
							this.ht(t, e, i);
						}),
						Fs.resolve()
					);
				}
				removeOverlaysForBatchId(t, e, n) {
					const i = this.hr.get(n);
					return (
						void 0 !== i && (i.forEach((t) => (this.overlays = this.overlays.remove(t))), this.hr.delete(n)),
						Fs.resolve()
					);
				}
				getOverlaysForCollection(t, e, n) {
					const i = Sa(),
						r = e.length + 1,
						s = new Rs(e.child('')),
						o = this.overlays.getIteratorFrom(s);
					for (; o.hasNext(); ) {
						const t = o.getNext().value,
							s = t.getKey();
						if (!e.isPrefixOf(s.path)) break;
						s.path.length === r && t.largestBatchId > n && i.set(t.getKey(), t);
					}
					return Fs.resolve(i);
				}
				getOverlaysForCollectionGroup(t, e, n, i) {
					let r = new Zs((t, e) => t - e);
					const s = this.overlays.getIterator();
					for (; s.hasNext(); ) {
						const t = s.getNext().value;
						if (t.getKey().getCollectionGroup() === e && t.largestBatchId > n) {
							let e = r.get(t.largestBatchId);
							null === e && ((e = Sa()), (r = r.insert(t.largestBatchId, e))), e.set(t.getKey(), t);
						}
					}
					const o = Sa(),
						a = r.getIterator();
					for (; a.hasNext() && (a.getNext().value.forEach((t, e) => o.set(t, e)), !(o.size() >= i)); );
					return Fs.resolve(o);
				}
				ht(t, e, n) {
					const i = this.overlays.get(n.key);
					if (null !== i) {
						const t = this.hr.get(i.largestBatchId).delete(n.key);
						this.hr.set(i.largestBatchId, t);
					}
					this.overlays = this.overlays.insert(n.key, new uc(e, n));
					let r = this.hr.get(e);
					void 0 === r && ((r = Ra()), this.hr.set(e, r)), this.hr.set(e, r.add(n.key));
				}
			}
			class wl {
				constructor() {
					(this.Pr = new no(bl.Ir)), (this.Tr = new no(bl.Er));
				}
				isEmpty() {
					return this.Pr.isEmpty();
				}
				addReference(t, e) {
					const n = new bl(t, e);
					(this.Pr = this.Pr.add(n)), (this.Tr = this.Tr.add(n));
				}
				dr(t, e) {
					t.forEach((t) => this.addReference(t, e));
				}
				removeReference(t, e) {
					this.Ar(new bl(t, e));
				}
				Rr(t, e) {
					t.forEach((t) => this.removeReference(t, e));
				}
				Vr(t) {
					const e = new Rs(new ks([])),
						n = new bl(e, t),
						i = new bl(e, t + 1),
						r = [];
					return (
						this.Tr.forEachInRange([n, i], (t) => {
							this.Ar(t), r.push(t.key);
						}),
						r
					);
				}
				mr() {
					this.Pr.forEach((t) => this.Ar(t));
				}
				Ar(t) {
					(this.Pr = this.Pr.delete(t)), (this.Tr = this.Tr.delete(t));
				}
				gr(t) {
					const e = new Rs(new ks([])),
						n = new bl(e, t),
						i = new bl(e, t + 1);
					let r = Ra();
					return (
						this.Tr.forEachInRange([n, i], (t) => {
							r = r.add(t.key);
						}),
						r
					);
				}
				containsKey(t) {
					const e = new bl(t, 0),
						n = this.Pr.firstAfterOrEqual(e);
					return null !== n && t.isEqual(n.key);
				}
			}
			class bl {
				constructor(t, e) {
					(this.key = t), (this.pr = e);
				}
				static Ir(t, e) {
					return Rs.comparator(t.key, e.key) || Es(t.pr, e.pr);
				}
				static Er(t, e) {
					return Es(t.pr, e.pr) || Rs.comparator(t.key, e.key);
				}
			}
			class _l {
				constructor(t, e) {
					(this.indexManager = t),
						(this.referenceDelegate = e),
						(this.mutationQueue = []),
						(this.yr = 1),
						(this.wr = new no(bl.Ir));
				}
				checkEmpty(t) {
					return Fs.resolve(0 === this.mutationQueue.length);
				}
				addMutationBatch(t, e, n, i) {
					const r = this.yr;
					this.yr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
					const s = new lc(r, e, n, i);
					this.mutationQueue.push(s);
					for (const e of i)
						(this.wr = this.wr.add(new bl(e.key, r))),
							this.indexManager.addToCollectionParentIndex(t, e.key.path.popLast());
					return Fs.resolve(s);
				}
				lookupMutationBatch(t, e) {
					return Fs.resolve(this.Sr(e));
				}
				getNextMutationBatchAfterBatchId(t, e) {
					const n = e + 1,
						i = this.br(n),
						r = i < 0 ? 0 : i;
					return Fs.resolve(this.mutationQueue.length > r ? this.mutationQueue[r] : null);
				}
				getHighestUnacknowledgedBatchId() {
					return Fs.resolve(0 === this.mutationQueue.length ? -1 : this.yr - 1);
				}
				getAllMutationBatches(t) {
					return Fs.resolve(this.mutationQueue.slice());
				}
				getAllMutationBatchesAffectingDocumentKey(t, e) {
					const n = new bl(e, 0),
						i = new bl(e, Number.POSITIVE_INFINITY),
						r = [];
					return (
						this.wr.forEachInRange([n, i], (t) => {
							const e = this.Sr(t.pr);
							r.push(e);
						}),
						Fs.resolve(r)
					);
				}
				getAllMutationBatchesAffectingDocumentKeys(t, e) {
					let n = new no(Es);
					return (
						e.forEach((t) => {
							const e = new bl(t, 0),
								i = new bl(t, Number.POSITIVE_INFINITY);
							this.wr.forEachInRange([e, i], (t) => {
								n = n.add(t.pr);
							});
						}),
						Fs.resolve(this.Dr(n))
					);
				}
				getAllMutationBatchesAffectingQuery(t, e) {
					const n = e.path,
						i = n.length + 1;
					let r = n;
					Rs.isDocumentKey(r) || (r = r.child(''));
					const s = new bl(new Rs(r), 0);
					let o = new no(Es);
					return (
						this.wr.forEachWhile((t) => {
							const e = t.key.path;
							return !!n.isPrefixOf(e) && (e.length === i && (o = o.add(t.pr)), !0);
						}, s),
						Fs.resolve(this.Dr(o))
					);
				}
				Dr(t) {
					const e = [];
					return (
						t.forEach((t) => {
							const n = this.Sr(t);
							null !== n && e.push(n);
						}),
						e
					);
				}
				removeMutationBatch(t, e) {
					as(0 === this.Cr(e.batchId, 'removed')), this.mutationQueue.shift();
					let n = this.wr;
					return Fs.forEach(e.mutations, (i) => {
						const r = new bl(i.key, e.batchId);
						return (n = n.delete(r)), this.referenceDelegate.markPotentiallyOrphaned(t, i.key);
					}).next(() => {
						this.wr = n;
					});
				}
				Mn(t) {}
				containsKey(t, e) {
					const n = new bl(e, 0),
						i = this.wr.firstAfterOrEqual(n);
					return Fs.resolve(e.isEqual(i && i.key));
				}
				performConsistencyCheck(t) {
					return this.mutationQueue.length, Fs.resolve();
				}
				Cr(t, e) {
					return this.br(t);
				}
				br(t) {
					return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId;
				}
				Sr(t) {
					const e = this.br(t);
					return e < 0 || e >= this.mutationQueue.length ? null : this.mutationQueue[e];
				}
			}
			class El {
				constructor(t) {
					(this.vr = t), (this.docs = new Zs(Rs.comparator)), (this.size = 0);
				}
				setIndexManager(t) {
					this.indexManager = t;
				}
				addEntry(t, e) {
					const n = e.key,
						i = this.docs.get(n),
						r = i ? i.size : 0,
						s = this.vr(e);
					return (
						(this.docs = this.docs.insert(n, { document: e.mutableCopy(), size: s })),
						(this.size += s - r),
						this.indexManager.addToCollectionParentIndex(t, n.path.popLast())
					);
				}
				removeEntry(t) {
					const e = this.docs.get(t);
					e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
				}
				getEntry(t, e) {
					const n = this.docs.get(e);
					return Fs.resolve(n ? n.document.mutableCopy() : Oo.newInvalidDocument(e));
				}
				getEntries(t, e) {
					let n = _a();
					return (
						e.forEach((t) => {
							const e = this.docs.get(t);
							n = n.insert(t, e ? e.document.mutableCopy() : Oo.newInvalidDocument(t));
						}),
						Fs.resolve(n)
					);
				}
				getDocumentsMatchingQuery(t, e, n, i) {
					let r = _a();
					const s = e.path,
						o = new Rs(s.child('')),
						a = this.docs.getIteratorFrom(o);
					for (; a.hasNext(); ) {
						const {
							key: t,
							value: { document: o },
						} = a.getNext();
						if (!s.isPrefixOf(t.path)) break;
						t.path.length > s.length + 1 ||
							Ls(Ns(o), n) <= 0 ||
							((i.has(o.key) || ga(e, o)) && (r = r.insert(o.key, o.mutableCopy())));
					}
					return Fs.resolve(r);
				}
				getAllFromCollectionGroup(t, e, n, i) {
					os();
				}
				Fr(t, e) {
					return Fs.forEach(this.docs, (t) => e(t));
				}
				newChangeBuffer(t) {
					return new Tl(this);
				}
				getSize(t) {
					return Fs.resolve(this.size);
				}
			}
			class Tl extends fl {
				constructor(t) {
					super(), (this.ar = t);
				}
				applyChanges(t) {
					const e = [];
					return (
						this.changes.forEach((n, i) => {
							i.isValidDocument() ? e.push(this.ar.addEntry(t, i)) : this.ar.removeEntry(n);
						}),
						Fs.waitFor(e)
					);
				}
				getFromCache(t, e) {
					return this.ar.getEntry(t, e);
				}
				getAllFromCache(t, e) {
					return this.ar.getEntries(t, e);
				}
			}
			class Il {
				constructor(t) {
					(this.persistence = t),
						(this.Mr = new wa((t) => ra(t), sa)),
						(this.lastRemoteSnapshotVersion = Ss.min()),
						(this.highestTargetId = 0),
						(this.Or = 0),
						(this.Nr = new wl()),
						(this.targetCount = 0),
						(this.Br = pl.Nn());
				}
				forEachTarget(t, e) {
					return this.Mr.forEach((t, n) => e(n)), Fs.resolve();
				}
				getLastRemoteSnapshotVersion(t) {
					return Fs.resolve(this.lastRemoteSnapshotVersion);
				}
				getHighestSequenceNumber(t) {
					return Fs.resolve(this.Or);
				}
				allocateTargetId(t) {
					return (this.highestTargetId = this.Br.next()), Fs.resolve(this.highestTargetId);
				}
				setTargetsMetadata(t, e, n) {
					return n && (this.lastRemoteSnapshotVersion = n), e > this.Or && (this.Or = e), Fs.resolve();
				}
				qn(t) {
					this.Mr.set(t.target, t);
					const e = t.targetId;
					e > this.highestTargetId && ((this.Br = new pl(e)), (this.highestTargetId = e)),
						t.sequenceNumber > this.Or && (this.Or = t.sequenceNumber);
				}
				addTargetData(t, e) {
					return this.qn(e), (this.targetCount += 1), Fs.resolve();
				}
				updateTargetData(t, e) {
					return this.qn(e), Fs.resolve();
				}
				removeTargetData(t, e) {
					return this.Mr.delete(e.target), this.Nr.Vr(e.targetId), (this.targetCount -= 1), Fs.resolve();
				}
				removeTargets(t, e, n) {
					let i = 0;
					const r = [];
					return (
						this.Mr.forEach((s, o) => {
							o.sequenceNumber <= e &&
								null === n.get(o.targetId) &&
								(this.Mr.delete(s), r.push(this.removeMatchingKeysForTargetId(t, o.targetId)), i++);
						}),
						Fs.waitFor(r).next(() => i)
					);
				}
				getTargetCount(t) {
					return Fs.resolve(this.targetCount);
				}
				getTargetData(t, e) {
					const n = this.Mr.get(e) || null;
					return Fs.resolve(n);
				}
				addMatchingKeys(t, e, n) {
					return this.Nr.dr(e, n), Fs.resolve();
				}
				removeMatchingKeys(t, e, n) {
					this.Nr.Rr(e, n);
					const i = this.persistence.referenceDelegate,
						r = [];
					return (
						i &&
							e.forEach((e) => {
								r.push(i.markPotentiallyOrphaned(t, e));
							}),
						Fs.waitFor(r)
					);
				}
				removeMatchingKeysForTargetId(t, e) {
					return this.Nr.Vr(e), Fs.resolve();
				}
				getMatchingKeysForTargetId(t, e) {
					const n = this.Nr.gr(e);
					return Fs.resolve(n);
				}
				containsKey(t, e) {
					return Fs.resolve(this.Nr.containsKey(e));
				}
			}
			class Sl {
				constructor(t, e) {
					(this.Lr = {}),
						(this.overlays = {}),
						(this.kr = new Ks(0)),
						(this.qr = !1),
						(this.qr = !0),
						(this.referenceDelegate = t(this)),
						(this.Qr = new Il(this)),
						(this.indexManager = new hl()),
						(this.remoteDocumentCache = (function (t) {
							return new El(t);
						})((t) => this.referenceDelegate.Kr(t))),
						(this.serializer = new al(e)),
						(this.$r = new yl(this.serializer));
				}
				start() {
					return Promise.resolve();
				}
				shutdown() {
					return (this.qr = !1), Promise.resolve();
				}
				get started() {
					return this.qr;
				}
				setDatabaseDeletedListener() {}
				setNetworkEnabled() {}
				getIndexManager(t) {
					return this.indexManager;
				}
				getDocumentOverlayCache(t) {
					let e = this.overlays[t.toKey()];
					return e || ((e = new vl()), (this.overlays[t.toKey()] = e)), e;
				}
				getMutationQueue(t, e) {
					let n = this.Lr[t.toKey()];
					return n || ((n = new _l(e, this.referenceDelegate)), (this.Lr[t.toKey()] = n)), n;
				}
				getTargetCache() {
					return this.Qr;
				}
				getRemoteDocumentCache() {
					return this.remoteDocumentCache;
				}
				getBundleCache() {
					return this.$r;
				}
				runTransaction(t, e, n) {
					ns('MemoryPersistence', 'Starting transaction:', t);
					const i = new Cl(this.kr.next());
					return (
						this.referenceDelegate.Ur(),
						n(i)
							.next((t) => this.referenceDelegate.Wr(i).next(() => t))
							.toPromise()
							.then((t) => (i.raiseOnCommittedEvent(), t))
					);
				}
				Gr(t, e) {
					return Fs.or(Object.values(this.Lr).map((n) => () => n.containsKey(t, e)));
				}
			}
			class Cl extends Ms {
				constructor(t) {
					super(), (this.currentSequenceNumber = t);
				}
			}
			class kl {
				constructor(t) {
					(this.persistence = t), (this.zr = new wl()), (this.jr = null);
				}
				static Hr(t) {
					return new kl(t);
				}
				get Jr() {
					if (this.jr) return this.jr;
					throw os();
				}
				addReference(t, e, n) {
					return this.zr.addReference(n, e), this.Jr.delete(n.toString()), Fs.resolve();
				}
				removeReference(t, e, n) {
					return this.zr.removeReference(n, e), this.Jr.add(n.toString()), Fs.resolve();
				}
				markPotentiallyOrphaned(t, e) {
					return this.Jr.add(e.toString()), Fs.resolve();
				}
				removeTarget(t, e) {
					this.zr.Vr(e.targetId).forEach((t) => this.Jr.add(t.toString()));
					const n = this.persistence.getTargetCache();
					return n
						.getMatchingKeysForTargetId(t, e.targetId)
						.next((t) => {
							t.forEach((t) => this.Jr.add(t.toString()));
						})
						.next(() => n.removeTargetData(t, e));
				}
				Ur() {
					this.jr = new Set();
				}
				Wr(t) {
					const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
					return Fs.forEach(this.Jr, (n) => {
						const i = Rs.fromPath(n);
						return this.Yr(t, i).next((t) => {
							t || e.removeEntry(i, Ss.min());
						});
					}).next(() => ((this.jr = null), e.apply(t)));
				}
				updateLimboDocument(t, e) {
					return this.Yr(t, e).next((t) => {
						t ? this.Jr.delete(e.toString()) : this.Jr.add(e.toString());
					});
				}
				Kr(t) {
					return 0;
				}
				Yr(t, e) {
					return Fs.or([
						() => Fs.resolve(this.zr.containsKey(e)),
						() => this.persistence.getTargetCache().containsKey(t, e),
						() => this.persistence.Gr(t, e),
					]);
				}
			}
			class Al {
				constructor(t, e, n, i) {
					(this.targetId = t), (this.fromCache = e), (this.qi = n), (this.Qi = i);
				}
				static Ki(t, e) {
					let n = Ra(),
						i = Ra();
					for (const t of e.docChanges)
						switch (t.type) {
							case 0:
								n = n.add(t.doc.key);
								break;
							case 1:
								i = i.add(t.doc.key);
						}
					return new Al(t, e.fromCache, n, i);
				}
			}
			class xl {
				constructor() {
					this._documentReadCount = 0;
				}
				get documentReadCount() {
					return this._documentReadCount;
				}
				incrementDocumentReadCount(t) {
					this._documentReadCount += t;
				}
			}
			class Rl {
				constructor() {
					(this.$i = !1),
						(this.Ui = !1),
						(this.Wi = 100),
						(this.Gi =
							(function () {
								var t;
								const e = null === (t = d()) || void 0 === t ? void 0 : t.forceEnvironment;
								if ('node' === e) return !0;
								if ('browser' === e) return !1;
								try {
									return '[object process]' === Object.prototype.toString.call(n.g.process);
								} catch (t) {
									return !1;
								}
							})() ||
							!navigator.userAgent.includes('Safari') ||
							navigator.userAgent.includes('Chrome')
								? Vs.v(y()) > 0
									? 6
									: 4
								: 8);
				}
				initialize(t, e) {
					(this.zi = t), (this.indexManager = e), (this.$i = !0);
				}
				getDocumentsMatchingQuery(t, e, n, i) {
					const r = { result: null };
					return this.ji(t, e)
						.next((t) => {
							r.result = t;
						})
						.next(() => {
							if (!r.result)
								return this.Hi(t, e, i, n).next((t) => {
									r.result = t;
								});
						})
						.next(() => {
							if (r.result) return;
							const n = new xl();
							return this.Ji(t, e, n).next((i) => {
								if (((r.result = i), this.Ui)) return this.Yi(t, e, n, i.size);
							});
						})
						.next(() => r.result);
				}
				Yi(t, e, n, i) {
					return n.documentReadCount < this.Wi
						? (es() <= M.DEBUG &&
								ns(
									'QueryEngine',
									'SDK will not create cache indexes for query:',
									ma(e),
									'since it only creates cache indexes for collection contains',
									'more than or equal to',
									this.Wi,
									'documents'
								),
						  Fs.resolve())
						: (es() <= M.DEBUG &&
								ns(
									'QueryEngine',
									'Query:',
									ma(e),
									'scans',
									n.documentReadCount,
									'local documents and returns',
									i,
									'documents as results.'
								),
						  n.documentReadCount > this.Gi * i
								? (es() <= M.DEBUG &&
										ns(
											'QueryEngine',
											'The SDK decides to create cache indexes for query:',
											ma(e),
											'as using cache indexes may help improve performance.'
										),
								  this.indexManager.createTargetIndexes(t, ua(e)))
								: Fs.resolve());
				}
				ji(t, e) {
					if (la(e)) return Fs.resolve(null);
					let n = ua(e);
					return this.indexManager.getIndexType(t, n).next((i) =>
						0 === i
							? null
							: (null !== e.limit && 1 === i && ((e = da(e, null, 'F')), (n = ua(e))),
							  this.indexManager.getDocumentsMatchingTarget(t, n).next((i) => {
									const r = Ra(...i);
									return this.zi.getDocuments(t, r).next((i) =>
										this.indexManager.getMinOffset(t, n).next((n) => {
											const s = this.Zi(e, i);
											return this.Xi(e, s, r, n.readTime) ? this.ji(t, da(e, null, 'F')) : this.es(t, s, e, n);
										})
									);
							  }))
					);
				}
				Hi(t, e, n, i) {
					return la(e) || i.isEqual(Ss.min())
						? Fs.resolve(null)
						: this.zi.getDocuments(t, n).next((r) => {
								const s = this.Zi(e, r);
								return this.Xi(e, s, n, i)
									? Fs.resolve(null)
									: (es() <= M.DEBUG &&
											ns('QueryEngine', 'Re-using previous result from %s to execute query: %s', i.toString(), ma(e)),
									  this.es(
											t,
											s,
											e,
											(function (t, e) {
												const n = t.toTimestamp().seconds,
													i = t.toTimestamp().nanoseconds + 1,
													r = Ss.fromTimestamp(1e9 === i ? new Is(n + 1, 0) : new Is(n, i));
												return new Ds(r, Rs.empty(), e);
											})(i, -1)
									  ).next((t) => t));
						  });
				}
				Zi(t, e) {
					let n = new no(ya(t));
					return (
						e.forEach((e, i) => {
							ga(t, i) && (n = n.add(i));
						}),
						n
					);
				}
				Xi(t, e, n, i) {
					if (null === t.limit) return !1;
					if (n.size !== e.size) return !0;
					const r = 'F' === t.limitType ? e.last() : e.first();
					return !!r && (r.hasPendingWrites || r.version.compareTo(i) > 0);
				}
				Ji(t, e, n) {
					return (
						es() <= M.DEBUG && ns('QueryEngine', 'Using full collection scan to execute query:', ma(e)),
						this.zi.getDocumentsMatchingQuery(t, e, Ds.min(), n)
					);
				}
				es(t, e, n, i) {
					return this.zi.getDocumentsMatchingQuery(t, n, i).next(
						(t) => (
							e.forEach((e) => {
								t = t.insert(e.key, e);
							}),
							t
						)
					);
				}
			}
			class Nl {
				constructor(t, e, n, i) {
					(this.persistence = t),
						(this.ts = e),
						(this.serializer = i),
						(this.ns = new Zs(Es)),
						(this.rs = new wa((t) => ra(t), sa)),
						(this.ss = new Map()),
						(this.os = t.getRemoteDocumentCache()),
						(this.Qr = t.getTargetCache()),
						(this.$r = t.getBundleCache()),
						this._s(n);
				}
				_s(t) {
					(this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
						(this.indexManager = this.persistence.getIndexManager(t)),
						(this.mutationQueue = this.persistence.getMutationQueue(t, this.indexManager)),
						(this.localDocuments = new gl(this.os, this.mutationQueue, this.documentOverlayCache, this.indexManager)),
						this.os.setIndexManager(this.indexManager),
						this.ts.initialize(this.localDocuments, this.indexManager);
				}
				collectGarbage(t) {
					return this.persistence.runTransaction('Collect garbage', 'readwrite-primary', (e) => t.collect(e, this.ns));
				}
			}
			async function Dl(t, e) {
				const n = cs(t);
				return await n.persistence.runTransaction('Handle user change', 'readonly', (t) => {
					let i;
					return n.mutationQueue
						.getAllMutationBatches(t)
						.next((r) => ((i = r), n._s(e), n.mutationQueue.getAllMutationBatches(t)))
						.next((e) => {
							const r = [],
								s = [];
							let o = Ra();
							for (const t of i) {
								r.push(t.batchId);
								for (const e of t.mutations) o = o.add(e.key);
							}
							for (const t of e) {
								s.push(t.batchId);
								for (const e of t.mutations) o = o.add(e.key);
							}
							return n.localDocuments.getDocuments(t, o).next((t) => ({ us: t, removedBatchIds: r, addedBatchIds: s }));
						});
				});
			}
			function Ll(t) {
				const e = cs(t);
				return e.persistence.runTransaction('Get last remote snapshot version', 'readonly', (t) =>
					e.Qr.getLastRemoteSnapshotVersion(t)
				);
			}
			function Ol(t, e) {
				const n = cs(t);
				return n.persistence.runTransaction(
					'Get next mutation batch',
					'readonly',
					(t) => (void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t, e))
				);
			}
			async function Ml(t, e, n) {
				const i = cs(t),
					r = i.ns.get(e),
					s = n ? 'readwrite' : 'readwrite-primary';
				try {
					n ||
						(await i.persistence.runTransaction('Release target', s, (t) =>
							i.persistence.referenceDelegate.removeTarget(t, r)
						));
				} catch (t) {
					if (!zs(t)) throw t;
					ns('LocalStore', `Failed to update sequence numbers for target ${e}: ${t}`);
				}
				(i.ns = i.ns.remove(e)), i.rs.delete(r.target);
			}
			function Pl(t, e, n) {
				const i = cs(t);
				let r = Ss.min(),
					s = Ra();
				return i.persistence.runTransaction('Execute query', 'readwrite', (t) =>
					(function (t, e, n) {
						const i = cs(t),
							r = i.rs.get(n);
						return void 0 !== r ? Fs.resolve(i.ns.get(r)) : i.Qr.getTargetData(e, n);
					})(i, t, ua(e))
						.next((e) => {
							if (e)
								return (
									(r = e.lastLimboFreeSnapshotVersion),
									i.Qr.getMatchingKeysForTargetId(t, e.targetId).next((t) => {
										s = t;
									})
								);
						})
						.next(() => i.ts.getDocumentsMatchingQuery(t, e, n ? r : Ss.min(), n ? s : Ra()))
						.next(
							(t) => (
								(function (t, e, n) {
									let i = t.ss.get(e) || Ss.min();
									n.forEach((t, e) => {
										e.readTime.compareTo(i) > 0 && (i = e.readTime);
									}),
										t.ss.set(e, i);
								})(
									i,
									(function (t) {
										return (
											t.collectionGroup ||
											(t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
										);
									})(e),
									t
								),
								{ documents: t, hs: s }
							)
						)
				);
			}
			class Fl {
				constructor() {
					this.activeTargetIds = Na;
				}
				As(t) {
					this.activeTargetIds = this.activeTargetIds.add(t);
				}
				Rs(t) {
					this.activeTargetIds = this.activeTargetIds.delete(t);
				}
				ds() {
					const t = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() };
					return JSON.stringify(t);
				}
			}
			class Ul {
				constructor() {
					(this.no = new Fl()), (this.ro = {}), (this.onlineStateHandler = null), (this.sequenceNumberHandler = null);
				}
				addPendingMutation(t) {}
				updateMutationState(t, e, n) {}
				addLocalQueryTarget(t) {
					return this.no.As(t), this.ro[t] || 'not-current';
				}
				updateQueryState(t, e, n) {
					this.ro[t] = e;
				}
				removeLocalQueryTarget(t) {
					this.no.Rs(t);
				}
				isLocalQueryTarget(t) {
					return this.no.activeTargetIds.has(t);
				}
				clearQueryState(t) {
					delete this.ro[t];
				}
				getAllActiveQueryTargets() {
					return this.no.activeTargetIds;
				}
				isActiveQueryTarget(t) {
					return this.no.activeTargetIds.has(t);
				}
				start() {
					return (this.no = new Fl()), Promise.resolve();
				}
				handleUserChange(t, e, n) {}
				setOnlineState(t) {}
				shutdown() {}
				writeSequenceNumber(t) {}
				notifyBundleLoaded(t) {}
			}
			class Vl {
				io(t) {}
				shutdown() {}
			}
			class jl {
				constructor() {
					(this.so = () => this.oo()), (this._o = () => this.ao()), (this.uo = []), this.co();
				}
				io(t) {
					this.uo.push(t);
				}
				shutdown() {
					window.removeEventListener('online', this.so), window.removeEventListener('offline', this._o);
				}
				co() {
					window.addEventListener('online', this.so), window.addEventListener('offline', this._o);
				}
				oo() {
					ns('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE');
					for (const t of this.uo) t(0);
				}
				ao() {
					ns('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE');
					for (const t of this.uo) t(1);
				}
				static D() {
					return (
						'undefined' != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
					);
				}
			}
			let Bl = null;
			function zl() {
				return null === Bl ? (Bl = 268435456 + Math.round(2147483648 * Math.random())) : Bl++, '0x' + Bl.toString(16);
			}
			const ql = {
				BatchGetDocuments: 'batchGet',
				Commit: 'commit',
				RunQuery: 'runQuery',
				RunAggregationQuery: 'runAggregationQuery',
			};
			class $l {
				constructor(t) {
					(this.lo = t.lo), (this.ho = t.ho);
				}
				Po(t) {
					this.Io = t;
				}
				To(t) {
					this.Eo = t;
				}
				onMessage(t) {
					this.Ao = t;
				}
				close() {
					this.ho();
				}
				send(t) {
					this.lo(t);
				}
				Ro() {
					this.Io();
				}
				Vo(t) {
					this.Eo(t);
				}
				mo(t) {
					this.Ao(t);
				}
			}
			const Hl = 'WebChannelConnection';
			class Gl extends class {
				constructor(t) {
					(this.databaseInfo = t), (this.databaseId = t.databaseId);
					const e = t.ssl ? 'https' : 'http',
						n = encodeURIComponent(this.databaseId.projectId),
						i = encodeURIComponent(this.databaseId.database);
					(this.fo = e + '://' + t.host),
						(this.po = `projects/${n}/databases/${i}`),
						(this.yo =
							'(default)' === this.databaseId.database ? `project_id=${n}` : `project_id=${n}&database_id=${i}`);
				}
				get wo() {
					return !1;
				}
				So(t, e, n, i, r) {
					const s = zl(),
						o = this.bo(t, e.toUriEncodedString());
					ns('RestConnection', `Sending RPC '${t}' ${s}:`, o, n);
					const a = { 'google-cloud-resource-prefix': this.po, 'x-goog-request-params': this.yo };
					return (
						this.Do(a, i, r),
						this.Co(t, o, a, n).then(
							(e) => (ns('RestConnection', `Received RPC '${t}' ${s}: `, e), e),
							(e) => {
								throw (rs('RestConnection', `RPC '${t}' ${s} failed with error: `, e, 'url: ', o, 'request:', n), e);
							}
						)
					);
				}
				vo(t, e, n, i, r, s) {
					return this.So(t, e, n, i, r);
				}
				Do(t, e, n) {
					(t['X-Goog-Api-Client'] = 'gl-js/ fire/' + Zr),
						(t['Content-Type'] = 'text/plain'),
						this.databaseInfo.appId && (t['X-Firebase-GMPID'] = this.databaseInfo.appId),
						e && e.headers.forEach((e, n) => (t[n] = e)),
						n && n.headers.forEach((e, n) => (t[n] = e));
				}
				bo(t, e) {
					const n = ql[t];
					return `${this.fo}/v1/${e}:${n}`;
				}
				terminate() {}
			} {
				constructor(t) {
					super(t),
						(this.forceLongPolling = t.forceLongPolling),
						(this.autoDetectLongPolling = t.autoDetectLongPolling),
						(this.useFetchStreams = t.useFetchStreams),
						(this.longPollingOptions = t.longPollingOptions);
				}
				Co(t, e, n, i) {
					const r = zl();
					return new Promise((s, o) => {
						const a = new Wr();
						a.setWithCredentials(!0),
							a.listenOnce($r.COMPLETE, () => {
								try {
									switch (a.getLastErrorCode()) {
										case qr.NO_ERROR:
											const e = a.getResponseJson();
											ns(Hl, `XHR for RPC '${t}' ${r} received:`, JSON.stringify(e)), s(e);
											break;
										case qr.TIMEOUT:
											ns(Hl, `RPC '${t}' ${r} timed out`), o(new hs(ls.DEADLINE_EXCEEDED, 'Request time out'));
											break;
										case qr.HTTP_ERROR:
											const n = a.getStatus();
											if (
												(ns(Hl, `RPC '${t}' ${r} failed with status:`, n, 'response text:', a.getResponseText()), n > 0)
											) {
												let t = a.getResponseJson();
												Array.isArray(t) && (t = t[0]);
												const e = null == t ? void 0 : t.error;
												if (e && e.status && e.message) {
													const t = (function (t) {
														const e = t.toLowerCase().replace(/_/g, '-');
														return Object.values(ls).indexOf(e) >= 0 ? e : ls.UNKNOWN;
													})(e.status);
													o(new hs(t, e.message));
												} else o(new hs(ls.UNKNOWN, 'Server responded with status ' + a.getStatus()));
											} else o(new hs(ls.UNAVAILABLE, 'Connection failed.'));
											break;
										default:
											os();
									}
								} finally {
									ns(Hl, `RPC '${t}' ${r} completed.`);
								}
							});
						const c = JSON.stringify(i);
						ns(Hl, `RPC '${t}' ${r} sending request:`, i), a.send(e, 'POST', c, n, 15);
					});
				}
				Fo(t, e, n) {
					const i = zl(),
						r = [this.fo, '/', 'google.firestore.v1.Firestore', '/', t, '/channel'],
						s = Br(),
						o = zr(),
						a = {
							httpSessionIdParam: 'gsessionid',
							initMessageHeaders: {},
							messageUrlParams: {
								database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
							},
							sendRawJson: !0,
							supportsCrossDomainXhr: !0,
							internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
							forceLongPolling: this.forceLongPolling,
							detectBufferingProxy: this.autoDetectLongPolling,
						},
						c = this.longPollingOptions.timeoutSeconds;
					void 0 !== c && (a.longPollingTimeout = Math.round(1e3 * c)),
						this.useFetchStreams && (a.useFetchStreams = !0),
						this.Do(a.initMessageHeaders, e, n),
						(a.encodeInitMessageHeaders = !0);
					const l = r.join('');
					ns(Hl, `Creating RPC '${t}' stream ${i}: ${l}`, a);
					const h = s.createWebChannel(l, a);
					let u = !1,
						d = !1;
					const p = new $l({
							lo: (e) => {
								d
									? ns(Hl, `Not sending because RPC '${t}' stream ${i} is closed:`, e)
									: (u || (ns(Hl, `Opening RPC '${t}' stream ${i} transport.`), h.open(), (u = !0)),
									  ns(Hl, `RPC '${t}' stream ${i} sending:`, e),
									  h.send(e));
							},
							ho: () => h.close(),
						}),
						f = (t, e, n) => {
							t.listen(e, (t) => {
								try {
									n(t);
								} catch (t) {
									setTimeout(() => {
										throw t;
									}, 0);
								}
							});
						};
					return (
						f(h, Kr.EventType.OPEN, () => {
							d || ns(Hl, `RPC '${t}' stream ${i} transport opened.`);
						}),
						f(h, Kr.EventType.CLOSE, () => {
							d || ((d = !0), ns(Hl, `RPC '${t}' stream ${i} transport closed`), p.Vo());
						}),
						f(h, Kr.EventType.ERROR, (e) => {
							d ||
								((d = !0),
								rs(Hl, `RPC '${t}' stream ${i} transport errored:`, e),
								p.Vo(new hs(ls.UNAVAILABLE, 'The operation could not be completed')));
						}),
						f(h, Kr.EventType.MESSAGE, (e) => {
							var n;
							if (!d) {
								const r = e.data[0];
								as(!!r);
								const s = r,
									o = s.error || (null === (n = s[0]) || void 0 === n ? void 0 : n.error);
								if (o) {
									ns(Hl, `RPC '${t}' stream ${i} received error:`, o);
									const e = o.status;
									let n = (function (t) {
											const e = pc[t];
											if (void 0 !== e) return mc(e);
										})(e),
										r = o.message;
									void 0 === n &&
										((n = ls.INTERNAL), (r = 'Unknown error status: ' + e + ' with message ' + o.message)),
										(d = !0),
										p.Vo(new hs(n, r)),
										h.close();
								} else ns(Hl, `RPC '${t}' stream ${i} received:`, r), p.mo(r);
							}
						}),
						f(o, Hr.STAT_EVENT, (e) => {
							e.stat === Gr.PROXY
								? ns(Hl, `RPC '${t}' stream ${i} detected buffering proxy`)
								: e.stat === Gr.NOPROXY && ns(Hl, `RPC '${t}' stream ${i} detected no buffering proxy`);
						}),
						setTimeout(() => {
							p.Ro();
						}, 0),
						p
					);
				}
			}
			function Kl() {
				return 'undefined' != typeof document ? document : null;
			}
			function Wl(t) {
				return new Lc(t, !0);
			}
			class Ql {
				constructor(t, e, n = 1e3, i = 1.5, r = 6e4) {
					(this.oi = t),
						(this.timerId = e),
						(this.Mo = n),
						(this.xo = i),
						(this.Oo = r),
						(this.No = 0),
						(this.Bo = null),
						(this.Lo = Date.now()),
						this.reset();
				}
				reset() {
					this.No = 0;
				}
				ko() {
					this.No = this.Oo;
				}
				qo(t) {
					this.cancel();
					const e = Math.floor(this.No + this.Qo()),
						n = Math.max(0, Date.now() - this.Lo),
						i = Math.max(0, e - n);
					i > 0 &&
						ns(
							'ExponentialBackoff',
							`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`
						),
						(this.Bo = this.oi.enqueueAfterDelay(this.timerId, i, () => ((this.Lo = Date.now()), t()))),
						(this.No *= this.xo),
						this.No < this.Mo && (this.No = this.Mo),
						this.No > this.Oo && (this.No = this.Oo);
				}
				Ko() {
					null !== this.Bo && (this.Bo.skipDelay(), (this.Bo = null));
				}
				cancel() {
					null !== this.Bo && (this.Bo.cancel(), (this.Bo = null));
				}
				Qo() {
					return (Math.random() - 0.5) * this.No;
				}
			}
			class Jl {
				constructor(t, e, n, i, r, s, o, a) {
					(this.oi = t),
						(this.$o = n),
						(this.Uo = i),
						(this.connection = r),
						(this.authCredentialsProvider = s),
						(this.appCheckCredentialsProvider = o),
						(this.listener = a),
						(this.state = 0),
						(this.Wo = 0),
						(this.Go = null),
						(this.zo = null),
						(this.stream = null),
						(this.jo = new Ql(t, e));
				}
				Ho() {
					return 1 === this.state || 5 === this.state || this.Jo();
				}
				Jo() {
					return 2 === this.state || 3 === this.state;
				}
				start() {
					4 !== this.state ? this.auth() : this.Yo();
				}
				async stop() {
					this.Ho() && (await this.close(0));
				}
				Zo() {
					(this.state = 0), this.jo.reset();
				}
				Xo() {
					this.Jo() && null === this.Go && (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
				}
				t_(t) {
					this.n_(), this.stream.send(t);
				}
				async e_() {
					if (this.Jo()) return this.close(0);
				}
				n_() {
					this.Go && (this.Go.cancel(), (this.Go = null));
				}
				r_() {
					this.zo && (this.zo.cancel(), (this.zo = null));
				}
				async close(t, e) {
					this.n_(),
						this.r_(),
						this.jo.cancel(),
						this.Wo++,
						4 !== t
							? this.jo.reset()
							: e && e.code === ls.RESOURCE_EXHAUSTED
							? (is(e.toString()), is('Using maximum backoff delay to prevent overloading the backend.'), this.jo.ko())
							: e &&
							  e.code === ls.UNAUTHENTICATED &&
							  3 !== this.state &&
							  (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()),
						null !== this.stream && (this.i_(), this.stream.close(), (this.stream = null)),
						(this.state = t),
						await this.listener.To(e);
				}
				i_() {}
				auth() {
					this.state = 1;
					const t = this.s_(this.Wo),
						e = this.Wo;
					Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(
						([t, n]) => {
							this.Wo === e && this.o_(t, n);
						},
						(e) => {
							t(() => {
								const t = new hs(ls.UNKNOWN, 'Fetching auth token failed: ' + e.message);
								return this.__(t);
							});
						}
					);
				}
				o_(t, e) {
					const n = this.s_(this.Wo);
					(this.stream = this.a_(t, e)),
						this.stream.Po(() => {
							n(
								() => (
									(this.state = 2),
									(this.zo = this.oi.enqueueAfterDelay(
										this.Uo,
										1e4,
										() => (this.Jo() && (this.state = 3), Promise.resolve())
									)),
									this.listener.Po()
								)
							);
						}),
						this.stream.To((t) => {
							n(() => this.__(t));
						}),
						this.stream.onMessage((t) => {
							n(() => this.onMessage(t));
						});
				}
				Yo() {
					(this.state = 5),
						this.jo.qo(async () => {
							(this.state = 0), this.start();
						});
				}
				__(t) {
					return ns('PersistentStream', `close with error: ${t}`), (this.stream = null), this.close(4, t);
				}
				s_(t) {
					return (e) => {
						this.oi.enqueueAndForget(() =>
							this.Wo === t
								? e()
								: (ns('PersistentStream', 'stream callback skipped by getCloseGuardedDispatcher.'), Promise.resolve())
						);
					};
				}
			}
			class Xl extends Jl {
				constructor(t, e, n, i, r, s) {
					super(t, 'listen_stream_connection_backoff', 'listen_stream_idle', 'health_check_timeout', e, n, i, s),
						(this.serializer = r);
				}
				a_(t, e) {
					return this.connection.Fo('Listen', t, e);
				}
				onMessage(t) {
					this.jo.reset();
					const e = (function (t, e) {
							let n;
							if ('targetChange' in e) {
								e.targetChange;
								const i = (function (t) {
										return 'NO_CHANGE' === t
											? 0
											: 'ADD' === t
											? 1
											: 'REMOVE' === t
											? 2
											: 'CURRENT' === t
											? 3
											: 'RESET' === t
											? 4
											: os();
									})(e.targetChange.targetChangeType || 'NO_CHANGE'),
									r = e.targetChange.targetIds || [],
									s = (function (t, e) {
										return t.useProto3Json
											? (as(void 0 === e || 'string' == typeof e), oo.fromBase64String(e || ''))
											: (as(void 0 === e || e instanceof Uint8Array), oo.fromUint8Array(e || new Uint8Array()));
									})(t, e.targetChange.resumeToken),
									o = e.targetChange.cause,
									a =
										o &&
										(function (t) {
											const e = void 0 === t.code ? ls.UNKNOWN : mc(t.code);
											return new hs(e, t.message || '');
										})(o);
								n = new Sc(i, r, s, a || null);
							} else if ('documentChange' in e) {
								e.documentChange;
								const i = e.documentChange;
								i.document, i.document.name, i.document.updateTime;
								const r = qc(t, i.document.name),
									s = Uc(i.document.updateTime),
									o = i.document.createTime ? Uc(i.document.createTime) : Ss.min(),
									a = new Do({ mapValue: { fields: i.document.fields } }),
									c = Oo.newFoundDocument(r, s, o, a),
									l = i.targetIds || [],
									h = i.removedTargetIds || [];
								n = new Tc(l, h, c.key, c);
							} else if ('documentDelete' in e) {
								e.documentDelete;
								const i = e.documentDelete;
								i.document;
								const r = qc(t, i.document),
									s = i.readTime ? Uc(i.readTime) : Ss.min(),
									o = Oo.newNoDocument(r, s),
									a = i.removedTargetIds || [];
								n = new Tc([], a, o.key, o);
							} else if ('documentRemove' in e) {
								e.documentRemove;
								const i = e.documentRemove;
								i.document;
								const r = qc(t, i.document),
									s = i.removedTargetIds || [];
								n = new Tc([], s, r, null);
							} else {
								if (!('filter' in e)) return os();
								{
									e.filter;
									const t = e.filter;
									t.targetId;
									const { count: i = 0, unchangedNames: r } = t,
										s = new dc(i, r),
										o = t.targetId;
									n = new Ic(o, s);
								}
							}
							return n;
						})(this.serializer, t),
						n = (function (t) {
							if (!('targetChange' in t)) return Ss.min();
							const e = t.targetChange;
							return e.targetIds && e.targetIds.length ? Ss.min() : e.readTime ? Uc(e.readTime) : Ss.min();
						})(t);
					return this.listener.u_(e, n);
				}
				c_(t) {
					const e = {};
					(e.database = Hc(this.serializer)),
						(e.addTarget = (function (t, e) {
							let n;
							const i = e.target;
							if (
								((n = oa(i) ? { documents: Wc(t, i) } : { query: Qc(t, i).ut }),
								(n.targetId = e.targetId),
								e.resumeToken.approximateByteSize() > 0)
							) {
								n.resumeToken = Pc(t, e.resumeToken);
								const i = Oc(t, e.expectedCount);
								null !== i && (n.expectedCount = i);
							} else if (e.snapshotVersion.compareTo(Ss.min()) > 0) {
								n.readTime = Mc(t, e.snapshotVersion.toTimestamp());
								const i = Oc(t, e.expectedCount);
								null !== i && (n.expectedCount = i);
							}
							return n;
						})(this.serializer, t));
					const n = (function (t, e) {
						const n = (function (t) {
							switch (t) {
								case 'TargetPurposeListen':
									return null;
								case 'TargetPurposeExistenceFilterMismatch':
									return 'existence-filter-mismatch';
								case 'TargetPurposeExistenceFilterMismatchBloom':
									return 'existence-filter-mismatch-bloom';
								case 'TargetPurposeLimboResolution':
									return 'limbo-document';
								default:
									return os();
							}
						})(e.purpose);
						return null == n ? null : { 'goog-listen-tags': n };
					})(this.serializer, t);
					n && (e.labels = n), this.t_(e);
				}
				l_(t) {
					const e = {};
					(e.database = Hc(this.serializer)), (e.removeTarget = t), this.t_(e);
				}
			}
			class Yl extends Jl {
				constructor(t, e, n, i, r, s) {
					super(t, 'write_stream_connection_backoff', 'write_stream_idle', 'health_check_timeout', e, n, i, s),
						(this.serializer = r),
						(this.h_ = !1);
				}
				get P_() {
					return this.h_;
				}
				start() {
					(this.h_ = !1), (this.lastStreamToken = void 0), super.start();
				}
				i_() {
					this.h_ && this.I_([]);
				}
				a_(t, e) {
					return this.connection.Fo('Write', t, e);
				}
				onMessage(t) {
					if ((as(!!t.streamToken), (this.lastStreamToken = t.streamToken), this.h_)) {
						this.jo.reset();
						const e = (function (t, e) {
								return t && t.length > 0
									? (as(void 0 !== e),
									  t.map((t) =>
											(function (t, e) {
												let n = t.updateTime ? Uc(t.updateTime) : Uc(e);
												return n.isEqual(Ss.min()) && (n = Uc(e)), new Ka(n, t.transformResults || []);
											})(t, e)
									  ))
									: [];
							})(t.writeResults, t.commitTime),
							n = Uc(t.commitTime);
						return this.listener.T_(n, e);
					}
					return as(!t.writeResults || 0 === t.writeResults.length), (this.h_ = !0), this.listener.E_();
				}
				d_() {
					const t = {};
					(t.database = Hc(this.serializer)), this.t_(t);
				}
				I_(t) {
					const e = {
						streamToken: this.lastStreamToken,
						writes: t.map((t) =>
							(function (t, e) {
								let n;
								if (e instanceof nc) n = { update: Kc(t, e.key, e.value) };
								else if (e instanceof ac) n = { delete: zc(t, e.key) };
								else if (e instanceof ic) n = { update: Kc(t, e.key, e.data), updateMask: rl(e.fieldMask) };
								else {
									if (!(e instanceof cc)) return os();
									n = { verify: zc(t, e.key) };
								}
								return (
									e.fieldTransforms.length > 0 &&
										(n.updateTransforms = e.fieldTransforms.map((t) =>
											(function (t, e) {
												const n = e.transform;
												if (n instanceof Va)
													return { fieldPath: e.field.canonicalString(), setToServerValue: 'REQUEST_TIME' };
												if (n instanceof ja)
													return {
														fieldPath: e.field.canonicalString(),
														appendMissingElements: { values: n.elements },
													};
												if (n instanceof za)
													return { fieldPath: e.field.canonicalString(), removeAllFromArray: { values: n.elements } };
												if (n instanceof $a) return { fieldPath: e.field.canonicalString(), increment: n.Ie };
												throw os();
											})(0, t)
										)),
									e.precondition.isNone ||
										(n.currentDocument = (function (t, e) {
											return void 0 !== e.updateTime
												? { updateTime: Fc(t, e.updateTime) }
												: void 0 !== e.exists
												? { exists: e.exists }
												: os();
										})(t, e.precondition)),
									n
								);
							})(this.serializer, t)
						),
					};
					this.t_(e);
				}
			}
			class Zl extends class {} {
				constructor(t, e, n, i) {
					super(),
						(this.authCredentials = t),
						(this.appCheckCredentials = e),
						(this.connection = n),
						(this.serializer = i),
						(this.A_ = !1);
				}
				R_() {
					if (this.A_) throw new hs(ls.FAILED_PRECONDITION, 'The client has already been terminated.');
				}
				So(t, e, n, i) {
					return (
						this.R_(),
						Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
							.then(([r, s]) => this.connection.So(t, jc(e, n), i, r, s))
							.catch((t) => {
								throw 'FirebaseError' === t.name
									? (t.code === ls.UNAUTHENTICATED &&
											(this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()),
									  t)
									: new hs(ls.UNKNOWN, t.toString());
							})
					);
				}
				vo(t, e, n, i, r) {
					return (
						this.R_(),
						Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
							.then(([s, o]) => this.connection.vo(t, jc(e, n), i, s, o, r))
							.catch((t) => {
								throw 'FirebaseError' === t.name
									? (t.code === ls.UNAUTHENTICATED &&
											(this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()),
									  t)
									: new hs(ls.UNKNOWN, t.toString());
							})
					);
				}
				terminate() {
					(this.A_ = !0), this.connection.terminate();
				}
			}
			class th {
				constructor(t, e) {
					(this.asyncQueue = t),
						(this.onlineStateHandler = e),
						(this.state = 'Unknown'),
						(this.m_ = 0),
						(this.f_ = null),
						(this.g_ = !0);
				}
				p_() {
					0 === this.m_ &&
						(this.y_('Unknown'),
						(this.f_ = this.asyncQueue.enqueueAfterDelay(
							'online_state_timeout',
							1e4,
							() => (
								(this.f_ = null),
								this.w_("Backend didn't respond within 10 seconds."),
								this.y_('Offline'),
								Promise.resolve()
							)
						)));
				}
				S_(t) {
					'Online' === this.state
						? this.y_('Unknown')
						: (this.m_++,
						  this.m_ >= 1 &&
								(this.b_(),
								this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),
								this.y_('Offline')));
				}
				set(t) {
					this.b_(), (this.m_ = 0), 'Online' === t && (this.g_ = !1), this.y_(t);
				}
				y_(t) {
					t !== this.state && ((this.state = t), this.onlineStateHandler(t));
				}
				w_(t) {
					const e = `Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
					this.g_ ? (is(e), (this.g_ = !1)) : ns('OnlineStateTracker', e);
				}
				b_() {
					null !== this.f_ && (this.f_.cancel(), (this.f_ = null));
				}
			}
			class eh {
				constructor(t, e, n, i, r) {
					(this.localStore = t),
						(this.datastore = e),
						(this.asyncQueue = n),
						(this.remoteSyncer = {}),
						(this.D_ = []),
						(this.C_ = new Map()),
						(this.v_ = new Set()),
						(this.F_ = []),
						(this.M_ = r),
						this.M_.io((t) => {
							n.enqueueAndForget(async () => {
								hh(this) &&
									(ns('RemoteStore', 'Restarting streams for network reachability change.'),
									await (async function (t) {
										const e = cs(t);
										e.v_.add(4), await ih(e), e.x_.set('Unknown'), e.v_.delete(4), await nh(e);
									})(this));
							});
						}),
						(this.x_ = new th(n, i));
				}
			}
			async function nh(t) {
				if (hh(t)) for (const e of t.F_) await e(!0);
			}
			async function ih(t) {
				for (const e of t.F_) await e(!1);
			}
			function rh(t, e) {
				const n = cs(t);
				n.C_.has(e.targetId) || (n.C_.set(e.targetId, e), lh(n) ? ch(n) : kh(n).Jo() && oh(n, e));
			}
			function sh(t, e) {
				const n = cs(t),
					i = kh(n);
				n.C_.delete(e), i.Jo() && ah(n, e), 0 === n.C_.size && (i.Jo() ? i.Xo() : hh(n) && n.x_.set('Unknown'));
			}
			function oh(t, e) {
				if (
					(t.O_.Oe(e.targetId), e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(Ss.min()) > 0)
				) {
					const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
					e = e.withExpectedCount(n);
				}
				kh(t).c_(e);
			}
			function ah(t, e) {
				t.O_.Oe(e), kh(t).l_(e);
			}
			function ch(t) {
				(t.O_ = new kc({
					getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
					_t: (e) => t.C_.get(e) || null,
					nt: () => t.datastore.serializer.databaseId,
				})),
					kh(t).start(),
					t.x_.p_();
			}
			function lh(t) {
				return hh(t) && !kh(t).Ho() && t.C_.size > 0;
			}
			function hh(t) {
				return 0 === cs(t).v_.size;
			}
			function uh(t) {
				t.O_ = void 0;
			}
			async function dh(t) {
				t.C_.forEach((e, n) => {
					oh(t, e);
				});
			}
			async function ph(t, e) {
				uh(t), lh(t) ? (t.x_.S_(e), ch(t)) : t.x_.set('Unknown');
			}
			async function fh(t, e, n) {
				if ((t.x_.set('Online'), e instanceof Sc && 2 === e.state && e.cause))
					try {
						await (async function (t, e) {
							const n = e.cause;
							for (const i of e.targetIds)
								t.C_.has(i) && (await t.remoteSyncer.rejectListen(i, n), t.C_.delete(i), t.O_.removeTarget(i));
						})(t, e);
					} catch (n) {
						ns('RemoteStore', 'Failed to remove targets %s: %s ', e.targetIds.join(','), n), await mh(t, n);
					}
				else if ((e instanceof Tc ? t.O_.$e(e) : e instanceof Ic ? t.O_.Je(e) : t.O_.Ge(e), !n.isEqual(Ss.min())))
					try {
						const e = await Ll(t.localStore);
						n.compareTo(e) >= 0 &&
							(await (function (t, e) {
								const n = t.O_.it(e);
								return (
									n.targetChanges.forEach((n, i) => {
										if (n.resumeToken.approximateByteSize() > 0) {
											const r = t.C_.get(i);
											r && t.C_.set(i, r.withResumeToken(n.resumeToken, e));
										}
									}),
									n.targetMismatches.forEach((e, n) => {
										const i = t.C_.get(e);
										if (!i) return;
										t.C_.set(e, i.withResumeToken(oo.EMPTY_BYTE_STRING, i.snapshotVersion)), ah(t, e);
										const r = new ol(i.target, e, n, i.sequenceNumber);
										oh(t, r);
									}),
									t.remoteSyncer.applyRemoteEvent(n)
								);
							})(t, n));
					} catch (e) {
						ns('RemoteStore', 'Failed to raise snapshot:', e), await mh(t, e);
					}
			}
			async function mh(t, e, n) {
				if (!zs(e)) throw e;
				t.v_.add(1),
					await ih(t),
					t.x_.set('Offline'),
					n || (n = () => Ll(t.localStore)),
					t.asyncQueue.enqueueRetryable(async () => {
						ns('RemoteStore', 'Retrying IndexedDB access'), await n(), t.v_.delete(1), await nh(t);
					});
			}
			function gh(t, e) {
				return e().catch((n) => mh(t, n, e));
			}
			async function yh(t) {
				const e = cs(t),
					n = Ah(e);
				let i = e.D_.length > 0 ? e.D_[e.D_.length - 1].batchId : -1;
				for (; vh(e); )
					try {
						const t = await Ol(e.localStore, i);
						if (null === t) {
							0 === e.D_.length && n.Xo();
							break;
						}
						(i = t.batchId), wh(e, t);
					} catch (t) {
						await mh(e, t);
					}
				bh(e) && _h(e);
			}
			function vh(t) {
				return hh(t) && t.D_.length < 10;
			}
			function wh(t, e) {
				t.D_.push(e);
				const n = Ah(t);
				n.Jo() && n.P_ && n.I_(e.mutations);
			}
			function bh(t) {
				return hh(t) && !Ah(t).Ho() && t.D_.length > 0;
			}
			function _h(t) {
				Ah(t).start();
			}
			async function Eh(t) {
				Ah(t).d_();
			}
			async function Th(t) {
				const e = Ah(t);
				for (const n of t.D_) e.I_(n.mutations);
			}
			async function Ih(t, e, n) {
				const i = t.D_.shift(),
					r = hc.from(i, e, n);
				await gh(t, () => t.remoteSyncer.applySuccessfulWrite(r)), await yh(t);
			}
			async function Sh(t, e) {
				e &&
					Ah(t).P_ &&
					(await (async function (t, e) {
						if (
							(function (t) {
								return (
									(function (t) {
										switch (t) {
											default:
												return os();
											case ls.CANCELLED:
											case ls.UNKNOWN:
											case ls.DEADLINE_EXCEEDED:
											case ls.RESOURCE_EXHAUSTED:
											case ls.INTERNAL:
											case ls.UNAVAILABLE:
											case ls.UNAUTHENTICATED:
												return !1;
											case ls.INVALID_ARGUMENT:
											case ls.NOT_FOUND:
											case ls.ALREADY_EXISTS:
											case ls.PERMISSION_DENIED:
											case ls.FAILED_PRECONDITION:
											case ls.ABORTED:
											case ls.OUT_OF_RANGE:
											case ls.UNIMPLEMENTED:
											case ls.DATA_LOSS:
												return !0;
										}
									})(t) && t !== ls.ABORTED
								);
							})(e.code)
						) {
							const n = t.D_.shift();
							Ah(t).Zo(), await gh(t, () => t.remoteSyncer.rejectFailedWrite(n.batchId, e)), await yh(t);
						}
					})(t, e)),
					bh(t) && _h(t);
			}
			async function Ch(t, e) {
				const n = cs(t);
				n.asyncQueue.verifyOperationInProgress(), ns('RemoteStore', 'RemoteStore received new credentials');
				const i = hh(n);
				n.v_.add(3),
					await ih(n),
					i && n.x_.set('Unknown'),
					await n.remoteSyncer.handleCredentialChange(e),
					n.v_.delete(3),
					await nh(n);
			}
			function kh(t) {
				return (
					t.N_ ||
						((t.N_ = (function (t, e, n) {
							const i = cs(t);
							return i.R_(), new Xl(e, i.connection, i.authCredentials, i.appCheckCredentials, i.serializer, n);
						})(t.datastore, t.asyncQueue, { Po: dh.bind(null, t), To: ph.bind(null, t), u_: fh.bind(null, t) })),
						t.F_.push(async (e) => {
							e ? (t.N_.Zo(), lh(t) ? ch(t) : t.x_.set('Unknown')) : (await t.N_.stop(), uh(t));
						})),
					t.N_
				);
			}
			function Ah(t) {
				return (
					t.B_ ||
						((t.B_ = (function (t, e, n) {
							const i = cs(t);
							return i.R_(), new Yl(e, i.connection, i.authCredentials, i.appCheckCredentials, i.serializer, n);
						})(t.datastore, t.asyncQueue, {
							Po: Eh.bind(null, t),
							To: Sh.bind(null, t),
							E_: Th.bind(null, t),
							T_: Ih.bind(null, t),
						})),
						t.F_.push(async (e) => {
							e
								? (t.B_.Zo(), await yh(t))
								: (await t.B_.stop(),
								  t.D_.length > 0 &&
										(ns('RemoteStore', `Stopping write stream with ${t.D_.length} pending writes`), (t.D_ = [])));
						})),
					t.B_
				);
			}
			class xh {
				constructor(t, e, n, i, r) {
					(this.asyncQueue = t),
						(this.timerId = e),
						(this.targetTimeMs = n),
						(this.op = i),
						(this.removalCallback = r),
						(this.deferred = new us()),
						(this.then = this.deferred.promise.then.bind(this.deferred.promise)),
						this.deferred.promise.catch((t) => {});
				}
				get promise() {
					return this.deferred.promise;
				}
				static createAndSchedule(t, e, n, i, r) {
					const s = Date.now() + n,
						o = new xh(t, e, s, i, r);
					return o.start(n), o;
				}
				start(t) {
					this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
				}
				skipDelay() {
					return this.handleDelayElapsed();
				}
				cancel(t) {
					null !== this.timerHandle &&
						(this.clearTimeout(),
						this.deferred.reject(new hs(ls.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))));
				}
				handleDelayElapsed() {
					this.asyncQueue.enqueueAndForget(() =>
						null !== this.timerHandle
							? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
							: Promise.resolve()
					);
				}
				clearTimeout() {
					null !== this.timerHandle &&
						(this.removalCallback(this), clearTimeout(this.timerHandle), (this.timerHandle = null));
				}
			}
			function Rh(t, e) {
				if ((is('AsyncQueue', `${e}: ${t}`), zs(t))) return new hs(ls.UNAVAILABLE, `${e}: ${t}`);
				throw t;
			}
			class Nh {
				constructor(t) {
					(this.comparator = t
						? (e, n) => t(e, n) || Rs.comparator(e.key, n.key)
						: (t, e) => Rs.comparator(t.key, e.key)),
						(this.keyedMap = Ta()),
						(this.sortedSet = new Zs(this.comparator));
				}
				static emptySet(t) {
					return new Nh(t.comparator);
				}
				has(t) {
					return null != this.keyedMap.get(t);
				}
				get(t) {
					return this.keyedMap.get(t);
				}
				first() {
					return this.sortedSet.minKey();
				}
				last() {
					return this.sortedSet.maxKey();
				}
				isEmpty() {
					return this.sortedSet.isEmpty();
				}
				indexOf(t) {
					const e = this.keyedMap.get(t);
					return e ? this.sortedSet.indexOf(e) : -1;
				}
				get size() {
					return this.sortedSet.size;
				}
				forEach(t) {
					this.sortedSet.inorderTraversal((e, n) => (t(e), !1));
				}
				add(t) {
					const e = this.delete(t.key);
					return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
				}
				delete(t) {
					const e = this.get(t);
					return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
				}
				isEqual(t) {
					if (!(t instanceof Nh)) return !1;
					if (this.size !== t.size) return !1;
					const e = this.sortedSet.getIterator(),
						n = t.sortedSet.getIterator();
					for (; e.hasNext(); ) {
						const t = e.getNext().key,
							i = n.getNext().key;
						if (!t.isEqual(i)) return !1;
					}
					return !0;
				}
				toString() {
					const t = [];
					return (
						this.forEach((e) => {
							t.push(e.toString());
						}),
						0 === t.length ? 'DocumentSet ()' : 'DocumentSet (\n  ' + t.join('  \n') + '\n)'
					);
				}
				copy(t, e) {
					const n = new Nh();
					return (n.comparator = this.comparator), (n.keyedMap = t), (n.sortedSet = e), n;
				}
			}
			class Dh {
				constructor() {
					this.L_ = new Zs(Rs.comparator);
				}
				track(t) {
					const e = t.doc.key,
						n = this.L_.get(e);
					n
						? 0 !== t.type && 3 === n.type
							? (this.L_ = this.L_.insert(e, t))
							: 3 === t.type && 1 !== n.type
							? (this.L_ = this.L_.insert(e, { type: n.type, doc: t.doc }))
							: 2 === t.type && 2 === n.type
							? (this.L_ = this.L_.insert(e, { type: 2, doc: t.doc }))
							: 2 === t.type && 0 === n.type
							? (this.L_ = this.L_.insert(e, { type: 0, doc: t.doc }))
							: 1 === t.type && 0 === n.type
							? (this.L_ = this.L_.remove(e))
							: 1 === t.type && 2 === n.type
							? (this.L_ = this.L_.insert(e, { type: 1, doc: n.doc }))
							: 0 === t.type && 1 === n.type
							? (this.L_ = this.L_.insert(e, { type: 2, doc: t.doc }))
							: os()
						: (this.L_ = this.L_.insert(e, t));
				}
				k_() {
					const t = [];
					return (
						this.L_.inorderTraversal((e, n) => {
							t.push(n);
						}),
						t
					);
				}
			}
			class Lh {
				constructor(t, e, n, i, r, s, o, a, c) {
					(this.query = t),
						(this.docs = e),
						(this.oldDocs = n),
						(this.docChanges = i),
						(this.mutatedKeys = r),
						(this.fromCache = s),
						(this.syncStateChanged = o),
						(this.excludesMetadataChanges = a),
						(this.hasCachedResults = c);
				}
				static fromInitialDocuments(t, e, n, i, r) {
					const s = [];
					return (
						e.forEach((t) => {
							s.push({ type: 0, doc: t });
						}),
						new Lh(t, e, Nh.emptySet(e), s, n, i, !0, !1, r)
					);
				}
				get hasPendingWrites() {
					return !this.mutatedKeys.isEmpty();
				}
				isEqual(t) {
					if (
						!(
							this.fromCache === t.fromCache &&
							this.hasCachedResults === t.hasCachedResults &&
							this.syncStateChanged === t.syncStateChanged &&
							this.mutatedKeys.isEqual(t.mutatedKeys) &&
							pa(this.query, t.query) &&
							this.docs.isEqual(t.docs) &&
							this.oldDocs.isEqual(t.oldDocs)
						)
					)
						return !1;
					const e = this.docChanges,
						n = t.docChanges;
					if (e.length !== n.length) return !1;
					for (let t = 0; t < e.length; t++) if (e[t].type !== n[t].type || !e[t].doc.isEqual(n[t].doc)) return !1;
					return !0;
				}
			}
			class Oh {
				constructor() {
					(this.q_ = void 0), (this.Q_ = []);
				}
			}
			class Mh {
				constructor() {
					(this.queries = new wa((t) => fa(t), pa)), (this.onlineState = 'Unknown'), (this.K_ = new Set());
				}
			}
			function Ph(t, e) {
				const n = cs(t);
				let i = !1;
				for (const t of e) {
					const e = t.query,
						r = n.queries.get(e);
					if (r) {
						for (const e of r.Q_) e.W_(t) && (i = !0);
						r.q_ = t;
					}
				}
				i && Uh(n);
			}
			function Fh(t, e, n) {
				const i = cs(t),
					r = i.queries.get(e);
				if (r) for (const t of r.Q_) t.onError(n);
				i.queries.delete(e);
			}
			function Uh(t) {
				t.K_.forEach((t) => {
					t.next();
				});
			}
			class Vh {
				constructor(t, e, n) {
					(this.query = t),
						(this.G_ = e),
						(this.z_ = !1),
						(this.j_ = null),
						(this.onlineState = 'Unknown'),
						(this.options = n || {});
				}
				W_(t) {
					if (!this.options.includeMetadataChanges) {
						const e = [];
						for (const n of t.docChanges) 3 !== n.type && e.push(n);
						t = new Lh(
							t.query,
							t.docs,
							t.oldDocs,
							e,
							t.mutatedKeys,
							t.fromCache,
							t.syncStateChanged,
							!0,
							t.hasCachedResults
						);
					}
					let e = !1;
					return (
						this.z_
							? this.H_(t) && (this.G_.next(t), (e = !0))
							: this.J_(t, this.onlineState) && (this.Y_(t), (e = !0)),
						(this.j_ = t),
						e
					);
				}
				onError(t) {
					this.G_.error(t);
				}
				U_(t) {
					this.onlineState = t;
					let e = !1;
					return this.j_ && !this.z_ && this.J_(this.j_, t) && (this.Y_(this.j_), (e = !0)), e;
				}
				J_(t, e) {
					if (!t.fromCache) return !0;
					const n = 'Offline' !== e;
					return (!this.options.Z_ || !n) && (!t.docs.isEmpty() || t.hasCachedResults || 'Offline' === e);
				}
				H_(t) {
					if (t.docChanges.length > 0) return !0;
					const e = this.j_ && this.j_.hasPendingWrites !== t.hasPendingWrites;
					return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
				}
				Y_(t) {
					(t = Lh.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache, t.hasCachedResults)),
						(this.z_ = !0),
						this.G_.next(t);
				}
			}
			class jh {
				constructor(t) {
					this.key = t;
				}
			}
			class Bh {
				constructor(t) {
					this.key = t;
				}
			}
			class zh {
				constructor(t, e) {
					(this.query = t),
						(this.oa = e),
						(this._a = null),
						(this.hasCachedResults = !1),
						(this.current = !1),
						(this.aa = Ra()),
						(this.mutatedKeys = Ra()),
						(this.ua = ya(t)),
						(this.ca = new Nh(this.ua));
				}
				get la() {
					return this.oa;
				}
				ha(t, e) {
					const n = e ? e.Pa : new Dh(),
						i = e ? e.ca : this.ca;
					let r = e ? e.mutatedKeys : this.mutatedKeys,
						s = i,
						o = !1;
					const a = 'F' === this.query.limitType && i.size === this.query.limit ? i.last() : null,
						c = 'L' === this.query.limitType && i.size === this.query.limit ? i.first() : null;
					if (
						(t.inorderTraversal((t, e) => {
							const l = i.get(t),
								h = ga(this.query, e) ? e : null,
								u = !!l && this.mutatedKeys.has(l.key),
								d = !!h && (h.hasLocalMutations || (this.mutatedKeys.has(h.key) && h.hasCommittedMutations));
							let p = !1;
							l && h
								? l.data.isEqual(h.data)
									? u !== d && (n.track({ type: 3, doc: h }), (p = !0))
									: this.Ia(l, h) ||
									  (n.track({ type: 2, doc: h }),
									  (p = !0),
									  ((a && this.ua(h, a) > 0) || (c && this.ua(h, c) < 0)) && (o = !0))
								: !l && h
								? (n.track({ type: 0, doc: h }), (p = !0))
								: l && !h && (n.track({ type: 1, doc: l }), (p = !0), (a || c) && (o = !0)),
								p && (h ? ((s = s.add(h)), (r = d ? r.add(t) : r.delete(t))) : ((s = s.delete(t)), (r = r.delete(t))));
						}),
						null !== this.query.limit)
					)
						for (; s.size > this.query.limit; ) {
							const t = 'F' === this.query.limitType ? s.last() : s.first();
							(s = s.delete(t.key)), (r = r.delete(t.key)), n.track({ type: 1, doc: t });
						}
					return { ca: s, Pa: n, Xi: o, mutatedKeys: r };
				}
				Ia(t, e) {
					return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
				}
				applyChanges(t, e, n, i) {
					const r = this.ca;
					(this.ca = t.ca), (this.mutatedKeys = t.mutatedKeys);
					const s = t.Pa.k_();
					s.sort(
						(t, e) =>
							(function (t, e) {
								const n = (t) => {
									switch (t) {
										case 0:
											return 1;
										case 2:
										case 3:
											return 2;
										case 1:
											return 0;
										default:
											return os();
									}
								};
								return n(t) - n(e);
							})(t.type, e.type) || this.ua(t.doc, e.doc)
					),
						this.Ta(n),
						(i = null != i && i);
					const o = e && !i ? this.Ea() : [],
						a = 0 === this.aa.size && this.current && !i ? 1 : 0,
						c = a !== this._a;
					return (
						(this._a = a),
						0 !== s.length || c
							? {
									snapshot: new Lh(
										this.query,
										t.ca,
										r,
										s,
										t.mutatedKeys,
										0 === a,
										c,
										!1,
										!!n && n.resumeToken.approximateByteSize() > 0
									),
									da: o,
							  }
							: { da: o }
					);
				}
				U_(t) {
					return this.current && 'Offline' === t
						? ((this.current = !1),
						  this.applyChanges({ ca: this.ca, Pa: new Dh(), mutatedKeys: this.mutatedKeys, Xi: !1 }, !1))
						: { da: [] };
				}
				Aa(t) {
					return !this.oa.has(t) && !!this.ca.has(t) && !this.ca.get(t).hasLocalMutations;
				}
				Ta(t) {
					t &&
						(t.addedDocuments.forEach((t) => (this.oa = this.oa.add(t))),
						t.modifiedDocuments.forEach((t) => {}),
						t.removedDocuments.forEach((t) => (this.oa = this.oa.delete(t))),
						(this.current = t.current));
				}
				Ea() {
					if (!this.current) return [];
					const t = this.aa;
					(this.aa = Ra()),
						this.ca.forEach((t) => {
							this.Aa(t.key) && (this.aa = this.aa.add(t.key));
						});
					const e = [];
					return (
						t.forEach((t) => {
							this.aa.has(t) || e.push(new Bh(t));
						}),
						this.aa.forEach((n) => {
							t.has(n) || e.push(new jh(n));
						}),
						e
					);
				}
				Ra(t) {
					(this.oa = t.hs), (this.aa = Ra());
					const e = this.ha(t.documents);
					return this.applyChanges(e, !0);
				}
				Va() {
					return Lh.fromInitialDocuments(this.query, this.ca, this.mutatedKeys, 0 === this._a, this.hasCachedResults);
				}
			}
			class qh {
				constructor(t, e, n) {
					(this.query = t), (this.targetId = e), (this.view = n);
				}
			}
			class $h {
				constructor(t) {
					(this.key = t), (this.ma = !1);
				}
			}
			class Hh {
				constructor(t, e, n, i, r, s) {
					(this.localStore = t),
						(this.remoteStore = e),
						(this.eventManager = n),
						(this.sharedClientState = i),
						(this.currentUser = r),
						(this.maxConcurrentLimboResolutions = s),
						(this.fa = {}),
						(this.ga = new wa((t) => fa(t), pa)),
						(this.pa = new Map()),
						(this.ya = new Set()),
						(this.wa = new Zs(Rs.comparator)),
						(this.Sa = new Map()),
						(this.ba = new wl()),
						(this.Da = {}),
						(this.Ca = new Map()),
						(this.va = pl.Bn()),
						(this.onlineState = 'Unknown'),
						(this.Fa = void 0);
				}
				get isPrimaryClient() {
					return !0 === this.Fa;
				}
			}
			async function Gh(t, e) {
				const n = (function (t) {
					const e = cs(t);
					return (
						(e.remoteStore.remoteSyncer.applyRemoteEvent = Wh.bind(null, e)),
						(e.remoteStore.remoteSyncer.getRemoteKeysForTarget = cu.bind(null, e)),
						(e.remoteStore.remoteSyncer.rejectListen = Jh.bind(null, e)),
						(e.fa.u_ = Ph.bind(null, e.eventManager)),
						(e.fa.xa = Fh.bind(null, e.eventManager)),
						e
					);
				})(t);
				let i, r;
				const s = n.ga.get(e);
				if (s) (i = s.targetId), n.sharedClientState.addLocalQueryTarget(i), (r = s.view.Va());
				else {
					const t = await (function (t, e) {
							const n = cs(t);
							return n.persistence
								.runTransaction('Allocate target', 'readwrite', (t) => {
									let i;
									return n.Qr.getTargetData(t, e).next((r) =>
										r
											? ((i = r), Fs.resolve(i))
											: n.Qr.allocateTargetId(t).next(
													(r) => (
														(i = new ol(e, r, 'TargetPurposeListen', t.currentSequenceNumber)),
														n.Qr.addTargetData(t, i).next(() => i)
													)
											  )
									);
								})
								.then((t) => {
									const i = n.ns.get(t.targetId);
									return (
										(null === i || t.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
											((n.ns = n.ns.insert(t.targetId, t)), n.rs.set(e, t.targetId)),
										t
									);
								});
						})(n.localStore, ua(e)),
						s = n.sharedClientState.addLocalQueryTarget(t.targetId);
					(i = t.targetId),
						(r = await (async function (t, e, n, i, r) {
							t.Ma = (e, n, i) =>
								(async function (t, e, n, i) {
									let r = e.view.ha(n);
									r.Xi && (r = await Pl(t.localStore, e.query, !1).then(({ documents: t }) => e.view.ha(t, r)));
									const s = i && i.targetChanges.get(e.targetId),
										o = i && null != i.targetMismatches.get(e.targetId),
										a = e.view.applyChanges(r, t.isPrimaryClient, s, o);
									return iu(t, e.targetId, a.da), a.snapshot;
								})(t, e, n, i);
							const s = await Pl(t.localStore, e, !0),
								o = new zh(e, s.hs),
								a = o.ha(s.documents),
								c = Ec.createSynthesizedTargetChangeForCurrentChange(n, i && 'Offline' !== t.onlineState, r),
								l = o.applyChanges(a, t.isPrimaryClient, c);
							iu(t, n, l.da);
							const h = new qh(e, n, o);
							return t.ga.set(e, h), t.pa.has(n) ? t.pa.get(n).push(e) : t.pa.set(n, [e]), l.snapshot;
						})(n, e, i, 'current' === s, t.resumeToken)),
						n.isPrimaryClient && rh(n.remoteStore, t);
				}
				return r;
			}
			async function Kh(t, e) {
				const n = cs(t),
					i = n.ga.get(e),
					r = n.pa.get(i.targetId);
				if (r.length > 1)
					return (
						n.pa.set(
							i.targetId,
							r.filter((t) => !pa(t, e))
						),
						void n.ga.delete(e)
					);
				n.isPrimaryClient
					? (n.sharedClientState.removeLocalQueryTarget(i.targetId),
					  n.sharedClientState.isActiveQueryTarget(i.targetId) ||
							(await Ml(n.localStore, i.targetId, !1)
								.then(() => {
									n.sharedClientState.clearQueryState(i.targetId), sh(n.remoteStore, i.targetId), eu(n, i.targetId);
								})
								.catch(Ps)))
					: (eu(n, i.targetId), await Ml(n.localStore, i.targetId, !0));
			}
			async function Wh(t, e) {
				const n = cs(t);
				try {
					const t = await (function (t, e) {
						const n = cs(t),
							i = e.snapshotVersion;
						let r = n.ns;
						return n.persistence
							.runTransaction('Apply remote event', 'readwrite-primary', (t) => {
								const s = n.os.newChangeBuffer({ trackRemovals: !0 });
								r = n.ns;
								const o = [];
								e.targetChanges.forEach((s, a) => {
									const c = r.get(a);
									if (!c) return;
									o.push(
										n.Qr.removeMatchingKeys(t, s.removedDocuments, a).next(() =>
											n.Qr.addMatchingKeys(t, s.addedDocuments, a)
										)
									);
									let l = c.withSequenceNumber(t.currentSequenceNumber);
									null !== e.targetMismatches.get(a)
										? (l = l.withResumeToken(oo.EMPTY_BYTE_STRING, Ss.min()).withLastLimboFreeSnapshotVersion(Ss.min()))
										: s.resumeToken.approximateByteSize() > 0 && (l = l.withResumeToken(s.resumeToken, i)),
										(r = r.insert(a, l)),
										(function (t, e, n) {
											return (
												0 === t.resumeToken.approximateByteSize() ||
												e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8 ||
												n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0
											);
										})(c, l, s) && o.push(n.Qr.updateTargetData(t, l));
								});
								let a = _a(),
									c = Ra();
								if (
									(e.documentUpdates.forEach((i) => {
										e.resolvedLimboDocuments.has(i) &&
											o.push(n.persistence.referenceDelegate.updateLimboDocument(t, i));
									}),
									o.push(
										(function (t, e, n) {
											let i = Ra(),
												r = Ra();
											return (
												n.forEach((t) => (i = i.add(t))),
												e.getEntries(t, i).next((t) => {
													let i = _a();
													return (
														n.forEach((n, s) => {
															const o = t.get(n);
															s.isFoundDocument() !== o.isFoundDocument() && (r = r.add(n)),
																s.isNoDocument() && s.version.isEqual(Ss.min())
																	? (e.removeEntry(n, s.readTime), (i = i.insert(n, s)))
																	: !o.isValidDocument() ||
																	  s.version.compareTo(o.version) > 0 ||
																	  (0 === s.version.compareTo(o.version) && o.hasPendingWrites)
																	? (e.addEntry(s), (i = i.insert(n, s)))
																	: ns(
																			'LocalStore',
																			'Ignoring outdated watch update for ',
																			n,
																			'. Current version:',
																			o.version,
																			' Watch version:',
																			s.version
																	  );
														}),
														{ cs: i, ls: r }
													);
												})
											);
										})(t, s, e.documentUpdates).next((t) => {
											(a = t.cs), (c = t.ls);
										})
									),
									!i.isEqual(Ss.min()))
								) {
									const e = n.Qr.getLastRemoteSnapshotVersion(t).next((e) =>
										n.Qr.setTargetsMetadata(t, t.currentSequenceNumber, i)
									);
									o.push(e);
								}
								return Fs.waitFor(o)
									.next(() => s.apply(t))
									.next(() => n.localDocuments.getLocalViewOfDocuments(t, a, c))
									.next(() => a);
							})
							.then((t) => ((n.ns = r), t));
					})(n.localStore, e);
					e.targetChanges.forEach((t, e) => {
						const i = n.Sa.get(e);
						i &&
							(as(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1),
							t.addedDocuments.size > 0
								? (i.ma = !0)
								: t.modifiedDocuments.size > 0
								? as(i.ma)
								: t.removedDocuments.size > 0 && (as(i.ma), (i.ma = !1)));
					}),
						await ou(n, t, e);
				} catch (t) {
					await Ps(t);
				}
			}
			function Qh(t, e, n) {
				const i = cs(t);
				if ((i.isPrimaryClient && 0 === n) || (!i.isPrimaryClient && 1 === n)) {
					const t = [];
					i.ga.forEach((n, i) => {
						const r = i.view.U_(e);
						r.snapshot && t.push(r.snapshot);
					}),
						(function (t, e) {
							const n = cs(t);
							n.onlineState = e;
							let i = !1;
							n.queries.forEach((t, n) => {
								for (const t of n.Q_) t.U_(e) && (i = !0);
							}),
								i && Uh(n);
						})(i.eventManager, e),
						t.length && i.fa.u_(t),
						(i.onlineState = e),
						i.isPrimaryClient && i.sharedClientState.setOnlineState(e);
				}
			}
			async function Jh(t, e, n) {
				const i = cs(t);
				i.sharedClientState.updateQueryState(e, 'rejected', n);
				const r = i.Sa.get(e),
					s = r && r.key;
				if (s) {
					let t = new Zs(Rs.comparator);
					t = t.insert(s, Oo.newNoDocument(s, Ss.min()));
					const n = Ra().add(s),
						r = new _c(Ss.min(), new Map(), new Zs(Es), t, n);
					await Wh(i, r), (i.wa = i.wa.remove(s)), i.Sa.delete(e), su(i);
				} else
					await Ml(i.localStore, e, !1)
						.then(() => eu(i, e, n))
						.catch(Ps);
			}
			async function Xh(t, e) {
				const n = cs(t),
					i = e.batch.batchId;
				try {
					const t = await (function (t, e) {
						const n = cs(t);
						return n.persistence.runTransaction('Acknowledge batch', 'readwrite-primary', (t) => {
							const i = e.batch.keys(),
								r = n.os.newChangeBuffer({ trackRemovals: !0 });
							return (function (t, e, n, i) {
								const r = n.batch,
									s = r.keys();
								let o = Fs.resolve();
								return (
									s.forEach((t) => {
										o = o
											.next(() => i.getEntry(e, t))
											.next((e) => {
												const s = n.docVersions.get(t);
												as(null !== s),
													e.version.compareTo(s) < 0 &&
														(r.applyToRemoteDocument(e, n),
														e.isValidDocument() && (e.setReadTime(n.commitVersion), i.addEntry(e)));
											});
									}),
									o.next(() => t.mutationQueue.removeMutationBatch(e, r))
								);
							})(n, t, e, r)
								.next(() => r.apply(t))
								.next(() => n.mutationQueue.performConsistencyCheck(t))
								.next(() => n.documentOverlayCache.removeOverlaysForBatchId(t, i, e.batch.batchId))
								.next(() =>
									n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
										t,
										(function (t) {
											let e = Ra();
											for (let n = 0; n < t.mutationResults.length; ++n)
												t.mutationResults[n].transformResults.length > 0 && (e = e.add(t.batch.mutations[n].key));
											return e;
										})(e)
									)
								)
								.next(() => n.localDocuments.getDocuments(t, i));
						});
					})(n.localStore, e);
					tu(n, i, null), Zh(n, i), n.sharedClientState.updateMutationState(i, 'acknowledged'), await ou(n, t);
				} catch (t) {
					await Ps(t);
				}
			}
			async function Yh(t, e, n) {
				const i = cs(t);
				try {
					const t = await (function (t, e) {
						const n = cs(t);
						return n.persistence.runTransaction('Reject batch', 'readwrite-primary', (t) => {
							let i;
							return n.mutationQueue
								.lookupMutationBatch(t, e)
								.next((e) => (as(null !== e), (i = e.keys()), n.mutationQueue.removeMutationBatch(t, e)))
								.next(() => n.mutationQueue.performConsistencyCheck(t))
								.next(() => n.documentOverlayCache.removeOverlaysForBatchId(t, i, e))
								.next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t, i))
								.next(() => n.localDocuments.getDocuments(t, i));
						});
					})(i.localStore, e);
					tu(i, e, n), Zh(i, e), i.sharedClientState.updateMutationState(e, 'rejected', n), await ou(i, t);
				} catch (n) {
					await Ps(n);
				}
			}
			function Zh(t, e) {
				(t.Ca.get(e) || []).forEach((t) => {
					t.resolve();
				}),
					t.Ca.delete(e);
			}
			function tu(t, e, n) {
				const i = cs(t);
				let r = i.Da[i.currentUser.toKey()];
				if (r) {
					const t = r.get(e);
					t && (n ? t.reject(n) : t.resolve(), (r = r.remove(e))), (i.Da[i.currentUser.toKey()] = r);
				}
			}
			function eu(t, e, n = null) {
				t.sharedClientState.removeLocalQueryTarget(e);
				for (const i of t.pa.get(e)) t.ga.delete(i), n && t.fa.xa(i, n);
				t.pa.delete(e),
					t.isPrimaryClient &&
						t.ba.Vr(e).forEach((e) => {
							t.ba.containsKey(e) || nu(t, e);
						});
			}
			function nu(t, e) {
				t.ya.delete(e.path.canonicalString());
				const n = t.wa.get(e);
				null !== n && (sh(t.remoteStore, n), (t.wa = t.wa.remove(e)), t.Sa.delete(n), su(t));
			}
			function iu(t, e, n) {
				for (const i of n)
					i instanceof jh
						? (t.ba.addReference(i.key, e), ru(t, i))
						: i instanceof Bh
						? (ns('SyncEngine', 'Document no longer in limbo: ' + i.key),
						  t.ba.removeReference(i.key, e),
						  t.ba.containsKey(i.key) || nu(t, i.key))
						: os();
			}
			function ru(t, e) {
				const n = e.key,
					i = n.path.canonicalString();
				t.wa.get(n) || t.ya.has(i) || (ns('SyncEngine', 'New document in limbo: ' + n), t.ya.add(i), su(t));
			}
			function su(t) {
				for (; t.ya.size > 0 && t.wa.size < t.maxConcurrentLimboResolutions; ) {
					const e = t.ya.values().next().value;
					t.ya.delete(e);
					const n = new Rs(ks.fromString(e)),
						i = t.va.next();
					t.Sa.set(i, new $h(n)),
						(t.wa = t.wa.insert(n, i)),
						rh(t.remoteStore, new ol(ua(ca(n.path)), i, 'TargetPurposeLimboResolution', Ks._e));
				}
			}
			async function ou(t, e, n) {
				const i = cs(t),
					r = [],
					s = [],
					o = [];
				i.ga.isEmpty() ||
					(i.ga.forEach((t, a) => {
						o.push(
							i.Ma(a, e, n).then((t) => {
								if (
									((t || n) &&
										i.isPrimaryClient &&
										i.sharedClientState.updateQueryState(
											a.targetId,
											(null == t ? void 0 : t.fromCache) ? 'not-current' : 'current'
										),
									t)
								) {
									r.push(t);
									const e = Al.Ki(a.targetId, t);
									s.push(e);
								}
							})
						);
					}),
					await Promise.all(o),
					i.fa.u_(r),
					await (async function (t, e) {
						const n = cs(t);
						try {
							await n.persistence.runTransaction('notifyLocalViewChanges', 'readwrite', (t) =>
								Fs.forEach(e, (e) =>
									Fs.forEach(e.qi, (i) => n.persistence.referenceDelegate.addReference(t, e.targetId, i)).next(() =>
										Fs.forEach(e.Qi, (i) => n.persistence.referenceDelegate.removeReference(t, e.targetId, i))
									)
								)
							);
						} catch (t) {
							if (!zs(t)) throw t;
							ns('LocalStore', 'Failed to update sequence numbers: ' + t);
						}
						for (const t of e) {
							const e = t.targetId;
							if (!t.fromCache) {
								const t = n.ns.get(e),
									i = t.snapshotVersion,
									r = t.withLastLimboFreeSnapshotVersion(i);
								n.ns = n.ns.insert(e, r);
							}
						}
					})(i.localStore, s));
			}
			async function au(t, e) {
				const n = cs(t);
				if (!n.currentUser.isEqual(e)) {
					ns('SyncEngine', 'User change. New user:', e.toKey());
					const t = await Dl(n.localStore, e);
					(n.currentUser = e),
						(function (t, e) {
							t.Ca.forEach((t) => {
								t.forEach((t) => {
									t.reject(new hs(ls.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
								});
							}),
								t.Ca.clear();
						})(n),
						n.sharedClientState.handleUserChange(e, t.removedBatchIds, t.addedBatchIds),
						await ou(n, t.us);
				}
			}
			function cu(t, e) {
				const n = cs(t),
					i = n.Sa.get(e);
				if (i && i.ma) return Ra().add(i.key);
				{
					let t = Ra();
					const i = n.pa.get(e);
					if (!i) return t;
					for (const e of i) {
						const i = n.ga.get(e);
						t = t.unionWith(i.view.la);
					}
					return t;
				}
			}
			function lu(t) {
				const e = cs(t);
				return (
					(e.remoteStore.remoteSyncer.applySuccessfulWrite = Xh.bind(null, e)),
					(e.remoteStore.remoteSyncer.rejectFailedWrite = Yh.bind(null, e)),
					e
				);
			}
			class hu {
				constructor() {
					this.synchronizeTabs = !1;
				}
				async initialize(t) {
					(this.serializer = Wl(t.databaseInfo.databaseId)),
						(this.sharedClientState = this.createSharedClientState(t)),
						(this.persistence = this.createPersistence(t)),
						await this.persistence.start(),
						(this.localStore = this.createLocalStore(t)),
						(this.gcScheduler = this.createGarbageCollectionScheduler(t, this.localStore)),
						(this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(t, this.localStore));
				}
				createGarbageCollectionScheduler(t, e) {
					return null;
				}
				createIndexBackfillerScheduler(t, e) {
					return null;
				}
				createLocalStore(t) {
					return (function (t, e, n, i) {
						return new Nl(t, e, n, i);
					})(this.persistence, new Rl(), t.initialUser, this.serializer);
				}
				createPersistence(t) {
					return new Sl(kl.Hr, this.serializer);
				}
				createSharedClientState(t) {
					return new Ul();
				}
				async terminate() {
					var t, e;
					null === (t = this.gcScheduler) || void 0 === t || t.stop(),
						null === (e = this.indexBackfillerScheduler) || void 0 === e || e.stop(),
						this.sharedClientState.shutdown(),
						await this.persistence.shutdown();
				}
			}
			class uu {
				async initialize(t, e) {
					this.localStore ||
						((this.localStore = t.localStore),
						(this.sharedClientState = t.sharedClientState),
						(this.datastore = this.createDatastore(e)),
						(this.remoteStore = this.createRemoteStore(e)),
						(this.eventManager = this.createEventManager(e)),
						(this.syncEngine = this.createSyncEngine(e, !t.synchronizeTabs)),
						(this.sharedClientState.onlineStateHandler = (t) => Qh(this.syncEngine, t, 1)),
						(this.remoteStore.remoteSyncer.handleCredentialChange = au.bind(null, this.syncEngine)),
						await (async function (t, e) {
							const n = cs(t);
							e ? (n.v_.delete(2), await nh(n)) : e || (n.v_.add(2), await ih(n), n.x_.set('Unknown'));
						})(this.remoteStore, this.syncEngine.isPrimaryClient));
				}
				createEventManager(t) {
					return new Mh();
				}
				createDatastore(t) {
					const e = Wl(t.databaseInfo.databaseId),
						n = (function (t) {
							return new Gl(t);
						})(t.databaseInfo);
					return (function (t, e, n, i) {
						return new Zl(t, e, n, i);
					})(t.authCredentials, t.appCheckCredentials, n, e);
				}
				createRemoteStore(t) {
					return (function (t, e, n, i, r) {
						return new eh(t, e, n, i, r);
					})(
						this.localStore,
						this.datastore,
						t.asyncQueue,
						(t) => Qh(this.syncEngine, t, 0),
						jl.D() ? new jl() : new Vl()
					);
				}
				createSyncEngine(t, e) {
					return (function (t, e, n, i, r, s, o) {
						const a = new Hh(t, e, n, i, r, s);
						return o && (a.Fa = !0), a;
					})(
						this.localStore,
						this.remoteStore,
						this.eventManager,
						this.sharedClientState,
						t.initialUser,
						t.maxConcurrentLimboResolutions,
						e
					);
				}
				async terminate() {
					var t;
					await (async function (t) {
						const e = cs(t);
						ns('RemoteStore', 'RemoteStore shutting down.'),
							e.v_.add(5),
							await ih(e),
							e.M_.shutdown(),
							e.x_.set('Unknown');
					})(this.remoteStore),
						null === (t = this.datastore) || void 0 === t || t.terminate();
				}
			}
			class du {
				constructor(t) {
					(this.observer = t), (this.muted = !1);
				}
				next(t) {
					this.observer.next && this.Ba(this.observer.next, t);
				}
				error(t) {
					this.observer.error
						? this.Ba(this.observer.error, t)
						: is('Uncaught Error in snapshot listener:', t.toString());
				}
				La() {
					this.muted = !0;
				}
				Ba(t, e) {
					this.muted ||
						setTimeout(() => {
							this.muted || t(e);
						}, 0);
				}
			}
			class pu {
				constructor(t, e, n, i) {
					(this.authCredentials = t),
						(this.appCheckCredentials = e),
						(this.asyncQueue = n),
						(this.databaseInfo = i),
						(this.user = Yr.UNAUTHENTICATED),
						(this.clientId = _s.newId()),
						(this.authCredentialListener = () => Promise.resolve()),
						(this.appCheckCredentialListener = () => Promise.resolve()),
						this.authCredentials.start(n, async (t) => {
							ns('FirestoreClient', 'Received user=', t.uid), await this.authCredentialListener(t), (this.user = t);
						}),
						this.appCheckCredentials.start(
							n,
							(t) => (
								ns('FirestoreClient', 'Received new app check token=', t), this.appCheckCredentialListener(t, this.user)
							)
						);
				}
				get configuration() {
					return {
						asyncQueue: this.asyncQueue,
						databaseInfo: this.databaseInfo,
						clientId: this.clientId,
						authCredentials: this.authCredentials,
						appCheckCredentials: this.appCheckCredentials,
						initialUser: this.user,
						maxConcurrentLimboResolutions: 100,
					};
				}
				setCredentialChangeListener(t) {
					this.authCredentialListener = t;
				}
				setAppCheckTokenChangeListener(t) {
					this.appCheckCredentialListener = t;
				}
				verifyNotTerminated() {
					if (this.asyncQueue.isShuttingDown)
						throw new hs(ls.FAILED_PRECONDITION, 'The client has already been terminated.');
				}
				terminate() {
					this.asyncQueue.enterRestrictedMode();
					const t = new us();
					return (
						this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
							try {
								this._onlineComponents && (await this._onlineComponents.terminate()),
									this._offlineComponents && (await this._offlineComponents.terminate()),
									this.authCredentials.shutdown(),
									this.appCheckCredentials.shutdown(),
									t.resolve();
							} catch (e) {
								const n = Rh(e, 'Failed to shutdown persistence');
								t.reject(n);
							}
						}),
						t.promise
					);
				}
			}
			async function fu(t, e) {
				t.asyncQueue.verifyOperationInProgress(), ns('FirestoreClient', 'Initializing OfflineComponentProvider');
				const n = t.configuration;
				await e.initialize(n);
				let i = n.initialUser;
				t.setCredentialChangeListener(async (t) => {
					i.isEqual(t) || (await Dl(e.localStore, t), (i = t));
				}),
					e.persistence.setDatabaseDeletedListener(() => t.terminate()),
					(t._offlineComponents = e);
			}
			async function mu(t, e) {
				t.asyncQueue.verifyOperationInProgress();
				const n = await (async function (t) {
					if (!t._offlineComponents)
						if (t._uninitializedComponentsProvider) {
							ns('FirestoreClient', 'Using user provided OfflineComponentProvider');
							try {
								await fu(t, t._uninitializedComponentsProvider._offline);
							} catch (e) {
								const n = e;
								if (
									!(function (t) {
										return 'FirebaseError' === t.name
											? t.code === ls.FAILED_PRECONDITION || t.code === ls.UNIMPLEMENTED
											: !('undefined' != typeof DOMException && t instanceof DOMException) ||
													22 === t.code ||
													20 === t.code ||
													11 === t.code;
									})(n)
								)
									throw n;
								rs('Error using user provided cache. Falling back to memory cache: ' + n), await fu(t, new hu());
							}
						} else ns('FirestoreClient', 'Using default OfflineComponentProvider'), await fu(t, new hu());
					return t._offlineComponents;
				})(t);
				ns('FirestoreClient', 'Initializing OnlineComponentProvider'),
					await e.initialize(n, t.configuration),
					t.setCredentialChangeListener((t) => Ch(e.remoteStore, t)),
					t.setAppCheckTokenChangeListener((t, n) => Ch(e.remoteStore, n)),
					(t._onlineComponents = e);
			}
			async function gu(t) {
				return (
					t._onlineComponents ||
						(t._uninitializedComponentsProvider
							? (ns('FirestoreClient', 'Using user provided OnlineComponentProvider'),
							  await mu(t, t._uninitializedComponentsProvider._online))
							: (ns('FirestoreClient', 'Using default OnlineComponentProvider'), await mu(t, new uu()))),
					t._onlineComponents
				);
			}
			async function yu(t) {
				const e = await gu(t),
					n = e.eventManager;
				return (n.onListen = Gh.bind(null, e.syncEngine)), (n.onUnlisten = Kh.bind(null, e.syncEngine)), n;
			}
			function vu(t, e, n = {}) {
				const i = new us();
				return (
					t.asyncQueue.enqueueAndForget(async () =>
						(function (t, e, n, i, r) {
							const s = new du({
									next: (n) => {
										e.enqueueAndForget(() =>
											(async function (t, e) {
												const n = cs(t),
													i = e.query;
												let r = !1;
												const s = n.queries.get(i);
												if (s) {
													const t = s.Q_.indexOf(e);
													t >= 0 && (s.Q_.splice(t, 1), (r = 0 === s.Q_.length));
												}
												if (r) return n.queries.delete(i), n.onUnlisten(i);
											})(t, o)
										),
											n.fromCache && 'server' === i.source
												? r.reject(
														new hs(
															ls.UNAVAILABLE,
															'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
														)
												  )
												: r.resolve(n);
									},
									error: (t) => r.reject(t),
								}),
								o = new Vh(n, s, { includeMetadataChanges: !0, Z_: !0 });
							return (async function (t, e) {
								const n = cs(t),
									i = e.query;
								let r = !1,
									s = n.queries.get(i);
								if ((s || ((r = !0), (s = new Oh())), r))
									try {
										s.q_ = await n.onListen(i);
									} catch (t) {
										const n = Rh(t, `Initialization of query '${ma(e.query)}' failed`);
										return void e.onError(n);
									}
								n.queries.set(i, s), s.Q_.push(e), e.U_(n.onlineState), s.q_ && e.W_(s.q_) && Uh(n);
							})(t, o);
						})(await yu(t), t.asyncQueue, e, n, i)
					),
					i.promise
				);
			}
			function wu(t) {
				const e = {};
				return void 0 !== t.timeoutSeconds && (e.timeoutSeconds = t.timeoutSeconds), e;
			}
			const bu = new Map();
			function _u(t, e, n) {
				if (!n) throw new hs(ls.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
			}
			function Eu(t) {
				if (!Rs.isDocumentKey(t))
					throw new hs(
						ls.INVALID_ARGUMENT,
						`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
					);
			}
			function Tu(t) {
				if (Rs.isDocumentKey(t))
					throw new hs(
						ls.INVALID_ARGUMENT,
						`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
					);
			}
			function Iu(t) {
				if (void 0 === t) return 'undefined';
				if (null === t) return 'null';
				if ('string' == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
				if ('number' == typeof t || 'boolean' == typeof t) return '' + t;
				if ('object' == typeof t) {
					if (t instanceof Array) return 'an array';
					{
						const e = (function (t) {
							return t.constructor ? t.constructor.name : null;
						})(t);
						return e ? `a custom ${e} object` : 'an object';
					}
				}
				return 'function' == typeof t ? 'a function' : os();
			}
			function Su(t, e) {
				if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
					if (e.name === t.constructor.name)
						throw new hs(
							ls.INVALID_ARGUMENT,
							'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
						);
					{
						const n = Iu(t);
						throw new hs(ls.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
					}
				}
				return t;
			}
			class Cu {
				constructor(t) {
					var e, n;
					if (void 0 === t.host) {
						if (void 0 !== t.ssl)
							throw new hs(ls.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
						(this.host = 'firestore.googleapis.com'), (this.ssl = !0);
					} else (this.host = t.host), (this.ssl = null === (e = t.ssl) || void 0 === e || e);
					if (
						((this.credentials = t.credentials),
						(this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
						(this.localCache = t.localCache),
						void 0 === t.cacheSizeBytes)
					)
						this.cacheSizeBytes = 41943040;
					else {
						if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
							throw new hs(ls.INVALID_ARGUMENT, 'cacheSizeBytes must be at least 1048576');
						this.cacheSizeBytes = t.cacheSizeBytes;
					}
					(function (t, e, n, i) {
						if (!0 === e && !0 === i)
							throw new hs(
								ls.INVALID_ARGUMENT,
								'experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.'
							);
					})(0, t.experimentalForceLongPolling, 0, t.experimentalAutoDetectLongPolling),
						(this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
						this.experimentalForceLongPolling
							? (this.experimentalAutoDetectLongPolling = !1)
							: void 0 === t.experimentalAutoDetectLongPolling
							? (this.experimentalAutoDetectLongPolling = !0)
							: (this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling),
						(this.experimentalLongPollingOptions = wu(
							null !== (n = t.experimentalLongPollingOptions) && void 0 !== n ? n : {}
						)),
						(function (t) {
							if (void 0 !== t.timeoutSeconds) {
								if (isNaN(t.timeoutSeconds))
									throw new hs(
										ls.INVALID_ARGUMENT,
										`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`
									);
								if (t.timeoutSeconds < 5)
									throw new hs(
										ls.INVALID_ARGUMENT,
										`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`
									);
								if (t.timeoutSeconds > 30)
									throw new hs(
										ls.INVALID_ARGUMENT,
										`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`
									);
							}
						})(this.experimentalLongPollingOptions),
						(this.useFetchStreams = !!t.useFetchStreams);
				}
				isEqual(t) {
					return (
						this.host === t.host &&
						this.ssl === t.ssl &&
						this.credentials === t.credentials &&
						this.cacheSizeBytes === t.cacheSizeBytes &&
						this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
						this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling &&
						(function (t, e) {
							return t.timeoutSeconds === e.timeoutSeconds;
						})(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) &&
						this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
						this.useFetchStreams === t.useFetchStreams
					);
				}
			}
			class ku {
				constructor(t, e, n, i) {
					(this._authCredentials = t),
						(this._appCheckCredentials = e),
						(this._databaseId = n),
						(this._app = i),
						(this.type = 'firestore-lite'),
						(this._persistenceKey = '(lite)'),
						(this._settings = new Cu({})),
						(this._settingsFrozen = !1);
				}
				get app() {
					if (!this._app)
						throw new hs(
							ls.FAILED_PRECONDITION,
							"Firestore was not initialized using the Firebase SDK. 'app' is not available"
						);
					return this._app;
				}
				get _initialized() {
					return this._settingsFrozen;
				}
				get _terminated() {
					return void 0 !== this._terminateTask;
				}
				_setSettings(t) {
					if (this._settingsFrozen)
						throw new hs(
							ls.FAILED_PRECONDITION,
							'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
						);
					(this._settings = new Cu(t)),
						void 0 !== t.credentials &&
							(this._authCredentials = (function (t) {
								if (!t) return new ps();
								switch (t.type) {
									case 'firstParty':
										return new ys(t.sessionIndex || '0', t.iamToken || null, t.authTokenFactory || null);
									case 'provider':
										return t.client;
									default:
										throw new hs(
											ls.INVALID_ARGUMENT,
											'makeAuthCredentialsProvider failed due to invalid credential type'
										);
								}
							})(t.credentials));
				}
				_getSettings() {
					return this._settings;
				}
				_freezeSettings() {
					return (this._settingsFrozen = !0), this._settings;
				}
				_delete() {
					return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
				}
				toJSON() {
					return { app: this._app, databaseId: this._databaseId, settings: this._settings };
				}
				_terminate() {
					return (
						(function (t) {
							const e = bu.get(t);
							e && (ns('ComponentProvider', 'Removing Datastore'), bu.delete(t), e.terminate());
						})(this),
						Promise.resolve()
					);
				}
			}
			class Au {
				constructor(t, e, n) {
					(this.converter = e), (this._query = n), (this.type = 'query'), (this.firestore = t);
				}
				withConverter(t) {
					return new Au(this.firestore, t, this._query);
				}
			}
			class xu {
				constructor(t, e, n) {
					(this.converter = e), (this._key = n), (this.type = 'document'), (this.firestore = t);
				}
				get _path() {
					return this._key.path;
				}
				get id() {
					return this._key.path.lastSegment();
				}
				get path() {
					return this._key.path.canonicalString();
				}
				get parent() {
					return new Ru(this.firestore, this.converter, this._key.path.popLast());
				}
				withConverter(t) {
					return new xu(this.firestore, t, this._key);
				}
			}
			class Ru extends Au {
				constructor(t, e, n) {
					super(t, e, ca(n)), (this._path = n), (this.type = 'collection');
				}
				get id() {
					return this._query.path.lastSegment();
				}
				get path() {
					return this._query.path.canonicalString();
				}
				get parent() {
					const t = this._path.popLast();
					return t.isEmpty() ? null : new xu(this.firestore, null, new Rs(t));
				}
				withConverter(t) {
					return new Ru(this.firestore, t, this._path);
				}
			}
			function Nu(t, e, ...n) {
				if (((t = x(t)), _u('collection', 'path', e), t instanceof ku)) {
					const i = ks.fromString(e, ...n);
					return Tu(i), new Ru(t, null, i);
				}
				{
					if (!(t instanceof xu || t instanceof Ru))
						throw new hs(
							ls.INVALID_ARGUMENT,
							'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
						);
					const i = t._path.child(ks.fromString(e, ...n));
					return Tu(i), new Ru(t.firestore, null, i);
				}
			}
			function Du(t, e, ...n) {
				if (((t = x(t)), 1 === arguments.length && (e = _s.newId()), _u('doc', 'path', e), t instanceof ku)) {
					const i = ks.fromString(e, ...n);
					return Eu(i), new xu(t, null, new Rs(i));
				}
				{
					if (!(t instanceof xu || t instanceof Ru))
						throw new hs(
							ls.INVALID_ARGUMENT,
							'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
						);
					const i = t._path.child(ks.fromString(e, ...n));
					return Eu(i), new xu(t.firestore, t instanceof Ru ? t.converter : null, new Rs(i));
				}
			}
			class Lu {
				constructor() {
					(this.Xa = Promise.resolve()),
						(this.eu = []),
						(this.tu = !1),
						(this.nu = []),
						(this.ru = null),
						(this.iu = !1),
						(this.su = !1),
						(this.ou = []),
						(this.jo = new Ql(this, 'async_queue_retry')),
						(this._u = () => {
							const t = Kl();
							t && ns('AsyncQueue', 'Visibility state changed to ' + t.visibilityState), this.jo.Ko();
						});
					const t = Kl();
					t && 'function' == typeof t.addEventListener && t.addEventListener('visibilitychange', this._u);
				}
				get isShuttingDown() {
					return this.tu;
				}
				enqueueAndForget(t) {
					this.enqueue(t);
				}
				enqueueAndForgetEvenWhileRestricted(t) {
					this.au(), this.uu(t);
				}
				enterRestrictedMode(t) {
					if (!this.tu) {
						(this.tu = !0), (this.su = t || !1);
						const e = Kl();
						e && 'function' == typeof e.removeEventListener && e.removeEventListener('visibilitychange', this._u);
					}
				}
				enqueue(t) {
					if ((this.au(), this.tu)) return new Promise(() => {});
					const e = new us();
					return this.uu(() =>
						this.tu && this.su ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise)
					).then(() => e.promise);
				}
				enqueueRetryable(t) {
					this.enqueueAndForget(() => (this.eu.push(t), this.cu()));
				}
				async cu() {
					if (0 !== this.eu.length) {
						try {
							await this.eu[0](), this.eu.shift(), this.jo.reset();
						} catch (t) {
							if (!zs(t)) throw t;
							ns('AsyncQueue', 'Operation failed with retryable error: ' + t);
						}
						this.eu.length > 0 && this.jo.qo(() => this.cu());
					}
				}
				uu(t) {
					const e = this.Xa.then(
						() => (
							(this.iu = !0),
							t()
								.catch((t) => {
									(this.ru = t), (this.iu = !1);
									const e = (function (t) {
										let e = t.message || '';
										return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + '\n' + t.stack), e;
									})(t);
									throw (is('INTERNAL UNHANDLED ERROR: ', e), t);
								})
								.then((t) => ((this.iu = !1), t))
						)
					);
					return (this.Xa = e), e;
				}
				enqueueAfterDelay(t, e, n) {
					this.au(), this.ou.indexOf(t) > -1 && (e = 0);
					const i = xh.createAndSchedule(this, t, e, n, (t) => this.lu(t));
					return this.nu.push(i), i;
				}
				au() {
					this.ru && os();
				}
				verifyOperationInProgress() {}
				async hu() {
					let t;
					do {
						(t = this.Xa), await t;
					} while (t !== this.Xa);
				}
				Pu(t) {
					for (const e of this.nu) if (e.timerId === t) return !0;
					return !1;
				}
				Iu(t) {
					return this.hu().then(() => {
						this.nu.sort((t, e) => t.targetTimeMs - e.targetTimeMs);
						for (const e of this.nu) if ((e.skipDelay(), 'all' !== t && e.timerId === t)) break;
						return this.hu();
					});
				}
				Tu(t) {
					this.ou.push(t);
				}
				lu(t) {
					const e = this.nu.indexOf(t);
					this.nu.splice(e, 1);
				}
			}
			class Ou extends ku {
				constructor(t, e, n, i) {
					super(t, e, n, i),
						(this.type = 'firestore'),
						(this._queue = new Lu()),
						(this._persistenceKey = (null == i ? void 0 : i.name) || '[DEFAULT]');
				}
				_terminate() {
					return this._firestoreClient || Fu(this), this._firestoreClient.terminate();
				}
			}
			function Mu(t, e) {
				const n = 'string' == typeof t ? t : e || '(default)',
					i = ft('object' == typeof t ? t : wt(), 'firestore').getImmediate({ identifier: n });
				if (!i._initialized) {
					const t = ((t) => {
						const e = p('firestore');
						if (!e) return;
						const n = e.lastIndexOf(':');
						if (n <= 0 || n + 1 === e.length) throw new Error(`Invalid host ${e} with no separate hostname and port!`);
						const i = parseInt(e.substring(n + 1), 10);
						return '[' === e[0] ? [e.substring(1, n - 1), i] : [e.substring(0, n), i];
					})();
					t &&
						(function (t, e, n, i = {}) {
							var r;
							const s = (t = Su(t, ku))._getSettings(),
								o = `${e}:${n}`;
							if (
								('firestore.googleapis.com' !== s.host &&
									s.host !== o &&
									rs(
										'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
									),
								t._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
								i.mockUserToken)
							) {
								let e, n;
								if ('string' == typeof i.mockUserToken) (e = i.mockUserToken), (n = Yr.MOCK_USER);
								else {
									e = (function (t, e) {
										if (t.uid)
											throw new Error(
												'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
											);
										const n = e || 'demo-project',
											i = t.iat || 0,
											r = t.sub || t.user_id;
										if (!r) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
										const s = Object.assign(
											{
												iss: `https://securetoken.google.com/${n}`,
												aud: n,
												iat: i,
												exp: i + 3600,
												auth_time: i,
												sub: r,
												user_id: r,
												firebase: { sign_in_provider: 'custom', identities: {} },
											},
											t
										);
										return [h(JSON.stringify({ alg: 'none', type: 'JWT' })), h(JSON.stringify(s)), ''].join('.');
									})(i.mockUserToken, null === (r = t._app) || void 0 === r ? void 0 : r.options.projectId);
									const s = i.mockUserToken.sub || i.mockUserToken.user_id;
									if (!s) throw new hs(ls.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
									n = new Yr(s);
								}
								t._authCredentials = new fs(new ds(e, n));
							}
						})(i, ...t);
				}
				return i;
			}
			function Pu(t) {
				return t._firestoreClient || Fu(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
			}
			function Fu(t) {
				var e, n, i;
				const r = t._freezeSettings(),
					s = (function (t, e, n, i) {
						return new mo(
							t,
							e,
							n,
							i.host,
							i.ssl,
							i.experimentalForceLongPolling,
							i.experimentalAutoDetectLongPolling,
							wu(i.experimentalLongPollingOptions),
							i.useFetchStreams
						);
					})(
						t._databaseId,
						(null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || '',
						t._persistenceKey,
						r
					);
				(t._firestoreClient = new pu(t._authCredentials, t._appCheckCredentials, t._queue, s)),
					(null === (n = r.localCache) || void 0 === n ? void 0 : n._offlineComponentProvider) &&
						(null === (i = r.localCache) || void 0 === i ? void 0 : i._onlineComponentProvider) &&
						(t._firestoreClient._uninitializedComponentsProvider = {
							_offlineKind: r.localCache.kind,
							_offline: r.localCache._offlineComponentProvider,
							_online: r.localCache._onlineComponentProvider,
						});
			}
			class Uu {
				constructor(t) {
					this._byteString = t;
				}
				static fromBase64String(t) {
					try {
						return new Uu(oo.fromBase64String(t));
					} catch (t) {
						throw new hs(ls.INVALID_ARGUMENT, 'Failed to construct data from Base64 string: ' + t);
					}
				}
				static fromUint8Array(t) {
					return new Uu(oo.fromUint8Array(t));
				}
				toBase64() {
					return this._byteString.toBase64();
				}
				toUint8Array() {
					return this._byteString.toUint8Array();
				}
				toString() {
					return 'Bytes(base64: ' + this.toBase64() + ')';
				}
				isEqual(t) {
					return this._byteString.isEqual(t._byteString);
				}
			}
			class Vu {
				constructor(...t) {
					for (let e = 0; e < t.length; ++e)
						if (0 === t[e].length)
							throw new hs(
								ls.INVALID_ARGUMENT,
								'Invalid field name at argument $(i + 1). Field names must not be empty.'
							);
					this._internalPath = new xs(t);
				}
				isEqual(t) {
					return this._internalPath.isEqual(t._internalPath);
				}
			}
			class ju {
				constructor(t) {
					this._methodName = t;
				}
			}
			class Bu {
				constructor(t, e) {
					if (!isFinite(t) || t < -90 || t > 90)
						throw new hs(ls.INVALID_ARGUMENT, 'Latitude must be a number between -90 and 90, but was: ' + t);
					if (!isFinite(e) || e < -180 || e > 180)
						throw new hs(ls.INVALID_ARGUMENT, 'Longitude must be a number between -180 and 180, but was: ' + e);
					(this._lat = t), (this._long = e);
				}
				get latitude() {
					return this._lat;
				}
				get longitude() {
					return this._long;
				}
				isEqual(t) {
					return this._lat === t._lat && this._long === t._long;
				}
				toJSON() {
					return { latitude: this._lat, longitude: this._long };
				}
				_compareTo(t) {
					return Es(this._lat, t._lat) || Es(this._long, t._long);
				}
			}
			const zu = /^__.*__$/;
			class qu {
				constructor(t, e, n) {
					(this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
				}
				toMutation(t, e) {
					return null !== this.fieldMask
						? new ic(t, this.data, this.fieldMask, e, this.fieldTransforms)
						: new nc(t, this.data, e, this.fieldTransforms);
				}
			}
			function $u(t) {
				switch (t) {
					case 0:
					case 2:
					case 1:
						return !0;
					case 3:
					case 4:
						return !1;
					default:
						throw os();
				}
			}
			class Hu {
				constructor(t, e, n, i, r, s) {
					(this.settings = t),
						(this.databaseId = e),
						(this.serializer = n),
						(this.ignoreUndefinedProperties = i),
						void 0 === r && this.Eu(),
						(this.fieldTransforms = r || []),
						(this.fieldMask = s || []);
				}
				get path() {
					return this.settings.path;
				}
				get du() {
					return this.settings.du;
				}
				Au(t) {
					return new Hu(
						Object.assign(Object.assign({}, this.settings), t),
						this.databaseId,
						this.serializer,
						this.ignoreUndefinedProperties,
						this.fieldTransforms,
						this.fieldMask
					);
				}
				Ru(t) {
					var e;
					const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
						i = this.Au({ path: n, Vu: !1 });
					return i.mu(t), i;
				}
				fu(t) {
					var e;
					const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
						i = this.Au({ path: n, Vu: !1 });
					return i.Eu(), i;
				}
				gu(t) {
					return this.Au({ path: void 0, Vu: !0 });
				}
				pu(t) {
					return nd(t, this.settings.methodName, this.settings.yu || !1, this.path, this.settings.wu);
				}
				contains(t) {
					return (
						void 0 !== this.fieldMask.find((e) => t.isPrefixOf(e)) ||
						void 0 !== this.fieldTransforms.find((e) => t.isPrefixOf(e.field))
					);
				}
				Eu() {
					if (this.path) for (let t = 0; t < this.path.length; t++) this.mu(this.path.get(t));
				}
				mu(t) {
					if (0 === t.length) throw this.pu('Document fields must not be empty');
					if ($u(this.du) && zu.test(t)) throw this.pu('Document fields cannot begin and end with "__"');
				}
			}
			class Gu {
				constructor(t, e, n) {
					(this.databaseId = t), (this.ignoreUndefinedProperties = e), (this.serializer = n || Wl(t));
				}
				Su(t, e, n, i = !1) {
					return new Hu(
						{ du: t, methodName: e, wu: n, path: xs.emptyPath(), Vu: !1, yu: i },
						this.databaseId,
						this.serializer,
						this.ignoreUndefinedProperties
					);
				}
			}
			function Ku(t) {
				const e = t._freezeSettings(),
					n = Wl(t._databaseId);
				return new Gu(t._databaseId, !!e.ignoreUndefinedProperties, n);
			}
			function Wu(t, e, n, i, r, s = {}) {
				const o = t.Su(s.merge || s.mergeFields ? 2 : 0, e, n, r);
				Yu('Data must be an object, but it was:', o, i);
				const a = Ju(i, o);
				let c, l;
				if (s.merge) (c = new ro(o.fieldMask)), (l = o.fieldTransforms);
				else if (s.mergeFields) {
					const t = [];
					for (const i of s.mergeFields) {
						const r = Zu(e, i, n);
						if (!o.contains(r))
							throw new hs(
								ls.INVALID_ARGUMENT,
								`Field '${r}' is specified in your field mask but missing from your input data.`
							);
						id(t, r) || t.push(r);
					}
					(c = new ro(t)), (l = o.fieldTransforms.filter((t) => c.covers(t.field)));
				} else (c = null), (l = o.fieldTransforms);
				return new qu(new Do(a), c, l);
			}
			function Qu(t, e) {
				if (Xu((t = x(t)))) return Yu('Unsupported field value:', e, t), Ju(t, e);
				if (t instanceof ju)
					return (
						(function (t, e) {
							if (!$u(e.du)) throw e.pu(`${t._methodName}() can only be used with update() and set()`);
							if (!e.path) throw e.pu(`${t._methodName}() is not currently supported inside arrays`);
							const n = t._toFieldTransform(e);
							n && e.fieldTransforms.push(n);
						})(t, e),
						null
					);
				if (void 0 === t && e.ignoreUndefinedProperties) return null;
				if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
					if (e.settings.Vu && 4 !== e.du) throw e.pu('Nested arrays are not supported');
					return (function (t, e) {
						const n = [];
						let i = 0;
						for (const r of t) {
							let t = Qu(r, e.gu(i));
							null == t && (t = { nullValue: 'NULL_VALUE' }), n.push(t), i++;
						}
						return { arrayValue: { values: n } };
					})(t, e);
				}
				return (function (t, e) {
					if (null === (t = x(t))) return { nullValue: 'NULL_VALUE' };
					if ('number' == typeof t) return Oa(e.serializer, t);
					if ('boolean' == typeof t) return { booleanValue: t };
					if ('string' == typeof t) return { stringValue: t };
					if (t instanceof Date) {
						const n = Is.fromDate(t);
						return { timestampValue: Mc(e.serializer, n) };
					}
					if (t instanceof Is) {
						const n = new Is(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
						return { timestampValue: Mc(e.serializer, n) };
					}
					if (t instanceof Bu) return { geoPointValue: { latitude: t.latitude, longitude: t.longitude } };
					if (t instanceof Uu) return { bytesValue: Pc(e.serializer, t._byteString) };
					if (t instanceof xu) {
						const n = e.databaseId,
							i = t.firestore._databaseId;
						if (!i.isEqual(n))
							throw e.pu(
								`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`
							);
						return { referenceValue: Vc(t.firestore._databaseId || e.databaseId, t._key.path) };
					}
					throw e.pu(`Unsupported field value: ${Iu(t)}`);
				})(t, e);
			}
			function Ju(t, e) {
				const n = {};
				return (
					Ys(t)
						? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
						: Xs(t, (t, i) => {
								const r = Qu(i, e.Ru(t));
								null != r && (n[t] = r);
						  }),
					{ mapValue: { fields: n } }
				);
			}
			function Xu(t) {
				return !(
					'object' != typeof t ||
					null === t ||
					t instanceof Array ||
					t instanceof Date ||
					t instanceof Is ||
					t instanceof Bu ||
					t instanceof Uu ||
					t instanceof xu ||
					t instanceof ju
				);
			}
			function Yu(t, e, n) {
				if (
					!Xu(n) ||
					!(function (t) {
						return (
							'object' == typeof t &&
							null !== t &&
							(Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
						);
					})(n)
				) {
					const i = Iu(n);
					throw 'an object' === i ? e.pu(t + ' a custom object') : e.pu(t + ' ' + i);
				}
			}
			function Zu(t, e, n) {
				if ((e = x(e)) instanceof Vu) return e._internalPath;
				if ('string' == typeof e) return ed(t, e);
				throw nd('Field path arguments must be of type string or ', t, !1, void 0, n);
			}
			const td = new RegExp('[~\\*/\\[\\]]');
			function ed(t, e, n) {
				if (e.search(td) >= 0)
					throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, !1, void 0, n);
				try {
					return new Vu(...e.split('.'))._internalPath;
				} catch (i) {
					throw nd(
						`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
						t,
						!1,
						void 0,
						n
					);
				}
			}
			function nd(t, e, n, i, r) {
				const s = i && !i.isEmpty(),
					o = void 0 !== r;
				let a = `Function ${e}() called with invalid data`;
				n && (a += ' (via `toFirestore()`)'), (a += '. ');
				let c = '';
				return (
					(s || o) && ((c += ' (found'), s && (c += ` in field ${i}`), o && (c += ` in document ${r}`), (c += ')')),
					new hs(ls.INVALID_ARGUMENT, a + t + c)
				);
			}
			function id(t, e) {
				return t.some((t) => t.isEqual(e));
			}
			class rd {
				constructor(t, e, n, i, r) {
					(this._firestore = t),
						(this._userDataWriter = e),
						(this._key = n),
						(this._document = i),
						(this._converter = r);
				}
				get id() {
					return this._key.path.lastSegment();
				}
				get ref() {
					return new xu(this._firestore, this._converter, this._key);
				}
				exists() {
					return null !== this._document;
				}
				data() {
					if (this._document) {
						if (this._converter) {
							const t = new sd(this._firestore, this._userDataWriter, this._key, this._document, null);
							return this._converter.fromFirestore(t);
						}
						return this._userDataWriter.convertValue(this._document.data.value);
					}
				}
				get(t) {
					if (this._document) {
						const e = this._document.data.field(od('DocumentSnapshot.get', t));
						if (null !== e) return this._userDataWriter.convertValue(e);
					}
				}
			}
			class sd extends rd {
				data() {
					return super.data();
				}
			}
			function od(t, e) {
				return 'string' == typeof e ? ed(t, e) : e instanceof Vu ? e._internalPath : e._delegate._internalPath;
			}
			class ad {
				convertValue(t, e = 'none') {
					switch (vo(t)) {
						case 0:
							return null;
						case 1:
							return t.booleanValue;
						case 2:
							return lo(t.integerValue || t.doubleValue);
						case 3:
							return this.convertTimestamp(t.timestampValue);
						case 4:
							return this.convertServerTimestamp(t, e);
						case 5:
							return t.stringValue;
						case 6:
							return this.convertBytes(ho(t.bytesValue));
						case 7:
							return this.convertReference(t.referenceValue);
						case 8:
							return this.convertGeoPoint(t.geoPointValue);
						case 9:
							return this.convertArray(t.arrayValue, e);
						case 10:
							return this.convertObject(t.mapValue, e);
						default:
							throw os();
					}
				}
				convertObject(t, e) {
					return this.convertObjectMap(t.fields, e);
				}
				convertObjectMap(t, e = 'none') {
					const n = {};
					return (
						Xs(t, (t, i) => {
							n[t] = this.convertValue(i, e);
						}),
						n
					);
				}
				convertGeoPoint(t) {
					return new Bu(lo(t.latitude), lo(t.longitude));
				}
				convertArray(t, e) {
					return (t.values || []).map((t) => this.convertValue(t, e));
				}
				convertServerTimestamp(t, e) {
					switch (e) {
						case 'previous':
							const n = po(t);
							return null == n ? null : this.convertValue(n, e);
						case 'estimate':
							return this.convertTimestamp(fo(t));
						default:
							return null;
					}
				}
				convertTimestamp(t) {
					const e = co(t);
					return new Is(e.seconds, e.nanos);
				}
				convertDocumentKey(t, e) {
					const n = ks.fromString(t);
					as(sl(n));
					const i = new go(n.get(1), n.get(3)),
						r = new Rs(n.popFirst(5));
					return (
						i.isEqual(e) ||
							is(
								`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`
							),
						r
					);
				}
			}
			function cd(t, e, n) {
				let i;
				return (i = t ? (n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e)) : e), i;
			}
			class ld {
				constructor(t, e) {
					(this.hasPendingWrites = t), (this.fromCache = e);
				}
				isEqual(t) {
					return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
				}
			}
			class hd extends rd {
				constructor(t, e, n, i, r, s) {
					super(t, e, n, i, s), (this._firestore = t), (this._firestoreImpl = t), (this.metadata = r);
				}
				exists() {
					return super.exists();
				}
				data(t = {}) {
					if (this._document) {
						if (this._converter) {
							const e = new ud(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
							return this._converter.fromFirestore(e, t);
						}
						return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
					}
				}
				get(t, e = {}) {
					if (this._document) {
						const n = this._document.data.field(od('DocumentSnapshot.get', t));
						if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
					}
				}
			}
			class ud extends hd {
				data(t = {}) {
					return super.data(t);
				}
			}
			class dd {
				constructor(t, e, n, i) {
					(this._firestore = t),
						(this._userDataWriter = e),
						(this._snapshot = i),
						(this.metadata = new ld(i.hasPendingWrites, i.fromCache)),
						(this.query = n);
				}
				get docs() {
					const t = [];
					return this.forEach((e) => t.push(e)), t;
				}
				get size() {
					return this._snapshot.docs.size;
				}
				get empty() {
					return 0 === this.size;
				}
				forEach(t, e) {
					this._snapshot.docs.forEach((n) => {
						t.call(
							e,
							new ud(
								this._firestore,
								this._userDataWriter,
								n.key,
								n,
								new ld(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache),
								this.query.converter
							)
						);
					});
				}
				docChanges(t = {}) {
					const e = !!t.includeMetadataChanges;
					if (e && this._snapshot.excludesMetadataChanges)
						throw new hs(
							ls.INVALID_ARGUMENT,
							'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
						);
					return (
						(this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e) ||
							((this._cachedChanges = (function (t, e) {
								if (t._snapshot.oldDocs.isEmpty()) {
									let e = 0;
									return t._snapshot.docChanges.map((n) => {
										const i = new ud(
											t._firestore,
											t._userDataWriter,
											n.doc.key,
											n.doc,
											new ld(t._snapshot.mutatedKeys.has(n.doc.key), t._snapshot.fromCache),
											t.query.converter
										);
										return n.doc, { type: 'added', doc: i, oldIndex: -1, newIndex: e++ };
									});
								}
								{
									let n = t._snapshot.oldDocs;
									return t._snapshot.docChanges
										.filter((t) => e || 3 !== t.type)
										.map((e) => {
											const i = new ud(
												t._firestore,
												t._userDataWriter,
												e.doc.key,
												e.doc,
												new ld(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache),
												t.query.converter
											);
											let r = -1,
												s = -1;
											return (
												0 !== e.type && ((r = n.indexOf(e.doc.key)), (n = n.delete(e.doc.key))),
												1 !== e.type && ((n = n.add(e.doc)), (s = n.indexOf(e.doc.key))),
												{ type: pd(e.type), doc: i, oldIndex: r, newIndex: s }
											);
										});
								}
							})(this, e)),
							(this._cachedChangesIncludeMetadataChanges = e)),
						this._cachedChanges
					);
				}
			}
			function pd(t) {
				switch (t) {
					case 0:
						return 'added';
					case 2:
					case 3:
						return 'modified';
					case 1:
						return 'removed';
					default:
						return os();
				}
			}
			class fd extends ad {
				constructor(t) {
					super(), (this.firestore = t);
				}
				convertBytes(t) {
					return new Uu(t);
				}
				convertReference(t) {
					const e = this.convertDocumentKey(t, this.firestore._databaseId);
					return new xu(this.firestore, null, e);
				}
			}
			function md(t, e) {
				return (function (t, e) {
					const n = new us();
					return (
						t.asyncQueue.enqueueAndForget(async () =>
							(async function (t, e, n) {
								const i = lu(t);
								try {
									const t = await (function (t, e) {
										const n = cs(t),
											i = Is.now(),
											r = e.reduce((t, e) => t.add(e.key), Ra());
										let s, o;
										return n.persistence
											.runTransaction('Locally write mutations', 'readwrite', (t) => {
												let a = _a(),
													c = Ra();
												return n.os
													.getEntries(t, r)
													.next((t) => {
														(a = t),
															a.forEach((t, e) => {
																e.isValidDocument() || (c = c.add(t));
															});
													})
													.next(() => n.localDocuments.getOverlayedDocuments(t, a))
													.next((r) => {
														s = r;
														const o = [];
														for (const t of e) {
															const e = tc(t, s.get(t.key).overlayedDocument);
															null != e && o.push(new ic(t.key, e, Lo(e.value.mapValue), Wa.exists(!0)));
														}
														return n.mutationQueue.addMutationBatch(t, i, o, e);
													})
													.next((e) => {
														o = e;
														const i = e.applyToLocalDocumentSet(s, c);
														return n.documentOverlayCache.saveOverlays(t, e.batchId, i);
													});
											})
											.then(() => ({ batchId: o.batchId, changes: Ia(s) }));
									})(i.localStore, e);
									i.sharedClientState.addPendingMutation(t.batchId),
										(function (t, e, n) {
											let i = t.Da[t.currentUser.toKey()];
											i || (i = new Zs(Es)), (i = i.insert(e, n)), (t.Da[t.currentUser.toKey()] = i);
										})(i, t.batchId, n),
										await ou(i, t.changes),
										await yh(i.remoteStore);
								} catch (t) {
									const e = Rh(t, 'Failed to persist write');
									n.reject(e);
								}
							})(
								await (function (t) {
									return gu(t).then((t) => t.syncEngine);
								})(t),
								e,
								n
							)
						),
						n.promise
					);
				})(Pu(t), e);
			}
			function gd(t, e) {
				var n = {};
				for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
				if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
						e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
				}
				return n;
			}
			new WeakMap(),
				(function (t, e = !0) {
					!(function (t) {
						Zr = t;
					})(yt),
						pt(
							new R(
								'firestore',
								(t, { instanceIdentifier: n, options: i }) => {
									const r = t.getProvider('app').getImmediate(),
										s = new Ou(
											new ms(t.getProvider('auth-internal')),
											new ws(t.getProvider('app-check-internal')),
											(function (t, e) {
												if (!Object.prototype.hasOwnProperty.apply(t.options, ['projectId']))
													throw new hs(ls.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
												return new go(t.options.projectId, e);
											})(r, n),
											r
										);
									return (i = Object.assign({ useFetchStreams: e }, i)), s._setSettings(i), s;
								},
								'PUBLIC'
							).setMultipleInstances(!0)
						),
						bt(Xr, '4.4.1', t),
						bt(Xr, '4.4.1', 'esm2017');
				})(),
				Object.create,
				Object.create,
				'function' == typeof SuppressedError && SuppressedError;
			const yd = function () {
					return {
						'dependent-sdk-initialized-before-auth':
							'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
					};
				},
				vd = new b('auth', 'Firebase', {
					'dependent-sdk-initialized-before-auth':
						'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
				}),
				wd = new j('@firebase/auth');
			function bd(t, ...e) {
				wd.logLevel <= M.ERROR && wd.error(`Auth (${yt}): ${t}`, ...e);
			}
			function _d(t, ...e) {
				throw Td(t, ...e);
			}
			function Ed(t, ...e) {
				return Td(t, ...e);
			}
			function Td(t, ...e) {
				if ('string' != typeof t) {
					const n = e[0],
						i = [...e.slice(1)];
					return i[0] && (i[0].appName = t.name), t._errorFactory.create(n, ...i);
				}
				return vd.create(t, ...e);
			}
			function Id(t, e, ...n) {
				if (!t) throw Td(e, ...n);
			}
			function Sd(t) {
				const e = 'INTERNAL ASSERTION FAILED: ' + t;
				throw (bd(e), new Error(e));
			}
			function Cd(t, e) {
				t || Sd(e);
			}
			function kd() {
				var t;
				return ('undefined' != typeof self && (null === (t = self.location) || void 0 === t ? void 0 : t.href)) || '';
			}
			function Ad() {
				var t;
				return (
					('undefined' != typeof self && (null === (t = self.location) || void 0 === t ? void 0 : t.protocol)) || null
				);
			}
			function xd() {
				return (
					!(
						'undefined' != typeof navigator &&
						navigator &&
						'onLine' in navigator &&
						'boolean' == typeof navigator.onLine &&
						('http:' === Ad() ||
							'https:' === Ad() ||
							(function () {
								const t =
									'object' == typeof chrome ? chrome.runtime : 'object' == typeof browser ? browser.runtime : void 0;
								return 'object' == typeof t && void 0 !== t.id;
							})() ||
							'connection' in navigator)
					) || navigator.onLine
				);
			}
			class Rd {
				constructor(t, e) {
					(this.shortDelay = t),
						(this.longDelay = e),
						Cd(e > t, 'Short delay should be less than long delay!'),
						(this.isMobile =
							('undefined' != typeof window &&
								!!(window.cordova || window.phonegap || window.PhoneGap) &&
								/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())) ||
							('object' == typeof navigator && 'ReactNative' === navigator.product));
				}
				get() {
					return xd() ? (this.isMobile ? this.longDelay : this.shortDelay) : Math.min(5e3, this.shortDelay);
				}
			}
			function Nd(t, e) {
				Cd(t.emulator, 'Emulator should always be set here');
				const { url: n } = t.emulator;
				return e ? `${n}${e.startsWith('/') ? e.slice(1) : e}` : n;
			}
			class Dd {
				static initialize(t, e, n) {
					(this.fetchImpl = t), e && (this.headersImpl = e), n && (this.responseImpl = n);
				}
				static fetch() {
					return this.fetchImpl
						? this.fetchImpl
						: 'undefined' != typeof self && 'fetch' in self
						? self.fetch
						: 'undefined' != typeof globalThis && globalThis.fetch
						? globalThis.fetch
						: 'undefined' != typeof fetch
						? fetch
						: void Sd(
								'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
						  );
				}
				static headers() {
					return this.headersImpl
						? this.headersImpl
						: 'undefined' != typeof self && 'Headers' in self
						? self.Headers
						: 'undefined' != typeof globalThis && globalThis.Headers
						? globalThis.Headers
						: 'undefined' != typeof Headers
						? Headers
						: void Sd(
								'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
						  );
				}
				static response() {
					return this.responseImpl
						? this.responseImpl
						: 'undefined' != typeof self && 'Response' in self
						? self.Response
						: 'undefined' != typeof globalThis && globalThis.Response
						? globalThis.Response
						: 'undefined' != typeof Response
						? Response
						: void Sd(
								'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
						  );
				}
			}
			const Ld = {
					CREDENTIAL_MISMATCH: 'custom-token-mismatch',
					MISSING_CUSTOM_TOKEN: 'internal-error',
					INVALID_IDENTIFIER: 'invalid-email',
					MISSING_CONTINUE_URI: 'internal-error',
					INVALID_PASSWORD: 'wrong-password',
					MISSING_PASSWORD: 'missing-password',
					INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
					EMAIL_EXISTS: 'email-already-in-use',
					PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
					INVALID_IDP_RESPONSE: 'invalid-credential',
					INVALID_PENDING_TOKEN: 'invalid-credential',
					FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
					MISSING_REQ_TYPE: 'internal-error',
					EMAIL_NOT_FOUND: 'user-not-found',
					RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
					EXPIRED_OOB_CODE: 'expired-action-code',
					INVALID_OOB_CODE: 'invalid-action-code',
					MISSING_OOB_CODE: 'internal-error',
					CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
					INVALID_ID_TOKEN: 'invalid-user-token',
					TOKEN_EXPIRED: 'user-token-expired',
					USER_NOT_FOUND: 'user-token-expired',
					TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
					PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
					INVALID_CODE: 'invalid-verification-code',
					INVALID_SESSION_INFO: 'invalid-verification-id',
					INVALID_TEMPORARY_PROOF: 'invalid-credential',
					MISSING_SESSION_INFO: 'missing-verification-id',
					SESSION_EXPIRED: 'code-expired',
					MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
					UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
					INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
					ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
					INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
					MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
					MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
					MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
					SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
					SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
					BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
					RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
					MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
					INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
					INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
					MISSING_CLIENT_TYPE: 'missing-client-type',
					MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
					INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
					INVALID_REQ_TYPE: 'invalid-req-type',
				},
				Od = new Rd(3e4, 6e4);
			function Md(t, e) {
				return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
			}
			async function Pd(t, e, n, i, r = {}) {
				return Fd(t, r, async () => {
					let r = {},
						s = {};
					i && ('GET' === e ? (s = i) : (r = { body: JSON.stringify(i) }));
					const o = I(Object.assign({ key: t.config.apiKey }, s)).slice(1),
						a = await t._getAdditionalHeaders();
					return (
						(a['Content-Type'] = 'application/json'),
						t.languageCode && (a['X-Firebase-Locale'] = t.languageCode),
						Dd.fetch()(
							Vd(t, t.config.apiHost, n, o),
							Object.assign({ method: e, headers: a, referrerPolicy: 'no-referrer' }, r)
						)
					);
				});
			}
			async function Fd(t, e, n) {
				t._canInitEmulator = !1;
				const i = Object.assign(Object.assign({}, Ld), e);
				try {
					const e = new Bd(t),
						r = await Promise.race([n(), e.promise]);
					e.clearNetworkTimeout();
					const s = await r.json();
					if ('needConfirmation' in s) throw zd(t, 'account-exists-with-different-credential', s);
					if (r.ok && !('errorMessage' in s)) return s;
					{
						const e = r.ok ? s.errorMessage : s.error.message,
							[n, o] = e.split(' : ');
						if ('FEDERATED_USER_ID_ALREADY_LINKED' === n) throw zd(t, 'credential-already-in-use', s);
						if ('EMAIL_EXISTS' === n) throw zd(t, 'email-already-in-use', s);
						if ('USER_DISABLED' === n) throw zd(t, 'user-disabled', s);
						const a = i[n] || n.toLowerCase().replace(/[_\s]+/g, '-');
						if (o)
							throw (function (t, e, n) {
								const i = Object.assign(Object.assign({}, yd()), { [e]: n });
								return new b('auth', 'Firebase', i).create(e, { appName: t.name });
							})(t, a, o);
						_d(t, a);
					}
				} catch (e) {
					if (e instanceof w) throw e;
					_d(t, 'network-request-failed', { message: String(e) });
				}
			}
			async function Ud(t, e, n, i, r = {}) {
				const s = await Pd(t, e, n, i, r);
				return 'mfaPendingCredential' in s && _d(t, 'multi-factor-auth-required', { _serverResponse: s }), s;
			}
			function Vd(t, e, n, i) {
				const r = `${e}${n}?${i}`;
				return t.config.emulator ? Nd(t.config, r) : `${t.config.apiScheme}://${r}`;
			}
			function jd(t) {
				switch (t) {
					case 'ENFORCE':
						return 'ENFORCE';
					case 'AUDIT':
						return 'AUDIT';
					case 'OFF':
						return 'OFF';
					default:
						return 'ENFORCEMENT_STATE_UNSPECIFIED';
				}
			}
			class Bd {
				constructor(t) {
					(this.auth = t),
						(this.timer = null),
						(this.promise = new Promise((t, e) => {
							this.timer = setTimeout(() => e(Ed(this.auth, 'network-request-failed')), Od.get());
						}));
				}
				clearNetworkTimeout() {
					clearTimeout(this.timer);
				}
			}
			function zd(t, e, n) {
				const i = { appName: t.name };
				n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
				const r = Ed(t, e, i);
				return (r.customData._tokenResponse = n), r;
			}
			function qd(t) {
				return void 0 !== t && void 0 !== t.enterprise;
			}
			class $d {
				constructor(t) {
					if (((this.siteKey = ''), (this.recaptchaEnforcementState = []), void 0 === t.recaptchaKey))
						throw new Error('recaptchaKey undefined');
					(this.siteKey = t.recaptchaKey.split('/')[3]), (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
				}
				getProviderEnforcementState(t) {
					if (!this.recaptchaEnforcementState || 0 === this.recaptchaEnforcementState.length) return null;
					for (const e of this.recaptchaEnforcementState)
						if (e.provider && e.provider === t) return jd(e.enforcementState);
					return null;
				}
				isProviderEnabled(t) {
					return 'ENFORCE' === this.getProviderEnforcementState(t) || 'AUDIT' === this.getProviderEnforcementState(t);
				}
			}
			function Hd(t) {
				if (t)
					try {
						const e = new Date(Number(t));
						if (!isNaN(e.getTime())) return e.toUTCString();
					} catch (t) {}
			}
			function Gd(t) {
				return 1e3 * Number(t);
			}
			function Kd(t) {
				const [e, n, i] = t.split('.');
				if (void 0 === e || void 0 === n || void 0 === i)
					return bd('JWT malformed, contained fewer than 3 sections'), null;
				try {
					const t = u(n);
					return t ? JSON.parse(t) : (bd('Failed to decode base64 JWT payload'), null);
				} catch (t) {
					return bd('Caught error parsing JWT payload as JSON', null == t ? void 0 : t.toString()), null;
				}
			}
			async function Wd(t, e, n = !1) {
				if (n) return e;
				try {
					return await e;
				} catch (e) {
					throw (
						(e instanceof w &&
							(function ({ code: t }) {
								return 'auth/user-disabled' === t || 'auth/user-token-expired' === t;
							})(e) &&
							t.auth.currentUser === t &&
							(await t.auth.signOut()),
						e)
					);
				}
			}
			class Qd {
				constructor(t) {
					(this.user = t), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4);
				}
				_start() {
					this.isRunning || ((this.isRunning = !0), this.schedule());
				}
				_stop() {
					this.isRunning && ((this.isRunning = !1), null !== this.timerId && clearTimeout(this.timerId));
				}
				getInterval(t) {
					var e;
					if (t) {
						const t = this.errorBackoff;
						return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), t;
					}
					{
						this.errorBackoff = 3e4;
						const t =
							(null !== (e = this.user.stsTokenManager.expirationTime) && void 0 !== e ? e : 0) - Date.now() - 3e5;
						return Math.max(0, t);
					}
				}
				schedule(t = !1) {
					if (!this.isRunning) return;
					const e = this.getInterval(t);
					this.timerId = setTimeout(async () => {
						await this.iteration();
					}, e);
				}
				async iteration() {
					try {
						await this.user.getIdToken(!0);
					} catch (t) {
						return void ('auth/network-request-failed' === (null == t ? void 0 : t.code) && this.schedule(!0));
					}
					this.schedule();
				}
			}
			class Jd {
				constructor(t, e) {
					(this.createdAt = t), (this.lastLoginAt = e), this._initializeTime();
				}
				_initializeTime() {
					(this.lastSignInTime = Hd(this.lastLoginAt)), (this.creationTime = Hd(this.createdAt));
				}
				_copy(t) {
					(this.createdAt = t.createdAt), (this.lastLoginAt = t.lastLoginAt), this._initializeTime();
				}
				toJSON() {
					return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
				}
			}
			async function Xd(t) {
				var e;
				const n = t.auth,
					i = await t.getIdToken(),
					r = await Wd(
						t,
						(async function (t, e) {
							return Pd(t, 'POST', '/v1/accounts:lookup', e);
						})(n, { idToken: i })
					);
				Id(null == r ? void 0 : r.users.length, n, 'internal-error');
				const s = r.users[0];
				t._notifyReloadListener(s);
				const o = (null === (e = s.providerUserInfo) || void 0 === e ? void 0 : e.length)
						? s.providerUserInfo.map((t) => {
								var { providerId: e } = t,
									n = gd(t, ['providerId']);
								return {
									providerId: e,
									uid: n.rawId || '',
									displayName: n.displayName || null,
									email: n.email || null,
									phoneNumber: n.phoneNumber || null,
									photoURL: n.photoUrl || null,
								};
						  })
						: [],
					a =
						((c = t.providerData), (l = o), [...c.filter((t) => !l.some((e) => e.providerId === t.providerId)), ...l]);
				var c, l;
				const h = t.isAnonymous,
					u = !((t.email && s.passwordHash) || (null == a ? void 0 : a.length)),
					d = !!h && u,
					p = {
						uid: s.localId,
						displayName: s.displayName || null,
						photoURL: s.photoUrl || null,
						email: s.email || null,
						emailVerified: s.emailVerified || !1,
						phoneNumber: s.phoneNumber || null,
						tenantId: s.tenantId || null,
						providerData: a,
						metadata: new Jd(s.createdAt, s.lastLoginAt),
						isAnonymous: d,
					};
				Object.assign(t, p);
			}
			class Yd {
				constructor() {
					(this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
				}
				get isExpired() {
					return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
				}
				updateFromServerResponse(t) {
					Id(t.idToken, 'internal-error'),
						Id(void 0 !== t.idToken, 'internal-error'),
						Id(void 0 !== t.refreshToken, 'internal-error');
					const e =
						'expiresIn' in t && void 0 !== t.expiresIn
							? Number(t.expiresIn)
							: (function (t) {
									const e = Kd(t);
									return (
										Id(e, 'internal-error'),
										Id(void 0 !== e.exp, 'internal-error'),
										Id(void 0 !== e.iat, 'internal-error'),
										Number(e.exp) - Number(e.iat)
									);
							  })(t.idToken);
					this.updateTokensAndExpiration(t.idToken, t.refreshToken, e);
				}
				async getToken(t, e = !1) {
					return (
						Id(!this.accessToken || this.refreshToken, t, 'user-token-expired'),
						e || !this.accessToken || this.isExpired
							? this.refreshToken
								? (await this.refresh(t, this.refreshToken), this.accessToken)
								: null
							: this.accessToken
					);
				}
				clearRefreshToken() {
					this.refreshToken = null;
				}
				async refresh(t, e) {
					const {
						accessToken: n,
						refreshToken: i,
						expiresIn: r,
					} = await (async function (t, e) {
						const n = await Fd(t, {}, async () => {
							const n = I({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
								{ tokenApiHost: i, apiKey: r } = t.config,
								s = Vd(t, i, '/v1/token', `key=${r}`),
								o = await t._getAdditionalHeaders();
							return (
								(o['Content-Type'] = 'application/x-www-form-urlencoded'),
								Dd.fetch()(s, { method: 'POST', headers: o, body: n })
							);
						});
						return { accessToken: n.access_token, expiresIn: n.expires_in, refreshToken: n.refresh_token };
					})(t, e);
					this.updateTokensAndExpiration(n, i, Number(r));
				}
				updateTokensAndExpiration(t, e, n) {
					(this.refreshToken = e || null), (this.accessToken = t || null), (this.expirationTime = Date.now() + 1e3 * n);
				}
				static fromJSON(t, e) {
					const { refreshToken: n, accessToken: i, expirationTime: r } = e,
						s = new Yd();
					return (
						n && (Id('string' == typeof n, 'internal-error', { appName: t }), (s.refreshToken = n)),
						i && (Id('string' == typeof i, 'internal-error', { appName: t }), (s.accessToken = i)),
						r && (Id('number' == typeof r, 'internal-error', { appName: t }), (s.expirationTime = r)),
						s
					);
				}
				toJSON() {
					return {
						refreshToken: this.refreshToken,
						accessToken: this.accessToken,
						expirationTime: this.expirationTime,
					};
				}
				_assign(t) {
					(this.accessToken = t.accessToken),
						(this.refreshToken = t.refreshToken),
						(this.expirationTime = t.expirationTime);
				}
				_clone() {
					return Object.assign(new Yd(), this.toJSON());
				}
				_performRefresh() {
					return Sd('not implemented');
				}
			}
			function Zd(t, e) {
				Id('string' == typeof t || void 0 === t, 'internal-error', { appName: e });
			}
			class tp {
				constructor(t) {
					var { uid: e, auth: n, stsTokenManager: i } = t,
						r = gd(t, ['uid', 'auth', 'stsTokenManager']);
					(this.providerId = 'firebase'),
						(this.proactiveRefresh = new Qd(this)),
						(this.reloadUserInfo = null),
						(this.reloadListener = null),
						(this.uid = e),
						(this.auth = n),
						(this.stsTokenManager = i),
						(this.accessToken = i.accessToken),
						(this.displayName = r.displayName || null),
						(this.email = r.email || null),
						(this.emailVerified = r.emailVerified || !1),
						(this.phoneNumber = r.phoneNumber || null),
						(this.photoURL = r.photoURL || null),
						(this.isAnonymous = r.isAnonymous || !1),
						(this.tenantId = r.tenantId || null),
						(this.providerData = r.providerData ? [...r.providerData] : []),
						(this.metadata = new Jd(r.createdAt || void 0, r.lastLoginAt || void 0));
				}
				async getIdToken(t) {
					const e = await Wd(this, this.stsTokenManager.getToken(this.auth, t));
					return (
						Id(e, this.auth, 'internal-error'),
						this.accessToken !== e &&
							((this.accessToken = e),
							await this.auth._persistUserIfCurrent(this),
							this.auth._notifyListenersIfCurrent(this)),
						e
					);
				}
				getIdTokenResult(t) {
					return (async function (t, e = !1) {
						const n = x(t),
							i = await n.getIdToken(e),
							r = Kd(i);
						Id(r && r.exp && r.auth_time && r.iat, n.auth, 'internal-error');
						const s = 'object' == typeof r.firebase ? r.firebase : void 0,
							o = null == s ? void 0 : s.sign_in_provider;
						return {
							claims: r,
							token: i,
							authTime: Hd(Gd(r.auth_time)),
							issuedAtTime: Hd(Gd(r.iat)),
							expirationTime: Hd(Gd(r.exp)),
							signInProvider: o || null,
							signInSecondFactor: (null == s ? void 0 : s.sign_in_second_factor) || null,
						};
					})(this, t);
				}
				reload() {
					return (async function (t) {
						const e = x(t);
						await Xd(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
					})(this);
				}
				_assign(t) {
					this !== t &&
						(Id(this.uid === t.uid, this.auth, 'internal-error'),
						(this.displayName = t.displayName),
						(this.photoURL = t.photoURL),
						(this.email = t.email),
						(this.emailVerified = t.emailVerified),
						(this.phoneNumber = t.phoneNumber),
						(this.isAnonymous = t.isAnonymous),
						(this.tenantId = t.tenantId),
						(this.providerData = t.providerData.map((t) => Object.assign({}, t))),
						this.metadata._copy(t.metadata),
						this.stsTokenManager._assign(t.stsTokenManager));
				}
				_clone(t) {
					const e = new tp(
						Object.assign(Object.assign({}, this), { auth: t, stsTokenManager: this.stsTokenManager._clone() })
					);
					return e.metadata._copy(this.metadata), e;
				}
				_onReload(t) {
					Id(!this.reloadListener, this.auth, 'internal-error'),
						(this.reloadListener = t),
						this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null));
				}
				_notifyReloadListener(t) {
					this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
				}
				_startProactiveRefresh() {
					this.proactiveRefresh._start();
				}
				_stopProactiveRefresh() {
					this.proactiveRefresh._stop();
				}
				async _updateTokensIfNecessary(t, e = !1) {
					let n = !1;
					t.idToken &&
						t.idToken !== this.stsTokenManager.accessToken &&
						(this.stsTokenManager.updateFromServerResponse(t), (n = !0)),
						e && (await Xd(this)),
						await this.auth._persistUserIfCurrent(this),
						n && this.auth._notifyListenersIfCurrent(this);
				}
				async delete() {
					const t = await this.getIdToken();
					return (
						await Wd(
							this,
							(async function (t, e) {
								return Pd(t, 'POST', '/v1/accounts:delete', e);
							})(this.auth, { idToken: t })
						),
						this.stsTokenManager.clearRefreshToken(),
						this.auth.signOut()
					);
				}
				toJSON() {
					return Object.assign(
						Object.assign(
							{
								uid: this.uid,
								email: this.email || void 0,
								emailVerified: this.emailVerified,
								displayName: this.displayName || void 0,
								isAnonymous: this.isAnonymous,
								photoURL: this.photoURL || void 0,
								phoneNumber: this.phoneNumber || void 0,
								tenantId: this.tenantId || void 0,
								providerData: this.providerData.map((t) => Object.assign({}, t)),
								stsTokenManager: this.stsTokenManager.toJSON(),
								_redirectEventId: this._redirectEventId,
							},
							this.metadata.toJSON()
						),
						{ apiKey: this.auth.config.apiKey, appName: this.auth.name }
					);
				}
				get refreshToken() {
					return this.stsTokenManager.refreshToken || '';
				}
				static _fromJSON(t, e) {
					var n, i, r, s, o, a, c, l;
					const h = null !== (n = e.displayName) && void 0 !== n ? n : void 0,
						u = null !== (i = e.email) && void 0 !== i ? i : void 0,
						d = null !== (r = e.phoneNumber) && void 0 !== r ? r : void 0,
						p = null !== (s = e.photoURL) && void 0 !== s ? s : void 0,
						f = null !== (o = e.tenantId) && void 0 !== o ? o : void 0,
						m = null !== (a = e._redirectEventId) && void 0 !== a ? a : void 0,
						g = null !== (c = e.createdAt) && void 0 !== c ? c : void 0,
						y = null !== (l = e.lastLoginAt) && void 0 !== l ? l : void 0,
						{ uid: v, emailVerified: w, isAnonymous: b, providerData: _, stsTokenManager: E } = e;
					Id(v && E, t, 'internal-error');
					const T = Yd.fromJSON(this.name, E);
					Id('string' == typeof v, t, 'internal-error'),
						Zd(h, t.name),
						Zd(u, t.name),
						Id('boolean' == typeof w, t, 'internal-error'),
						Id('boolean' == typeof b, t, 'internal-error'),
						Zd(d, t.name),
						Zd(p, t.name),
						Zd(f, t.name),
						Zd(m, t.name),
						Zd(g, t.name),
						Zd(y, t.name);
					const I = new tp({
						uid: v,
						auth: t,
						email: u,
						emailVerified: w,
						displayName: h,
						isAnonymous: b,
						photoURL: p,
						phoneNumber: d,
						tenantId: f,
						stsTokenManager: T,
						createdAt: g,
						lastLoginAt: y,
					});
					return (
						_ && Array.isArray(_) && (I.providerData = _.map((t) => Object.assign({}, t))),
						m && (I._redirectEventId = m),
						I
					);
				}
				static async _fromIdTokenResponse(t, e, n = !1) {
					const i = new Yd();
					i.updateFromServerResponse(e);
					const r = new tp({ uid: e.localId, auth: t, stsTokenManager: i, isAnonymous: n });
					return await Xd(r), r;
				}
			}
			const ep = new Map();
			function np(t) {
				Cd(t instanceof Function, 'Expected a class definition');
				let e = ep.get(t);
				return e
					? (Cd(e instanceof t, 'Instance stored in cache mismatched with class'), e)
					: ((e = new t()), ep.set(t, e), e);
			}
			class ip {
				constructor() {
					(this.type = 'NONE'), (this.storage = {});
				}
				async _isAvailable() {
					return !0;
				}
				async _set(t, e) {
					this.storage[t] = e;
				}
				async _get(t) {
					const e = this.storage[t];
					return void 0 === e ? null : e;
				}
				async _remove(t) {
					delete this.storage[t];
				}
				_addListener(t, e) {}
				_removeListener(t, e) {}
			}
			ip.type = 'NONE';
			const rp = ip;
			function sp(t, e, n) {
				return `firebase:${t}:${e}:${n}`;
			}
			class op {
				constructor(t, e, n) {
					(this.persistence = t), (this.auth = e), (this.userKey = n);
					const { config: i, name: r } = this.auth;
					(this.fullUserKey = sp(this.userKey, i.apiKey, r)),
						(this.fullPersistenceKey = sp('persistence', i.apiKey, r)),
						(this.boundEventHandler = e._onStorageEvent.bind(e)),
						this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
				}
				setCurrentUser(t) {
					return this.persistence._set(this.fullUserKey, t.toJSON());
				}
				async getCurrentUser() {
					const t = await this.persistence._get(this.fullUserKey);
					return t ? tp._fromJSON(this.auth, t) : null;
				}
				removeCurrentUser() {
					return this.persistence._remove(this.fullUserKey);
				}
				savePersistenceForRedirect() {
					return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
				}
				async setPersistence(t) {
					if (this.persistence === t) return;
					const e = await this.getCurrentUser();
					return await this.removeCurrentUser(), (this.persistence = t), e ? this.setCurrentUser(e) : void 0;
				}
				delete() {
					this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
				}
				static async create(t, e, n = 'authUser') {
					if (!e.length) return new op(np(rp), t, n);
					const i = (
						await Promise.all(
							e.map(async (t) => {
								if (await t._isAvailable()) return t;
							})
						)
					).filter((t) => t);
					let r = i[0] || np(rp);
					const s = sp(n, t.config.apiKey, t.name);
					let o = null;
					for (const n of e)
						try {
							const e = await n._get(s);
							if (e) {
								const i = tp._fromJSON(t, e);
								n !== r && (o = i), (r = n);
								break;
							}
						} catch (t) {}
					const a = i.filter((t) => t._shouldAllowMigration);
					return r._shouldAllowMigration && a.length
						? ((r = a[0]),
						  o && (await r._set(s, o.toJSON())),
						  await Promise.all(
								e.map(async (t) => {
									if (t !== r)
										try {
											await t._remove(s);
										} catch (t) {}
								})
						  ),
						  new op(r, t, n))
						: new op(r, t, n);
				}
			}
			function ap(t) {
				const e = t.toLowerCase();
				if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/')) return 'Opera';
				if (up(e)) return 'IEMobile';
				if (e.includes('msie') || e.includes('trident/')) return 'IE';
				if (e.includes('edge/')) return 'Edge';
				if (cp(e)) return 'Firefox';
				if (e.includes('silk/')) return 'Silk';
				if (pp(e)) return 'Blackberry';
				if (fp(e)) return 'Webos';
				if (lp(e)) return 'Safari';
				if ((e.includes('chrome/') || hp(e)) && !e.includes('edge/')) return 'Chrome';
				if (dp(e)) return 'Android';
				{
					const e = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
						n = t.match(e);
					if (2 === (null == n ? void 0 : n.length)) return n[1];
				}
				return 'Other';
			}
			function cp(t = y()) {
				return /firefox\//i.test(t);
			}
			function lp(t = y()) {
				const e = t.toLowerCase();
				return e.includes('safari/') && !e.includes('chrome/') && !e.includes('crios/') && !e.includes('android');
			}
			function hp(t = y()) {
				return /crios\//i.test(t);
			}
			function up(t = y()) {
				return /iemobile/i.test(t);
			}
			function dp(t = y()) {
				return /android/i.test(t);
			}
			function pp(t = y()) {
				return /blackberry/i.test(t);
			}
			function fp(t = y()) {
				return /webos/i.test(t);
			}
			function mp(t = y()) {
				return /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t));
			}
			function gp(t = y()) {
				return mp(t) || dp(t) || fp(t) || pp(t) || /windows phone/i.test(t) || up(t);
			}
			function yp(t, e = []) {
				let n;
				switch (t) {
					case 'Browser':
						n = ap(y());
						break;
					case 'Worker':
						n = `${ap(y())}-${t}`;
						break;
					default:
						n = t;
				}
				const i = e.length ? e.join(',') : 'FirebaseCore-web';
				return `${n}/JsCore/${yt}/${i}`;
			}
			class vp {
				constructor(t) {
					(this.auth = t), (this.queue = []);
				}
				pushCallback(t, e) {
					const n = (e) =>
						new Promise((n, i) => {
							try {
								n(t(e));
							} catch (t) {
								i(t);
							}
						});
					(n.onAbort = e), this.queue.push(n);
					const i = this.queue.length - 1;
					return () => {
						this.queue[i] = () => Promise.resolve();
					};
				}
				async runMiddleware(t) {
					if (this.auth.currentUser === t) return;
					const e = [];
					try {
						for (const n of this.queue) await n(t), n.onAbort && e.push(n.onAbort);
					} catch (t) {
						e.reverse();
						for (const t of e)
							try {
								t();
							} catch (t) {}
						throw this.auth._errorFactory.create('login-blocked', { originalMessage: null == t ? void 0 : t.message });
					}
				}
			}
			class wp {
				constructor(t) {
					var e, n, i, r;
					const s = t.customStrengthOptions;
					(this.customStrengthOptions = {}),
						(this.customStrengthOptions.minPasswordLength = null !== (e = s.minPasswordLength) && void 0 !== e ? e : 6),
						s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
						void 0 !== s.containsLowercaseCharacter &&
							(this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter),
						void 0 !== s.containsUppercaseCharacter &&
							(this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter),
						void 0 !== s.containsNumericCharacter &&
							(this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter),
						void 0 !== s.containsNonAlphanumericCharacter &&
							(this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter),
						(this.enforcementState = t.enforcementState),
						'ENFORCEMENT_STATE_UNSPECIFIED' === this.enforcementState && (this.enforcementState = 'OFF'),
						(this.allowedNonAlphanumericCharacters =
							null !== (i = null === (n = t.allowedNonAlphanumericCharacters) || void 0 === n ? void 0 : n.join('')) &&
							void 0 !== i
								? i
								: ''),
						(this.forceUpgradeOnSignin = null !== (r = t.forceUpgradeOnSignin) && void 0 !== r && r),
						(this.schemaVersion = t.schemaVersion);
				}
				validatePassword(t) {
					var e, n, i, r, s, o;
					const a = { isValid: !0, passwordPolicy: this };
					return (
						this.validatePasswordLengthOptions(t, a),
						this.validatePasswordCharacterOptions(t, a),
						a.isValid && (a.isValid = null === (e = a.meetsMinPasswordLength) || void 0 === e || e),
						a.isValid && (a.isValid = null === (n = a.meetsMaxPasswordLength) || void 0 === n || n),
						a.isValid && (a.isValid = null === (i = a.containsLowercaseLetter) || void 0 === i || i),
						a.isValid && (a.isValid = null === (r = a.containsUppercaseLetter) || void 0 === r || r),
						a.isValid && (a.isValid = null === (s = a.containsNumericCharacter) || void 0 === s || s),
						a.isValid && (a.isValid = null === (o = a.containsNonAlphanumericCharacter) || void 0 === o || o),
						a
					);
				}
				validatePasswordLengthOptions(t, e) {
					const n = this.customStrengthOptions.minPasswordLength,
						i = this.customStrengthOptions.maxPasswordLength;
					n && (e.meetsMinPasswordLength = t.length >= n), i && (e.meetsMaxPasswordLength = t.length <= i);
				}
				validatePasswordCharacterOptions(t, e) {
					let n;
					this.updatePasswordCharacterOptionsStatuses(e, !1, !1, !1, !1);
					for (let i = 0; i < t.length; i++)
						(n = t.charAt(i)),
							this.updatePasswordCharacterOptionsStatuses(
								e,
								n >= 'a' && n <= 'z',
								n >= 'A' && n <= 'Z',
								n >= '0' && n <= '9',
								this.allowedNonAlphanumericCharacters.includes(n)
							);
				}
				updatePasswordCharacterOptionsStatuses(t, e, n, i, r) {
					this.customStrengthOptions.containsLowercaseLetter &&
						(t.containsLowercaseLetter || (t.containsLowercaseLetter = e)),
						this.customStrengthOptions.containsUppercaseLetter &&
							(t.containsUppercaseLetter || (t.containsUppercaseLetter = n)),
						this.customStrengthOptions.containsNumericCharacter &&
							(t.containsNumericCharacter || (t.containsNumericCharacter = i)),
						this.customStrengthOptions.containsNonAlphanumericCharacter &&
							(t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = r));
				}
			}
			class bp {
				constructor(t, e, n, i) {
					(this.app = t),
						(this.heartbeatServiceProvider = e),
						(this.appCheckServiceProvider = n),
						(this.config = i),
						(this.currentUser = null),
						(this.emulatorConfig = null),
						(this.operations = Promise.resolve()),
						(this.authStateSubscription = new Ep(this)),
						(this.idTokenSubscription = new Ep(this)),
						(this.beforeStateQueue = new vp(this)),
						(this.redirectUser = null),
						(this.isProactiveRefreshEnabled = !1),
						(this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
						(this._canInitEmulator = !0),
						(this._isInitialized = !1),
						(this._deleted = !1),
						(this._initializationPromise = null),
						(this._popupRedirectResolver = null),
						(this._errorFactory = vd),
						(this._agentRecaptchaConfig = null),
						(this._tenantRecaptchaConfigs = {}),
						(this._projectPasswordPolicy = null),
						(this._tenantPasswordPolicies = {}),
						(this.lastNotifiedUid = void 0),
						(this.languageCode = null),
						(this.tenantId = null),
						(this.settings = { appVerificationDisabledForTesting: !1 }),
						(this.frameworks = []),
						(this.name = t.name),
						(this.clientVersion = i.sdkClientVersion);
				}
				_initializeWithPersistence(t, e) {
					return (
						e && (this._popupRedirectResolver = np(e)),
						(this._initializationPromise = this.queue(async () => {
							var n, i;
							if (!this._deleted && ((this.persistenceManager = await op.create(this, t)), !this._deleted)) {
								if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively)
									try {
										await this._popupRedirectResolver._initialize(this);
									} catch (t) {}
								await this.initializeCurrentUser(e),
									(this.lastNotifiedUid = (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null),
									this._deleted || (this._isInitialized = !0);
							}
						})),
						this._initializationPromise
					);
				}
				async _onStorageEvent() {
					if (this._deleted) return;
					const t = await this.assertedPersistence.getCurrentUser();
					return this.currentUser || t
						? this.currentUser && t && this.currentUser.uid === t.uid
							? (this._currentUser._assign(t), void (await this.currentUser.getIdToken()))
							: void (await this._updateCurrentUser(t, !0))
						: void 0;
				}
				async initializeCurrentUser(t) {
					var e;
					const n = await this.assertedPersistence.getCurrentUser();
					let i = n,
						r = !1;
					if (t && this.config.authDomain) {
						await this.getOrInitRedirectPersistenceManager();
						const n = null === (e = this.redirectUser) || void 0 === e ? void 0 : e._redirectEventId,
							s = null == i ? void 0 : i._redirectEventId,
							o = await this.tryRedirectSignIn(t);
						(n && n !== s) || !(null == o ? void 0 : o.user) || ((i = o.user), (r = !0));
					}
					if (!i) return this.directlySetCurrentUser(null);
					if (!i._redirectEventId) {
						if (r)
							try {
								await this.beforeStateQueue.runMiddleware(i);
							} catch (t) {
								(i = n), this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(t));
							}
						return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
					}
					return (
						Id(this._popupRedirectResolver, this, 'argument-error'),
						await this.getOrInitRedirectPersistenceManager(),
						this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
							? this.directlySetCurrentUser(i)
							: this.reloadAndSetCurrentUserOrClear(i)
					);
				}
				async tryRedirectSignIn(t) {
					let e = null;
					try {
						e = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
					} catch (t) {
						await this._setRedirectUser(null);
					}
					return e;
				}
				async reloadAndSetCurrentUserOrClear(t) {
					try {
						await Xd(t);
					} catch (t) {
						if ('auth/network-request-failed' !== (null == t ? void 0 : t.code))
							return this.directlySetCurrentUser(null);
					}
					return this.directlySetCurrentUser(t);
				}
				useDeviceLanguage() {
					this.languageCode = (function () {
						if ('undefined' == typeof navigator) return null;
						const t = navigator;
						return (t.languages && t.languages[0]) || t.language || null;
					})();
				}
				async _delete() {
					this._deleted = !0;
				}
				async updateCurrentUser(t) {
					const e = t ? x(t) : null;
					return (
						e && Id(e.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
						this._updateCurrentUser(e && e._clone(this))
					);
				}
				async _updateCurrentUser(t, e = !1) {
					if (!this._deleted)
						return (
							t && Id(this.tenantId === t.tenantId, this, 'tenant-id-mismatch'),
							e || (await this.beforeStateQueue.runMiddleware(t)),
							this.queue(async () => {
								await this.directlySetCurrentUser(t), this.notifyAuthListeners();
							})
						);
				}
				async signOut() {
					return (
						await this.beforeStateQueue.runMiddleware(null),
						(this.redirectPersistenceManager || this._popupRedirectResolver) && (await this._setRedirectUser(null)),
						this._updateCurrentUser(null, !0)
					);
				}
				setPersistence(t) {
					return this.queue(async () => {
						await this.assertedPersistence.setPersistence(np(t));
					});
				}
				_getRecaptchaConfig() {
					return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
				}
				async validatePassword(t) {
					this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
					const e = this._getPasswordPolicyInternal();
					return e.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
						? Promise.reject(this._errorFactory.create('unsupported-password-policy-schema-version', {}))
						: e.validatePassword(t);
				}
				_getPasswordPolicyInternal() {
					return null === this.tenantId ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
				}
				async _updatePasswordPolicy() {
					const t = await (async function (t, e = {}) {
							return Pd(t, 'GET', '/v2/passwordPolicy', Md(t, e));
						})(this),
						e = new wp(t);
					null === this.tenantId
						? (this._projectPasswordPolicy = e)
						: (this._tenantPasswordPolicies[this.tenantId] = e);
				}
				_getPersistence() {
					return this.assertedPersistence.persistence.type;
				}
				_updateErrorMap(t) {
					this._errorFactory = new b('auth', 'Firebase', t());
				}
				onAuthStateChanged(t, e, n) {
					return this.registerStateListener(this.authStateSubscription, t, e, n);
				}
				beforeAuthStateChanged(t, e) {
					return this.beforeStateQueue.pushCallback(t, e);
				}
				onIdTokenChanged(t, e, n) {
					return this.registerStateListener(this.idTokenSubscription, t, e, n);
				}
				authStateReady() {
					return new Promise((t, e) => {
						if (this.currentUser) t();
						else {
							const n = this.onAuthStateChanged(() => {
								n(), t();
							}, e);
						}
					});
				}
				async revokeAccessToken(t) {
					if (this.currentUser) {
						const e = {
							providerId: 'apple.com',
							tokenType: 'ACCESS_TOKEN',
							token: t,
							idToken: await this.currentUser.getIdToken(),
						};
						null != this.tenantId && (e.tenantId = this.tenantId),
							await (async function (t, e) {
								return Pd(t, 'POST', '/v2/accounts:revokeToken', Md(t, e));
							})(this, e);
					}
				}
				toJSON() {
					var t;
					return {
						apiKey: this.config.apiKey,
						authDomain: this.config.authDomain,
						appName: this.name,
						currentUser: null === (t = this._currentUser) || void 0 === t ? void 0 : t.toJSON(),
					};
				}
				async _setRedirectUser(t, e) {
					const n = await this.getOrInitRedirectPersistenceManager(e);
					return null === t ? n.removeCurrentUser() : n.setCurrentUser(t);
				}
				async getOrInitRedirectPersistenceManager(t) {
					if (!this.redirectPersistenceManager) {
						const e = (t && np(t)) || this._popupRedirectResolver;
						Id(e, this, 'argument-error'),
							(this.redirectPersistenceManager = await op.create(this, [np(e._redirectPersistence)], 'redirectUser')),
							(this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
					}
					return this.redirectPersistenceManager;
				}
				async _redirectUserForId(t) {
					var e, n;
					return (
						this._isInitialized && (await this.queue(async () => {})),
						(null === (e = this._currentUser) || void 0 === e ? void 0 : e._redirectEventId) === t
							? this._currentUser
							: (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === t
							? this.redirectUser
							: null
					);
				}
				async _persistUserIfCurrent(t) {
					if (t === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(t));
				}
				_notifyListenersIfCurrent(t) {
					t === this.currentUser && this.notifyAuthListeners();
				}
				_key() {
					return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
				}
				_startProactiveRefresh() {
					(this.isProactiveRefreshEnabled = !0), this.currentUser && this._currentUser._startProactiveRefresh();
				}
				_stopProactiveRefresh() {
					(this.isProactiveRefreshEnabled = !1), this.currentUser && this._currentUser._stopProactiveRefresh();
				}
				get _currentUser() {
					return this.currentUser;
				}
				notifyAuthListeners() {
					var t, e;
					if (!this._isInitialized) return;
					this.idTokenSubscription.next(this.currentUser);
					const n =
						null !== (e = null === (t = this.currentUser) || void 0 === t ? void 0 : t.uid) && void 0 !== e ? e : null;
					this.lastNotifiedUid !== n && ((this.lastNotifiedUid = n), this.authStateSubscription.next(this.currentUser));
				}
				registerStateListener(t, e, n, i) {
					if (this._deleted) return () => {};
					const r = 'function' == typeof e ? e : e.next.bind(e);
					let s = !1;
					const o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
					if (
						(Id(o, this, 'internal-error'),
						o.then(() => {
							s || r(this.currentUser);
						}),
						'function' == typeof e)
					) {
						const r = t.addObserver(e, n, i);
						return () => {
							(s = !0), r();
						};
					}
					{
						const n = t.addObserver(e);
						return () => {
							(s = !0), n();
						};
					}
				}
				async directlySetCurrentUser(t) {
					this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(),
						t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
						(this.currentUser = t),
						t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser();
				}
				queue(t) {
					return (this.operations = this.operations.then(t, t)), this.operations;
				}
				get assertedPersistence() {
					return Id(this.persistenceManager, this, 'internal-error'), this.persistenceManager;
				}
				_logFramework(t) {
					t &&
						!this.frameworks.includes(t) &&
						(this.frameworks.push(t),
						this.frameworks.sort(),
						(this.clientVersion = yp(this.config.clientPlatform, this._getFrameworks())));
				}
				_getFrameworks() {
					return this.frameworks;
				}
				async _getAdditionalHeaders() {
					var t;
					const e = { 'X-Client-Version': this.clientVersion };
					this.app.options.appId && (e['X-Firebase-gmpid'] = this.app.options.appId);
					const n = await (null === (t = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) || void 0 === t
						? void 0
						: t.getHeartbeatsHeader());
					n && (e['X-Firebase-Client'] = n);
					const i = await this._getAppCheckToken();
					return i && (e['X-Firebase-AppCheck'] = i), e;
				}
				async _getAppCheckToken() {
					var t;
					const e = await (null === (t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) || void 0 === t
						? void 0
						: t.getToken());
					return (
						(null == e ? void 0 : e.error) &&
							(function (t, ...e) {
								wd.logLevel <= M.WARN && wd.warn(`Auth (${yt}): ${t}`, ...e);
							})(`Error while retrieving App Check token: ${e.error}`),
						null == e ? void 0 : e.token
					);
				}
			}
			function _p(t) {
				return x(t);
			}
			class Ep {
				constructor(t) {
					(this.auth = t),
						(this.observer = null),
						(this.addObserver = (function (t, e) {
							const n = new k(t, void 0);
							return n.subscribe.bind(n);
						})((t) => (this.observer = t)));
				}
				get next() {
					return Id(this.observer, this.auth, 'internal-error'), this.observer.next.bind(this.observer);
				}
			}
			function Tp(t) {
				return new Promise((e, n) => {
					const i = document.createElement('script');
					var r, s;
					i.setAttribute('src', t),
						(i.onload = e),
						(i.onerror = (t) => {
							const e = Ed('internal-error');
							(e.customData = t), n(e);
						}),
						(i.type = 'text/javascript'),
						(i.charset = 'UTF-8'),
						(null !== (s = null === (r = document.getElementsByTagName('head')) || void 0 === r ? void 0 : r[0]) &&
						void 0 !== s
							? s
							: document
						).appendChild(i);
				});
			}
			function Ip(t) {
				return `__${t}${Math.floor(1e6 * Math.random())}`;
			}
			class Sp {
				constructor(t) {
					(this.type = 'recaptcha-enterprise'), (this.auth = _p(t));
				}
				async verify(t = 'verify', e = !1) {
					function n(e, n, i) {
						const r = window.grecaptcha;
						qd(r)
							? r.enterprise.ready(() => {
									r.enterprise
										.execute(e, { action: t })
										.then((t) => {
											n(t);
										})
										.catch(() => {
											n('NO_RECAPTCHA');
										});
							  })
							: i(Error('No reCAPTCHA enterprise script loaded.'));
					}
					return new Promise((t, i) => {
						(async function (t) {
							if (!e) {
								if (null == t.tenantId && null != t._agentRecaptchaConfig) return t._agentRecaptchaConfig.siteKey;
								if (null != t.tenantId && void 0 !== t._tenantRecaptchaConfigs[t.tenantId])
									return t._tenantRecaptchaConfigs[t.tenantId].siteKey;
							}
							return new Promise(async (e, n) => {
								(async function (t, e) {
									return Pd(t, 'GET', '/v2/recaptchaConfig', Md(t, e));
								})(t, { clientType: 'CLIENT_TYPE_WEB', version: 'RECAPTCHA_ENTERPRISE' })
									.then((i) => {
										if (void 0 !== i.recaptchaKey) {
											const n = new $d(i);
											return (
												null == t.tenantId
													? (t._agentRecaptchaConfig = n)
													: (t._tenantRecaptchaConfigs[t.tenantId] = n),
												e(n.siteKey)
											);
										}
										n(new Error('recaptcha Enterprise site key undefined'));
									})
									.catch((t) => {
										n(t);
									});
							});
						})(this.auth)
							.then((r) => {
								if (!e && qd(window.grecaptcha)) n(r, t, i);
								else {
									if ('undefined' == typeof window)
										return void i(new Error('RecaptchaVerifier is only supported in browser'));
									Tp('https://www.google.com/recaptcha/enterprise.js?render=' + r)
										.then(() => {
											n(r, t, i);
										})
										.catch((t) => {
											i(t);
										});
								}
							})
							.catch((t) => {
								i(t);
							});
					});
				}
			}
			async function Cp(t, e, n, i = !1) {
				const r = new Sp(t);
				let s;
				try {
					s = await r.verify(n);
				} catch (t) {
					s = await r.verify(n, !0);
				}
				const o = Object.assign({}, e);
				return (
					i ? Object.assign(o, { captchaResp: s }) : Object.assign(o, { captchaResponse: s }),
					Object.assign(o, { clientType: 'CLIENT_TYPE_WEB' }),
					Object.assign(o, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
					o
				);
			}
			async function kp(t, e, n, i) {
				var r;
				if (
					null === (r = t._getRecaptchaConfig()) || void 0 === r
						? void 0
						: r.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
				) {
					const r = await Cp(t, e, n, 'getOobCode' === n);
					return i(t, r);
				}
				return i(t, e).catch(async (r) => {
					if ('auth/missing-recaptcha-token' === r.code) {
						console.log(
							`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
						);
						const r = await Cp(t, e, n, 'getOobCode' === n);
						return i(t, r);
					}
					return Promise.reject(r);
				});
			}
			function Ap(t) {
				const e = t.indexOf(':');
				return e < 0 ? '' : t.substr(0, e + 1);
			}
			function xp(t) {
				if (!t) return null;
				const e = Number(t);
				return isNaN(e) ? null : e;
			}
			class Rp {
				constructor(t, e) {
					(this.providerId = t), (this.signInMethod = e);
				}
				toJSON() {
					return Sd('not implemented');
				}
				_getIdTokenResponse(t) {
					return Sd('not implemented');
				}
				_linkToIdToken(t, e) {
					return Sd('not implemented');
				}
				_getReauthenticationResolver(t) {
					return Sd('not implemented');
				}
			}
			async function Np(t, e) {
				return Pd(t, 'POST', '/v1/accounts:signUp', e);
			}
			async function Dp(t, e) {
				return Ud(t, 'POST', '/v1/accounts:signInWithPassword', Md(t, e));
			}
			class Lp extends Rp {
				constructor(t, e, n, i = null) {
					super('password', n), (this._email = t), (this._password = e), (this._tenantId = i);
				}
				static _fromEmailAndPassword(t, e) {
					return new Lp(t, e, 'password');
				}
				static _fromEmailAndCode(t, e, n = null) {
					return new Lp(t, e, 'emailLink', n);
				}
				toJSON() {
					return {
						email: this._email,
						password: this._password,
						signInMethod: this.signInMethod,
						tenantId: this._tenantId,
					};
				}
				static fromJSON(t) {
					const e = 'string' == typeof t ? JSON.parse(t) : t;
					if ((null == e ? void 0 : e.email) && (null == e ? void 0 : e.password)) {
						if ('password' === e.signInMethod) return this._fromEmailAndPassword(e.email, e.password);
						if ('emailLink' === e.signInMethod) return this._fromEmailAndCode(e.email, e.password, e.tenantId);
					}
					return null;
				}
				async _getIdTokenResponse(t) {
					switch (this.signInMethod) {
						case 'password':
							return kp(
								t,
								{ returnSecureToken: !0, email: this._email, password: this._password, clientType: 'CLIENT_TYPE_WEB' },
								'signInWithPassword',
								Dp
							);
						case 'emailLink':
							return (async function (t, e) {
								return Ud(t, 'POST', '/v1/accounts:signInWithEmailLink', Md(t, e));
							})(t, { email: this._email, oobCode: this._password });
						default:
							_d(t, 'internal-error');
					}
				}
				async _linkToIdToken(t, e) {
					switch (this.signInMethod) {
						case 'password':
							return kp(
								t,
								{
									idToken: e,
									returnSecureToken: !0,
									email: this._email,
									password: this._password,
									clientType: 'CLIENT_TYPE_WEB',
								},
								'signUpPassword',
								Np
							);
						case 'emailLink':
							return (async function (t, e) {
								return Ud(t, 'POST', '/v1/accounts:signInWithEmailLink', Md(t, e));
							})(t, { idToken: e, email: this._email, oobCode: this._password });
						default:
							_d(t, 'internal-error');
					}
				}
				_getReauthenticationResolver(t) {
					return this._getIdTokenResponse(t);
				}
			}
			async function Op(t, e) {
				return Ud(t, 'POST', '/v1/accounts:signInWithIdp', Md(t, e));
			}
			class Mp extends Rp {
				constructor() {
					super(...arguments), (this.pendingToken = null);
				}
				static _fromParams(t) {
					const e = new Mp(t.providerId, t.signInMethod);
					return (
						t.idToken || t.accessToken
							? (t.idToken && (e.idToken = t.idToken),
							  t.accessToken && (e.accessToken = t.accessToken),
							  t.nonce && !t.pendingToken && (e.nonce = t.nonce),
							  t.pendingToken && (e.pendingToken = t.pendingToken))
							: t.oauthToken && t.oauthTokenSecret
							? ((e.accessToken = t.oauthToken), (e.secret = t.oauthTokenSecret))
							: _d('argument-error'),
						e
					);
				}
				toJSON() {
					return {
						idToken: this.idToken,
						accessToken: this.accessToken,
						secret: this.secret,
						nonce: this.nonce,
						pendingToken: this.pendingToken,
						providerId: this.providerId,
						signInMethod: this.signInMethod,
					};
				}
				static fromJSON(t) {
					const e = 'string' == typeof t ? JSON.parse(t) : t,
						{ providerId: n, signInMethod: i } = e,
						r = gd(e, ['providerId', 'signInMethod']);
					if (!n || !i) return null;
					const s = new Mp(n, i);
					return (
						(s.idToken = r.idToken || void 0),
						(s.accessToken = r.accessToken || void 0),
						(s.secret = r.secret),
						(s.nonce = r.nonce),
						(s.pendingToken = r.pendingToken || null),
						s
					);
				}
				_getIdTokenResponse(t) {
					return Op(t, this.buildRequest());
				}
				_linkToIdToken(t, e) {
					const n = this.buildRequest();
					return (n.idToken = e), Op(t, n);
				}
				_getReauthenticationResolver(t) {
					const e = this.buildRequest();
					return (e.autoCreate = !1), Op(t, e);
				}
				buildRequest() {
					const t = { requestUri: 'http://localhost', returnSecureToken: !0 };
					if (this.pendingToken) t.pendingToken = this.pendingToken;
					else {
						const e = {};
						this.idToken && (e.id_token = this.idToken),
							this.accessToken && (e.access_token = this.accessToken),
							this.secret && (e.oauth_token_secret = this.secret),
							(e.providerId = this.providerId),
							this.nonce && !this.pendingToken && (e.nonce = this.nonce),
							(t.postBody = I(e));
					}
					return t;
				}
			}
			const Pp = { USER_NOT_FOUND: 'user-not-found' };
			class Fp extends Rp {
				constructor(t) {
					super('phone', 'phone'), (this.params = t);
				}
				static _fromVerification(t, e) {
					return new Fp({ verificationId: t, verificationCode: e });
				}
				static _fromTokenResponse(t, e) {
					return new Fp({ phoneNumber: t, temporaryProof: e });
				}
				_getIdTokenResponse(t) {
					return (async function (t, e) {
						return Ud(t, 'POST', '/v1/accounts:signInWithPhoneNumber', Md(t, e));
					})(t, this._makeVerificationRequest());
				}
				_linkToIdToken(t, e) {
					return (async function (t, e) {
						const n = await Ud(t, 'POST', '/v1/accounts:signInWithPhoneNumber', Md(t, e));
						if (n.temporaryProof) throw zd(t, 'account-exists-with-different-credential', n);
						return n;
					})(t, Object.assign({ idToken: e }, this._makeVerificationRequest()));
				}
				_getReauthenticationResolver(t) {
					return (async function (t, e) {
						return Ud(
							t,
							'POST',
							'/v1/accounts:signInWithPhoneNumber',
							Md(t, Object.assign(Object.assign({}, e), { operation: 'REAUTH' })),
							Pp
						);
					})(t, this._makeVerificationRequest());
				}
				_makeVerificationRequest() {
					const { temporaryProof: t, phoneNumber: e, verificationId: n, verificationCode: i } = this.params;
					return t && e ? { temporaryProof: t, phoneNumber: e } : { sessionInfo: n, code: i };
				}
				toJSON() {
					const t = { providerId: this.providerId };
					return (
						this.params.phoneNumber && (t.phoneNumber = this.params.phoneNumber),
						this.params.temporaryProof && (t.temporaryProof = this.params.temporaryProof),
						this.params.verificationCode && (t.verificationCode = this.params.verificationCode),
						this.params.verificationId && (t.verificationId = this.params.verificationId),
						t
					);
				}
				static fromJSON(t) {
					'string' == typeof t && (t = JSON.parse(t));
					const { verificationId: e, verificationCode: n, phoneNumber: i, temporaryProof: r } = t;
					return n || e || i || r
						? new Fp({ verificationId: e, verificationCode: n, phoneNumber: i, temporaryProof: r })
						: null;
				}
			}
			class Up {
				constructor(t) {
					var e, n, i, r, s, o;
					const a = S(C(t)),
						c = null !== (e = a.apiKey) && void 0 !== e ? e : null,
						l = null !== (n = a.oobCode) && void 0 !== n ? n : null,
						h = (function (t) {
							switch (t) {
								case 'recoverEmail':
									return 'RECOVER_EMAIL';
								case 'resetPassword':
									return 'PASSWORD_RESET';
								case 'signIn':
									return 'EMAIL_SIGNIN';
								case 'verifyEmail':
									return 'VERIFY_EMAIL';
								case 'verifyAndChangeEmail':
									return 'VERIFY_AND_CHANGE_EMAIL';
								case 'revertSecondFactorAddition':
									return 'REVERT_SECOND_FACTOR_ADDITION';
								default:
									return null;
							}
						})(null !== (i = a.mode) && void 0 !== i ? i : null);
					Id(c && l && h, 'argument-error'),
						(this.apiKey = c),
						(this.operation = h),
						(this.code = l),
						(this.continueUrl = null !== (r = a.continueUrl) && void 0 !== r ? r : null),
						(this.languageCode = null !== (s = a.languageCode) && void 0 !== s ? s : null),
						(this.tenantId = null !== (o = a.tenantId) && void 0 !== o ? o : null);
				}
				static parseLink(t) {
					const e = (function (t) {
						const e = S(C(t)).link,
							n = e ? S(C(e)).deep_link_id : null,
							i = S(C(t)).deep_link_id;
						return (i ? S(C(i)).link : null) || i || n || e || t;
					})(t);
					try {
						return new Up(e);
					} catch (t) {
						return null;
					}
				}
			}
			class Vp {
				constructor() {
					this.providerId = Vp.PROVIDER_ID;
				}
				static credential(t, e) {
					return Lp._fromEmailAndPassword(t, e);
				}
				static credentialWithLink(t, e) {
					const n = Up.parseLink(e);
					return Id(n, 'argument-error'), Lp._fromEmailAndCode(t, n.code, n.tenantId);
				}
			}
			(Vp.PROVIDER_ID = 'password'),
				(Vp.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password'),
				(Vp.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink');
			class jp {
				constructor(t) {
					(this.providerId = t), (this.defaultLanguageCode = null), (this.customParameters = {});
				}
				setDefaultLanguage(t) {
					this.defaultLanguageCode = t;
				}
				setCustomParameters(t) {
					return (this.customParameters = t), this;
				}
				getCustomParameters() {
					return this.customParameters;
				}
			}
			class Bp extends jp {
				constructor() {
					super(...arguments), (this.scopes = []);
				}
				addScope(t) {
					return this.scopes.includes(t) || this.scopes.push(t), this;
				}
				getScopes() {
					return [...this.scopes];
				}
			}
			class zp extends Bp {
				constructor() {
					super('facebook.com');
				}
				static credential(t) {
					return Mp._fromParams({
						providerId: zp.PROVIDER_ID,
						signInMethod: zp.FACEBOOK_SIGN_IN_METHOD,
						accessToken: t,
					});
				}
				static credentialFromResult(t) {
					return zp.credentialFromTaggedObject(t);
				}
				static credentialFromError(t) {
					return zp.credentialFromTaggedObject(t.customData || {});
				}
				static credentialFromTaggedObject({ _tokenResponse: t }) {
					if (!t || !('oauthAccessToken' in t)) return null;
					if (!t.oauthAccessToken) return null;
					try {
						return zp.credential(t.oauthAccessToken);
					} catch (t) {
						return null;
					}
				}
			}
			(zp.FACEBOOK_SIGN_IN_METHOD = 'facebook.com'), (zp.PROVIDER_ID = 'facebook.com');
			class qp extends Bp {
				constructor() {
					super('google.com'), this.addScope('profile');
				}
				static credential(t, e) {
					return Mp._fromParams({
						providerId: qp.PROVIDER_ID,
						signInMethod: qp.GOOGLE_SIGN_IN_METHOD,
						idToken: t,
						accessToken: e,
					});
				}
				static credentialFromResult(t) {
					return qp.credentialFromTaggedObject(t);
				}
				static credentialFromError(t) {
					return qp.credentialFromTaggedObject(t.customData || {});
				}
				static credentialFromTaggedObject({ _tokenResponse: t }) {
					if (!t) return null;
					const { oauthIdToken: e, oauthAccessToken: n } = t;
					if (!e && !n) return null;
					try {
						return qp.credential(e, n);
					} catch (t) {
						return null;
					}
				}
			}
			(qp.GOOGLE_SIGN_IN_METHOD = 'google.com'), (qp.PROVIDER_ID = 'google.com');
			class $p extends Bp {
				constructor() {
					super('github.com');
				}
				static credential(t) {
					return Mp._fromParams({ providerId: $p.PROVIDER_ID, signInMethod: $p.GITHUB_SIGN_IN_METHOD, accessToken: t });
				}
				static credentialFromResult(t) {
					return $p.credentialFromTaggedObject(t);
				}
				static credentialFromError(t) {
					return $p.credentialFromTaggedObject(t.customData || {});
				}
				static credentialFromTaggedObject({ _tokenResponse: t }) {
					if (!t || !('oauthAccessToken' in t)) return null;
					if (!t.oauthAccessToken) return null;
					try {
						return $p.credential(t.oauthAccessToken);
					} catch (t) {
						return null;
					}
				}
			}
			($p.GITHUB_SIGN_IN_METHOD = 'github.com'), ($p.PROVIDER_ID = 'github.com');
			class Hp extends Bp {
				constructor() {
					super('twitter.com');
				}
				static credential(t, e) {
					return Mp._fromParams({
						providerId: Hp.PROVIDER_ID,
						signInMethod: Hp.TWITTER_SIGN_IN_METHOD,
						oauthToken: t,
						oauthTokenSecret: e,
					});
				}
				static credentialFromResult(t) {
					return Hp.credentialFromTaggedObject(t);
				}
				static credentialFromError(t) {
					return Hp.credentialFromTaggedObject(t.customData || {});
				}
				static credentialFromTaggedObject({ _tokenResponse: t }) {
					if (!t) return null;
					const { oauthAccessToken: e, oauthTokenSecret: n } = t;
					if (!e || !n) return null;
					try {
						return Hp.credential(e, n);
					} catch (t) {
						return null;
					}
				}
			}
			(Hp.TWITTER_SIGN_IN_METHOD = 'twitter.com'), (Hp.PROVIDER_ID = 'twitter.com');
			class Gp {
				constructor(t) {
					(this.user = t.user),
						(this.providerId = t.providerId),
						(this._tokenResponse = t._tokenResponse),
						(this.operationType = t.operationType);
				}
				static async _fromIdTokenResponse(t, e, n, i = !1) {
					const r = await tp._fromIdTokenResponse(t, n, i),
						s = Kp(n);
					return new Gp({ user: r, providerId: s, _tokenResponse: n, operationType: e });
				}
				static async _forOperation(t, e, n) {
					await t._updateTokensIfNecessary(n, !0);
					const i = Kp(n);
					return new Gp({ user: t, providerId: i, _tokenResponse: n, operationType: e });
				}
			}
			function Kp(t) {
				return t.providerId ? t.providerId : 'phoneNumber' in t ? 'phone' : null;
			}
			class Wp extends w {
				constructor(t, e, n, i) {
					var r;
					super(e.code, e.message),
						(this.operationType = n),
						(this.user = i),
						Object.setPrototypeOf(this, Wp.prototype),
						(this.customData = {
							appName: t.name,
							tenantId: null !== (r = t.tenantId) && void 0 !== r ? r : void 0,
							_serverResponse: e.customData._serverResponse,
							operationType: n,
						});
				}
				static _fromErrorAndOperation(t, e, n, i) {
					return new Wp(t, e, n, i);
				}
			}
			function Qp(t, e, n, i) {
				return ('reauthenticate' === e ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((n) => {
					if ('auth/multi-factor-auth-required' === n.code) throw Wp._fromErrorAndOperation(t, n, e, i);
					throw n;
				});
			}
			new WeakMap();
			const Jp = '__sak';
			class Xp {
				constructor(t, e) {
					(this.storageRetriever = t), (this.type = e);
				}
				_isAvailable() {
					try {
						return this.storage
							? (this.storage.setItem(Jp, '1'), this.storage.removeItem(Jp), Promise.resolve(!0))
							: Promise.resolve(!1);
					} catch (t) {
						return Promise.resolve(!1);
					}
				}
				_set(t, e) {
					return this.storage.setItem(t, JSON.stringify(e)), Promise.resolve();
				}
				_get(t) {
					const e = this.storage.getItem(t);
					return Promise.resolve(e ? JSON.parse(e) : null);
				}
				_remove(t) {
					return this.storage.removeItem(t), Promise.resolve();
				}
				get storage() {
					return this.storageRetriever();
				}
			}
			class Yp extends Xp {
				constructor() {
					super(() => window.localStorage, 'LOCAL'),
						(this.boundEventHandler = (t, e) => this.onStorageEvent(t, e)),
						(this.listeners = {}),
						(this.localCache = {}),
						(this.pollTimer = null),
						(this.safariLocalStorageNotSynced =
							(function () {
								const t = y();
								return lp(t) || mp(t);
							})() &&
							(function () {
								try {
									return !(!window || window === window.top);
								} catch (t) {
									return !1;
								}
							})()),
						(this.fallbackToPolling = gp()),
						(this._shouldAllowMigration = !0);
				}
				forAllChangedKeys(t) {
					for (const e of Object.keys(this.listeners)) {
						const n = this.storage.getItem(e),
							i = this.localCache[e];
						n !== i && t(e, i, n);
					}
				}
				onStorageEvent(t, e = !1) {
					if (!t.key)
						return void this.forAllChangedKeys((t, e, n) => {
							this.notifyListeners(t, n);
						});
					const n = t.key;
					if ((e ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
						const i = this.storage.getItem(n);
						if (t.newValue !== i)
							null !== t.newValue ? this.storage.setItem(n, t.newValue) : this.storage.removeItem(n);
						else if (this.localCache[n] === t.newValue && !e) return;
					}
					const i = () => {
							const t = this.storage.getItem(n);
							(e || this.localCache[n] !== t) && this.notifyListeners(n, t);
						},
						r = this.storage.getItem(n);
					!(function () {
						const t = y();
						return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
					})() ||
					10 !== document.documentMode ||
					r === t.newValue ||
					t.newValue === t.oldValue
						? i()
						: setTimeout(i, 10);
				}
				notifyListeners(t, e) {
					this.localCache[t] = e;
					const n = this.listeners[t];
					if (n) for (const t of Array.from(n)) t(e ? JSON.parse(e) : e);
				}
				startPolling() {
					this.stopPolling(),
						(this.pollTimer = setInterval(() => {
							this.forAllChangedKeys((t, e, n) => {
								this.onStorageEvent(new StorageEvent('storage', { key: t, oldValue: e, newValue: n }), !0);
							});
						}, 1e3));
				}
				stopPolling() {
					this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
				}
				attachListener() {
					window.addEventListener('storage', this.boundEventHandler);
				}
				detachListener() {
					window.removeEventListener('storage', this.boundEventHandler);
				}
				_addListener(t, e) {
					0 === Object.keys(this.listeners).length &&
						(this.fallbackToPolling ? this.startPolling() : this.attachListener()),
						this.listeners[t] || ((this.listeners[t] = new Set()), (this.localCache[t] = this.storage.getItem(t))),
						this.listeners[t].add(e);
				}
				_removeListener(t, e) {
					this.listeners[t] && (this.listeners[t].delete(e), 0 === this.listeners[t].size && delete this.listeners[t]),
						0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling());
				}
				async _set(t, e) {
					await super._set(t, e), (this.localCache[t] = JSON.stringify(e));
				}
				async _get(t) {
					const e = await super._get(t);
					return (this.localCache[t] = JSON.stringify(e)), e;
				}
				async _remove(t) {
					await super._remove(t), delete this.localCache[t];
				}
			}
			Yp.type = 'LOCAL';
			const Zp = Yp;
			class tf extends Xp {
				constructor() {
					super(() => window.sessionStorage, 'SESSION');
				}
				_addListener(t, e) {}
				_removeListener(t, e) {}
			}
			tf.type = 'SESSION';
			const ef = tf;
			class nf {
				constructor(t) {
					(this.eventTarget = t), (this.handlersMap = {}), (this.boundEventHandler = this.handleEvent.bind(this));
				}
				static _getInstance(t) {
					const e = this.receivers.find((e) => e.isListeningto(t));
					if (e) return e;
					const n = new nf(t);
					return this.receivers.push(n), n;
				}
				isListeningto(t) {
					return this.eventTarget === t;
				}
				async handleEvent(t) {
					const e = t,
						{ eventId: n, eventType: i, data: r } = e.data,
						s = this.handlersMap[i];
					if (!(null == s ? void 0 : s.size)) return;
					e.ports[0].postMessage({ status: 'ack', eventId: n, eventType: i });
					const o = Array.from(s).map(async (t) => t(e.origin, r)),
						a = await (function (t) {
							return Promise.all(
								t.map(async (t) => {
									try {
										return { fulfilled: !0, value: await t };
									} catch (t) {
										return { fulfilled: !1, reason: t };
									}
								})
							);
						})(o);
					e.ports[0].postMessage({ status: 'done', eventId: n, eventType: i, response: a });
				}
				_subscribe(t, e) {
					0 === Object.keys(this.handlersMap).length &&
						this.eventTarget.addEventListener('message', this.boundEventHandler),
						this.handlersMap[t] || (this.handlersMap[t] = new Set()),
						this.handlersMap[t].add(e);
				}
				_unsubscribe(t, e) {
					this.handlersMap[t] && e && this.handlersMap[t].delete(e),
						(e && 0 !== this.handlersMap[t].size) || delete this.handlersMap[t],
						0 === Object.keys(this.handlersMap).length &&
							this.eventTarget.removeEventListener('message', this.boundEventHandler);
				}
			}
			function rf(t = '', e = 10) {
				let n = '';
				for (let t = 0; t < e; t++) n += Math.floor(10 * Math.random());
				return t + n;
			}
			nf.receivers = [];
			class sf {
				constructor(t) {
					(this.target = t), (this.handlers = new Set());
				}
				removeMessageHandler(t) {
					t.messageChannel &&
						(t.messageChannel.port1.removeEventListener('message', t.onMessage), t.messageChannel.port1.close()),
						this.handlers.delete(t);
				}
				async _send(t, e, n = 50) {
					const i = 'undefined' != typeof MessageChannel ? new MessageChannel() : null;
					if (!i) throw new Error('connection_unavailable');
					let r, s;
					return new Promise((o, a) => {
						const c = rf('', 20);
						i.port1.start();
						const l = setTimeout(() => {
							a(new Error('unsupported_event'));
						}, n);
						(s = {
							messageChannel: i,
							onMessage(t) {
								const e = t;
								if (e.data.eventId === c)
									switch (e.data.status) {
										case 'ack':
											clearTimeout(l),
												(r = setTimeout(() => {
													a(new Error('timeout'));
												}, 3e3));
											break;
										case 'done':
											clearTimeout(r), o(e.data.response);
											break;
										default:
											clearTimeout(l), clearTimeout(r), a(new Error('invalid_response'));
									}
							},
						}),
							this.handlers.add(s),
							i.port1.addEventListener('message', s.onMessage),
							this.target.postMessage({ eventType: t, eventId: c, data: e }, [i.port2]);
					}).finally(() => {
						s && this.removeMessageHandler(s);
					});
				}
			}
			function of() {
				return window;
			}
			function af() {
				return void 0 !== of().WorkerGlobalScope && 'function' == typeof of().importScripts;
			}
			const cf = 'firebaseLocalStorageDb',
				lf = 'firebaseLocalStorage',
				hf = 'fbase_key';
			class uf {
				constructor(t) {
					this.request = t;
				}
				toPromise() {
					return new Promise((t, e) => {
						this.request.addEventListener('success', () => {
							t(this.request.result);
						}),
							this.request.addEventListener('error', () => {
								e(this.request.error);
							});
					});
				}
			}
			function df(t, e) {
				return t.transaction([lf], e ? 'readwrite' : 'readonly').objectStore(lf);
			}
			function pf() {
				const t = indexedDB.open(cf, 1);
				return new Promise((e, n) => {
					t.addEventListener('error', () => {
						n(t.error);
					}),
						t.addEventListener('upgradeneeded', () => {
							const e = t.result;
							try {
								e.createObjectStore(lf, { keyPath: hf });
							} catch (t) {
								n(t);
							}
						}),
						t.addEventListener('success', async () => {
							const n = t.result;
							n.objectStoreNames.contains(lf)
								? e(n)
								: (n.close(),
								  await (function () {
										const t = indexedDB.deleteDatabase(cf);
										return new uf(t).toPromise();
								  })(),
								  e(await pf()));
						});
				});
			}
			async function ff(t, e, n) {
				const i = df(t, !0).put({ [hf]: e, value: n });
				return new uf(i).toPromise();
			}
			function mf(t, e) {
				const n = df(t, !0).delete(e);
				return new uf(n).toPromise();
			}
			class gf {
				constructor() {
					(this.type = 'LOCAL'),
						(this._shouldAllowMigration = !0),
						(this.listeners = {}),
						(this.localCache = {}),
						(this.pollTimer = null),
						(this.pendingWrites = 0),
						(this.receiver = null),
						(this.sender = null),
						(this.serviceWorkerReceiverAvailable = !1),
						(this.activeServiceWorker = null),
						(this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
							() => {},
							() => {}
						));
				}
				async _openDb() {
					return this.db || (this.db = await pf()), this.db;
				}
				async _withRetries(t) {
					let e = 0;
					for (;;)
						try {
							const e = await this._openDb();
							return await t(e);
						} catch (t) {
							if (e++ > 3) throw t;
							this.db && (this.db.close(), (this.db = void 0));
						}
				}
				async initializeServiceWorkerMessaging() {
					return af() ? this.initializeReceiver() : this.initializeSender();
				}
				async initializeReceiver() {
					(this.receiver = nf._getInstance(af() ? self : null)),
						this.receiver._subscribe('keyChanged', async (t, e) => ({
							keyProcessed: (await this._poll()).includes(e.key),
						})),
						this.receiver._subscribe('ping', async (t, e) => ['keyChanged']);
				}
				async initializeSender() {
					var t, e;
					if (
						((this.activeServiceWorker = await (async function () {
							if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
							try {
								return (await navigator.serviceWorker.ready).active;
							} catch (t) {
								return null;
							}
						})()),
						!this.activeServiceWorker)
					)
						return;
					this.sender = new sf(this.activeServiceWorker);
					const n = await this.sender._send('ping', {}, 800);
					n &&
						(null === (t = n[0]) || void 0 === t ? void 0 : t.fulfilled) &&
						(null === (e = n[0]) || void 0 === e ? void 0 : e.value.includes('keyChanged')) &&
						(this.serviceWorkerReceiverAvailable = !0);
				}
				async notifyServiceWorker(t) {
					var e;
					if (
						this.sender &&
						this.activeServiceWorker &&
						((null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) ||
						void 0 === e
							? void 0
							: e.controller) || null) === this.activeServiceWorker
					)
						try {
							await this.sender._send('keyChanged', { key: t }, this.serviceWorkerReceiverAvailable ? 800 : 50);
						} catch (e) {}
				}
				async _isAvailable() {
					try {
						if (!indexedDB) return !1;
						const t = await pf();
						return await ff(t, Jp, '1'), await mf(t, Jp), !0;
					} catch (t) {}
					return !1;
				}
				async _withPendingWrite(t) {
					this.pendingWrites++;
					try {
						await t();
					} finally {
						this.pendingWrites--;
					}
				}
				async _set(t, e) {
					return this._withPendingWrite(
						async () => (
							await this._withRetries((n) => ff(n, t, e)), (this.localCache[t] = e), this.notifyServiceWorker(t)
						)
					);
				}
				async _get(t) {
					const e = await this._withRetries((e) =>
						(async function (t, e) {
							const n = df(t, !1).get(e),
								i = await new uf(n).toPromise();
							return void 0 === i ? null : i.value;
						})(e, t)
					);
					return (this.localCache[t] = e), e;
				}
				async _remove(t) {
					return this._withPendingWrite(
						async () => (
							await this._withRetries((e) => mf(e, t)), delete this.localCache[t], this.notifyServiceWorker(t)
						)
					);
				}
				async _poll() {
					const t = await this._withRetries((t) => {
						const e = df(t, !1).getAll();
						return new uf(e).toPromise();
					});
					if (!t) return [];
					if (0 !== this.pendingWrites) return [];
					const e = [],
						n = new Set();
					if (0 !== t.length)
						for (const { fbase_key: i, value: r } of t)
							n.add(i),
								JSON.stringify(this.localCache[i]) !== JSON.stringify(r) && (this.notifyListeners(i, r), e.push(i));
					for (const t of Object.keys(this.localCache))
						this.localCache[t] && !n.has(t) && (this.notifyListeners(t, null), e.push(t));
					return e;
				}
				notifyListeners(t, e) {
					this.localCache[t] = e;
					const n = this.listeners[t];
					if (n) for (const t of Array.from(n)) t(e);
				}
				startPolling() {
					this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), 800));
				}
				stopPolling() {
					this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
				}
				_addListener(t, e) {
					0 === Object.keys(this.listeners).length && this.startPolling(),
						this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
						this.listeners[t].add(e);
				}
				_removeListener(t, e) {
					this.listeners[t] && (this.listeners[t].delete(e), 0 === this.listeners[t].size && delete this.listeners[t]),
						0 === Object.keys(this.listeners).length && this.stopPolling();
				}
			}
			gf.type = 'LOCAL';
			const yf = gf;
			Ip('rcb'), new Rd(3e4, 6e4);
			class vf {
				constructor(t) {
					(this.providerId = vf.PROVIDER_ID), (this.auth = _p(t));
				}
				verifyPhoneNumber(t, e) {
					return (async function (t, e, n) {
						var i;
						const r = await n.verify();
						try {
							let s;
							if (
								(Id('string' == typeof r, t, 'argument-error'),
								Id('recaptcha' === n.type, t, 'argument-error'),
								(s = 'string' == typeof e ? { phoneNumber: e } : e),
								'session' in s)
							) {
								const e = s.session;
								if ('phoneNumber' in s) {
									Id('enroll' === e.type, t, 'internal-error');
									const n = await (function (t, e) {
										return Pd(t, 'POST', '/v2/accounts/mfaEnrollment:start', Md(t, e));
									})(t, {
										idToken: e.credential,
										phoneEnrollmentInfo: { phoneNumber: s.phoneNumber, recaptchaToken: r },
									});
									return n.phoneSessionInfo.sessionInfo;
								}
								{
									Id('signin' === e.type, t, 'internal-error');
									const n = (null === (i = s.multiFactorHint) || void 0 === i ? void 0 : i.uid) || s.multiFactorUid;
									Id(n, t, 'missing-multi-factor-info');
									const o = await (function (t, e) {
										return Pd(t, 'POST', '/v2/accounts/mfaSignIn:start', Md(t, e));
									})(t, {
										mfaPendingCredential: e.credential,
										mfaEnrollmentId: n,
										phoneSignInInfo: { recaptchaToken: r },
									});
									return o.phoneResponseInfo.sessionInfo;
								}
							}
							{
								const { sessionInfo: e } = await (async function (t, e) {
									return Pd(t, 'POST', '/v1/accounts:sendVerificationCode', Md(t, e));
								})(t, { phoneNumber: s.phoneNumber, recaptchaToken: r });
								return e;
							}
						} finally {
							n._reset();
						}
					})(this.auth, t, x(e));
				}
				static credential(t, e) {
					return Fp._fromVerification(t, e);
				}
				static credentialFromResult(t) {
					const e = t;
					return vf.credentialFromTaggedObject(e);
				}
				static credentialFromError(t) {
					return vf.credentialFromTaggedObject(t.customData || {});
				}
				static credentialFromTaggedObject({ _tokenResponse: t }) {
					if (!t) return null;
					const { phoneNumber: e, temporaryProof: n } = t;
					return e && n ? Fp._fromTokenResponse(e, n) : null;
				}
			}
			(vf.PROVIDER_ID = 'phone'), (vf.PHONE_SIGN_IN_METHOD = 'phone');
			class wf extends Rp {
				constructor(t) {
					super('custom', 'custom'), (this.params = t);
				}
				_getIdTokenResponse(t) {
					return Op(t, this._buildIdpRequest());
				}
				_linkToIdToken(t, e) {
					return Op(t, this._buildIdpRequest(e));
				}
				_getReauthenticationResolver(t) {
					return Op(t, this._buildIdpRequest());
				}
				_buildIdpRequest(t) {
					const e = {
						requestUri: this.params.requestUri,
						sessionId: this.params.sessionId,
						postBody: this.params.postBody,
						tenantId: this.params.tenantId,
						pendingToken: this.params.pendingToken,
						returnSecureToken: !0,
						returnIdpCredential: !0,
					};
					return t && (e.idToken = t), e;
				}
			}
			function bf(t) {
				return (async function (t, e, n = !1) {
					const i = 'signIn',
						r = await Qp(t, i, e),
						s = await Gp._fromIdTokenResponse(t, i, r);
					return n || (await t._updateCurrentUser(s.user)), s;
				})(t.auth, new wf(t), t.bypassAuthState);
			}
			function _f(t) {
				const { auth: e, user: n } = t;
				return (
					Id(n, e, 'internal-error'),
					(async function (t, e, n = !1) {
						const { auth: i } = t,
							r = 'reauthenticate';
						try {
							const s = await Wd(t, Qp(i, r, e, t), n);
							Id(s.idToken, i, 'internal-error');
							const o = Kd(s.idToken);
							Id(o, i, 'internal-error');
							const { sub: a } = o;
							return Id(t.uid === a, i, 'user-mismatch'), Gp._forOperation(t, r, s);
						} catch (t) {
							throw ('auth/user-not-found' === (null == t ? void 0 : t.code) && _d(i, 'user-mismatch'), t);
						}
					})(n, new wf(t), t.bypassAuthState)
				);
			}
			async function Ef(t) {
				const { auth: e, user: n } = t;
				return (
					Id(n, e, 'internal-error'),
					(async function (t, e, n = !1) {
						const i = await Wd(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
						return Gp._forOperation(t, 'link', i);
					})(n, new wf(t), t.bypassAuthState)
				);
			}
			class Tf {
				constructor(t, e, n, i, r = !1) {
					(this.auth = t),
						(this.resolver = n),
						(this.user = i),
						(this.bypassAuthState = r),
						(this.pendingPromise = null),
						(this.eventManager = null),
						(this.filter = Array.isArray(e) ? e : [e]);
				}
				execute() {
					return new Promise(async (t, e) => {
						this.pendingPromise = { resolve: t, reject: e };
						try {
							(this.eventManager = await this.resolver._initialize(this.auth)),
								await this.onExecution(),
								this.eventManager.registerConsumer(this);
						} catch (t) {
							this.reject(t);
						}
					});
				}
				async onAuthEvent(t) {
					const { urlResponse: e, sessionId: n, postBody: i, tenantId: r, error: s, type: o } = t;
					if (s) return void this.reject(s);
					const a = {
						auth: this.auth,
						requestUri: e,
						sessionId: n,
						tenantId: r || void 0,
						postBody: i || void 0,
						user: this.user,
						bypassAuthState: this.bypassAuthState,
					};
					try {
						this.resolve(await this.getIdpTask(o)(a));
					} catch (t) {
						this.reject(t);
					}
				}
				onError(t) {
					this.reject(t);
				}
				getIdpTask(t) {
					switch (t) {
						case 'signInViaPopup':
						case 'signInViaRedirect':
							return bf;
						case 'linkViaPopup':
						case 'linkViaRedirect':
							return Ef;
						case 'reauthViaPopup':
						case 'reauthViaRedirect':
							return _f;
						default:
							_d(this.auth, 'internal-error');
					}
				}
				resolve(t) {
					Cd(this.pendingPromise, 'Pending promise was never set'),
						this.pendingPromise.resolve(t),
						this.unregisterAndCleanUp();
				}
				reject(t) {
					Cd(this.pendingPromise, 'Pending promise was never set'),
						this.pendingPromise.reject(t),
						this.unregisterAndCleanUp();
				}
				unregisterAndCleanUp() {
					this.eventManager && this.eventManager.unregisterConsumer(this), (this.pendingPromise = null), this.cleanUp();
				}
			}
			const If = new Rd(2e3, 1e4);
			class Sf extends Tf {
				constructor(t, e, n, i, r) {
					super(t, e, i, r),
						(this.provider = n),
						(this.authWindow = null),
						(this.pollId = null),
						Sf.currentPopupAction && Sf.currentPopupAction.cancel(),
						(Sf.currentPopupAction = this);
				}
				async executeNotNull() {
					const t = await this.execute();
					return Id(t, this.auth, 'internal-error'), t;
				}
				async onExecution() {
					Cd(1 === this.filter.length, 'Popup operations only handle one event');
					const t = rf();
					(this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t)),
						(this.authWindow.associatedEvent = t),
						this.resolver._originValidation(this.auth).catch((t) => {
							this.reject(t);
						}),
						this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
							t || this.reject(Ed(this.auth, 'web-storage-unsupported'));
						}),
						this.pollUserCancellation();
				}
				get eventId() {
					var t;
					return (null === (t = this.authWindow) || void 0 === t ? void 0 : t.associatedEvent) || null;
				}
				cancel() {
					this.reject(Ed(this.auth, 'cancelled-popup-request'));
				}
				cleanUp() {
					this.authWindow && this.authWindow.close(),
						this.pollId && window.clearTimeout(this.pollId),
						(this.authWindow = null),
						(this.pollId = null),
						(Sf.currentPopupAction = null);
				}
				pollUserCancellation() {
					const t = () => {
						var e, n;
						(
							null === (n = null === (e = this.authWindow) || void 0 === e ? void 0 : e.window) || void 0 === n
								? void 0
								: n.closed
						)
							? (this.pollId = window.setTimeout(() => {
									(this.pollId = null), this.reject(Ed(this.auth, 'popup-closed-by-user'));
							  }, 8e3))
							: (this.pollId = window.setTimeout(t, If.get()));
					};
					t();
				}
			}
			Sf.currentPopupAction = null;
			const Cf = 'pendingRedirect',
				kf = new Map();
			class Af extends Tf {
				constructor(t, e, n = !1) {
					super(t, ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'], e, void 0, n),
						(this.eventId = null);
				}
				async execute() {
					let t = kf.get(this.auth._key());
					if (!t) {
						try {
							const e = (await (async function (t, e) {
								const n = (function (t) {
										return sp(Cf, t.config.apiKey, t.name);
									})(e),
									i = (function (t) {
										return np(t._redirectPersistence);
									})(t);
								if (!(await i._isAvailable())) return !1;
								const r = 'true' === (await i._get(n));
								return await i._remove(n), r;
							})(this.resolver, this.auth))
								? await super.execute()
								: null;
							t = () => Promise.resolve(e);
						} catch (e) {
							t = () => Promise.reject(e);
						}
						kf.set(this.auth._key(), t);
					}
					return this.bypassAuthState || kf.set(this.auth._key(), () => Promise.resolve(null)), t();
				}
				async onAuthEvent(t) {
					if ('signInViaRedirect' === t.type) return super.onAuthEvent(t);
					if ('unknown' !== t.type) {
						if (t.eventId) {
							const e = await this.auth._redirectUserForId(t.eventId);
							if (e) return (this.user = e), super.onAuthEvent(t);
							this.resolve(null);
						}
					} else this.resolve(null);
				}
				async onExecution() {}
				cleanUp() {}
			}
			function xf(t, e) {
				kf.set(t._key(), e);
			}
			async function Rf(t, e, n = !1) {
				const i = _p(t),
					r = (function (t, e) {
						return e ? np(e) : (Id(t._popupRedirectResolver, t, 'argument-error'), t._popupRedirectResolver);
					})(i, e),
					s = new Af(i, r, n),
					o = await s.execute();
				return (
					o &&
						!n &&
						(delete o.user._redirectEventId, await i._persistUserIfCurrent(o.user), await i._setRedirectUser(null, e)),
					o
				);
			}
			class Nf {
				constructor(t) {
					(this.auth = t),
						(this.cachedEventUids = new Set()),
						(this.consumers = new Set()),
						(this.queuedRedirectEvent = null),
						(this.hasHandledPotentialRedirect = !1),
						(this.lastProcessedEventTime = Date.now());
				}
				registerConsumer(t) {
					this.consumers.add(t),
						this.queuedRedirectEvent &&
							this.isEventForConsumer(this.queuedRedirectEvent, t) &&
							(this.sendToConsumer(this.queuedRedirectEvent, t),
							this.saveEventToCache(this.queuedRedirectEvent),
							(this.queuedRedirectEvent = null));
				}
				unregisterConsumer(t) {
					this.consumers.delete(t);
				}
				onEvent(t) {
					if (this.hasEventBeenHandled(t)) return !1;
					let e = !1;
					return (
						this.consumers.forEach((n) => {
							this.isEventForConsumer(t, n) && ((e = !0), this.sendToConsumer(t, n), this.saveEventToCache(t));
						}),
						this.hasHandledPotentialRedirect ||
							!(function (t) {
								switch (t.type) {
									case 'signInViaRedirect':
									case 'linkViaRedirect':
									case 'reauthViaRedirect':
										return !0;
									case 'unknown':
										return Lf(t);
									default:
										return !1;
								}
							})(t) ||
							((this.hasHandledPotentialRedirect = !0), e || ((this.queuedRedirectEvent = t), (e = !0))),
						e
					);
				}
				sendToConsumer(t, e) {
					var n;
					if (t.error && !Lf(t)) {
						const i = (null === (n = t.error.code) || void 0 === n ? void 0 : n.split('auth/')[1]) || 'internal-error';
						e.onError(Ed(this.auth, i));
					} else e.onAuthEvent(t);
				}
				isEventForConsumer(t, e) {
					const n = null === e.eventId || (!!t.eventId && t.eventId === e.eventId);
					return e.filter.includes(t.type) && n;
				}
				hasEventBeenHandled(t) {
					return (
						Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(),
						this.cachedEventUids.has(Df(t))
					);
				}
				saveEventToCache(t) {
					this.cachedEventUids.add(Df(t)), (this.lastProcessedEventTime = Date.now());
				}
			}
			function Df(t) {
				return [t.type, t.eventId, t.sessionId, t.tenantId].filter((t) => t).join('-');
			}
			function Lf({ type: t, error: e }) {
				return 'unknown' === t && 'auth/no-auth-event' === (null == e ? void 0 : e.code);
			}
			const Of = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
				Mf = /^https?/;
			function Pf(t) {
				const e = kd(),
					{ protocol: n, hostname: i } = new URL(e);
				if (t.startsWith('chrome-extension://')) {
					const r = new URL(t);
					return '' === r.hostname && '' === i
						? 'chrome-extension:' === n && t.replace('chrome-extension://', '') === e.replace('chrome-extension://', '')
						: 'chrome-extension:' === n && r.hostname === i;
				}
				if (!Mf.test(n)) return !1;
				if (Of.test(t)) return i === t;
				const r = t.replace(/\./g, '\\.');
				return new RegExp('^(.+\\.' + r + '|' + r + ')$', 'i').test(i);
			}
			const Ff = new Rd(3e4, 6e4);
			function Uf() {
				const t = of().___jsl;
				if (null == t ? void 0 : t.H)
					for (const e of Object.keys(t.H))
						if (((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = [...t.H[e].L]), t.CP))
							for (let e = 0; e < t.CP.length; e++) t.CP[e] = null;
			}
			let Vf = null;
			function jf(t) {
				return (
					(Vf =
						Vf ||
						(function (t) {
							return new Promise((e, n) => {
								var i, r, s;
								function o() {
									Uf(),
										gapi.load('gapi.iframes', {
											callback: () => {
												e(gapi.iframes.getContext());
											},
											ontimeout: () => {
												Uf(), n(Ed(t, 'network-request-failed'));
											},
											timeout: Ff.get(),
										});
								}
								if (
									null === (r = null === (i = of().gapi) || void 0 === i ? void 0 : i.iframes) || void 0 === r
										? void 0
										: r.Iframe
								)
									e(gapi.iframes.getContext());
								else {
									if (!(null === (s = of().gapi) || void 0 === s ? void 0 : s.load)) {
										const e = Ip('iframefcb');
										return (
											(of()[e] = () => {
												gapi.load ? o() : n(Ed(t, 'network-request-failed'));
											}),
											Tp(`https://apis.google.com/js/api.js?onload=${e}`).catch((t) => n(t))
										);
									}
									o();
								}
							}).catch((t) => {
								throw ((Vf = null), t);
							});
						})(t)),
					Vf
				);
			}
			const Bf = new Rd(5e3, 15e3),
				zf = {
					style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
					'aria-hidden': 'true',
					tabindex: '-1',
				},
				qf = new Map([
					['identitytoolkit.googleapis.com', 'p'],
					['staging-identitytoolkit.sandbox.googleapis.com', 's'],
					['test-identitytoolkit.sandbox.googleapis.com', 't'],
				]);
			function $f(t) {
				const e = t.config;
				Id(e.authDomain, t, 'auth-domain-config-required');
				const n = e.emulator ? Nd(e, 'emulator/auth/iframe') : `https://${t.config.authDomain}/__/auth/iframe`,
					i = { apiKey: e.apiKey, appName: t.name, v: yt },
					r = qf.get(t.config.apiHost);
				r && (i.eid = r);
				const s = t._getFrameworks();
				return s.length && (i.fw = s.join(',')), `${n}?${I(i).slice(1)}`;
			}
			const Hf = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' };
			class Gf {
				constructor(t) {
					(this.window = t), (this.associatedEvent = null);
				}
				close() {
					if (this.window)
						try {
							this.window.close();
						} catch (t) {}
				}
			}
			const Kf = encodeURIComponent('fac');
			async function Wf(t, e, n, i, r, s) {
				Id(t.config.authDomain, t, 'auth-domain-config-required'), Id(t.config.apiKey, t, 'invalid-api-key');
				const o = { apiKey: t.config.apiKey, appName: t.name, authType: n, redirectUrl: i, v: yt, eventId: r };
				if (e instanceof jp) {
					e.setDefaultLanguage(t.languageCode),
						(o.providerId = e.providerId || ''),
						(function (t) {
							for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
							return !0;
						})(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
					for (const [t, e] of Object.entries(s || {})) o[t] = e;
				}
				if (e instanceof Bp) {
					const t = e.getScopes().filter((t) => '' !== t);
					t.length > 0 && (o.scopes = t.join(','));
				}
				t.tenantId && (o.tid = t.tenantId);
				const a = o;
				for (const t of Object.keys(a)) void 0 === a[t] && delete a[t];
				const c = await t._getAppCheckToken(),
					l = c ? `#${Kf}=${encodeURIComponent(c)}` : '';
				return `${(function ({ config: t }) {
					return t.emulator ? Nd(t, 'emulator/auth/handler') : `https://${t.authDomain}/__/auth/handler`;
				})(t)}?${I(a).slice(1)}${l}`;
			}
			const Qf = 'webStorageSupport',
				Jf = class {
					constructor() {
						(this.eventManagers = {}),
							(this.iframes = {}),
							(this.originValidationPromises = {}),
							(this._redirectPersistence = ef),
							(this._completeRedirectFn = Rf),
							(this._overrideRedirectResult = xf);
					}
					async _openPopup(t, e, n, i) {
						var r;
						return (
							Cd(
								null === (r = this.eventManagers[t._key()]) || void 0 === r ? void 0 : r.manager,
								'_initialize() not called before _openPopup()'
							),
							(function (t, e, n, i = 500, r = 600) {
								const s = Math.max((window.screen.availHeight - r) / 2, 0).toString(),
									o = Math.max((window.screen.availWidth - i) / 2, 0).toString();
								let a = '';
								const c = Object.assign(Object.assign({}, Hf), {
										width: i.toString(),
										height: r.toString(),
										top: s,
										left: o,
									}),
									l = y().toLowerCase();
								n && (a = hp(l) ? '_blank' : n), cp(l) && ((e = e || 'http://localhost'), (c.scrollbars = 'yes'));
								const h = Object.entries(c).reduce((t, [e, n]) => `${t}${e}=${n},`, '');
								if (
									(function (t = y()) {
										var e;
										return mp(t) && !!(null === (e = window.navigator) || void 0 === e ? void 0 : e.standalone);
									})(l) &&
									'_self' !== a
								)
									return (
										(function (t, e) {
											const n = document.createElement('a');
											(n.href = t), (n.target = e);
											const i = document.createEvent('MouseEvent');
											i.initMouseEvent('click', !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
												n.dispatchEvent(i);
										})(e || '', a),
										new Gf(null)
									);
								const u = window.open(e || '', a, h);
								Id(u, t, 'popup-blocked');
								try {
									u.focus();
								} catch (t) {}
								return new Gf(u);
							})(t, await Wf(t, e, n, kd(), i), rf())
						);
					}
					async _openRedirect(t, e, n, i) {
						return (
							await this._originValidation(t),
							(r = await Wf(t, e, n, kd(), i)),
							(of().location.href = r),
							new Promise(() => {})
						);
						var r;
					}
					_initialize(t) {
						const e = t._key();
						if (this.eventManagers[e]) {
							const { manager: t, promise: n } = this.eventManagers[e];
							return t ? Promise.resolve(t) : (Cd(n, 'If manager is not set, promise should be'), n);
						}
						const n = this.initAndGetManager(t);
						return (
							(this.eventManagers[e] = { promise: n }),
							n.catch(() => {
								delete this.eventManagers[e];
							}),
							n
						);
					}
					async initAndGetManager(t) {
						const e = await (async function (t) {
								const e = await jf(t),
									n = of().gapi;
								return (
									Id(n, t, 'internal-error'),
									e.open(
										{
											where: document.body,
											url: $f(t),
											messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
											attributes: zf,
											dontclear: !0,
										},
										(e) =>
											new Promise(async (n, i) => {
												await e.restyle({ setHideOnLeave: !1 });
												const r = Ed(t, 'network-request-failed'),
													s = of().setTimeout(() => {
														i(r);
													}, Bf.get());
												function o() {
													of().clearTimeout(s), n(e);
												}
												e.ping(o).then(o, () => {
													i(r);
												});
											})
									)
								);
							})(t),
							n = new Nf(t);
						return (
							e.register(
								'authEvent',
								(e) => (
									Id(null == e ? void 0 : e.authEvent, t, 'invalid-auth-event'),
									{ status: n.onEvent(e.authEvent) ? 'ACK' : 'ERROR' }
								),
								gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
							),
							(this.eventManagers[t._key()] = { manager: n }),
							(this.iframes[t._key()] = e),
							n
						);
					}
					_isIframeWebStorageSupported(t, e) {
						this.iframes[t._key()].send(
							Qf,
							{ type: Qf },
							(n) => {
								var i;
								const r = null === (i = null == n ? void 0 : n[0]) || void 0 === i ? void 0 : i[Qf];
								void 0 !== r && e(!!r), _d(t, 'internal-error');
							},
							gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
						);
					}
					_originValidation(t) {
						const e = t._key();
						return (
							this.originValidationPromises[e] ||
								(this.originValidationPromises[e] = (async function (t) {
									if (t.config.emulator) return;
									const { authorizedDomains: e } = await (async function (t, e = {}) {
										return Pd(t, 'GET', '/v1/projects', e);
									})(t);
									for (const t of e)
										try {
											if (Pf(t)) return;
										} catch (t) {}
									_d(t, 'unauthorized-domain');
								})(t)),
							this.originValidationPromises[e]
						);
					}
					get _shouldInitProactively() {
						return gp() || lp() || mp();
					}
				};
			var Xf = '@firebase/auth',
				Yf = '1.5.1';
			class Zf {
				constructor(t) {
					(this.auth = t), (this.internalListeners = new Map());
				}
				getUid() {
					var t;
					return (
						this.assertAuthConfigured(), (null === (t = this.auth.currentUser) || void 0 === t ? void 0 : t.uid) || null
					);
				}
				async getToken(t) {
					return (
						this.assertAuthConfigured(),
						await this.auth._initializationPromise,
						this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(t) } : null
					);
				}
				addAuthTokenListener(t) {
					if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
					const e = this.auth.onIdTokenChanged((e) => {
						t((null == e ? void 0 : e.stsTokenManager.accessToken) || null);
					});
					this.internalListeners.set(t, e), this.updateProactiveRefresh();
				}
				removeAuthTokenListener(t) {
					this.assertAuthConfigured();
					const e = this.internalListeners.get(t);
					e && (this.internalListeners.delete(t), e(), this.updateProactiveRefresh());
				}
				assertAuthConfigured() {
					Id(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth');
				}
				updateProactiveRefresh() {
					this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
				}
			}
			const tm = m('authIdTokenMaxAge') || 300;
			let em = null;
			var nm;
			(nm = 'Browser'),
				pt(
					new R(
						'auth',
						(t, { options: e }) => {
							const n = t.getProvider('app').getImmediate(),
								i = t.getProvider('heartbeat'),
								r = t.getProvider('app-check-internal'),
								{ apiKey: s, authDomain: o } = n.options;
							Id(s && !s.includes(':'), 'invalid-api-key', { appName: n.name });
							const a = {
									apiKey: s,
									authDomain: o,
									clientPlatform: nm,
									apiHost: 'identitytoolkit.googleapis.com',
									tokenApiHost: 'securetoken.googleapis.com',
									apiScheme: 'https',
									sdkClientVersion: yp(nm),
								},
								c = new bp(n, i, r, a);
							return (
								(function (t, e) {
									const n = (null == e ? void 0 : e.persistence) || [],
										i = (Array.isArray(n) ? n : [n]).map(np);
									(null == e ? void 0 : e.errorMap) && t._updateErrorMap(e.errorMap),
										t._initializeWithPersistence(i, null == e ? void 0 : e.popupRedirectResolver);
								})(c, e),
								c
							);
						},
						'PUBLIC'
					)
						.setInstantiationMode('EXPLICIT')
						.setInstanceCreatedCallback((t, e, n) => {
							t.getProvider('auth-internal').initialize();
						})
				),
				pt(
					new R(
						'auth-internal',
						(t) => {
							return (e = _p(t.getProvider('auth').getImmediate())), new Zf(e);
							var e;
						},
						'PRIVATE'
					).setInstantiationMode('EXPLICIT')
				),
				bt(
					Xf,
					Yf,
					(function (t) {
						switch (t) {
							case 'Node':
								return 'node';
							case 'ReactNative':
								return 'rn';
							case 'Worker':
								return 'webworker';
							case 'Cordova':
								return 'cordova';
							default:
								return;
						}
					})(nm)
				),
				bt(Xf, Yf, 'esm2017');
			var im = function (t, e, n, i) {
				return new (n || (n = Promise))(function (r, s) {
					function o(t) {
						try {
							c(i.next(t));
						} catch (t) {
							s(t);
						}
					}
					function a(t) {
						try {
							c(i.throw(t));
						} catch (t) {
							s(t);
						}
					}
					function c(t) {
						var e;
						t.done
							? r(t.value)
							: ((e = t.value),
							  e instanceof n
									? e
									: new n(function (t) {
											t(e);
									  })).then(o, a);
					}
					c((i = i.apply(t, e || [])).next());
				});
			};
			const rm = vt({
					apiKey: 'AIzaSyDKlhRev5ZTVC9nGqXyT4qBi0WxSqs1gHE',
					authDomain: 'moviehub-ad4ef.firebaseapp.com',
					projectId: 'moviehub-ad4ef',
					storageBucket: 'moviehub-ad4ef.appspot.com',
					messagingSenderId: '15340906607',
					appId: '1:15340906607:web:3eeeaedde73256afea859a',
				}),
				sm = Mu(rm),
				om =
					((function (t = wt()) {
						const e = ft(t, 'auth');
						if (e.isInitialized()) return e.getImmediate();
						const n = (function (t, e) {
								const n = ft(t, 'auth');
								if (n.isInitialized()) {
									const t = n.getImmediate();
									if (E(n.getOptions(), null != e ? e : {})) return t;
									_d(t, 'already-initialized');
								}
								return n.initialize({ options: e });
							})(t, { popupRedirectResolver: Jf, persistence: [yf, Zp, ef] }),
							i = m('authTokenSyncURL');
						if (i) {
							const t =
								((r = i),
								async (t) => {
									const e = t && (await t.getIdTokenResult()),
										n = e && (new Date().getTime() - Date.parse(e.issuedAtTime)) / 1e3;
									if (n && n > tm) return;
									const i = null == e ? void 0 : e.token;
									em !== i &&
										((em = i),
										await fetch(r, {
											method: i ? 'POST' : 'DELETE',
											headers: i ? { Authorization: `Bearer ${i}` } : {},
										}));
								});
							!(function (t, e, n) {
								x(t).beforeAuthStateChanged(e, n);
							})(n, t, () => t(n.currentUser)),
								(function (e, n, i, r) {
									x(e).onIdTokenChanged((e) => t(e), void 0, void 0);
								})(n);
						}
						var r;
						const s = p('auth');
						s &&
							(function (t, e, n) {
								const i = _p(t);
								Id(i._canInitEmulator, i, 'emulator-config-failed'),
									Id(/^https?:\/\//.test(e), i, 'invalid-emulator-scheme');
								const r = !!(null == n ? void 0 : n.disableWarnings),
									s = Ap(e),
									{ host: o, port: a } = (function (t) {
										const e = Ap(t),
											n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
										if (!n) return { host: '', port: null };
										const i = n[2].split('@').pop() || '',
											r = /^(\[[^\]]+\])(:|$)/.exec(i);
										if (r) {
											const t = r[1];
											return { host: t, port: xp(i.substr(t.length + 1)) };
										}
										{
											const [t, e] = i.split(':');
											return { host: t, port: xp(e) };
										}
									})(e),
									c = null === a ? '' : `:${a}`;
								(i.config.emulator = { url: `${s}//${o}${c}/` }),
									(i.settings.appVerificationDisabledForTesting = !0),
									(i.emulatorConfig = Object.freeze({
										host: o,
										port: a,
										protocol: s.replace(':', ''),
										options: Object.freeze({ disableWarnings: r }),
									})),
									r ||
										(function () {
											function t() {
												const t = document.createElement('p'),
													e = t.style;
												(t.innerText = 'Running in emulator mode. Do not use with production credentials.'),
													(e.position = 'fixed'),
													(e.width = '100%'),
													(e.backgroundColor = '#ffffff'),
													(e.border = '.1em solid #000000'),
													(e.color = '#b50000'),
													(e.bottom = '0px'),
													(e.left = '0px'),
													(e.margin = '0px'),
													(e.zIndex = '10000'),
													(e.textAlign = 'center'),
													t.classList.add('firebase-emulator-warning'),
													document.body.appendChild(t);
											}
											'undefined' != typeof console &&
												'function' == typeof console.info &&
												console.info(
													'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
												),
												'undefined' != typeof window &&
													'undefined' != typeof document &&
													('loading' === document.readyState ? window.addEventListener('DOMContentLoaded', t) : t());
										})();
							})(n, `http://${s}`);
					})(rm),
					(t, e, n) =>
						im(void 0, void 0, void 0, function* () {
							try {
								const i = Nu(Du(sm, 'users', t), 'Favorites');
								yield (function (t, e, n) {
									t = Su(t, xu);
									const i = Su(t.firestore, Ou),
										r = cd(t.converter, e, n);
									return md(i, [Wu(Ku(i), 'setDoc', t._key, r, null !== t.converter, n).toMutation(t._key, Wa.none())]);
								})(Du(i, e), n),
									console.log('Película agregada exitosamente a la colección "Favorites" del usuario', t);
							} catch (e) {
								console.error('Error al agregar película a la colección "Favorites" del usuario', t, e);
							}
						})),
				am = () =>
					im(void 0, void 0, void 0, function* () {
						const t = yield (function (t) {
								t = Su(t, Au);
								const e = Su(t.firestore, Ou),
									n = Pu(e),
									i = new fd(e);
								return (
									(function (t) {
										if ('L' === t.limitType && 0 === t.explicitOrderBy.length)
											throw new hs(
												ls.UNIMPLEMENTED,
												'limitToLast() queries require specifying at least one orderBy() clause'
											);
									})(t._query),
									vu(n, t._query).then((n) => new dd(e, i, t, n))
								);
							})(Nu(sm, 'movies')),
							e = [];
						return (
							t.forEach((t) => {
								const n = t.data();
								e.push(Object.assign({ id: t.id }, n));
							}),
							e
						);
					});
			const cm = (t) => ({ action: 'navigate', payload: t }),
				lm = (t) => ({ action: 'navigateCategory', payload: t }),
				hm = (t) => ({ action: 'SaveTitleCategory', payload: t }),
				um = (t) => ({ action: 'SaveImageCategory', payload: t }),
				dm = () =>
					(function (t, e, n, i) {
						return new (n || (n = Promise))(function (r, s) {
							function o(t) {
								try {
									c(i.next(t));
								} catch (t) {
									s(t);
								}
							}
							function a(t) {
								try {
									c(i.throw(t));
								} catch (t) {
									s(t);
								}
							}
							function c(t) {
								var e;
								t.done
									? r(t.value)
									: ((e = t.value),
									  e instanceof n
											? e
											: new n(function (t) {
													t(e);
											  })).then(o, a);
							}
							c((i = i.apply(t, e || [])).next());
						});
					})(void 0, void 0, void 0, function* () {
						const e = yield (function () {
							return (function (t, e, n, i) {
								return new (n || (n = Promise))(function (r, s) {
									function o(t) {
										try {
											c(i.next(t));
										} catch (t) {
											s(t);
										}
									}
									function a(t) {
										try {
											c(i.throw(t));
										} catch (t) {
											s(t);
										}
									}
									function c(t) {
										var e;
										t.done
											? r(t.value)
											: ((e = t.value),
											  e instanceof n
													? e
													: new n(function (t) {
															t(e);
													  })).then(o, a);
									}
									c((i = i.apply(t, e || [])).next());
								});
							})(this, void 0, void 0, function* () {
								try {
									const t = yield am();
									return console.log(t), t;
								} catch (t) {
									console.error(t);
								}
							});
						})();
						return { action: t.GET, payload: e };
					});
			var pm,
				fm = n(925);
			!(function (t) {
				(t.section_title = 'section_title'),
					(t.image = 'image'),
					(t.message = 'message'),
					(t.buttonlabel = 'buttonlabel');
			})(pm || (pm = {}));
			class mm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ section_title: null, image: null, message: null, buttonlabel: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					if (this.shadowRoot) {
						let t = `\n\t\t\t<section id="allbanner" style="background-image: url('${
							this.image || 'https://pbs.twimg.com/media/GJ331yEWQAAtUzN.jpg '
						}');">\n            <custom-navbar></custom-navbar>\n            <section>\n                <section>\n        `;
						this.section_title && (t += `<h1>${this.section_title}</h1>`),
							this.message && (t += `<h1>${this.message}</h1>`),
							(t += '\n                </section>\n        '),
							this.buttonlabel && (t += `<button type="button" id="accountButton">${this.buttonlabel}</button>`),
							(t += '\n            </section>\n        '),
							(this.shadowRoot.innerHTML = t);
					}
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = fm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-banner', mm);
			var gm = n(682);
			const ym = [
				{
					name: 'Classics',
					category: 'classics',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
				},
				{
					name: 'Popular',
					category: 'popular',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/s5R6kTMfOxkGit96A8lqcDL4uVk.jpg',
				},
				{
					name: 'On-cinema',
					category: 'cinema',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/rron9HAuS9s7zBF8iCX1tsafxUo.jpg',
				},
				{
					name: 'Trending',
					category: 'trending',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/iAyr7VEFGJoHDIHIxjEb3TskQW4.jpg',
				},
				{
					name: 'Action',
					category: 'action',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/d9sMIwulLtwRHowmDk2INm0ugmP.jpg',
				},
				{
					name: 'Sci-fi',
					category: 'sci-fi',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/cNffd3wkuIYZMelbPRAZ23E5HBT.jpg',
				},
				{
					name: 'Romance',
					category: 'romance',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/nofXR1TN1vgGjdfnwGQwFaAWBaY.jpg',
				},
				{
					name: 'Comedy',
					category: 'comedy',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/qdIMHd4sEfJSckfVJfKQvisL02a.jpg',
				},
				{
					name: 'Thriller',
					category: 'thriller',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/bneUTWFAcVCdsb0O5UwZbJd8xqZ.jpg',
				},
				{
					name: 'Drama',
					category: 'drama',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/pcWxKfFNCznTKYy0E8M9nG1cwL4.jpg',
				},
				{
					name: 'Animated',
					category: 'animated',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/sRvXNDItGlWCqtO3j6wks52FmbD.jpg',
				},
				{
					name: 'Documental',
					category: 'documental',
					image:
						'https://media.vogue.es/photos/605dcd126503a651df3ce9ef/master/w_1600%2Cc_limit/Seapiracy-vogue-credit-Netflix-7.jpg',
				},
				{
					name: 'Psychological',
					category: 'psychological',
					image: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/fGe1ej335XbqN1j9teoDpofpbLX.jpg',
				},
			];
			class vm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' }), o(this);
				}
				connectedCallback() {
					var t, e, n, i;
					this.render();
					const r = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector('.pages a.navigate-list');
					r &&
						r.addEventListener('click', () => {
							s(cm('MYLISTS'));
						});
					const o = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector('#signin');
					o &&
						o.addEventListener('click', () => {
							s(cm('SIGNIN'));
						});
					const a = null === (n = this.shadowRoot) || void 0 === n ? void 0 : n.querySelector('#login');
					a &&
						a.addEventListener('click', () => {
							s(cm('LOGIN'));
						});
					const c = null === (i = this.shadowRoot) || void 0 === i ? void 0 : i.querySelector('#home');
					c &&
						c.addEventListener('click', () => {
							s(cm('DASHBOARD'));
						});
				}
				render() {
					if (this.shadowRoot) {
						const t = document.createElement('nav'),
							e = document.createElement('section');
						e.className = 'search-bar';
						const n = document.createElement('section');
						n.className = 'icon';
						const i = document.createElement('img');
						(i.src =
							'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQxNiAyMDhjMCA0NS45LTE0LjkgODguMy00MCAxMjIuN0w1MDIuNiA0NTcuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMEwzMzAuNyAzNzZjLTM0LjQgMjUuMi03Ni44IDQwLTEyMi43IDQwQzkzLjEgNDE2IDAgMzIyLjkgMCAyMDhTOTMuMSAwIDIwOCAwUzQxNiA5My4xIDQxNiAyMDh6TTIwOCAzNTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4eiIvPjwvc3ZnPg=='),
							(i.alt = 'search logo'),
							n.appendChild(i);
						const r = document.createElement('input');
						(r.className = 'barra'), (r.type = 'text'), e.appendChild(n), e.appendChild(r);
						const o = document.createElement('section');
						o.className = 'pages';
						const a = document.createElement('a');
						(a.href = '#'), (a.textContent = 'home'), (a.id = 'home'), o.appendChild(a);
						const c = document.createElement('a');
						(c.href = '#'), (c.textContent = 'films'), o.appendChild(c);
						const l = document.createElement('div');
						(l.className = 'menu-desplegable'),
							c.addEventListener('click', () => {
								l &&
									(l.classList.contains('menu-desplegableDisplayed')
										? l.classList.remove('menu-desplegableDisplayed')
										: l.classList.add('menu-desplegableDisplayed'));
							}),
							ym.forEach((t) => {
								const e = document.createElement('p');
								(e.textContent = t.name),
									l.appendChild(e),
									e.addEventListener('click', () => {
										s(cm('CATEGORIES')), s(lm(t.category)), s(hm(t.name)), s(um(t.image));
									});
							});
						const h = document.createElement('a');
						(h.className = 'navigate-list'), (h.href = '#'), (h.textContent = 'lists');
						const u = document.createElement('a');
						(u.id = 'login'), (u.href = '#'), (u.textContent = 'log in');
						const d = document.createElement('a');
						(d.id = 'signin'),
							(d.href = '#'),
							(d.textContent = 'create account'),
							o.appendChild(l),
							o.appendChild(h),
							o.appendChild(u),
							o.appendChild(d),
							t.appendChild(e),
							t.appendChild(o),
							(this.shadowRoot.innerHTML = ''),
							this.shadowRoot.appendChild(t);
						const p = document.createElement('style');
						(p.innerHTML = gm.A), this.shadowRoot.appendChild(p);
					}
				}
			}
			customElements.define('custom-navbar', vm);
			var wm,
				bm = n(931),
				_m = function (t, e, n, i) {
					return new (n || (n = Promise))(function (r, s) {
						function o(t) {
							try {
								c(i.next(t));
							} catch (t) {
								s(t);
							}
						}
						function a(t) {
							try {
								c(i.throw(t));
							} catch (t) {
								s(t);
							}
						}
						function c(t) {
							var e;
							t.done
								? r(t.value)
								: ((e = t.value),
								  e instanceof n
										? e
										: new n(function (t) {
												t(e);
										  })).then(o, a);
						}
						c((i = i.apply(t, e || [])).next());
					});
				};
			!(function (t) {
				(t.image = 'image'),
					(t.uid = 'uid'),
					(t.categories = 'categories'),
					(t.utitle = 'utitle'),
					(t.director = 'director'),
					(t.release_date = 'release_date'),
					(t.cast = 'cast'),
					(t.crew = 'crew'),
					(t.image_sec = 'image_sec'),
					(t.description = 'description'),
					(t.catch_phrase = 'catch_phrase');
			})(wm || (wm = {}));
			class Em extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' }), (this.isLiked = !0);
				}
				static get observedAttributes() {
					return Object.keys({
						image: null,
						uid: null,
						categories: null,
						utitle: null,
						director: null,
						release_date: null,
						cast: null,
						crew: null,
						image_sec: null,
						description: null,
						catch_phrase: null,
					});
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					if (this.shadowRoot) {
						this.shadowRoot.innerHTML = `\n\t\t\t<div class="container" data-uid="${this.uid}" data-image="${this.image}" data-categories="${this.categories}" data-title="${this.utitle}" data-director="${this.director}" data-release="${this.release_date}" data-cast="${this.cast}" data-crew="${this.crew}" data-imgbanner="${this.image_sec}" data-description="${this.description}" data-phrase="${this.catch_phrase}">\n\t\t\t<img class="poster" src="${this.image}" >\n\t\t\t<section class="content">\n\t\t\t<section class="viewdetails">\n\t\t\t\t<a class="link">\n\t\t\t\t\t<img class="details"src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png" alt="eye icon"/></a>\n\t\t\t\t<p>View details</p>\n\t\t\t\t</section>\n\t\t\t\t<img class="dislike"  src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="hear icon empty"/>\n\t\t\t\t<img class="like"  src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="heart icon full"/>\n\t\t\t\t<p>Like</p>\n\t\t\t\t</section>\n\t\t</div>\n\t\t\t`;
						const t = this.shadowRoot.querySelector('.viewdetails');
						null == t ||
							t.addEventListener('click', () => {
								s(cm('FILMPAGE')),
									s({ action: 'SaveMovieId', payload: this.uid }),
									s({ action: 'SaveMovieImage', payload: this.image }),
									s(((t) => ({ action: 'SaveMovieCategories', payload: this.categories }))()),
									s({ action: 'SaveMovieTitle', payload: this.utitle }),
									s({ action: 'SaveMovieDirector', payload: this.director }),
									s({ action: 'SaveMovieReleaseDate', payload: this.release_date }),
									s({ action: 'SaveMovieCast', payload: this.cast }),
									s({ action: 'SaveMovieCrew', payload: this.crew }),
									s({ action: 'SaveMovieImageSec', payload: this.image_sec }),
									s(((t) => ({ action: 'SaveMovieDescription', payload: this.description }))()),
									s({ action: 'SaveMovieCatchPhrase', payload: this.catch_phrase }),
									console.log('date', this.release_date),
									console.log('cast appstate', i.moviedirector),
									console.log('imagesaved', this.image);
							});
						const e = this.shadowRoot.querySelector('.like'),
							n = this.shadowRoot.querySelector('.dislike');
						e.addEventListener('click', () =>
							_m(this, void 0, void 0, function* () {
								if (
									((this.isLiked = !this.isLiked),
									(e.style.display = this.isLiked ? 'none' : 'inline'),
									(n.style.display = this.isLiked ? 'inline' : 'none'),
									this.isLiked)
								) {
									const t = '8Ff0fUFnkPYot7FEJt8u';
									try {
										yield ((t, e) =>
											im(void 0, void 0, void 0, function* () {
												try {
													const i = Nu(Du(Mu(), 'users', t), 'Favorites');
													yield ((n = Du(i, e)), md(Su(n.firestore, Ou), [new ac(n._key, Wa.none())]));
												} catch (t) {
													throw t;
												}
												var n;
											}))(t, this.uid || ''),
											console.log('Película eliminada de Favorites');
									} catch (t) {
										console.error('Error al eliminar la película de Favorites', t);
									}
								}
							})
						),
							n.addEventListener('click', () =>
								_m(this, void 0, void 0, function* () {
									(this.isLiked = !1), (n.style.display = 'none'), (e.style.display = 'inline');
									try {
										yield om('8Ff0fUFnkPYot7FEJt8u', this.uid ? this.uid : '', {
											id: this.uid || '',
											image: this.image || '',
											categories: this.categories ? this.categories.split(',') : [],
											title: this.utitle || '',
											director: this.director || '',
											release_date: this.release_date || '',
											cast: this.cast || '',
											crew: this.crew || '',
											image_sec: this.image_sec || '',
											description: this.description || '',
											catch_phrase: this.catch_phrase || '',
										}),
											console.log('Película guardada en Favorites');
									} catch (t) {
										console.error('Error al guardar la película en Favorites', t);
									}
								})
							),
							(e.style.display = this.isLiked ? 'none' : 'inline'),
							(n.style.display = this.isLiked ? 'inline' : 'none');
					}
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = bm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('movie-card', Em);
			var Tm,
				Im = n(213);
			!(function (t) {
				(t.name = 'name'), (t.category = 'category'), (t.image = 'image');
			})(Tm || (Tm = {}));
			class Sm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ name: null, category: null, image: null });
				}
				connectedCallback() {
					this.render();
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				render() {
					return (function (t, e, n, i) {
						return new (n || (n = Promise))(function (r, s) {
							function o(t) {
								try {
									c(i.next(t));
								} catch (t) {
									s(t);
								}
							}
							function a(t) {
								try {
									c(i.throw(t));
								} catch (t) {
									s(t);
								}
							}
							function c(t) {
								var e;
								t.done
									? r(t.value)
									: ((e = t.value),
									  e instanceof n
											? e
											: new n(function (t) {
													t(e);
											  })).then(o, a);
							}
							c((i = i.apply(t, e || [])).next());
						});
					})(this, void 0, void 0, function* () {
						if (this.shadowRoot) {
							const t = i.movielist.filter((t) => {
								var e;
								return null === (e = t.categories) || void 0 === e
									? void 0
									: e.includes(null != this.category ? this.category : 'undefined');
							});
							console.log('category', this.category, t);
							const e = document.createElement('style');
							(e.textContent = Im.A),
								(this.shadowRoot.innerHTML = `\n                <h1 id="titlecategory">${
									this.name || ''
								}</h1>\n\t\t\t\t<section id="cards">\n\t\t\t\t\t${t
									.map(
										(t) =>
											`\n\t\t\t\t\t\t<movie-card image="${t.image}" uid="${t.id}" categories="${t.categories}" utitle="${t.title}" director="${t.director}" release_date="${t.release_date}" cast="${t.cast}" crew="${t.crew}" image_sec="${t.image_sec}" description="${t.description}" catch_phrase="${t.catch_phrase}"></movie-card>\n\t\t\t\t\t`
									)
									.join('')}\n\t\t\t\t</section>\n            `);
							const n = this.shadowRoot.querySelector('#titlecategory');
							null == n ||
								n.addEventListener('click', () => {
									s(cm('CATEGORIES')), s(lm(this.category)), s(hm(this.name)), s(um(this.image)), console.log(i);
								}),
								this.shadowRoot.appendChild(e);
						}
					});
				}
			}
			customElements.define('category-section', Sm);
			var Cm = n(583),
				km = function (t, e, n, i) {
					return new (n || (n = Promise))(function (r, s) {
						function o(t) {
							try {
								c(i.next(t));
							} catch (t) {
								s(t);
							}
						}
						function a(t) {
							try {
								c(i.throw(t));
							} catch (t) {
								s(t);
							}
						}
						function c(t) {
							var e;
							t.done
								? r(t.value)
								: ((e = t.value),
								  e instanceof n
										? e
										: new n(function (t) {
												t(e);
										  })).then(o, a);
						}
						c((i = i.apply(t, e || [])).next());
					});
				};
			const Am = {
				title: '',
				image: '',
				categories: [],
				director: '',
				release_date: '',
				cast: '',
				crew: '',
				image_sec: '',
				description: '',
				catch_phrase: '',
			};
			class xm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				changeTitle(t) {
					var e;
					Am.title = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeImage(t) {
					var e;
					Am.image = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeCategories(t) {
					var e;
					Am.categories = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeDirector(t) {
					var e;
					Am.director = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeRelease(t) {
					var e;
					Am.release_date = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeCast(t) {
					var e;
					Am.cast = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeCrew(t) {
					var e;
					Am.crew = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeImageSec(t) {
					var e;
					Am.image_sec = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeDescription(t) {
					var e;
					Am.description = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				changeCatchPhrase(t) {
					var e;
					Am.catch_phrase = null === (e = null == t ? void 0 : t.target) || void 0 === e ? void 0 : e.value;
				}
				render() {
					return km(this, void 0, void 0, function* () {
						var t;
						if (this.shadowRoot) {
							this.shadowRoot.innerHTML =
								'\n\t\t\t\t<section class= "container">\n\n\t\t\t\t\t<button id = "ButtonModal">+</button>\n\t\t</section>\n\t\t\t\t<section class="modalContainer" style="display: none;">\n    <div class="modal-overlay">\n\t\t\t\t<section class="modal-content">\n\t\t\t\t\t<form class="my-form">\n\t\t\t\t\t<section id="header">\n\t\t\t\t\t\t<span class = "close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>\n\t\t\t\t\t\t\t<h2>Add a movie</h2>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<label for="fname">Name movie</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="fname" name="fname" placeholder="Pearl"><br><br>\n\t\t\t\t\t\t\t\t<label for="director">Director</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="directorMovie" name="director" placeholder="Ti West"><br><br>\n\t\t\t\t\t\t\t\t<label for="date">Release date</label><br>\n\t\t\t\t\t\t\t\t<input type="date" id="datemovie" name="date" ><br><br>\n\t\t\t\t\t\t\t\t<label for="catch">Catch-Phrase</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="catchMovie" name="catch" placeholder="An X-traordinary Origin Story"><br><br>\n\t\t\t\t\t\t\t\t<label for="description">Description</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="descriptionMovie" name="description" placeholder="Pearl (subtitled An X-traordinary Origin Story) is a 2022 American horror film directed by Ti West, co-written by West and Mia Goth, who reprises her role as the title character, and featuring David Corenswet, Tandi Wright, Matthew Sunderland and Emma Jenkins-Purro in supporting roles. A prequel to X (2022) and the second installment in the X film series, it serves as an origin story for the title villain, whose fervent aspiration to become a movie star led her to committing violent acts on her family\'s Texas homestead in 1918."><br><br>\n\t\t\t\t\t\t\t\t<label for="cast">Cast</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="castMovie" name="cast" placeholder="Mia Goth, David Corenswet, Alistair Sewell, Emma Jenkins, Matthew Sunderland, Tandi Wright"><br><br>\n\t\t\t\t\t\t\t\t<label for="crew">Crew</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="crewMovie" name="crew" placeholder="Mia Goth, David Corenswet, Alistair Sewell, Emma Jenkins, Matthew Sunderland, Tandi Wright"><br><br>\n\t\t\t\t\t\t\t\t<label for="poster">Enter movie poster url</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="movieposter" name="poster" placeholder="https://pics.filmaffinity.com/Pearl-745024740-large.jpg"><br><br>\n\t\t\t\t\t\t\t\t<label for="image">Enter secondary image url</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="movieimage" name="image" placeholder="https://pics.filmaffinity.com/Pearl-745024740-large.jpg"><br><br>\n\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t\t<label for="crew">Genres</label><br>\n\t\t\t\t\t\t\t\t\t\t<section id="checkboxes">\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="romance" value="romance" />\n\t\t\t\t\t\t\t\t\t\t<label for="romance">Romance</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="action" value="action" />\n\t\t\t\t\t\t\t\t\t\t<label for="action">Action</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="comedy" value="comedy" />\n\t\t\t\t\t\t\t\t\t\t<label for="comedy">Comedy</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="Thriller" value="thriller" />\n\t\t\t\t\t\t\t\t\t\t<label for="thriller">Thriller</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="sci-fi" value="sci-fi" />\n\t\t\t\t\t\t\t\t\t\t<label for="sci-fi">Sci-Fi</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="drama" value="drama" />\n\t\t\t\t\t\t\t\t\t\t<label for="drama">Drama</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="animated" value="animated" />\n\t\t\t\t\t\t\t\t\t\t<label for="animated">Animated</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="classic" value="classics" />\n\t\t\t\t\t\t\t\t\t\t<label for="classic">Classics</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="documental" value="documental" />\n\t\t\t\t\t\t\t\t\t\t<label for="documental">Documental</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="psychological" value="psychological" />\n\t\t\t\t\t\t\t\t\t\t<label for="psychological">Psychological</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<button type="submit">Submit</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t</section>\n      ';
							const e = this.ownerDocument.createElement('style');
							(e.innerHTML = Cm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
							const n = this.shadowRoot.querySelector('.modalContainer');
							this.shadowRoot.querySelector('.close').addEventListener('click', () => {
								n.style.display = 'none';
							}),
								window.addEventListener('click', (t) => {
									t.target == n && (n.style.display = 'none');
								}),
								this.shadowRoot.querySelector('#ButtonModal').addEventListener('click', (t) => {
									n.style.display = 'block';
								}),
								this.shadowRoot.querySelector('#fname').addEventListener('change', this.changeTitle),
								this.shadowRoot.querySelector('#directorMovie').addEventListener('change', this.changeDirector),
								this.shadowRoot.querySelector('#datemovie').addEventListener('change', this.changeRelease),
								this.shadowRoot.querySelector('#descriptionMovie').addEventListener('change', this.changeDescription),
								this.shadowRoot.querySelector('#castMovie').addEventListener('change', this.changeCast),
								this.shadowRoot.querySelector('#crewMovie').addEventListener('change', this.changeCrew),
								this.shadowRoot.querySelector('#movieposter').addEventListener('change', this.changeImage),
								this.shadowRoot.querySelector('#movieimage').addEventListener('change', this.changeImageSec),
								this.shadowRoot.querySelector('#catchMovie').addEventListener('change', this.changeCatchPhrase),
								this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach((t) => {
									t.addEventListener('change', (e) => {
										if (t.checked) Am.categories.push(t.value);
										else {
											const e = Am.categories.indexOf(t.value);
											-1 !== e && Am.categories.splice(e, 1);
										}
										console.log('Arreglo de categorías actualizado:', Am.categories);
									});
								}),
								this.shadowRoot.querySelector('.my-form').addEventListener('submit', (t) =>
									km(this, void 0, void 0, function* () {
										var e, i, r, s, o, a, c, l, h, u, d, p;
										t.preventDefault(),
											(n.style.display = 'none'),
											yield ((p = Am),
											im(void 0, void 0, void 0, function* () {
												try {
													const t = Nu(sm, 'movies');
													yield (function (t, e) {
														const n = Su(t.firestore, Ou),
															i = Du(t),
															r = cd(t.converter, e);
														return md(n, [
															Wu(Ku(t.firestore), 'addDoc', i._key, r, null !== t.converter, {}).toMutation(
																i._key,
																Wa.exists(!1)
															),
														]).then(() => i);
													})(t, p),
														console.log('se añadió con éxito');
												} catch (t) {
													console.error(t);
												}
											})),
											((null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.getElementById('fname')).value =
												''),
											((null === (i = this.shadowRoot) || void 0 === i
												? void 0
												: i.getElementById('directorMovie')
											).value = ''),
											((null === (r = this.shadowRoot) || void 0 === r ? void 0 : r.getElementById('datemovie')).value =
												''),
											((null === (s = this.shadowRoot) || void 0 === s
												? void 0
												: s.getElementById('catchMovie')
											).value = ''),
											((null === (o = this.shadowRoot) || void 0 === o
												? void 0
												: o.getElementById('descriptionMovie')
											).value = ''),
											((null === (a = this.shadowRoot) || void 0 === a ? void 0 : a.getElementById('castMovie')).value =
												''),
											((null === (c = this.shadowRoot) || void 0 === c ? void 0 : c.getElementById('crewMovie')).value =
												''),
											((null === (l = this.shadowRoot) || void 0 === l
												? void 0
												: l.getElementById('movieposter')
											).value = ''),
											((null === (h = this.shadowRoot) || void 0 === h
												? void 0
												: h.getElementById('movieimage')
											).value = ''),
											((null === (u = this.shadowRoot) || void 0 === u
												? void 0
												: u.getElementById('catchMovie')
											).value = '');
										const f =
											null === (d = this.shadowRoot) || void 0 === d
												? void 0
												: d.querySelectorAll('input[type="checkbox"]');
										null == f ||
											f.forEach((t) => {
												t.checked = !1;
											}),
											(Am.categories = []),
											console.log('Formulario enviado y campos limpiados');
									})
								);
						}
					});
				}
			}
			customElements.define('modal-movie', xm);
			var Rm,
				Nm = n(679);
			!(function (t) {
				t.buttonlabel = 'buttonlabel';
			})(Rm || (Rm = {}));
			class Dm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ buttonlabel: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t      <button type="button">${this.buttonlabel}</button>\n      `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = Nm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-button', Dm);
			var Lm,
				Om = n(167);
			!(function (t) {
				(t.icon_url = 'icon_url'), (t.label = 'label'), (t.description_icon = 'description_icon');
			})(Lm || (Lm = {}));
			class Mm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ icon_url: null, label: null, description_icon: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					if (this.shadowRoot) {
						this.shadowRoot.innerHTML = `\n<a><p>${this.label}</p> <img src="${this.icon_url}" alt="${this.description_icon}"></a>\n      `;
						const e = this.ownerDocument.createElement('style');
						(e.innerHTML = Om.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
					}
				}
			}
			customElements.define('my-actionandicon', Mm);
			var Pm,
				Fm = n(909);
			!(function (t) {
				t.label = 'label';
			})(Pm || (Pm = {}));
			class Um extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ label: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n      <section>\n      <label for="crew">${this.label}</label><br>\n      <section id="checkboxes">\n      <section class="label-chechbox">\n      <input type="checkbox" id="romance" value="first-checkbox" />\n      <label for="romance">Romance</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="action" value="second-checkbox" />\n      <label for="action">Action</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="comedy" value="thirth-checkbox" />\n      <label for="comedy">Comedy</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="Thriller" value="fourth-checkbox" />\n      <label for="thriller">Thriller</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="sci-fi" value="fifth-checkbox" />\n      <label for="sci-fi">Sci-Fi</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="drama" value="sixth-checkbox" />\n      <label for="drama">Drama</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="animated" value="seventh-checkbox" />\n      <label for="animated">Animated</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="classic" value="eighth-checkbox" />\n      <label for="classic">Classics</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="documental" value="ninth-checkbox" />\n      <label for="documental">Documental</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="psychological" value="second-checkbox" />\n      <label for="psychological">Psychological</label>\n      </section>\n      `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = Fm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-filters', Um);
			var Vm,
				jm = n(83);
			!(function (t) {
				(t.poster = 'poster'), (t.director = 'director'), (t.utitle = 'utitle'), (t.release_date = 'release_date');
			})(Vm || (Vm = {}));
			class Bm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ poster: null, director: null, utitle: null, release_date: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t<section id="figure">\n<img src="${this.poster}" alt="This a poster of the movie named ${this.utitle} ">\n<h1>${this.utitle}</h1>\n<section id="directoranddate">\n<p>Directed by <b> ${this.director} </b></p>\n<p>Release date:<b> ${this.release_date}</b></p>\n</section>\n      </section>\n      `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = jm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-figuremovie', Bm);
			var zm,
				qm = n(775);
			!(function (t) {
				(t.catch_phrase = 'catch_phrase'), (t.description = 'description');
			})(zm || (zm = {}));
			class $m extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ description: null, catch_phrase: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t<section>\n\t\t\t<b><p>${
							this.catch_phrase || ''
						}</p></b>\n<p id="description">${this.description}</p>\n      </section>\n      `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = qm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-descriptionmovie', $m);
			var Hm,
				Gm = n(191);
			!(function (t) {
				(t.section_title = 'section_title'), (t.content = 'content');
			})(Hm || (Hm = {}));
			class Km extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ section_title: null, content: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t<section>\n      <h2>${this.section_title}</h2>\n      <hr></hr>\n<p>${this.content}</p>\n      </section>\n      `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = Gm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-extrainfo', Km);
			var Wm,
				Qm = n(791);
			!(function (t) {
				(t.utitle = 'utitle'),
					(t.your_name = 'your_name'),
					(t.mobile_number = 'mobile_number'),
					(t.email = 'email'),
					(t.emailornumber = 'emailornumber'),
					(t.password = 'password'),
					(t.re_password = 're_password');
			})(Wm || (Wm = {}));
			class Jm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({
						utitle: null,
						your_name: null,
						mobile_number: null,
						email: null,
						emailornumber: null,
						password: null,
						re_password: null,
					});
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					var t;
					this.render();
					const e = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector('.close');
					e &&
						e.addEventListener('click', () => {
							s(cm('DASHBOARD'));
						});
				}
				render() {
					var t;
					if (this.shadowRoot) {
						let t = `\n              <section id="header">\n                  <span class="close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>\n                  <h1>${this.utitle}</h1>\n              </section>\n          `;
						this.your_name &&
							(t += `\n                  <label for="name">${this.your_name}</label><br>\n                  <input type="text" class="space" name="name" placeholder="First and last name"><br><br>\n              `),
							this.mobile_number &&
								(t += `\n                  <label for="mobile">${this.mobile_number}</label><br>\n                  <input type="text" class="space" name="mobile" placeholder="Don't forget your country code"><br><br>\n              `),
							this.email &&
								(t += `\n                  <label for="email">${this.email}</label><br>\n                  <input type="text" class="space" name="email" placeholder="johndoe@movie.com"><br><br>\n              `),
							this.emailornumber &&
								(t += `\n                  <label for="emailornumber">${this.emailornumber}</label><br>\n                  <input type="text" class="space" name="emailornumber"><br><br>\n              `),
							this.password &&
								(t += `\n                  <label for="password">${this.password}</label><br>\n                  <input type="text" class="space" name="password" placeholder="At least 8 characters"><br><br>\n              `),
							this.re_password &&
								(t += `\n                  <label for="re_password">${this.re_password}</label><br>\n                  <input type="text" class="space" name="re_password" placeholder="Confirm your password"><br><br>\n              `),
							(t += '</section>'),
							(this.shadowRoot.innerHTML = t);
					}
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = Qm.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-sessionform', Jm);
			var Xm,
				Ym = n(633);
			!(function (t) {
				(t.btn_text = 'btn_text'), (t.message = 'message'), (t.btn_type = 'btn_type');
			})(Xm || (Xm = {}));
			class Zm extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ btn_text: null, btn_type: null, message: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t<section>\n      <button type="${this.btn_type}" id="send">${this.btn_text}</button>\n      <p>${this.message}<a href="https://en.wikipedia.org/wiki/Terms_of_service"> Our Conditions of Use and Privacy Notice</a>.</p>\n      </section>\n      `);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = Ym.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-submitandterms', Zm);
			var tg,
				eg = n(163);
			!(function (t) {
				t.image = 'image';
			})(tg || (tg = {}));
			class ng extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ image: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t<section class="container">\n\t\t\t<img class="poster" src="${this.image}" >\n\t\t</section>\n    <button id ="AddButton">+</button>\n\t\t\t`);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = eg.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('my-moviecardadd', ng);
			var ig,
				rg = n(675);
			class sg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					if (this.shadowRoot) {
						this.shadowRoot.innerHTML =
							'\n      <section class="modal-new-list">\n            <span class="close"\n                ><img\n                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMDUuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTM5LjMxLDYxLjY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEyOCw1MC4zNCw2MS42NkE4LDgsMCwwLDEsNjEuNjYsNTAuMzRMMTI4LDExNi42OWw2Ni4zNC02Ni4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM5LjMxLDEyOFoiPjwvcGF0aD48L3N2Zz4="\n                    alt="Close"\n            /></span>\n            <h1 class="title-list">New list</h1>\n            <form class="info-list">\n                <label for="name-list">Name</label>\n                <input\n                    type="text"\n                    id="name-list"\n                    name="name"\n                    placeholder="Enter the list name"\n                />\n                <label for="url-list">URL list image</label>\n                <input\n                    type="text"\n                    id="url-list"\n                    name="name"\n                    placeholder="Enter the URL of the image list"\n                />\n                <section>\n                    <button type="submit">ADD FILMS</button>\n                </section>\n            </form>\n        </section>\n      ';
						const e = this.ownerDocument.createElement('style');
						(e.innerHTML = rg.A),
							null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e),
							this.shadowRoot.querySelector('.modal-new-list'),
							this.shadowRoot.querySelector('.close').addEventListener('click', () => {
								this.style.display = 'none';
							});
					}
				}
			}
			customElements.define('my-modal-list', sg),
				(function (t) {
					(t.image_profile = 'image_profile'), (t.name_profile = 'name_profile'), (t.comment = 'comment');
				})(ig || (ig = {}));
			class og extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ image_profile: null, name_profile: null, comment: null });
				}
				attributeChangedCallback(t, e, n) {
					(this[t] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n      <h2>POPULAR REVIEWS</h2>\n      <img src="${this.image_profile}" alt="Image profile">\n      <h3>${this.name_profile} made a review</h3>\n      \x3c!-- estrellas --\x3e\n      <p>${this.comment}</p>\n      `);
				}
			}
			customElements.define('my-comment-section', og);
			var ag = n(9);
			class cg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					return (function (t, e, n, i) {
						return new (n || (n = Promise))(function (r, s) {
							function o(t) {
								try {
									c(i.next(t));
								} catch (t) {
									s(t);
								}
							}
							function a(t) {
								try {
									c(i.throw(t));
								} catch (t) {
									s(t);
								}
							}
							function c(t) {
								var e;
								t.done
									? r(t.value)
									: ((e = t.value),
									  e instanceof n
											? e
											: new n(function (t) {
													t(e);
											  })).then(o, a);
							}
							c((i = i.apply(t, e || [])).next());
						});
					})(this, void 0, void 0, function* () {
						var t, e;
						this.render();
						const n = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector('my-banner');
						if (n) {
							const t = null === (e = n.shadowRoot) || void 0 === e ? void 0 : e.querySelector('#accountButton');
							null == t ||
								t.addEventListener('click', () => {
									s(cm('SIGNIN'));
								});
						}
					});
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML =
							'\n\t\t\t<body>\n      <my-banner message="Track films you\'ve watched. Save those you want to see. Tell your friends what\'s good."\n\t\t\tbuttonlabel="GET AN ACCOUNT, IT\'S FREE"></my-banner>\n\t\t\t<category-section name="Popular films in the community" category="popular" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/s5R6kTMfOxkGit96A8lqcDL4uVk.jpg"></category-section>\n\t\t\t\t<category-section name="On-cinema right now" category="cinema" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/rron9HAuS9s7zBF8iCX1tsafxUo.jpg"></category-section>\n\t\t\t\t<category-section name="Trending this week" category="trending" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/iAyr7VEFGJoHDIHIxjEb3TskQW4.jpg"></category-section>\n\t\t\t\t<category-section name="Classics" category="classics" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"></category-section>\n\t\t\t\t<modal-movie></modal-movie>\n\t\t\t\t</body>\n\t\t\t');
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = ag.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('app-dashboard', cg);
			var lg = n(809);
			class hg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t<my-banner section_title=${i.titlecategory} image=${i.imagecategory}></my-banner>\n\t\t\t<category-section category=${i.currentcategory}></category-section>\n\t\t\t`);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = lg.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('app-categories', hg);
			var ug = n(207);
			class dg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\n\t\t\t<my-figuremovie id="figure"  poster=${i.movieimage} utitle="${i.movietitle}" director="${i.moviedirector}" release_date=${i.moviereleasedate}></my-figuremovie>\n\t\t\t<my-banner image="${i.movieimagesec}" id="banner"></my-banner>\n<section id="content">\n<section id="info">\n\t\t\t<my-descriptionmovie catch_phrase="${i.moviecatchphrase}" description="${i.moviedescription}"></my-descriptionmovie>\n\t\t\t<my-extrainfo section_title="Cast" content="${i.moviecast}"></my-extrainfo>\n\t\t\t<my-extrainfo section_title="Crew" content="${i.moviecrew}"></my-extrainfo>\n\t\t\t<my-extrainfo section_title="Genres" content="${i.moviecategories}"></my-extrainfo>\n\t\t\t</section>\n\t\t\t<section id="actions">\n\t\t\t<my-actionandicon label="Like" icon_url="https://img.icons8.com/ios/30/FFFFFF/like--v1.png" description_icon="heart icon"></my-actionandicon>\n\t\t\t<my-actionandicon label="Edit film" icon_url="https://img.icons8.com/material/24/FFFFFF/pencil--v2.png" description_icon="pencil icon"></my-actionandicon>\n\t\t\t<my-actionandicon label="Add to a list" icon_url="https://img.icons8.com/ios-glyphs/30/FFFFFF/bookmark-ribbon.png" description_icon="bookmark icon"></my-actionandicon>\n\t\t\t<my-actionandicon label="Share" icon_url="https://img.icons8.com/ios-glyphs/30/FFFFFF/share--v1.png" description_icon="share icon"></my-actionandicon>\n\t\t\t</section>\n\t\t\t</section>\n\t\t\t`);
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = ug.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('app-filmpage', dg);
			var pg = n(858);
			class fg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					var t, e, n, i, r;
					this.render();
					const o = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector('#navigatetosignin');
					null == o ||
						o.addEventListener('click', () => {
							s(cm('SIGNIN'));
						});
					const a = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector('my-submitandterms');
					if (a) {
						const t = null === (n = a.shadowRoot) || void 0 === n ? void 0 : n.querySelector('#send');
						null == t ||
							t.addEventListener('click', () => {
								s(cm('DASHBOARD'));
							});
					}
					const c = null === (i = this.shadowRoot) || void 0 === i ? void 0 : i.querySelector('my-sessionform');
					if (c) {
						const t = null === (r = c.shadowRoot) || void 0 === r ? void 0 : r.querySelector('.close');
						null == t ||
							t.addEventListener('click', () => {
								s(cm('DASHBOARD'));
							});
					}
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML =
							'\n\t\t\t<section>\n\t\t\t<section id="form">\n     <my-sessionform utitle="LOG IN" password="Password" emailornumber="Mobile number or email"></my-sessionform>\n\t\t <my-submitandterms btn_text="Continue" message="By using our services you agree to" btn_type="submit"></my-submitandterms>\n\t\t </section>\n\t\t <section id="extrainfo">\n\t\t <section id="extrainfo-content">\n\t\t <hr><p>New to this website</p><hr>\n\t\t </section>\n\t\t <button id="navigatetosignin">Create your account</button>\n\t\t </section>\n\t\t </section>\n\t\t\t');
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = pg.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('app-login', fg);
			var mg = n(868);
			class gg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t, e, n;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\t\t\t${this}\n\t\t\t<section>\n\t\t\t\t<my-banner section_title="My Lists"></my-banner>\n\t\t\t\t<button id ="modal-button">Create new list</button>\n\t\t\t\t<my-modal-list id ="open"></my-modal-list>\n\t\t\t</section>\n\t\t\t\t`);
					const i = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector('#modal-button'),
						r = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector('#open');
					(r.style.display = 'none'),
						null == i ||
							i.addEventListener('click', () => {
								r.style.display = 'flex';
							});
					const s = this.ownerDocument.createElement('style');
					(s.innerHTML = mg.A), null === (n = this.shadowRoot) || void 0 === n || n.appendChild(s);
				}
			}
			customElements.define('app-mylists', gg);
			class yg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					this.shadowRoot && (this.shadowRoot.innerHTML = '\n\t\t\t<my-banner></my-banner>\n\t\t\t');
				}
			}
			customElements.define('app-newlist', yg);
			class vg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					this.shadowRoot && (this.shadowRoot.innerHTML = '\n\t\t\t<h1>PROFILE</h1>\n\t\t\t');
				}
			}
			customElements.define('app-profile', vg);
			var wg = n(307);
			class bg extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					var t, e, n;
					this.render();
					const i = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector('#loginpage');
					null == i ||
						i.addEventListener('click', () => {
							s(cm('LOGIN'));
						});
					const r = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector('my-submitandterms');
					if (r) {
						const t = null === (n = r.shadowRoot) || void 0 === n ? void 0 : n.querySelector('#send');
						null == t ||
							t.addEventListener('click', () => {
								s(cm('DASHBOARD'));
							});
					}
				}
				render() {
					var t;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML =
							'\n\t\t\t<body>\n\t\t\t<section>\n     <my-sessionform utitle="SIGN IN" email="Email" your_name="Your name" mobile_number="Mobile number" re_password="Re-enter password" password="Password" ></my-sessionform>\n\t\t <my-submitandterms btn_text="Create account" message="By creating an account, you agree to" btn_type="submit"></my-submitandterms>\n\t\t <hr>\n\t\t <p>Already have an account? <a id="loginpage">Log in</a></p>\n\t\t </section>\n\t\t</body>\n\t\t\t');
					const e = this.ownerDocument.createElement('style');
					(e.innerHTML = wg.A), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
				}
			}
			customElements.define('app-signin', bg);
			class _g extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' }), o(this);
				}
				connectedCallback() {
					return (function (t, e, n, i) {
						return new (n || (n = Promise))(function (r, s) {
							function o(t) {
								try {
									c(i.next(t));
								} catch (t) {
									s(t);
								}
							}
							function a(t) {
								try {
									c(i.throw(t));
								} catch (t) {
									s(t);
								}
							}
							function c(t) {
								var e;
								t.done
									? r(t.value)
									: ((e = t.value),
									  e instanceof n
											? e
											: new n(function (t) {
													t(e);
											  })).then(o, a);
							}
							c((i = i.apply(t, e || [])).next());
						});
					})(this, void 0, void 0, function* () {
						const t = yield dm();
						s(t), this.render();
					});
				}
				render() {
					var t, e, n, r, s, o, a, c;
					switch ((this.shadowRoot && (this.shadowRoot.innerHTML = ''), i.screen)) {
						case 'LOGIN':
							const i = this.ownerDocument.createElement('app-login');
							null === (t = this.shadowRoot) || void 0 === t || t.appendChild(i);
							break;
						case 'DASHBOARD':
							const l = this.ownerDocument.createElement('app-dashboard');
							null === (e = this.shadowRoot) || void 0 === e || e.appendChild(l);
							break;
						case 'SIGNIN':
							const h = this.ownerDocument.createElement('app-signin');
							null === (n = this.shadowRoot) || void 0 === n || n.appendChild(h);
							break;
						case 'CATEGORIES':
							const u = this.ownerDocument.createElement('app-categories');
							null === (r = this.shadowRoot) || void 0 === r || r.appendChild(u);
							break;
						case 'FILMPAGE':
							const d = this.ownerDocument.createElement('app-filmpage');
							null === (s = this.shadowRoot) || void 0 === s || s.appendChild(d);
							break;
						case 'MYLISTS':
							const p = this.ownerDocument.createElement('app-mylists');
							null === (o = this.shadowRoot) || void 0 === o || o.appendChild(p);
							break;
						case 'NEWLIST':
							const f = this.ownerDocument.createElement('app-newlist');
							null === (a = this.shadowRoot) || void 0 === a || a.appendChild(f);
							break;
						case 'PROFILE':
							const m = this.ownerDocument.createElement('app-profile');
							null === (c = this.shadowRoot) || void 0 === c || c.appendChild(m);
					}
				}
			}
			customElements.define('app-container', _g);
		})();
})();

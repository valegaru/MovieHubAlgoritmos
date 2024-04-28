(()=>{"use strict";var t={167:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"",""]);const l=s},925:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"/* Estilos para el componente de banner */\n:host {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tbackground-image: url('https://pbs.twimg.com/media/GJ331yEWQAAtUzN.jpg');\n\tbackground-size: cover;\n\tbackground-position: center top 30%;\n\tmargin: 0;\n\tpadding: 10%;\n\tcolor: white;\n\theight: 43vh;\n}\n\n/* Agregar un velo solo sobre la imagen de fondo */\n:host::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(30, 21, 22, 0.01);\n\tz-index: 1;\n}\n\nsection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tposition: relative;\n\tz-index: 2;\n}\n\n/* Estilos para el componente personalizado de la barra de navegación */\ncustom-navbar {\n\twidth: 100%; /* Ocupar el 100% del banner */\n\tposition: absolute; /* Para posicionarlo */\n\ttop: 0; /* En la parte superior */\n\tz-index: 3; /* Z-index para estar por encima de otros elementos */\n}\n\nh1 {\n\twidth: 45%;\n\theight: auto; /* Cambia la altura a automática */\n\tmargin-top: 30%;\n\tmargin-bottom: 3vh; /* Espacio entre el mensaje y el botón */\n\tfont-size: 200%;\n\ttext-align: center; /* Centrar horizontalmente */\n\tfont-family: 'Domine', serif;\n}\n\nbutton {\n\twidth: 20%; /* Modifica el ancho del botón */\n\theight: 50px;\n\tbackground-color: rgba(251, 149, 60, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 10px;\n\tfont-size: 80%;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\nbutton:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n\nbutton span {\n\tdisplay: inline-block;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n/* Media queries para dispositivos móviles */\n@media screen and (max-width: 767px) {\n\t:host {\n\t\theight: auto; /* Altura automática para adaptarse a dispositivos móviles */\n\t}\n\n\th1 {\n\t\twidth: 80%;\n\t\tmargin-top: 40%;\n\t\tmargin-bottom: 3vh;\n\t\tfont-size: 6vw;\n\t}\n\n\tbutton {\n\t\twidth: 60%;\n\t\theight: 10vw;\n\t\tfont-size: 4vw;\n\t}\n}\n",""]);const l=s},682:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"/* Reset de estilos */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\n\n/* Estilos generales de la barra de navegación */\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 3%;\n\tjustify-content: space-around;\n\talign-items: center;\n\tbackground: none;\n\tjustify-content: space-between; /* Alinear elementos al centro horizontalmente */\n}\n\n/* Estilos para la sección de búsqueda */\nnav .search-bar,\nnav .pages {\n\tflex: 1; /* Distribuir el espacio disponible */\n}\n\n/* Agrega un espacio del 5% entre .search-bar y .pages */\nnav .search-bar {\n\tmargin-right: 5%;\n}\n\n/* Ajustes adicionales para la barra de búsqueda */\n.search-bar {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\theight: 30px;\n\tbox-sizing: border-box;\n\tbackground-color: rgba(255, 255, 255, 0.5);\n\tborder-radius: 5px;\n\tmax-width: 600px;\n}\n\n.search-bar input {\n\tflex: 1; /* Para que el input ocupe el espacio restante */\n\tpadding: 0 5px;\n\theight: 100%;\n\tborder: none;\n\toutline: none;\n\tbackground-color: transparent; /* Eliminar el color de fondo */\n\tcolor: white;\n}\n\n.icon {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.icon img {\n\twidth: 20px;\n\tpadding: 0 10px;\n}\n\n/* Estilos para la sección de páginas */\n.pages {\n\tdisplay: flex;\n\tjustify-content: center; /* Centra los elementos horizontalmente */\n\tmargin-right: 0;\n}\n\n.pages a {\n\tmargin-right: 15%; /* Espacio entre los elementos */\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n\tcolor: white;\n\tfont-size: 14px;\n}\n\n.pages a:hover {\n\tcolor: rgba(251, 149, 60, 1);\n\tcursor: pointer;\n\ttransition: color 0.1s ease;\n}\n\n.pages {\n\tposition: relative;\n}\n\n/* Estilos para el menú desplegable */\n.pages .menu-desplegable {\n\tdisplay: none; /* controla que no se muestre */\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\tbackground-color: rgba(250, 149, 59, 1);\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tlist-style-type: none;\n}\n.pages .menu-desplegable a {\n\ttext-transform: none;\n\tdisplay: block;\n\tpadding: 5px 0;\n}\n.pages .menu-desplegable a:hover {\n\tcolor: rgba(233, 13, 90, 1);\n}\n\n/* controla que se muestre el menu desplegable */\na:focus + .menu-desplegable {\n\tdisplay: block;\n}\n\n/* media queries */\n@media screen and (max-width: 767px) {\n\tnav {\n\t\tflex-direction: row;\n\t\tpadding: 3%;\n\t}\n\n\tnav .search-bar {\n\t\tmargin-right: 10px;\n\t\tmargin-bottom: 0px;\n\t\twidth: 50%;\n\t\theight: 50%;\n\t}\n\n\t.icon {\n\t\twidth: 20%;\n\t\theight: 20%;\n\t}\n\t.pages a {\n\t\tmargin-right: 6px;\n\t\tfont-size: 10px;\n\t}\n}\n",""]);const l=s},679:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"button {\n\twidth: 20%; /* Modifica el ancho del botón */\n\theight: 50px;\n\tbackground-color: rgba(251, 149, 60, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 10px;\n\tfont-size: 80%;\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\nbutton:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n\nbutton span {\n\tdisplay: inline-block;\n\twidth: 100%;\n\ttext-align: center;\n}\n",""]);const l=s},909:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"",""]);const l=s},931:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"/* Estilos globales del componente */\n* {\n\tfont-family: 'Noto Traditional Nushu', serif;\n}\n\n/* Estilos para el contenedor de la tarjeta de película */\n.container {\n\tposition: relative;\n\tobject-fit: cover;\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n}\n\n/* Estilos para el póster/imagen principal de la película */\n.poster {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n/* Añade estilos para el contenido */\n.content {\n\ttop: 0;\n\tleft: 0;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.6); /* Fondo semitransparente */\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\topacity: 0; /* Inicialmente oculto */\n\ttransition: opacity 0.6s; /* Transición suave al mostrar */\n\tobject-fit: cover;\n}\n\n.container:hover .content {\n\topacity: 1; /* Mostrar contenido al pasar el mouse por encima de .container */\n}\n\np {\n\tcolor: white;\n\tfont-size: 100%;\n}\n\n.content img,\n.content p {\n\tmargin: 5px; /* Ajusta el margen entre elementos */\n\ttext-align: center;\n}\n\n.content img {\n\twidth: 28%;\n\theight: auto;\n\tcursor: pointer; /* Cambia el cursor al pasar sobre el botón */\n}\n\nimg.details {\n\theight: auto;\n\twidth: 30%;\n}\n\n.link {\n\tdisplay: flex;\n\twidth: 100%; /* Ancho del 50% */\n\theight: 25%;\n\tjustify-content: center; /* Centra horizontalmente */\n\talign-items: center; /* Centra verticalmente */\n\tmargin: 5px;\n\tpadding: 0px;\n}\n\n.dislike,\n.like {\n\tdisplay: none; /* Inicialmente oculto */\n}\n\n@media screen and (max-width: 767px) {\n\t.content img,\n\t.content p {\n\t\tmargin: 3px;\n\t}\n\n\t.content img {\n\t\twidth: 35%;\n\t}\n\n\timg.details {\n\t\twidth: 50%;\n\t}\n\n\t.link {\n\t\twidth: 70%;\n\t}\n}\n",""]);const l=s},583:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"/* Estilos para el botón flotante de abrir el modal */\n#ButtonModal {\n\tposition: fixed;\n\tz-index: 1; /* Se coloca por encima de otros elementos */\n\tbottom: 20px;\n\tright: 20px;\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: white;\n\tfont-size: 35px;\n\twidth: 55px;\n\theight: 55px;\n\tborder-radius: 50%;\n\tborder: 0px;\n}\n\n/* Estilos para el botón de cerrar el modal */\n.modalContainer .close {\n\tfloat: right; /* Se alinea a la derecha */\n}\n\n/* Estilos del formulario dentro del modal */\n.my-form {\n\tposition: fixed; /* Se fija el formulario en una posición específica */\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%); /* Centrado horizontal y vertical */\n\tbackground-color: rgba(30, 21, 22, 1);\n\tz-index: 2; /* Colocado por encima del modal */\n\tpadding: 20px;\n\tbox-shadow: 0 0 20px #000000; /* Sombra */\n\tborder-radius: 2rem;\n\theight: 80vh; /* Altura del 80% de la ventana */\n\twidth: 50%; /* Ancho del 50% de la ventana */\n\toverflow-x: hidden; /* Oculta el desbordamiento horizontal */\n\toverflow-y: auto; /* Habilita el desplazamiento vertical */\n}\n\n/*oculta la scrollbar */\n.my-form::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.modalContainer {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 9999;\n}\n\n/* Crea el velo detras del modal*/\n.modal-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\tz-index: -1;\n}\n\n/*Responsive */\n@media screen and (max-width: 767px) {\n\t#ButtonModal {\n\t\twidth: 60px;\n\t\theight: 60px;\n\t\tfont-size: 40px;\n\t}\n\n\t.modal-content {\n\t\tpadding: 10px;\n\t}\n\n\t.my-form {\n\t\tpadding: 10px;\n\t}\n\n\t.my-form input[type='text'],\n\t.my-form input[type='date'] {\n\t\tpadding: 8px;\n\t\tfont-size: 14px;\n\t}\n\n\t.my-form button {\n\t\tpadding: 8px;\n\t\tfont-size: 14px;\n\t}\n}\n\n/* Estilos del contenido del modal */\n.modal-content {\n\tcolor: #fff;\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tposition: relative;\n\tz-index: 10000; /* Colocado por encima de todos los elementos */\n\toverflow: hidden; /* Oculta el desbordamiento */\n\tdisplay: flex;\n\tjustify-content: center; /* Centrado horizontal */\n\talign-items: center; /* Centrado vertical */\n\tfont-family: 'Cairo', sans-serif;\n\tfont-size: 80%;\n\theight: 80vh; /* Altura del 80% de la ventana */\n}\n\n.my-form label {\n\tcolor: #fff;\n}\n\n/* Estilos para los campos de entrada de texto y fecha */\n.my-form input[type='text'],\n.my-form input[type='date'] {\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-bottom: 0;\n\tborder: none;\n\tbackground-color: rgba(255, 255, 255, 0.1);\n\tcolor: #fff;\n\tborder-radius: 5px;\n\tbox-sizing: border-box; /* Modelo de caja */\n}\n\n/* Estilos para los checkboxes */\n.my-form input[type='checkbox'] {\n\tmargin-right: 5px;\n}\n\n/* Estilos para el botón de submit */\n.my-form button {\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-top: 20px;\n\tbackground-color: rgba(250, 149, 59, 1);\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tcursor: pointer; /* Cambio de cursor */\n}\n\n/* Estilos cuando se pasa el cursor sobre el botón */\n.my-form button:hover {\n\tbackground-color: rgba(233, 13, 90, 1);\n\tcolor: rgba(255, 255, 255, 1);\n}\n\n/* Estilos para los checkboxes de género */\n#checkboxes label {\n\tmargin-right: 10px;\n}\n\n#checkboxes {\n\tdisplay: grid; /* Se muestra como grid */\n\tgrid-template-rows: repeat(2, 1fr); /* Se repite la plantilla de filas */\n\tgrid-auto-flow: column; /* Se muestran en columnas */\n}\n\n/* Estilos para la imagen de cerrar el modal, el icono de x */\n.close img {\n\twidth: 70%;\n\theight: auto;\n\tcursor: pointer; /* Cambia el cursor al pasar sobre el botón */\n}\n",""]);const l=s},213:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,":host {\n\tdisplay: block;\n\tpadding: 5%;\n}\n\n#cards {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tgap: 2%; /* Agregamos un espacio entre las columnas */\n}\n\nmovie-card {\n\twidth: calc((100% / 6) - 2%); /* Calculamos el ancho deseado considerando el espacio entre las columnas */\n\tmargin-bottom: 20px; /* Espacio entre las filas */\n\n\t/* Ajustes para pantallas de tamaño pequeño */\n\t@media (max-width: 576px) {\n\t\twidth: calc((100% / 2) - 2%); /* Ancho para mostrar dos columnas */\n\t\tmargin-bottom: 4%; /* Espacio máximo entre las filas */\n\t}\n}\n\nh1 {\n\ttext-transform: uppercase;\n\tcolor: white;\n\tfont-family: 'Cairo', sans-serif;\n\t@media (max-width: 576px) {\n\t\tfont-size: 5vw; /* Tamaño de fuente más grande para pantallas pequeñas */\n\t}\n}\n\na {\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n}\n\nh1:hover {\n\tcolor: rgba(233, 13, 90, 1);\n}\n",""]);const l=s},647:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,":host {\n\tdisplay: block;\n\tbackground-color: rgba(30, 21, 22, 1);\n\tmargin: 0;\n\tpadding: 0;\n}\n",""]);const l=s},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(s[c]=!0)}for(var r=0;r<t.length;r++){var d=[].concat(t[r]);a&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return t[a](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t,e=n(925);!function(t){t.image="image",t.message="message",t.buttonlabel="buttonlabel"}(t||(t={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,message:null,buttonlabel:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n\t\t\t<custom-navbar></custom-navbar>\n      <section>\n\t\t\t<section>\n        <h1>${this.message||"Not working"}</h1>\n\t\t\t\t</section>\n        <button type="button" id="accountButton">${this.buttonlabel}</button>\n      </section>\n      `;const t=this.shadowRoot.querySelector("#accountButton");t&&t.addEventListener("click",(()=>{window.location.href="https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg"}))}const n=this.ownerDocument.createElement("style");n.innerHTML=e.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}customElements.define("my-banner",a);var o=n(682);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML='\n\t\t\t\t\t\t<nav>\n                <section class="search-bar">\n                    <section class="icon">\n                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQxNiAyMDhjMCA0NS45LTE0LjkgODguMy00MCAxMjIuN0w1MDIuNiA0NTcuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMEwzMzAuNyAzNzZjLTM0LjQgMjUuMi03Ni44IDQwLTEyMi43IDQwQzkzLjEgNDE2IDAgMzIyLjkgMCAyMDhTOTMuMSAwIDIwOCAwUzQxNiA5My4xIDQxNiAyMDh6TTIwOCAzNTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4eiIvPjwvc3ZnPg==" alt="search logo" draggable="false" />\n                    </section>\n\t\t\t\t\t\t\t\t\t\t<input class="barra" type="text" placeholder="Enter movie name" >\n                </section>\n\t\t\t\t\t\t\t\t\t\t<section class="pages">\n\t\t\t\t\t\t\t\t\t\t<a href="#">films</a> \x3c!-- aparece siempre de numero 1 --\x3e\n\t\t\t\t\t\t\t\t\t\t<ul class = "menu-desplegable">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">Classics</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Popular</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">On cinema</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Trending</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Action</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Sci-fi</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Romance</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Comedy</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Thriller</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Drama</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Animated</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Documental</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Psychological</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\x3c!--<a href="#">lists</a>  aparece cuando se esta logueado de numero 2 --\x3e\n\t\t\t\t\t\t\t\t\t\t\x3c!--<a href="#">profile</a>  aparece cuando se esta logueado de numero 3 --\x3e\n                    <a href="#">log in</a> \x3c!-- aparece cuando NO se esta logueado de numero 2 --\x3e\n                    <a href="#">create account</a> \x3c!-- aparece cuando NO se esta logueado de numero 3 --\x3e\n\t\t\t\t\t\t\t\t\t\t</section>\n\n                </nav>\n            ';const t=document.createElement("style");t.innerHTML=o.A,this.shadowRoot.appendChild(t)}}}customElements.define("custom-navbar",i);var s,l=n(931);!function(t){t.image="image"}(s||(s={}));class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isLiked=!0}static get observedAttributes(){return Object.keys({image:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n\t\t\t<div class="container">\n\t\t\t<img class="poster" src="${this.image}" >\n\t\t\t<section class="content">\n\t\t\t\t<a href="https://myflixerz.to/" class="link">\n\t\t\t\t\t<img class="details"src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png" alt="visible--v1"/>\n\t\t\t\t</a>\n\t\t\t\t<p>View details</p>\n\t\t\t\t<img class="dislike"  src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like--v1"/>\n\t\t\t\t<img class="like"  src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/>\n\t\t\t\t<p>Like</p>\n\t\t\t\t</section>\n\t\t</div>\n\t\t\t`;const t=this.shadowRoot.querySelector(".like"),e=this.shadowRoot.querySelector(".dislike");t.addEventListener("click",(()=>{this.isLiked=!0,t.style.display="none",e.style.display="inline"})),e.addEventListener("click",(()=>{this.isLiked=!1,e.style.display="none",t.style.display="inline"})),t.style.display=this.isLiked?"none":"inline",e.style.display=this.isLiked?"inline":"none"}const e=this.ownerDocument.createElement("style");e.innerHTML=l.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("movie-card",c);const r=[{id:1,image:"https://pics.filmaffinity.com/Pearl-745024740-large.jpg",categories:["popular"]},{id:2,image:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/AC3DD9EACA5CD19BC1124D9FDD9E5C8947DEE0A71559CB21A3D3B49CE35DD990/scale?width=506&aspectRatio=2.00&format=jpeg",categories:["popular"]},{id:3,image:"https://pics.filmaffinity.com/Pulp_Fiction-210382116-mmed.jpg",categories:["popular"]},{id:4,image:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",categories:["popular"]},{id:5,image:"https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg",categories:["popular"]},{id:6,image:"https://pics.filmaffinity.com/Paraasitos-406070218-large.jpg",categories:["popular"]},{id:7,image:"https://tecolotito.elsiglodetorreon.com.mx/blogs/163304/2020/02/5e3cb25189f7a.jpg",categories:["popular"]},{id:8,image:"https://pics.filmaffinity.com/Raequiem_por_un_sueano-174867645-large.jpg",categories:["popular"]},{id:9,image:"https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg",categories:["popular"]},{id:10,image:"https://upload.wikimedia.org/wikipedia/en/b/b8/Mysterious_skin.jpg",categories:["popular"]},{id:11,image:"https://http2.mlstatic.com/D_NQ_NP_768674-MLU70355009620_072023-O.webp",categories:["popular"]},{id:12,image:"https://m.media-amazon.com/images/I/91+6LJTjUYL._AC_UF894,1000_QL80_.jpg",categories:["popular"]},{id:13,image:"https://images.cdn1.buscalibre.com/fit-in/360x360/c3/23/c3237208ecb81d0d0ea3a27ed387c923.jpg",categories:["cinema"]},{id:14,image:"https://hips.hearstapps.com/hmg-prod/images/poster-vidas-pasadas-6540c5a06cbed.jpg?resize=980:*",categories:["cinema"]},{id:15,image:"https://pics.filmaffinity.com/Old_Boy-588574486-large.jpg",categories:["cinema"]},{id:16,image:"https://archivos-cms.cinecolombia.com/images/6/4/9/1/51946-1-esl-CO/e7f541ce3904-zoi_cineco_pstr-dskp_480x670.png",categories:["cinema"]},{id:17,image:"https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/424439/424439.jpg",categories:["cinema"]},{id:18,image:"https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/poster-anatomia-de-una-caida.jpg",categories:["cinema"]},{id:19,image:"https://m.media-amazon.com/images/S/pv-target-images/249b60dcd65e4ba17882d43310dcaa8f30b1840ea7bc2d7e0089e5a5398aa55f.jpg",categories:["trending"]},{id:20,image:"https://m.media-amazon.com/images/S/pv-target-images/b8accbc09fd8615ddb6fa39e8eb76cbf86f03e4bde3a4ceb4629f681083f5d39.jpg  ",categories:["trending"]},{id:21,image:"https://play-lh.googleusercontent.com/M18KWgpMAQUUzF2nIcGkMOe08O5jvT4z4mhn_LBVHrmkDWhy9poipiQTwdCxEtl6FChj9A",categories:["trending"]},{id:22,image:"https://www.atomcomics.pl/environment/cache/images/0_0_productGfx_234928/c15ba70f8752a972cf60dea25c6c325b.jpg",categories:["trending"]},{id:23,image:"https://m.media-amazon.com/images/M/MV5BNWI5ODc4MTAtN2U2NC00ZDk3LWE3NjAtNjIyODE2YTlhYjYwXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_.jpg",categories:["trending"]},{id:24,image:"https://pics.filmaffinity.com/Juno-964259078-large.jpg",categories:["trending"]},{id:25,image:"https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg",categories:["classics"]},{id:26,image:"https://images.cdn1.buscalibre.com/fit-in/360x360/81/22/812252fdfa443853ac4f0c38d89a9690.jpg",categories:["classics"]},{id:27,image:"https://musicart.xboxlive.com/7/2fb15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",categories:["classics"]},{id:28,image:"https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg",categories:["classics"]},{id:29,image:"https://es.web.img3.acsta.net/c_310_420/pictures/14/05/27/12/07/438875.jpg",categories:["classics"]},{id:30,image:"https://es.web.img2.acsta.net/pictures/14/04/01/10/42/226928.jpg",categories:["classics"]},{id:31,image:"https://pics.filmaffinity.com/El_gran_Gatsby-737648170-large.jpg",categories:["classics"]},{id:32,image:"https://mx.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/61/01/20070878.jpg",categories:["classics"]},{id:33,image:"https://pics.filmaffinity.com/Shrek-903764423-large.jpg",categories:["classics"]},{id:34,image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDCocdzcNgJ76xzG8WDxq8IcVeHL_8JBaUCOtps6mCB0htT-wyulkV5HveyvAZCP8QtyZ7lhI7uLQpa7Qqt55rLlF3StkAnn5SgFC1FJEs79sCbIDBBOHNWbvU75k5vsS8-K4GSQkKuDQk/s1600/Intocables.jpg",categories:["classics"]},{id:35,image:"https://www.ulima.edu.pe/sites/default/files/styles/225x333/public/movie/image/leon-the-professional-md-web.jpg?itok=0g3NGZTq",categories:["classics"]},{id:36,image:"https://pics.filmaffinity.com/Juno-964259078-large.jpg",categories:["classics"]}];var d,p=n(213);!function(t){t.name="name",t.category="category",t.link="link"}(d||(d={}));class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({name:null,category:null,link:null})}connectedCallback(){this.render()}filterData(t){this.moviesData=r.filter((e=>e.categories.includes(t)))}attributeChangedCallback(t,e,n){this[t]=n,this.filterData(this.category),this.render()}render(){if(this.shadowRoot){const t=document.createElement("style");t.textContent=p.A;const e=null!=this.moviesData?this.moviesData:[];console.log(e),this.shadowRoot.innerHTML=`\n                <a href="${this.link}"><h1>${this.name}</h1></a>\n\t\t\t\t<section id="cards">\n\t\t\t\t\t${e.map((t=>`\n\t\t\t\t\t\t<movie-card image="${t.image}"></movie-card>\n\t\t\t\t\t`)).join("")}\n\t\t\t\t</section>\n\n            `,this.shadowRoot.appendChild(t)}}}customElements.define("category-section",h);var m=n(583);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){this.shadowRoot.innerHTML='\n\t\t\t\t<section class= "container">\n\n\t\t\t\t\t<button id = "ButtonModal">+</button>\n\t\t</section>\n\t\t\t\t<section class="modalContainer" style="display: none;">\n    <div class="modal-overlay">\n\t\t\t\t<section class="modal-content">\n\t\t\t\t\t<form class="my-form">\n\t\t\t\t\t<section id="header">\n\t\t\t\t\t\t<span class = "close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>\n\t\t\t\t\t\t\t<h2>Add a movie</h2>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<label for="fname">Name movie</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="fname" name="fname" placeholder="Pearl"><br><br>\n\t\t\t\t\t\t\t\t<label for="director">Director</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="directorMovie" name="director" placeholder="Ti West"><br><br>\n\t\t\t\t\t\t\t\t<label for="date">Release date</label><br>\n\t\t\t\t\t\t\t\t<input type="date" id="datemovie" name="date" ><br><br>\n\t\t\t\t\t\t\t\t<label for="description">Description</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="descriptionMovie" name="description" placeholder="Pearl (subtitled An X-traordinary Origin Story) is a 2022 American horror film directed by Ti West, co-written by West and Mia Goth, who reprises her role as the title character, and featuring David Corenswet, Tandi Wright, Matthew Sunderland and Emma Jenkins-Purro in supporting roles. A prequel to X (2022) and the second installment in the X film series, it serves as an origin story for the title villain, whose fervent aspiration to become a movie star led her to committing violent acts on her family\'s Texas homestead in 1918."><br><br>\n\t\t\t\t\t\t\t\t<label for="cast">Cast</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="castMovie" name="cast" placeholder="Mia Goth, David Corenswet, Alistair Sewell, Emma Jenkins, Matthew Sunderland, Tandi Wright"><br><br>\n\t\t\t\t\t\t\t\t<label for="crew">Crew</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="crewMovie" name="crew" placeholder="Mia Goth, David Corenswet, Alistair Sewell, Emma Jenkins, Matthew Sunderland, Tandi Wright"><br><br>\n\t\t\t\t\t\t\t\t<label for="poster">Enter movie poster url</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="movieposter" name="poster" placeholder="https://pics.filmaffinity.com/Pearl-745024740-large.jpg"><br><br>\n\t\t\t\t\t\t\t\t<label for="image">Enter secondary image url</label><br>\n\t\t\t\t\t\t\t\t<input type="text" id="movieimage" name="image" placeholder="https://pics.filmaffinity.com/Pearl-745024740-large.jpg"><br><br>\n\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t\t<label for="crew">Genres</label><br>\n\t\t\t\t\t\t\t\t\t\t<section id="checkboxes">\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="romance" value="first-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="romance">Romance</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="action" value="second-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="action">Action</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="comedy" value="thirth-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="comedy">Comedy</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="Thriller" value="fourth-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="thriller">Thriller</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="sci-fi" value="fifth-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="sci-fi">Sci-Fi</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="drama" value="sixth-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="drama">Drama</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="animated" value="seventh-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="animated">Animated</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="classic" value="eighth-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="classic">Classics</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="documental" value="ninth-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="documental">Documental</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class="label-chechbox">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="psychological" value="second-checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label for="psychological">Psychological</label>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<button type="submit">Submit</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\n\t\t</section>\n\t\t</section>\n      ';const e=this.ownerDocument.createElement("style");e.innerHTML=m.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e);const n=this.shadowRoot.querySelector(".modalContainer");this.shadowRoot.querySelector(".close").addEventListener("click",(()=>{n.style.display="none"})),window.addEventListener("click",(t=>{t.target==n&&(n.style.display="none")})),this.shadowRoot.querySelector("#ButtonModal").addEventListener("click",(t=>{n.style.display="block"})),this.shadowRoot.querySelector(".my-form").addEventListener("submit",(t=>{t.preventDefault(),n.style.display="none"}))}}}customElements.define("modal-movie",b);var g,u=n(679);!function(t){t.buttonlabel="buttonlabel"}(g||(g={}));class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({buttonlabel:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t      <button type="button">${this.buttonlabel}</button>\n      `);const e=this.ownerDocument.createElement("style");e.innerHTML=u.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("my-button",f);var y,x=n(167);!function(t){t.icon_url="icon_url",t.label="label",t.link="link",t.description_icon="description_icon"}(y||(y={}));class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({icon_url:null,label:null,link:null,description_icon:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n<a href="${this.link}"><p>${this.label}</p> <img src="${this.icon_url}" alt="${this.description_icon}"></a>\n      `;const e=this.ownerDocument.createElement("style");e.innerHTML=x.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}}customElements.define("my-actionandicon",v);var w,k=n(909);!function(t){t.label="label"}(w||(w={}));class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({label:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <section>\n      <label for="crew">${this.label}</label><br>\n      <section id="checkboxes">\n      <section class="label-chechbox">\n      <input type="checkbox" id="romance" value="first-checkbox" />\n      <label for="romance">Romance</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="action" value="second-checkbox" />\n      <label for="action">Action</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="comedy" value="thirth-checkbox" />\n      <label for="comedy">Comedy</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="Thriller" value="fourth-checkbox" />\n      <label for="thriller">Thriller</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="sci-fi" value="fifth-checkbox" />\n      <label for="sci-fi">Sci-Fi</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="drama" value="sixth-checkbox" />\n      <label for="drama">Drama</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="animated" value="seventh-checkbox" />\n      <label for="animated">Animated</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="classic" value="eighth-checkbox" />\n      <label for="classic">Classics</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="documental" value="ninth-checkbox" />\n      <label for="documental">Documental</label>\n      </section>\n      <section class="label-chechbox">\n      <input type="checkbox" id="psychological" value="second-checkbox" />\n      <label for="psychological">Psychological</label>\n      </section>\n      `);const e=this.ownerDocument.createElement("style");e.innerHTML=k.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("my-filters",M);var C=n(647);class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML='\n\t\t\t<body>\n      <my-banner message="Track films you\'ve watched. Save those you want to see. Tell your friends what\'s good."\n\t\t\tbuttonlabel="GET AN ACCOUNT, IT\'S FREE"></my-banner>\n\t\t\t<category-section name="Popular films in the community" category="popular" link="https://myflixerz.to/movie"></category-section>\n\t\t\t\t<category-section name="On cinema right now" category="cinema"></category-section>\n\t\t\t\t<category-section name="Trending this week" category="trending"></category-section>\n\t\t\t\t<category-section name="classics" category="classics"></category-section>\n\t\t\t\t<modal-movie></modal-movie>\n\t\t\t\t</body>\n\t\t\t');const e=this.ownerDocument.createElement("style");e.innerHTML=C.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("app-container",E)})()})();
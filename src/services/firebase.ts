import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db

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
const auth = getAuth(app);

const uploadData = async () => {
	try {
		const docRef = await addDoc(collection(db, 'users'), {
			first: 'Ada',
			last: 'Lovelace',
			born: 1815,
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

uploadData();

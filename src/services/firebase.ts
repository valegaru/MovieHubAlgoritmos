import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; //Importar funciones para agregar info a la db
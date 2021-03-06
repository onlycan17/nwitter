import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import {
    getFirestore,
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
    onSnapshot,
    doc,
    query,
    orderBy,
    deleteDoc,
    updateDoc,
    where
} from "firebase/firestore";
import { 
    getDownloadURL, 
    getStorage, 
    ref, 
    uploadString  } from "firebase/storage";


//import firestore from "firebase.firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const signIn = signInWithEmailAndPassword;
export const createUser = createUserWithEmailAndPassword;
export const onAuthStateChanged1 = onAuthStateChanged;
export const googleAuth = GoogleAuthProvider;
export const githubAuth = GithubAuthProvider;
export const signPopup = signInWithPopup;
export const signOutEx = signOut;
export const dbService = getFirestore;
export const nowDate = serverTimestamp;
export const addDocEx = addDoc;
export const collectionEx = collection;
export const serverTimestampEx = serverTimestamp;
export const getDocsEx = getDocs;
export const onSnapShotEx = onSnapshot;
export const docEx = doc;
export const queryEx = query;
export const orderbyEx = orderBy;
export const deleteDocEx = deleteDoc;
export const updateDocEx = updateDoc;
export const storage = getStorage();
export const refEx = ref;
export const uploadStringEx = uploadString;
export const getDownloadURLEx = getDownloadURL;
export const whereEx = where;
export const updateProfileEx = updateProfile;
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyB41t4sB_fgt_v7wDHsHFktN-oaMa-Aypg",
    authDomain: "job-portal-credentials-76586.firebaseapp.com",
    databaseURL: "https://job-portal-credentials-76586-default-rtdb.firebaseio.com",
    projectId: "job-portal-credentials-76586",
    storageBucket: "job-portal-credentials-76586.firebasestorage.app",
    messagingSenderId: "614393838940",
    appId: "1:614393838940:web:1be02a5bb349a110181599"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth instance
const firebaseAuth = getAuth(firebaseApp);

const API = axios.create({
    baseURL: 'http://localhost:5000' // Your backend server URL
});

// Firebase Authentication Functions
export const registerWithFirebase = async (email, password, role) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        await API.post('/auth/register', { email, password, role });
        return user;
    } catch (error) {
        throw error;
    }
};

export const loginWithFirebase = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const token = await userCredential.user.getIdToken();
        const res = await API.post('/auth/login', { email, password, token });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export default API;
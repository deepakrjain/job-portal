import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
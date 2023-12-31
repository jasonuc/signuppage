
const firebaseConfig = {
    apiKey: import.meta.env.VITE_VERCEL_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_VERCEL_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_VERCEL_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_VERCEL_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_VERCEL_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_VERCEL_FIREBASE_APP_ID,
    measurementId: "G-6S2HPV401G"
};

export default firebaseConfig;
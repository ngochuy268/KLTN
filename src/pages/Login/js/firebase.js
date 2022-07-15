import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIAovuPOgt3hmJ0vj0g6MJRfcPwApXgk4",
    authDomain: "phone-otp-e97cc.firebaseapp.com",
    projectId: "phone-otp-e97cc",
    storageBucket: "phone-otp-e97cc.appspot.com",
    messagingSenderId: "149566332488",
    appId: "1:149566332488:web:259d7854d5db3c4caa827d",
    measurementId: "G-LZDHYT5GD9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };
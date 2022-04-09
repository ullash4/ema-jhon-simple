import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD1KtBqPAcn5mL36gGfDFIZS70N3NDREb0",
  authDomain: "ema-john-intregation.firebaseapp.com",
  projectId: "ema-john-intregation",
  storageBucket: "ema-john-intregation.appspot.com",
  messagingSenderId: "798355640513",
  appId: "1:798355640513:web:197945a64ddcd37c31c440"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
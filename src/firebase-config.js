import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDihhmBtPNRflzzg5U_opo0EQPYg82U7Sk",
  authDomain: "routeracademy-4e7cc.firebaseapp.com",
  projectId: "routeracademy-4e7cc",
  storageBucket: "routeracademy-4e7cc.appspot.com",
  messagingSenderId: "350895920413",
  appId: "1:350895920413:web:9b224b1b849d1a2ecdbdf4",
  measurementId: "G-1BBXXG629E"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
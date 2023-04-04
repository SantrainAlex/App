import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD71AgDn-sSDNeKPKFQTMMklQMVfTsfXYQ",
    authDomain: "tirssc-aa2ef.firebaseapp.com",
    databaseURL: "https://tirssc-aa2ef-default-rtdb.firebaseio.com",
    projectId: "tirssc-aa2ef",
    storageBucket: "tirssc-aa2ef.appspot.com",
    messagingSenderId: "933761907600",
    appId: "1:933761907600:web:253052cf74faa960c1d115",
    measurementId: "G-ZVS40NSHJ5"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

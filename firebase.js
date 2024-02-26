
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCLlzbfHND9d-8JbQHYpk63KQy15yhd2R4",
  authDomain: "chai-ra-mama.firebaseapp.com",
  projectId: "chai-ra-mama",
  storageBucket: "chai-ra-mama.appspot.com",
  messagingSenderId: "590116206181",
  appId: "1:590116206181:web:3d2ca7368294b30c6c788c",
  measurementId: "G-2H13RNCJWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
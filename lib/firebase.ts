import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYHQkOREb7bv1lK_mDmfE6_rrDqr2pP8M",
  authDomain: "se1a-91c43.firebaseapp.com",
  projectId: "se1a-91c43",
  storageBucket: "se1a-91c43.appspot.com",
  messagingSenderId: "794021045359",
  appId: "1:794021045359:web:a1583a467e314d290a199a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app); // 👈 این رو اضافه کن

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  startAt,
  startAfter,
} from "firebase/firestore";
import documents from "../data/documents";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswY9EWLSfT-2YuzD6zBMqWzvaMn_SEPY",
  authDomain: "legalapp-b8d09.firebaseapp.com",
  projectId: "legalapp-b8d09",
  storageBucket: "legalapp-b8d09.appspot.com",
  messagingSenderId: "924633660919",
  appId: "1:924633660919:web:1b5ffcc346a6873f8542f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function APICallSingleDocuments(id) {
  //const id = "1Ya8gu7u24pAuGlGILLf";
  const docRef = doc(db, "documents", id);
  const docSnap = await getDoc(docRef);
  let document = docSnap.data();
  document.id = docSnap.id;
  return document;
}

export async function APICallDocuments(setUltimo) {
  const collectionRef = query(collection(db, "documents"));
  const q = query(collectionRef, orderBy("title", "asc"), limit(3));
  const querySnapshot = await getDocs(q);
  let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const docsArray = querySnapshot.docs;
  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
  setUltimo(lastVisible);
  return dataDocs;
}

export async function APICallDocumentsMore(ultimo, setUltimo) {
  let bandera = true;
  if (bandera) {
    const first = query(
      collection(db, "documents"),
      orderBy("title", "asc"),
      startAfter(ultimo),
      limit(3)
    );
    const querySnapshot = await getDocs(first);
    const docsArray = querySnapshot.docs;
    let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
    return dataDocs;
  } else {
    bandera = false;
    const next = query(
      collection(db, "documents"),
      orderBy("title", "asc"),
      startAfter(ultimo),
      limit(3)
    );
    const querySnapshot = await getDocs(next);
    let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    setUltimo(lastVisible);
    const docsArray = querySnapshot.docs;
    let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
    return dataDocs;
  }
}

export async function APICallDocumentsCategory(category) {
  const collectionRef = query(collection(db, "documents"));
  const q = query(collectionRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const docsArray = querySnapshot.docs;
  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataDocs;
}

export async function APICallDocumentsTitle(title) {
  console.log("Titulo que llega por props: ", title);
  const collectionRef = query(collection(db, "documents"));
  console.log("Collection: ", collectionRef);
  const q = query(collectionRef, where(title, "in", collectionRef));
  console.log("Firebase Filter Title", q);
  const querySnapshot = await getDocs(q);
  const docsArray = querySnapshot.docs;

  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataDocs;
}

export async function createCollection() {
  const docRef = collection(db, "documents");
  documents.map((item) => {
    return addDoc(docRef, item);
  });
}

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
  writeBatch,
  documentId,
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

export async function APICallDocumentsFireBase() {
  const collectionRef = query(collection(db, "documents"));
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const docsArray = querySnapshot.docs;
  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataDocs;
}

export async function APICallSingleDocuments(id) {
  //const id = "1Ya8gu7u24pAuGlGILLf";
  const docRef = doc(db, "documents", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let document = docSnap.data();
    document.id = docSnap.id;
    return document;
  } else {
    console.log("No such document!");
  }
}

export async function APICallDocumentsCategoryId(categoryId) {
  const collectionRef = query(collection(db, "documents"));
  const q = query(collectionRef, where("categoryId", "==", categoryId));
  const querySnapshot = await getDocs(q);
  const docsArray = querySnapshot.docs;
  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataDocs;
}

export async function APICallSingleDocumentsNext() {
  /** const next = query(
    collection(db, "documents"),
    limit(1)
  );
  const querySnapshot = await getDocs(next);
  const docsArray = querySnapshot.docs;
  if (!docsArray.empty) {
    let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); 
    return dataDocs;
  } else {
    alert("No hay mas documentos");
  }*/
}

export async function APICallDocuments(setUltimo) {
  const collectionRef = query(collection(db, "documents"));
  const q = query(collectionRef, orderBy("title", "asc"), limit(3));
  const querySnapshot = await getDocs(q);
  let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  setUltimo(lastVisible);
  const docsArray = querySnapshot.docs;
  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
  return dataDocs;
}

export async function APICallMyDocuments(setUltimo) {
  const collectionRef = query(collection(db, "documents"));
  const q = query(collectionRef, limit(3), where("myDocument", "==", true));
  const querySnapshot = await getDocs(q);
  let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  setUltimo(lastVisible);
  const docsArray = querySnapshot.docs;
  let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
  return dataDocs;
}

export async function APICallDocumentsMore(ultimo, setUltimo) {
  if (ultimo !== undefined) {
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
    if (docsArray.length > 0) {
      let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
      return dataDocs;
    } else {
      return [];
    }
  }
}

export async function APICallMyDocumentsMore(ultimo, setUltimo) {
  if (ultimo !== undefined) {
    const next = query(
      collection(db, "documents"),
      where("myDocument", "==", true),
      limit(3),
      startAfter(ultimo)
    );
    const querySnapshot = await getDocs(next);
    let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    setUltimo(lastVisible);
    const docsArray = querySnapshot.docs;
    if (docsArray.length > 0) {
      let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id })); // /*let item = doc.data(); item.id = doc.id; return item; */
      return dataDocs;
    } else {
      return [];
    }
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

export async function createCollection() {
  const docRef = collection(db, "documents");
  for (let item of documents) {
    let newItem = await addDoc(docRef, item);
    console.log("Items creados", newItem);

    /** addDoc(docRef, item).then((collection) =>
      console.log("Items creados", collection)
    );*/
  }
}

export async function createBuyOrder(order) {
  const docRef = collection(db, "orders");
  let newOrder = await addDoc(docRef, order);
  return newOrder.id;
}

export async function createBuyOrder_WithStockControl(order) {
  const docOrderRef = collection(db, "orders");
  const docRef = collection(db, "documents");

  let batch = writeBatch(db);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(docRef, where(documentId(), "in", arrayIds));
  let querySnapshot = await getDocs(q);

  querySnapshot.docs.forEach((doc) => {
    let stockDisponible = doc.data().stock;
    console.log("stockDisponible", stockDisponible);
    let itemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = itemInCart.cantidad;
    console.log("countItemInCart", countItemInCart);
    if (stockDisponible < countItemInCart) {
      throw new Error(`Stock no disponible para el producto ${doc.id}`);
    } else {
      batch.update(doc.ref, { stock: stockDisponible - countItemInCart });
    }
  });

  await batch.commit();
  let newOrder = await addDoc(docOrderRef, order);
  return newOrder.id;
}

export async function updated_MyDocumentsControl(order) {
  const docRef = collection(db, "documents");
  let batch = writeBatch(db);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(docRef, where(documentId(), "in", arrayIds));
  let querySnapshot = await getDocs(q);

  querySnapshot.docs.forEach((doc) => {
    if (doc.data().myDocument === true) {
      console.log("Documento ya esta en myDocument");
    } else {
      batch.update(doc.ref, { myDocument: true });
    }
  });
  await batch.commit();
}

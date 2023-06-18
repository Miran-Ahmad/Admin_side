import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  firestore: Firestore = inject(Firestore);
  constructor() {}
  public async getProducts() {
    const colRef = collection(this.firestore, 'data');
    const snap = await getDocs(colRef);

    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
  public async addProducts(data) {
    const colRef = collection(this.firestore, 'data');
    const snap = await addDoc(colRef, data);
  }

  //https://localhost:300/edit-products/1234
  //edit-products/:id

  public async getProduct(id) {
    const colRef = collection(this.firestore, 'data');
    const docRef = doc(colRef, id);
    const snap = await getDoc(docRef);

    return {
      ...snap.data(),
      id: snap.id,
    };
  }
}

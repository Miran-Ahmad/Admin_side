import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  firestore = inject(Firestore);

  async getAllData() {
    const colRef = collection(this.firestore, 'products');
    const querySnapshot = await getDocs(colRef);
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
}

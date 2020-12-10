import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoCollection: AngularFirestoreCollection<Carrito>;

  constructor(private db: AngularFirestore) { 
    this.carritoCollection = this.db.collection<Carrito>('carrito');
  }



  getAllCarritos(): Observable<DocumentChangeAction<Carrito>[]>{
    return this.carritoCollection.snapshotChanges();
  }

  getCarrito(carritoId: string): Observable<Action<DocumentSnapshot<Carrito>>>{
    return this.carritoCollection.doc<Carrito>(carritoId).snapshotChanges();
  }
  
  createCarrito(newCarrito: Carrito): Promise<any> {
    return this.carritoCollection.add(newCarrito);
  }

  updateCarrito(data: Carrito, docId: string): Promise<void> {
    return this.carritoCollection.doc<Carrito>(docId).update(data);
  }

  deleteCarrito(docId: string): Promise<void>{
    return this.carritoCollection.doc<Carrito>(docId).delete();
  }

}


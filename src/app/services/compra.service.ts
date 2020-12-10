import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private compraCollection: AngularFirestoreCollection<Compra>;
  constructor(private db: AngularFirestore) {
    this.compraCollection = this.db.collection<Compra>('compra');
   }



  getAllCompras(): Observable<DocumentChangeAction<Compra>[]>{
    return this.compraCollection.snapshotChanges();
  }

  getCompra(compraId: string): Observable<Action<DocumentSnapshot<Compra>>>{
    return this.compraCollection.doc<Compra>(compraId).snapshotChanges();
  }
  
  createCompra(newCompra: Compra): Promise<any> {
    return this.compraCollection.add(newCompra);
  }

  updateCompra(data: Compra, docId: string): Promise<void> {
    return this.compraCollection.doc<Compra>(docId).update(data);
  }

  deleteCompra(docId: string): Promise<void>{
    return this.compraCollection.doc<Compra>(docId).delete();
  }

}


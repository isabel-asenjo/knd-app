import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MetodoPago } from '../models/metodo-pago';

@Injectable({
  providedIn: 'root'
})
export class MetodosPagoService {
  private metodosPagoCollection: AngularFirestoreCollection<MetodoPago>;

  constructor(private db: AngularFirestore) { 
    this.metodosPagoCollection = this.db.collection<MetodoPago>('metodosPago');
  }

  getAllMetodosPago(): Observable<DocumentChangeAction<MetodoPago>[]>{
    return this.metodosPagoCollection.snapshotChanges();
  }
  
  createProduct(newMetodoPago: MetodoPago): Promise<any> {
    return this.metodosPagoCollection.add(newMetodoPago);
  }

  updateProduct(data: MetodoPago, docId: string): Promise<void> {
    return this.metodosPagoCollection.doc<MetodoPago>(docId).update(data);
  }

  deleteProduct(docId: string): Promise<void>{
    return this.metodosPagoCollection.doc<MetodoPago>(docId).delete();
  }
}
import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InfoPago } from '../models/info-pago';

@Injectable({
  providedIn: 'root'
})
export class InfoPagoService {

  private infoPagoCollection: AngularFirestoreCollection<InfoPago>;

  constructor(private db: AngularFirestore) { 
    this.infoPagoCollection = this.db.collection<InfoPago>('infoPago');
  }

  getAllInfoPago(): Observable<DocumentChangeAction<InfoPago>[]>{
    return this.infoPagoCollection.snapshotChanges();
  }
  
  getInfoPago(infoPagoId: string): Observable<Action<DocumentSnapshot<InfoPago>>>{
    return this.infoPagoCollection.doc<InfoPago>(infoPagoId).snapshotChanges();
  }

  createInfoPago(newInfoPago: InfoPago): Promise<any> {
    return this.infoPagoCollection.add(newInfoPago);
  }

  updateInfoPago(data: InfoPago, docId: string): Promise<void> {
    return this.infoPagoCollection.doc<InfoPago>(docId).update(data);
  }

  deleteInfoPago(docId: string): Promise<void>{
    return this.infoPagoCollection.doc<InfoPago>(docId).delete();
  }
}


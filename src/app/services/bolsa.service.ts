import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs';
import { Bolsa } from '../models/bolsa';

@Injectable({
  providedIn: 'root'
})
export class BolsaService {
  private bolsaCollection: AngularFirestoreCollection<Bolsa>;

  constructor(private db: AngularFirestore) { 
    this.bolsaCollection = this.db.collection<Bolsa>('bolsa');
  }


  getAllBolsas(): Observable<DocumentChangeAction<Bolsa>[]>{
    return this.bolsaCollection.snapshotChanges();
  }

  getBolsa(bolsaId: string): Observable<Action<DocumentSnapshot<Bolsa>>>{
    return this.bolsaCollection.doc<Bolsa>(bolsaId).snapshotChanges();
  }
  
  createBolsa(newBolsa: Bolsa): Promise<any> {
    return this.bolsaCollection.add(newBolsa);
  }

  updateBolsa(data: Bolsa, docId: string): Promise<void> {
    return this.bolsaCollection.doc<Bolsa>(docId).update(data);
  }

  deleteBolsa(docId: string): Promise<void>{
    return this.bolsaCollection.doc<Bolsa>(docId).delete();
  }
}

import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MetodoEnvio } from '../models/metodo-envio';

@Injectable({
  providedIn: 'root'
})
export class MetodosEnvioService {
  private metodosEnvioCollection: AngularFirestoreCollection<MetodoEnvio>;

  constructor(private db: AngularFirestore) { 
    this.metodosEnvioCollection = this.db.collection<MetodoEnvio>('metodosEnvio');
  }

  getAllMetodosEnvio(): Observable<DocumentChangeAction<MetodoEnvio>[]>{
    return this.metodosEnvioCollection.snapshotChanges();
  }
  
  getMetodoEnvio(metodoEnvioId: string): Observable<Action<DocumentSnapshot<MetodoEnvio>>>{
    return this.metodosEnvioCollection.doc<MetodoEnvio>(metodoEnvioId).snapshotChanges();
  }

  createMetodoEnvio(newMetodoEnvio: MetodoEnvio): Promise<any> {
    return this.metodosEnvioCollection.add(newMetodoEnvio);
  }

  updateMetodoEnvio(data: MetodoEnvio, docId: string): Promise<void> {
    return this.metodosEnvioCollection.doc<MetodoEnvio>(docId).update(data);
  }

  deleteMetodoEnvio(docId: string): Promise<void>{
    return this.metodosEnvioCollection.doc<MetodoEnvio>(docId).delete();
  }
}

import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InfoEnvio } from '../models/info-envio';

@Injectable({
  providedIn: 'root'
})
export class InfoEnvioService {

  private infoEnvioCollection: AngularFirestoreCollection<InfoEnvio>;

  constructor(private db: AngularFirestore) { 
    this.infoEnvioCollection = this.db.collection<InfoEnvio>('infoEnvio');
  }

  getAllInfoEnvio(): Observable<DocumentChangeAction<InfoEnvio>[]>{
    return this.infoEnvioCollection.snapshotChanges();
  }
  
  getInfoEnvio(infoEnvioId: string): Observable<Action<DocumentSnapshot<InfoEnvio>>>{
    return this.infoEnvioCollection.doc<InfoEnvio>(infoEnvioId).snapshotChanges();
  }

  createInfoEnvio(newInfoEnvio: InfoEnvio): Promise<any> {
    return this.infoEnvioCollection.add(newInfoEnvio);
  }

  updateInfoEnvio(data: InfoEnvio, docId: string): Promise<void> {
    return this.infoEnvioCollection.doc<InfoEnvio>(docId).update(data);
  }

  deleteInfoEnvio(docId: string): Promise<void>{
    return this.infoEnvioCollection.doc<InfoEnvio>(docId).delete();
  }
}

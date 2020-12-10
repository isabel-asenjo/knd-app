import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InfoEnvio } from '../models/info-envio';

@Injectable({
  providedIn: 'root'
})
export class InfoEnvioService {

  private infoEnviosCollection: AngularFirestoreCollection<InfoEnvio>;

  constructor(private db: AngularFirestore) { 
    this.infoEnviosCollection = this.db.collection<InfoEnvio>('infoEnvio');
  }

  getAllInfoEnvios(): Observable<DocumentChangeAction<InfoEnvio>[]>{
    return this.infoEnviosCollection.snapshotChanges();
  }
  
  getInfoEnvio(infoEnvioId: string): Observable<Action<DocumentSnapshot<InfoEnvio>>>{
    return this.infoEnviosCollection.doc<InfoEnvio>(infoEnvioId).snapshotChanges();
  }

  createInfoEnvio(newInfoEnvio: InfoEnvio): Promise<any> {
    return this.infoEnviosCollection.add(newInfoEnvio);
  }
}

import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteCollection: AngularFirestoreCollection<Cliente>;

  constructor(private db: AngularFirestore) { 
    this.clienteCollection = this.db.collection<Cliente>('cliente');
  }




  getAllClientes(): Observable<DocumentChangeAction<Cliente>[]>{
    console.log(this.clienteCollection.snapshotChanges());
    return this.clienteCollection.snapshotChanges();
  }

  getCliente(clienteId: string): Observable<Action<DocumentSnapshot<Cliente>>>{
    return this.clienteCollection.doc<Cliente>(clienteId).snapshotChanges();
  }
  
  createCliente(newCliente: Cliente): Promise<any> {
    return this.clienteCollection.add(newCliente);
  }

  updateCliente(data: Cliente, docId: string): Promise<void> {
    return this.clienteCollection.doc<Cliente>(docId).update(data);
  }

  deleteCliente(docId: string): Promise<void>{
    return this.clienteCollection.doc<Cliente>(docId).delete();
  }
}
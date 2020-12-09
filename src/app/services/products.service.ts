import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productCollection: AngularFirestoreCollection<Product>;

  constructor(private db: AngularFirestore) { 
    this.productCollection = this.db.collection<Product>('products');
  }

  getAllProducts(): Observable<DocumentChangeAction<Product>[]>{
    return this.productCollection.snapshotChanges();
  }

  getProduct(productId: string): Observable<Action<DocumentSnapshot<Product>>>{
    return this.productCollection.doc<Product>(productId).snapshotChanges();
  }
  
  createProduct(newProduct: Product): Promise<any> {
    return this.productCollection.add(newProduct);
  }

  updateProduct(data: Product, docId: string): Promise<void> {
    return this.productCollection.doc<Product>(docId).update(data);
  }

  deleteProduct(docId: string): Promise<void>{
    return this.productCollection.doc<Product>(docId).delete();
  }

}

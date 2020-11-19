import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
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

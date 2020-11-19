import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesCollection: AngularFirestoreCollection<Category>;

  constructor(private db: AngularFirestore) { 
    this.categoriesCollection = this.db.collection<Category>('categories');
  }

  getAllProducts(): Observable<DocumentChangeAction<Category>[]>{
    return this.categoriesCollection.snapshotChanges();
  }
  
  createProduct(newCategory: Category): Promise<any> {
    return this.categoriesCollection.add(newCategory);
  }

  updateProduct(data: Category, docId: string): Promise<void> {
    return this.categoriesCollection.doc<Category>(docId).update(data);
  }

  deleteProduct(docId: string): Promise<void>{
    return this.categoriesCollection.doc<Category>(docId).delete();
  }
}

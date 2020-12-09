import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import {ControlWarningModalService} from 'src/app/services/control-warning-modal.service';

@Component({
  selector: 'app-crud-delete-category',
  templateUrl: './crud-delete-category.component.html',
  styleUrls: ['./crud-delete-category.component.scss']
})
export class CrudDeleteCategoryComponent implements OnInit {

  categories: Array<Category> = [];
  private categoryCollection: AngularFirestoreCollection<Category>;
  constructor(private categoryService: CategoriesService) { }
  display: boolean = false;  
  @Output() onClick = new EventEmitter<any>();

  ngOnInit(): void {
    this.getAllCategories();
  }
  
  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe((items) => {
      this.categories = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc.id,
          } as Category)
      )
    });
  }

  deleteCategory(categoryId): void{
    this.categoryService.deleteCategory(categoryId).then(res =>{}).catch(err=>console.log(err));
  }

  activate(): boolean {
    this.display = true;
    console.log(this.display);
    return this.display;
  }

  click(event) {
    this.onClick.emit(true);
  }
}

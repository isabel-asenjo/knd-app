import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-crud-read-category',
  templateUrl: './crud-read-category.component.html',
  styleUrls: ['./crud-read-category.component.scss']
})
export class CrudReadCategoryComponent implements OnInit {

  categories: Array<Category> = [];

  constructor(private categoryService: CategoriesService) { }

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

}

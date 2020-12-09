import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup = null;

  constructor(private categoriesService: CategoriesService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  editCategory: Category = null;
  categoryId: string;

  ngOnInit(): void {
    this.createForm();

    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');

      if(this.categoryId) {
        this.categoriesService.getCategory(this.categoryId).subscribe(item =>{
          this.editCategory = {
            ...item.payload.data(),
            $key: item.payload['id'],
          };
      
          this.categoryForm.patchValue({
            name: this.editCategory.name,
            description: this.editCategory.description,
            products: this.editCategory.products,
          })
        })
      }
    })
  }

  createForm(): void{
    this.categoryForm = this.fb.group({
      name: [''],
      description: [''],
      products: [''],
    })
  }

  pathFormValues(): void{
    this.categoryForm.patchValue({
      name: this.editCategory.name,
      description: this.editCategory.description,
      products: this.editCategory.products,
    })
  }
  
  createCategory(newCategory: Category): void{
    this.categoriesService.createCategory(newCategory).then(res =>{
       this.router.navigate(['/admin-cruds/read-category']);
    }).catch(err => console.log(err));
  }
  
  onSubmit():void{
    const newCategory: Category = {
      name: this.categoryForm.get('name').value,
      description: this.categoryForm.get('description').value,
      products: this.categoryForm.get('products').value,
    }

    this.createCategory(newCategory);
  }

}

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
  categories: Array<Category> = [];
  
  constructor(private categoriesService: CategoriesService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  editCategory: Category = null;
  categoryId: string;

  ngOnInit(): void {
    this.createForm();
    this.getAllCategories();
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


    if (newCategory.name != ""){

      if (this.editCategory) {
        var rep = 0;
        for (var c of this.categories){
          if (c.name == newCategory.name){
            rep+=1
            if (rep == 2){
              alert("Ya existe una categoría con este nombre en su base de datos.");
              return;
            }
          }
          
        }
        this.updateCategory(newCategory);
        return;
      }
  
      for (var c of this.categories){
        if (c.name == newCategory.name){
          alert("Ya existe una categoría con este nombre en su base de datos.");
          return;
        }
      }
      this.createCategory(newCategory);
      return;      
    }
  
    alert("Ha ingresado algún dato inválido o ha dejado un campo vacío.");
  }

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe((items) => {
      this.categories = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as Category)
      )
    });
  }

  updateCategory(data: Category): void {
    this.categoriesService.updateCategory(data, this.categoryId).then((res) => {
      this.router.navigate(['/admin-cruds/category/read']); // modificar esto
    });
  }


}

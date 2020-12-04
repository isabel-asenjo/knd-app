import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup = null;

  constructor(private productService: ProductsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  editProduct: Product = null;
  productId: string;

  ngOnInit(): void {
    this.createForm();

    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId');

      if(this.productId) {
        this.productService.getProduct(this.productId).subscribe(item =>{
          this.editProduct = {
            ...item.payload.data(),
            $key: item.payload["id"],
          };
      
          this.productForm.patchValue({
            name: this.editProduct.name,
            description: this.editProduct.description,
            price: this.editProduct.price,
            category: this.editProduct.category,
          })
        })
      }
    })
  }

  createForm(): void{
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      category: [''],
    })
  }

  pathFormValues(): void{
    this.productForm.patchValue({
      name: this.editProduct.name,
      description: this.editProduct.description,
      price: this.editProduct.price,
      category: this.editProduct.category,
    })
  }
  
  createProduct(newProduct: Product): void{
    this.productService.createProduct(newProduct).then(res =>{
       this.router.navigate(['/admin-cruds/read']);
    }).catch(err => console.log(err));
  }
  
  onSubmit():void{
    const dataProduct: Product = {
      name: this.productForm.get('name').value,
      description: this.productForm.get('description').value,
      price: this.productForm.get('price').value,
      category: this.productForm.get('category').value,
    }

    if (dataProduct.price > 0){
      if (this.editProduct) {
        this.updateProduct(dataProduct);
        return;
      }
  
      this.createProduct(dataProduct);
    }

    // poner un else que lance error
    
  }


  updateProduct(data: Product): void {
    this.productService.updateProduct(data, this.productId).then((res) => {
      this.router.navigate(['/admin-cruds/read']);
    });
  }
  
}

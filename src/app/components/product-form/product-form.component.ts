import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { ProductsService } from 'src/app/services/products.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('imageProd',{static:true}) inputImageProd: ElementRef;
  productForm: FormGroup = null;
  products: Array<Product> = [];

  constructor(private storage: AngularFireStorage, private productService: ProductsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  editProduct: Product = null;
  productId: string;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  image: '';
  

  ngOnInit(): void {
    this.createForm();
    this.getAllProducts();
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
            image: this.editProduct.imageUrl,
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
      image: [''],
    })
  }

  pathFormValues(): void{
    this.productForm.patchValue({
      name: this.editProduct.name,
      description: this.editProduct.description,
      price: this.editProduct.price,
      category: this.editProduct.category,
      image: this.editProduct.imageUrl,
    })
  }
  
  createProduct(newProduct: Product): void{
    this.productService.createProduct(newProduct).then(res =>{
       this.router.navigate(['/admin-cruds/product/read']);
    }).catch(err => console.log(err));
  }
  
  onSubmit():void{
    console.log('sos',this.inputImageProd.nativeElement.value);
    const dataProduct: Product = {
      name: this.productForm.get('name').value,
      description: this.productForm.get('description').value,
      price: this.productForm.get('price').value,
      category: this.productForm.get('category').value,
      imageUrl: this.inputImageProd.nativeElement.value,
      


    }
    console.log("url: ",dataProduct.imageUrl);

    if ((dataProduct.price > 0) && (dataProduct.name != "")){

      if (this.editProduct) {
        var rep = 0;
        for (var p of this.products){
          if (p.name == dataProduct.name){
            rep+=1
            if (rep == 2){
              alert("Ya existe un producto con este nombre en su base de datos.");
              return;
            }
          }
          
        }
        this.updateProduct(dataProduct);
        return;
      }
  
      for (var p of this.products){
        if (p.name == dataProduct.name){
          alert("Ya existe un producto con este nombre en su base de datos.");
          return;
        }
      }
      this.createProduct(dataProduct);
      return;      
    }

    alert("Ha ingresado algún dato inválido o ha dejado un campo vacío.");
    
  }


  updateProduct(data: Product): void {
    this.productService.updateProduct(data, this.productId).then((res) => {
      this.router.navigate(['/admin-cruds/product/read']); // modificar esto
    });
  }
  

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((items) => {
      this.products = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc["id"],
          } as Product)
      )
    });
  }



  onUpload(e) {
    console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `product-images/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

}

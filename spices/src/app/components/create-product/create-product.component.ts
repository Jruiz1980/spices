/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'spice-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  productForm: FormGroup;
  title = 'Create Product';
  id: string | null;
  product: Product | null = null;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productService: ProductService,
              private aRouter: ActivatedRoute
            ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      price: ['', Validators.required],
  });
  this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    /*throw new Error('Method not implemented.');*/
    /*this.updateProduct();
  }

  addProduct(){

    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      ubication: this.productForm.get('ubication')?.value,
      price: this.productForm.get('price')?.value,
    }

    console.log(PRODUCT)
    this._productService.createProduct(PRODUCT).subscribe((data: any) => {
      this.toastr.success('Product Added Successfully', 'Product Registration')
    this.router.navigate(['/']);
      console.log(data);
    }, (error: any) => {
      console.log(error);
      this.productForm.reset();
    })
  }

  updateProduct() {
    if(this.id !== null) {
      this.title = 'Update Product';
      this._productService.updateProduct(this.id, this.productForm.value).subscribe(data => {
        this.productForm.setValue({
          product: data.name,
          category: data.category,
          ubication: data.ubication,
          price: data.price,
        })
      })
    }
  }
}*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'spice-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  title = 'Create Product';
  id: string | null;
  product: Product | null = null; // Initialize product

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.aRouter.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this._productService.getProductById(this.id).subscribe(
          (product) => {
            this.product = product;
            this.title = 'Update Product';
            if (this.product) { // Check if this.product is not null
              this.productForm.patchValue(this.product);
            }
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }
  

  addProduct() {
    this.title = 'Create Product';
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      category: this.productForm.get('category')?.value,
      ubication: this.productForm.get('ubication')?.value,
      price: this.productForm.get('price')?.value,
    };

    if(this.id !== null){
      this._productService.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.info('Product Updated Successfully', 'Product Updated');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    } else {
      console.log(PRODUCT);
      this._productService.createProduct(PRODUCT).subscribe(
        (data: any) => {
          this.toastr.success('Product Added Successfully', 'Product Registration');
          this.router.navigate(['/']);
          console.log(data);
        },
        (error: any) => {
          console.log(error);
          this.productForm.reset();
        }
      );
    }
    }

    

  getProductById() {
    if (this.id) {
      this.title = 'Update Product';
      this._productService.getProductById(this.id).subscribe(
        (data) => {
          this.toastr.success('Product Updated Successfully', 'Product Updated');
          this.router.navigate(['/']);
          console.log(data);
        },
        (error: any) => {
          console.log(error);
          this.productForm.reset();
        }
      );
    }
  }
}


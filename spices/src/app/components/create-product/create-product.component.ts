import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'spice-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      price: ['', Validators.required],

  })
  }
  ngOnInit(): void {
    /*throw new Error('Method not implemented.');*/
  }

  addProduct(){

    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      ubication: this.productForm.get('ubication')?.value,
      price: this.productForm.get('price')?.value,
    }

    console.log(PRODUCT)
    this.toastr.success('Product Added Successfully', 'Product Registration')
    this.router.navigate(['/']);
  }
}

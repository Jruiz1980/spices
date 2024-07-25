import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'spices-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProducts: Product[]= [];

  constructor(private _productService: ProductService,
              private toastr: ToastrService,
              private router: Router) {}

  ngOnInit(): void {
    const apiUrl = 'http://localhost:4000/api/products';
    this.getProducts(apiUrl);
  }



  getProducts(url: string) {
    this._productService.getProducts(url).subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.log(error);
      });
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(data => {
      this.toastr.success('Removed product succesfully', 'Product Removed');
      this.getProducts('http://localhost:4000/api/products');
      console.log(data)
    }, error => {
      console.log(error);
      });
  }

updateProduct(id: any, updateProduct: any) {
  this._productService.updateProduct(id, updateProduct).subscribe(data => {
    /*this.toastr.success('Updated product successfully', 'Product Updated');*/
    this.getProducts('http://localhost:4000/api/products');
  }, error => {
    console.log(error);
  });
}
  
}

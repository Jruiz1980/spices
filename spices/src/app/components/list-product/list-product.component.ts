import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'spices-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProducts: Product[]= [];

  constructor(private _productService: ProductService,
              private toastr: ToastrService) {}

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
    this.getProducts(id);
}, error => {
  console.log(error);
});
}
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'spices-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  /*getProducts() {
  this._productService.getProducts('/api/products')
    .pipe(
      tap(data => console.log(data)),
      catchError(error => {
        console.log('Error occurred:', error);
        return of([]);
      })
    )
    .subscribe();
}*/

getProducts() {
  this._productService.getProducts().subscribe(data => {
    console.log(data);
  }, error => {
    console.log(error);
  }
  )}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://localhost:4000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(url: string): Observable<any> {
    return this.http.get(url);
  }
  
  createProduct(product: any): Observable<any> {
    return this.http.post(this.url, product);
  }

  updateProduct(id: string, updatedProduct: any): Observable<any> {
    const updateUrl = `${this.url}/${id}`;
    return this.http.put(updateUrl, updatedProduct); //
  }
  

  deleteProduct(id: string): Observable<any> {
    const deleteUrl = `${this.url}/${id}`; 
    return this.http.delete(deleteUrl);
  }

  getProductById(id: string): Observable<any> {
    const getProductUrl = `${this.url}/${id}`;
    return this.http.get(getProductUrl)
  }
}  

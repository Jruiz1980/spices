import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(url: string): Observable<any> {
    return this.http.get(url);
  }

  deleteProduct(id: string): Observable<any> {
    const url = `http://localhost:4000/api/products/${id}`;
    return this.http.delete(url + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable(
  {
  providedIn: 'root' // Hace que sea disponible para toda la app.
})

export class ProductsService
{

  private apiURL ='http://localhost:3000/products'; // IP del server

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiURL);
  }

}

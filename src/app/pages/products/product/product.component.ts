import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { tap } from 'rxjs/operators';

import { Product } from '../interfaces/product.interface';

@Component(
{
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit
{
  products!: Product[];
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void
  {
    this.productSvc.getProducts()
    .pipe(
      //tap( res => console.log(res)) // Imprime en la consola del navegador
      tap( (products: Product[]) => this.products = products)
    )
    .subscribe();
  }
}

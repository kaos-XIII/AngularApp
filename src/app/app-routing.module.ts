import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' } // // Solo aparece el comonente en la url que no estan defindas. (PONER SIEMPRE LA ULTIMA, SE EJECUTA EN ORDEN)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

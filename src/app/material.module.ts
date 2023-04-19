// Fichero para exportar a toda la aplicacion los modulos de material.
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({

  exports: [MatToolbarModule, MatCardModule]

})

export class MaterialModule{}

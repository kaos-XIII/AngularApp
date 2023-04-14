// Fichero para exportar a toda la aplicacion los modulos de material.
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({

  exports: [MatToolbarModule]

})

export class MaterialModule{}

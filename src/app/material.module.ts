// Fichero para exportar a toda la aplicacion los modulos de material.
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@NgModule({

  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule]

})

export class MaterialModule{}

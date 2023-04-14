import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [ // Componentes o directivas
    AppComponent,
    HeaderComponent
  ],
  imports: [ // Inyectar los modulos de Angular
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MaterialModule
  ],
  providers: [],  // Se inyectan las dependencias y servicios.
  bootstrap: [AppComponent], // Indicar cual es el componente principal.
  exports:[] // componentes que queremos compartir con otros modulos
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';

const routes: Routes = [
  { path: 'lista-libros', component: ListaDeLibrosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'detalles/:libroId', component: DetallesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'lista-libros' },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    DetallesComponent,
    EncabezadoComponent,
    Error404Component,
    InicioComponent,
    ListaDeLibrosComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

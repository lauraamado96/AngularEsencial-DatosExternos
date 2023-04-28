import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Libro } from '../common/types';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean = false;
  cargando: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.cargando = false;
    this.cargarLista();
  }

  cargarLista() {
    this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false; },
      (respuesta) => { this.errorHttp = true }
    )
  }

}

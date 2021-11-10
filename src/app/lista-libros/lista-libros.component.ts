import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
})
export class ListaLibrosComponent implements OnInit {
  public libros!: Libro[];
  constructor(
    private librosServices: LibrosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(async (params) => {
      this.libros = await this.librosServices.getByEscritor(
        parseInt(params.id)
      );
    });
  }
}

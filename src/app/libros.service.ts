import { Injectable } from '@angular/core';

import { LIBROS } from './db/libros.db';
import { Libro } from './models/libro.model';
@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  constructor() {}
  getByEscritor(id: number): Promise<Libro[]> {
    console.log('libros.service LINE 11 =>', id);
    return new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter((libro) => {
        return libro.escritor === id;
      });
      resolve(arrFiltrado);
    });
  }
}

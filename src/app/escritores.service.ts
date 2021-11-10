import { Injectable } from '@angular/core';

import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root',
})
export class EscritoresService {
  constructor() {}

  get escritores(): Escritor[] {
    return [...ESCRITORES];
  }
  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, rejects) => {
      resolve(ESCRITORES);
    });
  }
  getByPais(pais: string): Promise<Escritor[]> {
    return new Promise((resolve, rejects) => {
      const arrFiltrado = ESCRITORES.filter(
        (escritores) => escritores.pais === pais
      );
      resolve(arrFiltrado);
    });
  }
  getById(id: number): Promise<Escritor> {
    return new Promise((resolve, rejects) => {
      const escritorFound = ESCRITORES.find((escritor) => {
        return escritor.id === id;
      });
      resolve(escritorFound!);
    });
  }
}

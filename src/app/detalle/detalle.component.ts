import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  public escritor!: Escritor;
  constructor(
    private escritoresServices: EscritoresService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.escritor = await this.escritoresServices.getById(
        parseInt(params.id)
      );
      console.log(this.escritor);
    });
  }
}

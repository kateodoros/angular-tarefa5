import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurosc',
  templateUrl: './juroscompostos.component.html',
  styleUrls: ['./juroscompostos.component.css']
})
export class JuroscompostosComponent implements OnInit {
  constructor() {}

  c: number;
  i: number;
  t: number;
  m: number;

  ngOnInit() {}

  getJurosComp() {
    return this.c * Math.pow(1 + this.i, this.t);
  }

  getValormes() {
    let lista: number[] = [];
    let calc = 0;

    for (let i = 0; i <= this.t; i++) {
      calc = this.c * Math.pow(1 + this.i, i);
      lista.push(calc);
    }
    return lista;
  }
}
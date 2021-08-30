import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurossimples',
  templateUrl: './jurossimples.component.html',
  styleUrls: ['./jurossimples.component.css']
})
export class JurossimplesComponent implements OnInit {
  constructor() { }

  c: number;
  i: number;
  t: number;

  ngOnInit() {}

  getJurosSimples() {
    return this.c * this.i * this.t;
  }
}
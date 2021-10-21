import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})

export class DadoComponent implements OnInit {
  caras: {[index: number]: string} = {
    0: "0.png",
    1: "1.png",
    2: "2.png",
    3: "3.png",
    4: "4.png",
    5: "5.png",
    6: "6.png"
  };
  valor! : number;
  imagen! : string;

  constructor() { }

  ngOnInit(): void {
    this.valor = 0;
    this.imagen = `../assets/img/${this.caras[this.valor]}`
    //this.valor = Math.trunc(Math.random() * 6) + 1;
    //this.imagen = `../assets/img/${this.caras[this.valor]}`;
  }

  lanzarDado(): number{
    this.valor = Math.trunc(Math.random() * 6) + 1;
    this.imagen = `../assets/img/${this.caras[this.valor]}`;
    return this.valor;
  }

}


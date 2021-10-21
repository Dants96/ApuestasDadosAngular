import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {
  status : number = 0;
  intentos : number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  mostrarEstado(apuesta:string, numero:number):void{
    if((apuesta == "par" && numero%2 === 0) || (apuesta == "inpar" && numero%2 > 0)){
      this.status = 1; 
    }else{
      this.status = 2;
    }
    this.intentos ++;
    return;
  }



}

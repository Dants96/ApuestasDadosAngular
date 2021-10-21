import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {
  status : number = 0;
  intentos : number = 0;
  fallidosSeg : number = 0;
  flag : boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  mostrarEstado(apuesta:string, numero:number):void{
    if((apuesta == "par" && numero%2 === 0) || (apuesta == "inpar" && numero%2 > 0)){
      this.status = 1; 
      this.fallidosSeg = 0;
    }else{
      this.status = 2;
      this.fallidosSeg ++;
    }
    this.intentos ++;
    if(this.fallidosSeg > 5 && !this.flag){
      this.status = 13;
      this.flag = true;
    } 
    return;
  }



}

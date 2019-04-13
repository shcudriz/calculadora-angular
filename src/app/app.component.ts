import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resultado = 0;
  operacion  ="";
  estaAutenticado:boolean = false;
  obtenerNumero(numero: number){
    if (this.resultado === 0 ) {
      this.resultado = numero;
    } else {
      this.resultado = Number(String(this.resultado) + String(numero));
    }
    //this.operacion = this.operacion + this.resultado;
  }
  obtenerOperador(operador: string){
    this.operacion = this.operacion + this.resultado;
    this.resultado = 0;
    this.operacion = this.operacion + operador;
  }

  limpiar(){
    this.resultado = 0;
    this.operacion = "";
  }

  obtenerResultado(){
    this.operacion = this.operacion + this.resultado;
    this.resultado = eval(this.operacion);
  }

  autenticar(){
    this.estaAutenticado = !this.estaAutenticado;
  }
}

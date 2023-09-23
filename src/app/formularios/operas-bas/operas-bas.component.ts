import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})


export class OperasBasComponent {
  num1=''
  num2=''
  resultado:number=0
  operacion = 0

  operacionesBasicas(){
    if(this.operacion == 1){
      this.sumar()
    }else if(this.operacion == 2){
      this.restar()
    }else if(this.operacion == 3){
      this.multiplicar()
    }else if(this.operacion == 4){
      this.dividir()
    }
  }

  sumar(){
    this.resultado=parseInt(this.num1) + parseInt(this.num2)
  }
  restar(){
    this.resultado=parseInt(this.num1) - parseInt(this.num2)
  }
  multiplicar(){
    this.resultado=parseInt(this.num1) * parseInt(this.num2)
  }
  dividir(){
    this.resultado=parseInt(this.num1) / parseInt(this.num2)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-consumo',
  templateUrl: './calcular-consumo.component.html',
  styleUrls: ['./calcular-consumo.component.css']
  
})
export class CalcularConsumoComponent {

  quantPessoas : number = 0;
  quantComodos : number = 0;
  quantTVs : number = 0;
  quantPCs : number = 0;
  valorTarifa : number = 0;

  energiaGasta : number = 0;
  valorContaLuz : number = 0;

  calcularGasto(){
    let gastoChuveiro : number = ((5400*0.1666*30)/1000)*this.quantPessoas;
    let gastoTV : number = ((150*6*30)/1000)*this.quantTVs;
    let gastoPC : number = ((250*8*30)/1000)*this.quantPCs;
    let gastoLampada : number = ((15*5*30)/1000)*this.quantComodos;
    let gastoMaquinaLavar : number = 0;
    let gastoSecadora : number = 0;

    let temMaquina = document.getElementById("checkMaquina") as HTMLInputElement;
    if(temMaquina.checked){
      gastoMaquinaLavar = ((1200*2*10)/1000);
    }
    let temSecadora = document.getElementById("checkSecadora") as HTMLInputElement;
    if(temSecadora.checked){
      gastoSecadora = ((2000*1*10)/1000);
    }

    this.energiaGasta = parseFloat((gastoChuveiro + gastoTV + gastoPC + gastoLampada + gastoMaquinaLavar + gastoSecadora).toFixed(2));
    this.valorContaLuz = parseFloat((this.energiaGasta * this.valorTarifa).toFixed(2));

  }
}

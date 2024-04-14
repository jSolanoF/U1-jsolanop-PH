import { Component, OnInit } from '@angular/core';
import { Circulo } from '../clases/FiguraGeometrica'; 
import { IonImg, IonItem,IonButton ,IonList, IonInput, IonSelect, IonText, IonContent, IonLabel, IonCard, 
          IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports:  [IonImg, IonCard,  IonItem, IonList, IonCardTitle, IonCardContent, IonCardHeader, IonButton,
             IonInput, IonSelect, FormsModule, IonText, IonLabel, IonContent]
})
export class CirculoComponent implements OnInit {

variableStr: string ="";
resultado: string = "";

CalcularPerimetro() {
  const variable = parseInt(this.variableStr)
  const circulo = new Circulo(variable)
  const perimetro = circulo.calcPerimetro()
  this.resultado = `El perimetro del circulo es ${perimetro.toFixed(1)} cm`
}
  ngOnInit() {}
}
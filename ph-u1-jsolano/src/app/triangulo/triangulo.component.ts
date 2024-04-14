
import { Component, OnInit } from '@angular/core';
import { IonImg, IonTitle, IonToolbar, IonHeader, IonCardTitle, IonCardHeader, IonItem,IonButton ,IonList, IonInput, IonSelect, IonText, IonContent, IonLabel, IonCard,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Triangulo } from '../clases/FiguraGeometrica'; 


@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone:true,
  imports: [IonImg, IonTitle, IonToolbar, IonCardTitle, IonHeader, IonCardHeader,IonItem, IonList, IonButton, IonInput, IonSelect, FormsModule, IonText, IonLabel, IonContent,IonCard]
})
export class TrianguloComponent implements OnInit {
  ladoAStr: string = "";
  ladoBStr: string = "";
  ladoCStr: string = "";
  resultado: string = "";

  CalcularPerimetro() {
    const ladoA = parseInt(this.ladoAStr);
    const ladoB = parseInt(this.ladoBStr);
    const ladoC = parseInt(this.ladoCStr);
    const triangulo = new Triangulo(0, ladoA, ladoB, ladoC);
    const perimetro = triangulo.calcPerimetro();
    this.resultado = `El perímetro del triángulo es ${perimetro.toFixed(1)} cm`;
  }

  constructor() { }

  ngOnInit() { }
}


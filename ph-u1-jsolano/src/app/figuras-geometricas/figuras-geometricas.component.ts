import { Component, OnInit } from '@angular/core';
import { IonItem, IonList, IonInput, IonSelect, IonSelectOption, IonButton, IonImg } from '@ionic/angular/standalone';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';

@Component({
  selector: 'app-figurageometrica',
  templateUrl: './figuras-geometricas.component.html',
  styleUrls: ['./figuras-geometricas.component.scss'],
  standalone: true,
  imports: [IonImg, IonList, IonItem, IonInput, IonSelect, IonSelectOption,TrianguloComponent, CirculoComponent, IonButton ]
})
export class FigurageometricaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  

}


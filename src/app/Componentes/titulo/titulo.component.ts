import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { showUp } from 'src/app/animaciones/showUp.animaciones';


@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
  animations: [showUp]
})
export class TituloComponent implements OnInit {
  public nombre: String = "jeferson"
  public edad: Number = 12;
  public button: Boolean = false;
  public icono: Boolean = false;
  public topics: String[]; 
  public cursos: String;
  public laucnDate:Date = new Date(); //operador del pipe
  public precio: number = 25;
  public seconds:number = 5400;
  
  @Input() tittle:boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.cursos = "como estas"
    this.laucnDate = new Date();
    this.topics = [
      'Fundamentos del Framework',
      'Arreglos',
      'estuilos css',
      'ngFor',
      'ngSwith',
      'Pronosticos',
      'lenguaje tipado',
      'Interpolacion',
      'templates'
    ]

    console.log(this.laucnDate)
  }

  getPersona():any{
    return `${this.nombre} : ${this.edad}`
  }

  evento(){
    this.icono = !this.icono;
  }


}

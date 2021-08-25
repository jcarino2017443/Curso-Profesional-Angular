import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticulosService } from 'src/app/Servicios/articulos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [ArticulosService]
})
export class FormularioComponent implements OnInit {
  public nombre:String;
  public username:String;
  public imagen: String;

  @Output() formulario = new EventEmitter<boolean>();
 

  constructor(private _articulo: ArticulosService) { }

  ngOnInit(): void {
    this.nombre = "Manuel";
    this.username = "mHernadez-20115"
    this.imagen = "https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg"

    setTimeout(()=> this.formulario.emit(true), 3000) 
    setTimeout(()=> this.nombre = 'Dulce', 3000)
    
  }
  

  usuario(username:any){
    this.username = username.target.value;
  }
  name(name:any){
    this.nombre = name.target.value;

  }


}

import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/Servicios/articulos.service';
import { showUp } from 'src/app/animaciones/showUp.animaciones';
import { stragershowUp } from 'src/app/animaciones/StaggerredShowUp.animaciones';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
  providers: [ArticulosService],
  animations: [stragershowUp]
})
export class ArticulosComponent implements OnInit {
  

  constructor(public _ArtService: ArticulosService) { }

  ngOnInit(): void {
    this._ArtService.obtener();
  //   const observable = this._ArtService.buildObsevable();
  //   observable.subscribe(response=>{
  //     console.log(response)
  //   })
  }

}

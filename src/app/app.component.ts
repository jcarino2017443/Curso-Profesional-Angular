import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CursoAngular';
  public tittle: boolean = false;

  subscribed(eve:any){
    console.log("Ya esta comunicanco el emitterEver");
    console.log(eve);
    //this.tittle = eve;
  }
  
}

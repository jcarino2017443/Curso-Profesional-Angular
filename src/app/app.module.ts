import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullScreamComponent } from './Componentes/full-scream/full-scream.component';
import { TituloComponent } from './Componentes/titulo/titulo.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { SecondsToTimeFormat } from './Pipes/SecondsToTimeFormat.pipe';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    FullScreamComponent,
    TituloComponent,
    FormularioComponent,
    SecondsToTimeFormat,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

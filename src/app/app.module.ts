import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { OrganoComponent } from './organo/organo.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { MisionComponent } from './mision/mision.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HistoriaComponent } from './historia/historia.component';
import { LegalComponent } from './legal/legal.component';
import { DiresaComponent } from './diresa/diresa.component';
import { RedesComponent } from './redes/redes.component';
import { PublicoComponent } from './publico/publico.component';
import { GestionComponent } from './gestion/gestion.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    ContenidoComponent,
    FooterComponent,
    InstitucionalComponent,
    DirectorioComponent,
    OrganoComponent,
    TransparenciaComponent,
    MisionComponent,
    ObjetivosComponent,
    UbicacionComponent,
    HistoriaComponent,
    LegalComponent,
    DiresaComponent,
    RedesComponent,
    PublicoComponent,
    GestionComponent,

  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
}

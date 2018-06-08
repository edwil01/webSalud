import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { OrganoComponent } from './organo/organo.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { MisionComponent } from './mision/mision.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HistoriaComponent } from './historia/historia.component';
import { LegalComponent } from './legal/legal.component';
import { DiresaComponent } from './diresa/diresa.component';
import { RedesComponent } from './redes/redes.component';
import { PublicoComponent } from './publico/publico.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
  {path:'', component:ContenidoComponent},
  {path:'institucional', component: InstitucionalComponent},
  {path:'directorio', component: DirectorioComponent},
  {path:'organo', component: OrganoComponent},
  {path:'transparencia', component: TransparenciaComponent},
  {path:'mision', component: MisionComponent},
  {path:'objetivos', component: ObjetivosComponent},
  {path:'ubicacion', component: UbicacionComponent},
  {path:'historia', component: HistoriaComponent},
  {path:'legal', component: LegalComponent},
  {path:'diresa', component: DiresaComponent},
  {path:'redes', component: RedesComponent},
  {path:'publico', component: PublicoComponent},
  {path:'gestion', component: GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

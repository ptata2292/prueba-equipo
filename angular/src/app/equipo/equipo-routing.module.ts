import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  { path: 'equipo', redirectTo: 'equipo/index', pathMatch: 'full'},
  { path: 'equipo/index', component: IndexComponent },
  { path: 'equipo/resumen', component: ResumenComponent },
  { path: 'equipo/create', component: CreateComponent },
  { path: 'equipo/edit/:idEquipo', component: EditComponent } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoRoutingModule { }

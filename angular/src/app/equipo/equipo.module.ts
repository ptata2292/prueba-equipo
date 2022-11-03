import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumenComponent } from './resumen/resumen.component';

@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent, ResumenComponent],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipoModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PadreMainComponent } from './components/padre-main/padre-main.component';
import { AgregarAlumnosComponent } from './components/alumnos/acciones-alumnos/agregar-alumnos/agregar-alumnos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditarAlumnosComponent } from './components/alumnos/acciones-alumnos/editar-alumnos/editar-alumnos.component'

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ClasesComponent,
    CursosComponent,
    PadreMainComponent,
    AgregarAlumnosComponent,
    EditarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

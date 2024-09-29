import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { EscanearQrComponent } from './escanear-qr/escanear-qr.component';
import { GenerarQrComponent } from './generar-qr/generar-qr.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeccionAlumnoComponent } from './seccion-alumno/seccion-alumno.component';
import { SeccionDocenteComponent } from './seccion-docente/seccion-docente.component';
import { RouterModule } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AlumnoComponent,
    DocenteComponent,
    EscanearQrComponent,
    GenerarQrComponent,
    Login2Component,
    NotfoundComponent,
    SeccionAlumnoComponent,
    SeccionDocenteComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { EscanearQrComponent } from './escanear-qr/escanear-qr.component';
import { GenerarQrComponent } from './generar-qr/generar-qr.component';
import { PagesModule } from './pages.module';
import { Login2Component } from './login2/login2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeccionAlumnoComponent } from './seccion-alumno/seccion-alumno.component';
import { SeccionDocenteComponent } from './seccion-docente/seccion-docente.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'alumno', component:AlumnoComponent},
  {path:'docente', component:DocenteComponent},
  {path:'escanear-qr', component:EscanearQrComponent},
  {path:'generar-qr', component:GenerarQrComponent},
  {path:'login2', component:Login2Component},
  {path:'notfound', component:NotfoundComponent},
  {path:'seccion-alumno', component: SeccionAlumnoComponent},
  {path:'seccion-docente', component: SeccionDocenteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class PagesRoutingModule { }

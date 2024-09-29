import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
})
export class Login2Component{
  usuario: string = '';
  clave: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    const resultado = this.authService.login(this.usuario, this.clave);
    if (resultado) {
      const rol = this.authService.getRol(); // Usar el método para obtener el rol
      if (rol === 'alumno') {
        this.router.navigate(['/seccion-alumno']);
      }
    } else {
      this.mensajeError = 'Datos ingresados incorrectos';
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    const resultado = this.authService.login(this.usuario, this.clave);
    if (resultado) {
      const rol = this.authService.getRol();
      if (rol === 'docente') {
        this.router.navigate(['/seccion-docente']);
      }
    } else {
      this.mensajeError = 'Datos ingresados incorrectos';
    }
  }
}

// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuariosSimulados } from '../models/bd.models.service'; // Importa los usuarios simulados

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private usuarioSubject = new BehaviorSubject<string>(''); // Para el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable();
  private rolSubject = new BehaviorSubject<string>(''); // Para el rol del usuario
  rol$ = this.rolSubject.asObservable();

  getRol(): string {
    return this.rolSubject.getValue();
  }

  login(usuario: string, clave: string): boolean {
    const usuarioEncontrado = usuariosSimulados.find(u => u.usuario === usuario && u.clave === clave);

    if (usuarioEncontrado) {
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(usuarioEncontrado.nombreCompleto);
      this.rolSubject.next(usuarioEncontrado.rol);
      return true; // Inicio de sesión exitoso
    } else {
      this.isAuthenticatedSubject.next(false);
      return false; // Credenciales incorrectas
    }
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.usuarioSubject.next('');
    this.rolSubject.next('');
  }
}

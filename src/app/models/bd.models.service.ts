// src/app/models/bd.models.ts
export interface Usuario {
  id: number;
  nombreCompleto: string;
  usuario: string;
  clave: string;
  telefono: string;
  rol: 'alumno' | 'docente';
}

export const usuariosSimulados: Usuario[] = [
  { id: 1, nombreCompleto: 'Admin User', usuario: 'admin', clave: 'admin', telefono: '1234567890', rol: 'docente' },
  { id: 2, nombreCompleto: 'Helton Bustos', usuario: 'helton', clave: 'helton', telefono: '0987654321', rol: 'alumno' },
  { id: 3, nombreCompleto: 'Jane Smith', usuario: 'janesmith', clave: 'secret', telefono: '5555555555', rol: 'alumno' },
  { id: 4, nombreCompleto: 'Alice Johnson', usuario: 'alicejohnson', clave: '123456', telefono: '9999999999', rol: 'docente' }
];

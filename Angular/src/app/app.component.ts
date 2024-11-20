import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DetalleDeporte {
  evento: string;
  medallista: string;
  medalla: 'oro' | 'plata' | 'bronce';
}

interface Deporte {
  nombre: string;
  oro: number;
  plata: number;
  bronce: number;
  total: number;
  mostrarDetalles: boolean;
  detalles: DetalleDeporte[];
}

interface Pais {
  orden: number;
  nombre: string;
  bandera: string;
  oro: number;
  plata: number;
  bronce: number;
  total: number;
  deportes: Deporte[];
  mostrarDetalles: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  paises: Pais[] = [
    {
      orden: 1,
      nombre: 'Estados Unidos',
      bandera: 'assets/flags/usa.png',
      oro: 40,
      plata: 44,
      bronce: 42,
      total: 126,
      mostrarDetalles: false,
      deportes: [
        { nombre: 'Atletismo', oro: 14, plata: 11, bronce: 9, total: 34, mostrarDetalles: false, detalles: [
          { evento: '100m masculino', medallista: 'John Smith', medalla: 'oro' },
          { evento: '200m femenino', medallista: 'Sarah Johnson', medalla: 'plata' },
          { evento: 'Salto largo', medallista: 'Mike Brown', medalla: 'bronce' }
        ] },
        { nombre: 'Baloncesto', oro: 2, plata: 0, bronce: 0, total: 2, mostrarDetalles: false, detalles: [] },
        { nombre: 'Baloncesto 3x3', oro: 0, plata: 0, bronce: 1, total: 1, mostrarDetalles: false, detalles: [] },
        { nombre: 'Boxeo', oro: 0, plata: 0, bronce: 1, total: 1, mostrarDetalles: false, detalles: [] },
        { nombre: 'Breaking', oro: 0, plata: 0, bronce: 1, total: 1, mostrarDetalles: false, detalles: [] },
        { nombre: 'Ciclismo BMX freestyle', oro: 0, plata: 1, bronce: 0, total: 1, mostrarDetalles: false, detalles: [] },
        { nombre: 'Natación', oro: 10, plata: 8, bronce: 7, total: 25, mostrarDetalles: false, detalles: [] }
      ]
    }
    // Puedes agregar más países aquí
  ];

  toggleDetalles(pais: Pais) {
    pais.mostrarDetalles = !pais.mostrarDetalles;
  }

  toggleDeporteDetalles(deporte: Deporte) {
    deporte.mostrarDetalles = !deporte.mostrarDetalles;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
export class IniciosesionComponent {
  usuario: string = '';
  rol: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
  if (this.rol === 'mesero') {
    this.router.navigate(['/mesas']);
  } else if (this.rol === 'gerente') {
    this.router.navigate(['/admin/mesas']);
  } else {
    alert('Seleccione un rol válido.');
  }
}
}

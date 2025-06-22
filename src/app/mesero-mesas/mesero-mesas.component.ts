import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mesero-mesas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesero-mesas.component.html',
  styleUrl: './mesero-mesas.component.css'
})
export class MeseroMesasComponent {
  mesas = [
    { numero: 1, estado: 'libre' },
    { numero: 2, estado: 'ocupada' },
    { numero: 3, estado: 'libre' },
    { numero: 4, estado: 'libre' }
  ];

  constructor(private router: Router) {}

  atenderMesa(mesa: any) {
    this.router.navigate(['/mesero/pedido', mesa.numero]);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="barra-navegacion">
      <a routerLink="/menu">🍽 Ir a Menú</a>
      <a routerLink="/mesero">🧑‍🍳 Ir a Mesero</a>
      <a routerLink="/pedidos">🧾 Ir a Pedidos</a>
      <a routerLink="/mesas"> 🪑 Ir a Mesas</a>
    </nav>
    <hr />
  `,
  styles: [`
    .barra-navegacion {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      background-color: #f0f0f0;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    .barra-navegacion a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    .barra-navegacion a:hover {
      color: #007bff;
    }
  `]
})
export class NavegacionComponent {}

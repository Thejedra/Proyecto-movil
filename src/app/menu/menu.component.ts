import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  platillos = [
    { id: 1, nombre: 'Tacos al pastor', precio: 35 },
    { id: 2, nombre: 'Quesadilla de queso', precio: 25 },
    { id: 3, nombre: 'Agua de horchata', precio: 20 }
  ];

  carrito: any[] = [];

  agregarAlCarrito(platillo: any) {
    this.carrito.push(platillo);
  }

  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  enviarPedido() {
    console.log('Pedido enviado:', this.carrito);
    alert('Pedido enviado con éxito');
    this.carrito = [];
  }
}


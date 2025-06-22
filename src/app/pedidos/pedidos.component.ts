import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface ItemPedido {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedido: {
    mesa: string;
    mesero: string;
    cantidad: number;
    items: ItemPedido[];
  } = {
    mesa: '',
    mesero: '',
    cantidad: 1,
    items: []
  };

  platillos = [
    { id: 1, nombre: 'Taco de Asada', precio: 35 },
    { id: 2, nombre: 'Agua de Jamaica', precio: 20 },
    { id: 3, nombre: 'Tostada de Ceviche', precio: 45 }
  ];

  constructor(private http: HttpClient) {}

  agregarItem(platillo: any) {
    this.pedido.items.push({
      ...platillo,
      cantidad: this.pedido.cantidad
    });
    this.pedido.cantidad = 1;
  }

  quitarItem(index: number) {
    this.pedido.items.splice(index, 1);
  }

  enviarPedido() {
    this.http.post('http://localhost:3000/api/pedidos', this.pedido).subscribe({
      next: res => {
        alert('Pedido enviado correctamente');
        this.pedido = { mesa: '', mesero: '', cantidad: 1, items: [] };
      },
      error: err => {
        alert('Error al enviar el pedido');
        console.error(err);
      }
    });
  }
}

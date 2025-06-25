import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from '../navegacion.component';


@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavegacionComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.http.get('http://localhost:3000/api/pedidos').subscribe({
      next: (res: any) => {
        this.pedidos = res;
      },
      error: err => {
        console.error('Error al obtener pedidos', err);
      }
    });
  }

  eliminarPedido(id: string) {
    if (confirm('¿Estás seguro de eliminar este pedido?')) {
      this.http.delete(`http://localhost:3000/api/pedidos/${id}`).subscribe({
        next: () => {
          alert('Pedido eliminado');
          this.obtenerPedidos(); 
        },
        error: err => {
          console.error('Error al eliminar pedido:', err);
          alert('Error al eliminar el pedido');
        }
      });
    }
  }
}

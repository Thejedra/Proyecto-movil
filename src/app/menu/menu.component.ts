import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavegacionComponent } from '../navegacion.component';


interface Platillo {
  _id: string;
  nombre: string;
  precio: number;
  descripcion?: string;
}

interface ItemPedido {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, NavegacionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  platillos: Platillo[] = [];
  carrito: ItemPedido[] = [];
  mesas: any[] = [];
  meseros: any[] = [];
  mesa: string = '';
  mesero: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarMenu();
    this.cargarMesas();
    this.cargarMeseros();
  }

  cargarMenu() {
    this.http.get<Platillo[]>('http://localhost:3000/menu').subscribe({
      next: data => this.platillos = data,
      error: err => console.error('Error al cargar menú:', err)
    });
  }

  cargarMesas() {
    this.http.get<any[]>('http://localhost:3000/mesas').subscribe({
      next: data => this.mesas = data,
      error: err => console.error('Error al cargar mesas:', err)
    });
  }

  cargarMeseros() {
    this.http.get<any[]>('http://localhost:3000/meseros').subscribe({
      next: data => this.meseros = data,
      error: err => console.error('Error al cargar meseros:', err)
    });
  }

  agregarAlCarrito(platillo: Platillo) {
    this.carrito.push({
      nombre: platillo.nombre,
      precio: platillo.precio,
      cantidad: 1
    });
  }

  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  get total(): number {
    return this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  get totalArticulos(): number {
    return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  enviarPedido() {
    const pedido = {
      mesa: this.mesa,
      mesero: this.mesero,
      total: this.total,
      cantidad: this.totalArticulos,
      items: this.carrito
    };

    this.http.post('http://localhost:3000/api/pedidos', pedido).subscribe({
      next: () => {
        alert('Pedido enviado correctamente');
        this.carrito = [];
        this.mesa = '';
        this.mesero = '';
      },
      error: err => {
        alert('Error al enviar el pedido');
        console.error(err);
      }
    });
  }
}

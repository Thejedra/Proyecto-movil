import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MesaService } from '../servicios/mesa.service'; 

interface Item {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface Mesa {
  _id: string;
  numero: number;
  estado: string;
}

@Component({
  selector: 'app-mesero-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mesero-pedido.component.html',
  styleUrl: './mesero-pedido.component.css'
})
export class MeseroPedidoComponent {
  mesas: Mesa[] = [];
  mesaSeleccionada: Mesa | null = null;

  menu: Item[] = [
    { id: 1, nombre: 'Taco', precio: 30, cantidad: 1 },
    { id: 2, nombre: 'Agua', precio: 15, cantidad: 1 },
    { id: 3, nombre: 'Tostada', precio: 40, cantidad: 1 }
  ];

  pedido: Item[] = [];
  propina = 0;
  finalizado = false;

  constructor(private mesaService: MesaService) {
    this.cargarMesas();
  }

  cargarMesas() {
    this.mesaService.getMesas().subscribe(data => {
      this.mesas = data;
    });
  }

  seleccionarMesa(m: Mesa) {
    this.mesaSeleccionada = m;
    this.finalizado = false;
    this.pedido = [];
    this.propina = 0;
  }

  agregarAlPedido(item: Item) {
    const existe = this.pedido.find(p => p.id === item.id);
    if (existe) {
      existe.cantidad += item.cantidad;
    } else {
      this.pedido.push({ ...item });
    }
    item.cantidad = 1;
  }

  eliminarItem(i: number) {
    this.pedido.splice(i, 1);
  }

  finalizarPedido() {
    this.finalizado = true;

    if (this.mesaSeleccionada) {
      this.mesaService.actualizarMesa(this.mesaSeleccionada._id, 'ocupada').subscribe({
        next: res => {
          console.log(' Mesa actualizada a ocupada', res);
          this.cargarMesas(); // recargar estado actualizado
        },
        error: err => {
          console.error(' Error al actualizar la mesa', err);
        }
      });
    }
  }

  totalSinPropina(): number {
    return this.pedido.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  totalConPropina(): number {
    return this.totalSinPropina() + this.propina;
  }

  limpiar() {
    this.mesaSeleccionada = null;
    this.pedido = [];
    this.propina = 0;
    this.finalizado = false;
  }
}

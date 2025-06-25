import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MesaService } from '../servicios/mesa.service';
import { NavegacionComponent } from '../navegacion.component';


@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [CommonModule, NavegacionComponent],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.css'
})
export class MesasComponent implements OnInit {
  mesas: any[] = [];

  constructor(private mesaService: MesaService, private router: Router) {}

  ngOnInit(): void {
    this.cargarMesas();
  }

  cargarMesas() {
    this.mesaService.getMesas().subscribe(
      res => {
        this.mesas = res;
      },
      err => console.error("Error al cargar mesas:", err)
    );
  }

  verEstado(mesa: any) {
    alert(`Mesa ${mesa.numero} está ${mesa.estado}`);
  }

  tomarPedido(numeroMesa: number) {
    this.router.navigate(['/mesero/pedido', numeroMesa]);
  }

  irAMenu() {
    this.router.navigate(['/menu']);
  }

  irAMesero() {
    this.router.navigate(['/mesero']);
  }

  irAPedidos() {
    this.router.navigate(['/pedidos']);
  }
}

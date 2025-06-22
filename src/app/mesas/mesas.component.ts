import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaService } from '../servicios/mesa.service';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.css'
})
export class MesasComponent implements OnInit {
  mesas: any[] = [];

  constructor(private mesaService: MesaService) {}

  ngOnInit(): void {
    this.cargarMesas();
  }

  cargarMesas() {
    this.mesaService.getMesas().subscribe(
      res => {
        console.log("Mesas obtenidas:", res);
        this.mesas = res;
      },
      err => console.error("Error al cargar mesas:", err)
    );
  }

  verEstado(mesa: any) {
    alert(`Mesa ${mesa.numero} está ${mesa.estado}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MesaService } from '../../servicios/mesa.service';

@Component({
  selector: 'app-crud-mesas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-mesas.component.html',
  styleUrl: './crud-mesas.component.css'
})
export class CrudMesasComponent implements OnInit {
  mesas: any[] = [];
  nuevaMesa: { numero: number; estado: 'libre' | 'ocupada' } = { numero: 0, estado: 'libre' };
  editando = false;
  mesaEditandoId: string | null = null;

  constructor(private mesaService: MesaService) {}

  ngOnInit() {
    this.cargarMesas();
  }

  cargarMesas() {
    this.mesaService.getMesas().subscribe(
      res => {
        this.mesas = res;
        console.log(' Mesas cargadas:', this.mesas);
      },
      err => console.error(' Error al cargar mesas:', err)
    );
  }

  guardarMesa() {
    if (this.nuevaMesa.numero <= 0) {
      alert('El número de mesa debe ser mayor que cero.');
      return;
    }

    if (this.editando && this.mesaEditandoId) {
      this.mesaService.actualizarMesa(this.mesaEditandoId, this.nuevaMesa).subscribe(
        () => {
          this.cancelarEdicion();
          this.cargarMesas();
        },
        err => console.error(' Error al actualizar mesa:', err)
      );
    } else {
      this.mesaService.crearMesa(this.nuevaMesa).subscribe(
        () => {
          this.nuevaMesa = { numero: 0, estado: 'libre' };
          this.cargarMesas();
        },
        err => console.error(' Error al crear mesa:', err)
      );
    }
  }

  editarMesa(mesa: any) {
    this.editando = true;
    this.mesaEditandoId = mesa._id;
    this.nuevaMesa = { numero: mesa.numero, estado: mesa.estado };
  }

  eliminarMesa(id: string) {
    if (confirm('¿Eliminar esta mesa?')) {
      this.mesaService.eliminarMesa(id).subscribe(
        () => this.cargarMesas(),
        err => console.error(' Error al eliminar mesa:', err)
      );
    }
  }

  cancelarEdicion() {
    this.editando = false;
    this.mesaEditandoId = null;
    this.nuevaMesa = { numero: 0, estado: 'libre' };
  }
}



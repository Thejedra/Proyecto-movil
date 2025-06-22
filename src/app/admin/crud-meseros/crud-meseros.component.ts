import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mesero {
  id: number;
  nombre: string;
  correo: string;
}

@Component({
  selector: 'app-crud-meseros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-meseros.component.html',
  styleUrl: './crud-meseros.component.css'
})
export class CrudMeserosComponent {
  meseros: Mesero[] = [];
  mesero: Mesero = { id: 0, nombre: '', correo: '' };
  editando = false;

  guardar() {
    if (this.editando) {
      const index = this.meseros.findIndex(m => m.id === this.mesero.id);
      if (index !== -1) {
        this.meseros[index] = { ...this.mesero };
      }
    } else {
      this.mesero.id = Date.now();
      this.meseros.push({ ...this.mesero });
    }
    this.limpiar();
  }

  editar(m: Mesero) {
    this.mesero = { ...m };
    this.editando = true;
  }

  eliminar(id: number) {
    this.meseros = this.meseros.filter(m => m.id !== id);
    this.limpiar();
  }

  limpiar() {
    this.mesero = { id: 0, nombre: '', correo: '' };
    this.editando = false;
  }
}

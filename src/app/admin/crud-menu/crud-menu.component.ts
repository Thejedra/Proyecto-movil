import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Platillo {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-crud-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-menu.component.html',
  styleUrl: './crud-menu.component.css'
})
export class CrudMenuComponent {
  menu: Platillo[] = [];
  platillo: Platillo = { id: 0, nombre: '', precio: 0, descripcion: '' };
  editando = false;

  guardar() {
    if (this.editando) {
      const i = this.menu.findIndex(p => p.id === this.platillo.id);
      if (i !== -1) this.menu[i] = { ...this.platillo };
    } else {
      this.platillo.id = Date.now();
      this.menu.push({ ...this.platillo });
    }
    this.limpiar();
  }

  editar(p: Platillo) {
    this.platillo = { ...p };
    this.editando = true;
  }

  eliminar(id: number) {
    this.menu = this.menu.filter(p => p.id !== id);
    this.limpiar();
  }

  limpiar() {
    this.platillo = { id: 0, nombre: '', precio: 0, descripcion: '' };
    this.editando = false;
  }
}

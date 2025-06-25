import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../servicios/menu.service';

interface Platillo {
  _id?: string;
  nombre: string;
  precio: number;
  descripcion: string;
  disponible?: boolean;
}

@Component({
  selector: 'app-crud-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [MenuService], // necesario para standalone
  templateUrl: './crud-menu.component.html',
  styleUrl: './crud-menu.component.css'
})
export class CrudMenuComponent implements OnInit {
  menu: Platillo[] = [];
  platillo: Platillo = { nombre: '', precio: 0, descripcion: '', disponible: true };
  editando = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu() {
    this.menuService.getMenu().subscribe((data: Platillo[]) => {
      this.menu = data;
    });
  }

  guardar() {
    if (this.editando && this.platillo._id) {
      this.menuService.actualizarPlatillo(this.platillo._id, this.platillo).subscribe(() => {
        this.cargarMenu();
        this.limpiar();
      });
    } else {
      this.menuService.crearPlatillo(this.platillo).subscribe(() => {
        this.cargarMenu();
        this.limpiar();
      });
    }
  }

  editar(p: Platillo) {
    this.platillo = { ...p };
    this.editando = true;
  }

  eliminar(id: string) {
    this.menuService.eliminarPlatillo(id).subscribe(() => {
      this.cargarMenu();
    });
  }

  limpiar() {
    this.platillo = { nombre: '', precio: 0, descripcion: '', disponible: true };
    this.editando = false;
  }
}

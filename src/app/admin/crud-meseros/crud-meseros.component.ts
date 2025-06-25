import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeseroService } from '../../servicios/mesero.service'; 

interface Mesero {
  _id?: string;
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
export class CrudMeserosComponent implements OnInit {
  meseros: Mesero[] = [];
  mesero: Mesero = { nombre: '', correo: '' };
  editando = false;

  constructor(private meseroService: MeseroService) {}

  ngOnInit(): void {
    this.cargarMeseros();
  }

  cargarMeseros() {
    this.meseroService.getMeseros().subscribe((data: Mesero[]) => {
      this.meseros = data;
    });
  }

  guardar() {
    if (this.editando && this.mesero._id) {
      this.meseroService.actualizarMesero(this.mesero._id, this.mesero).subscribe(() => {
        this.cargarMeseros();
        this.limpiar();
      });
    } else {
      this.meseroService.crearMesero(this.mesero).subscribe(() => {
        this.cargarMeseros();
        this.limpiar();
      });
    }
  }

  editar(m: Mesero) {
    this.mesero = { ...m };
    this.editando = true;
  }

  eliminar(id: string) {
    this.meseroService.eliminarMesero(id).subscribe(() => {
      this.cargarMeseros();
    });
  }

  limpiar() {
    this.mesero = { nombre: '', correo: '' };
    this.editando = false;
  }
}

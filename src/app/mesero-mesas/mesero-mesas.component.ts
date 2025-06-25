import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from '../navegacion.component';

@Component({
  selector: 'app-mesero-seleccion',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavegacionComponent],
  templateUrl: './mesero-mesas.component.html',
  styleUrl: './mesero-mesas.component.css'
})
export class MeseroMesasComponent implements OnInit {
  meseros: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

ngOnInit(): void {
  // Cargar los meseros
  this.http.get<any[]>('http://localhost:3000/meseros').subscribe({
    next: data => this.meseros = data,
    error: err => console.error('Error al cargar meseros:', err)
  });

  // Verificar si ya hay un mesero seleccionado
  const meseroGuardado = localStorage.getItem('meseroSeleccionado');
  if (meseroGuardado) {
    const mesero = JSON.parse(meseroGuardado);
    console.log('Mesero actual:', mesero);
  }
}


  seleccionarMesero(mesero: any) {
    localStorage.setItem('meseroSeleccionado', JSON.stringify(mesero));
  this.router.navigate(['/mesero/pedido/1']);

  }
}
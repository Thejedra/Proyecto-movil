import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
export class IniciosesionComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  iniciarSesion() {
    this.http.post<any>('http://localhost:3000/api/login', {
      usuario: this.usuario,
      password: this.password
    }).subscribe(
      res => {
        if (res.rol === 'mesero') {
          this.router.navigate(['/mesas']);
        } else if (res.rol === 'gerente') {
          this.router.navigate(['/admin/mesas']);
        } else {
          this.error = 'Rol no válido';
        }
      },
      err => {
        this.error = 'Usuario o contraseña incorrectos';
      }
    );
  }
}

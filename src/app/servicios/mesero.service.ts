import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MeseroService {
  private url = 'http://localhost:3000/meseros';

  constructor(private http: HttpClient) {}

  getMeseros(): Observable<any> {
    return this.http.get(this.url);
  }

  crearMesero(mesero: any): Observable<any> {
    return this.http.post(this.url, mesero);
  }

  actualizarMesero(id: string, datos: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, datos);
  }

  eliminarMesero(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

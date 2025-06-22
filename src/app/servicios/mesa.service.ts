import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MesaService {
  private url = 'http://localhost:3000/mesas';

  constructor(private http: HttpClient) {}

  getMesas(): Observable<any> {
    return this.http.get(this.url);
  }

  crearMesa(mesa: any): Observable<any> {
    return this.http.post(this.url, mesa);
  }

  actualizarMesa(id: string, datos: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, datos);
  }

  eliminarMesa(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private url = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get(this.url);
  }

  crearPlatillo(platillo: any): Observable<any> {
    return this.http.post(this.url, platillo);
  }

  actualizarPlatillo(id: string, datos: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, datos);
  }

  eliminarPlatillo(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

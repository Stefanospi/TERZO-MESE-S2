import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProdotto } from './Interface/i-prodotto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  apiUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  /* PRENDIAMO I PRODOTTI */
  getProdotti(): Observable<IProdotto[]> {
    return this.http
      .get<{ product: IProdotto[] }>(this.apiUrl)
      .pipe(map((response) => response.product));
  }

  /* PRENDIAMO UN PRODOTTO TRAMITE ID */
  getProdottoById(id: number): Observable<IProdotto> {
    return this.http.get<IProdotto>(`${this.apiUrl}/${id}`);
  }

  /* CREA UN PRODOTTO */
  createProdotto(newProdotto: Partial<IProdotto>): Observable<IProdotto> {
    return this.http.post<IProdotto>(this.apiUrl, newProdotto);
  }
}

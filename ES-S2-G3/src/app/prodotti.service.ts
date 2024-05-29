import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProdotto } from './Interface/i-prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  apiUrl:string = 'https://dummyjson.com/docs/products'
  constructor(private http:HttpClient) {}

  /* PRENDIAMO I PRODOTTI */
  getProdotti():Observable<IProdotto[]>{
    return this.http
    .get<IProdotto[]>(this.apiUrl)

  }
  /* PRENDIAMO UN PRODOTTO TRAMITE ID */
  getProdottoById(id:number):Observable<IProdotto>{
    return this.http.get<IProdotto>(`${this.apiUrl}/${id}`)
  }

  /* CREA UN PRODOTTO */
  createProdotto(newProdotto:Partial<IProdotto>):Observable<IProdotto>{
    return this.http.post<IProdotto>(this.apiUrl, newProdotto)
  }
}

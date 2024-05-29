import { Component } from '@angular/core';
import { ProdottiService } from '../../prodotti.service';
import {IProdotto} from '../../Interface/i-prodotto'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  prodotti:IProdotto [] = [];

  constructor(private prodottiSvc: ProdottiService) {}


  ngOnInit(){
    this.prodottiSvc.getProdotti().subscribe(prodotto =>{
      this.prodotti = prodotto;
    })
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productId = 0

  public isRowSelected = false
  public rowIndex = -1

  public getProductId() {
    this.productId = this.productId+1

    return this.productId
  }

  public products = [
    {
      'id' : this.getProductId(),
      'name' : 'Crysis 1',
      'genre' : ['shooter', 'fps', 'future'],
      'available' : 10,
      'price' : 140
    },
    {
      'id' : this.getProductId(),
      'name' : 'Crysis 2',
      'genre' : ['shooter', 'fps', 'future'],
      'available' : 12,
      'price' : 175
    },
    {
      'id' : this.getProductId(),
      'name' : 'GTA V',
      'genre' : ['open world', 'third person', 'crime'],
      'available' : 2,
      'price' : 250
    },
    {
      'id' : this.getProductId(),
      'name' : 'Valorant',
      'genre' : ['shooter', 'fps'],
      'available' : 15,
      'price' : 50
    }
  ]

  public selectProduct(selectedRow : number) {
    this.isRowSelected = !this.isRowSelected
    if(this.isRowSelected) this.rowIndex = selectedRow
    else this.rowIndex = -1
  }
}

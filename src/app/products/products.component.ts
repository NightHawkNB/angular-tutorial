import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productName = "Assassin's Creed"

  public productCount = 3
  public isLowInventory = false
  public productId = 0

  public getProductId() {
    this.productId++

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

  public getProductCount() {
    if (this.productCount<=5) this.isLowInventory = true

    return this.productCount
  }
}

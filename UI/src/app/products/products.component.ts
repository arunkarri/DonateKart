import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  symbol: any = 'Rs.';
  current: any = 'INR';
  selected: any = 'INR';
  products = [
    {image: '../../assets/images/bag.jpg', price: 250 , title: 'Bag'},
    {image: '../../assets/images/shoe.jpg', price: 100 , title: 'Shoe'},
    {image: '../../assets/images/belt.jpg', price: 50 , title: 'Belt'}
  ];
  constructor(private product: ProductService) {
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  ngOnInit() {}
  changeCurrency(unit) {
    let exchange;
    const that = this;
    this.selected = unit;
    this.symbol = unit === 'INR' ? 'Rs.' : '$';
    this.product.search(that.current)
    .subscribe(function(data) {
      exchange = data;
      that.products.map(function(obj) {
        const prop = unit;
        if ( unit === 'INR') {
          return obj.price = Math.round(obj.price * exchange.rates[prop]);
        } else {
          return obj.price = Number((obj.price * exchange.rates[prop]).toFixed(2));
        }
      });
      if (that.current !== unit) {
        that.current = unit;
      }
    });
  }

}

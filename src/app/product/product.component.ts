import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  price:number =0
  products= [
    {
      id: 0,
      title: "iphone 15",
      price: 2500,
      quantity:5,
      img:"https://jmb.com.tn/wp-content/uploads/2023/12/iphone-15-128go-bleu.jpg"
    },
    {
      id: 1,
      title: "iphone 16",
      price: 3000,
      quantity:7,
      img:"https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FApple_i_Phone_16_specification_feed5e61f2.jpg&w=384&q=75"
    },
    {
      id: 2,
      title: "iphone 14",
      price: 3500,
      quantity:8,
      img:"https://www.scoop.com.tn/40686-medium_default/smartphone-apple-iphone-14-pro-max-1to-ecran-67-deep-purple.jpg"

    }
  ];

  buy(product: any) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }

  filteredProducts() {
    return this.products.filter(p => p.price >= this.price);
  }
}

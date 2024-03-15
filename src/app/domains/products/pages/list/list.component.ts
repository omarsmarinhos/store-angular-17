import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=22',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 200,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=27',
        createdAt: new Date().toISOString()
      }
    ];

    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    //Agregar producto al carrito
    this.cart.update(prevState => [...prevState, product]);
  }

}

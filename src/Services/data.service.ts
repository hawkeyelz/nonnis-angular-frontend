import { Injectable } from '@angular/core';
import { Interface } from 'readline';
import { Observable, Subscriber } from 'rxjs';
import { Product } from '../app/interfaces/prduct';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Product[] = [];
  constructor() {}
  private dummyData: Product[] = [
    {
      id: '1',
      name: 'Ring',
      description: 'This is a ring',
      image: '',
      thumbnail: '',
      price: 11.42,
      auctionLink: '',
      purchasePrice: 0,
      addedOn: new Date('02/24/2022'),
      instock: false,
    },
    {      id: '2',
    name: 'Necklass',
    description: 'This is a Necklass',
    image: '',
    thumbnail: '',
    price: 11.42,
    auctionLink: '',
    purchasePrice: 0,
    addedOn: new Date('02/24/2022'),
    instock: false,},
    {      id: '3',
    name: 'Braclett',
    description: 'This is a Braclett',
    image: '',
    thumbnail: '',
    price: 11.42,
    auctionLink: '',
    purchasePrice: 0,
    addedOn: new Date('02/24/2022'),
    instock: false},
    {id: '4',
    name: 'Watch',
    description: 'This is a Watch',
    image: '',
    thumbnail: '',
    price: 11.42,
    auctionLink: '',
    purchasePrice: 0,
    addedOn: new Date('02/24/2022'),
    instock: false,},
    {      id: '1',
    name: 'Braclett',
    description: 'This is a Braclett',
    image: '',
    thumbnail: '',
    price: 11.42,
    auctionLink: '',
    purchasePrice: 0,
    addedOn: new Date('02/24/2022'),
    instock: false},
    {id: '5',
    name: 'Pendant',
    description: 'This is a Pendant',
    image: '',
    thumbnail: '',
    price: 11.42,
    auctionLink: '',
    purchasePrice: 0,
    addedOn: new Date('02/24/2022'),
    instock: false,},
    {      id: '6',
    name: 'Ear Rings',
    description: 'This is a set of Ear Rings',
    image: '',
    thumbnail: '',
    price: 11.42,
    auctionLink: '',
    purchasePrice: 0,
    addedOn: new Date('02/24/2022'),
    instock: false}
  ];

  public getData = () => {
    
  };

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public removeProduct(product: Product) {}
}

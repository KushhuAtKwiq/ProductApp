import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product().add(
      10293,
      'Relaxing Oasis Hammock',
      79.99,
      'Escape to your private oasis...',
      'Hang Loose Hammocks',
      12,
      true,
      4.9
    ),
    new Product().add(
      45682,
      'Ultimate Support Executive Chair',
      249.99,
      'Experience peak comfort and support...',
      'ErgoPro',
      8,
      false,
      4.7
    ),
    new Product().add(
      87321,
      'Modern Ceramic Planter with Stand',
      39.99,
      'Add a touch of nature and sophistication...',
      'Urban Bloom',
      15,
      false,
      4.5
    ),
    new Product().add(
      98754,
      'Weatherproof Patio Dining Set',
      499.99,
      'Enjoy outdoor gatherings in style...',
      'Backyard Bliss',
      5,
      true,
      4.6
    ),
    new Product().add(
      32165,
      'Reversible Woven Rug',
      99.99,
      'Add style and comfort to any space...',
      'Rug Republic',
      10,
      true,
      4.8
    ),
    new Product().add(
      74589,
      'Waterproof BoomBox Speaker',
      59.99,
      'Take your tunes anywhere...',
      'SoundWave',
      20,
      true,
      4.9
    ),
    new Product().add(
      56712,
      'Adjustable Touch-Control Desk Lamp',
      49.99,
      'Illuminate your workspace...',
      'Lumino Tech',
      7,
      false,
      4.8
    ),
    new Product().add(
      23490,
      'Lightweight Carry-On Backpack',
      89.99,
      'Explore the world with ease...',
      'Nomad Adventure',
      18,
      true,
      4.7
    ),
    new Product().add(
      90125,
      '3-in-1 Fast Charging Dock',
      29.99,
      'Power up your devices seamlessly...',
      'ChargeTech',
      14,
      false,
      4.6
    ),
    new Product().add(
      65438,
      'Immersive Wireless Headphones',
      199.99,
      'Experience pure audio bliss...',
      'SoundSerenity',
      9,
      true,
      4.9
    ),
    new Product().add(
      17356,
      'Reusable Stainless Steel Bottle',
      24.99,
      'Stay hydrated and reduce waste...',
      'SoundWave',
      25,
      true,
      4.8
    ),
  ];

  cart: Product[] = [
    // new Product().add(
    //   12,
    //   'Modern Ceramic Planter with Stand',
    //   39,
    //   'Add a touch of nature and sophistication...',
    //   'Urban Bloom',
    //   15,
    //   false,
    //   4
    // ),
  ];

  /**
   * Calling from API
   */
  private baseUrl = 'http://localhost:3000/product';
  ProductData: Product[];

  constructor(private http: HttpClient) {}

  public get getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  public getProduct(id: number): Observable<Product> {
    console.log(this.baseUrl + '/' + id);
    return this.http.get<Product>(this.baseUrl + '/' + id);
  }
  public postData(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  /**
   * Service method for retriving data
   * @method getter
   */
  public get getProducts(): Product[] {
    return this.products;
  }

  /**
   * Service method for retriving data
   * @method setter
   */
  public set addNewProduct(product: Product) {
    this.products.push(product);
  }

  public addToCart(product: Product) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  public get getCart() {
    // console.log(...this.cart);
    return this.cart;
  }

  /**
   returns all the Brand Name
   * 
    */
  public get getBrandNames(): string[] {
    return Array.from(new Set(this.products.map((item) => item.brand)));
  }

  /**
   * Searches for a specific product in array
   * @param productId
   * @returns given Product
   */
  // public getProduct(productId: number): Product | undefined {
  //   return this.products.find((item) => item.id == productId);
  // }
}

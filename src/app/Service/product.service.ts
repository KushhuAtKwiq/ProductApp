import { Product } from '../model/Product';

export class ProductService {
  products: Product[] = [
    new Product().addDetails(
      10293,
      'Relaxing Oasis Hammock',
      79.99,
      'Escape to your private oasis...',
      'Hang Loose Hammocks',
      12,
      true,
      4.9
    ),
    new Product().addDetails(
      45682,
      'Ultimate Support Executive Chair',
      249.99,
      'Experience peak comfort and support...',
      'ErgoPro',
      8,
      false,
      4.7
    ),
    new Product().addDetails(
      87321,
      'Modern Ceramic Planter with Stand',
      39.99,
      'Add a touch of nature and sophistication...',
      'Urban Bloom',
      15,
      false,
      4.5
    ),
    new Product().addDetails(
      98754,
      'Weatherproof Patio Dining Set',
      499.99,
      'Enjoy outdoor gatherings in style...',
      'Backyard Bliss',
      5,
      true,
      4.6
    ),
    new Product().addDetails(
      32165,
      'Reversible Woven Rug',
      99.99,
      'Add style and comfort to any space...',
      'Rug Republic',
      10,
      true,
      4.8
    ),
    new Product().addDetails(
      74589,
      'Waterproof BoomBox Speaker',
      59.99,
      'Take your tunes anywhere...',
      'SoundWave',
      20,
      true,
      4.9
    ),
    new Product().addDetails(
      56712,
      'Adjustable Touch-Control Desk Lamp',
      49.99,
      'Illuminate your workspace...',
      'Lumino Tech',
      7,
      false,
      4.8
    ),
    new Product().addDetails(
      23490,
      'Lightweight Carry-On Backpack',
      89.99,
      'Explore the world with ease...',
      'Nomad Adventure',
      18,
      true,
      4.7
    ),
    new Product().addDetails(
      90125,
      '3-in-1 Fast Charging Dock',
      29.99,
      'Power up your devices seamlessly...',
      'ChargeTech',
      14,
      false,
      4.6
    ),
    new Product().addDetails(
      65438,
      'Immersive Wireless Headphones',
      199.99,
      'Experience pure audio bliss...',
      'SoundSerenity',
      9,
      true,
      4.9
    ),
    new Product().addDetails(
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

  public get getProducts(): Product[] {
    return this.products;
  }

  public set addNewProduct(product: Product) {
    this.products.push(product);
  }

  public getProduct(productId: number): Product | undefined {
    return this.products.find((item) => item.id == productId);
    // return this.products[1];
  }

  public getBrandName() {
    return this.products.map((item) => item.brand);
  }
}

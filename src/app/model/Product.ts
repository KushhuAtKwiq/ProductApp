interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  quantity: number;
  usage: boolean; // 0 - indoor || 1 - outdoor
  rating: number;
}

export class Product implements Item {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  quantity: number;
  usage: boolean;
  rating: number;

  add(
    id: number,
    name: string,
    price: number,
    description: string,
    brand: string,
    quantity: number,
    usage: boolean,
    rating: number
  ): Product {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.brand = brand;
    this.quantity = quantity;
    this.usage = usage;
    this.rating = rating;

    return this;
  }
}

export interface Drink {
  id: number;
  name: string;
  url: string;
  price: number;
  description: string;
}

export type CartItem = {
  id: string;
  name: string;
  url: string;
  price: number;
  description: string;
  quantity: number;
};

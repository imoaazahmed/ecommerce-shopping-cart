export interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  totalPrice: number;
  quantity: number;
  currency: 'USD';
  category: string;
}

export interface OrderSummaryType {
  totalPrice: number;
  totalCost: number;
  currency: string;
  count: number;
  shippingCost: {
    standard: number;
    nextDay: number;
  };
}

export interface CartType {
  items: CartItemType[];
  orderSummary: OrderSummaryType;
}

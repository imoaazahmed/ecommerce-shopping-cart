import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType } from 'src/__mocks__/types';

// Initial State
interface StateType {
  loading: boolean;
  data: CartType;
  error: any;
}

const initialState = {
  loading: true,
  data: {},
  error: '',
} as StateType;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Cart
    fetchCartDataRequest: (state) => {
      state.loading = true;
    },
    fetchCartDataSuccess: (state, action: PayloadAction<CartType>) => {
      (state.loading = false), (state.data = action?.payload);
    },
    fetchCartDataFailure: (state, action: PayloadAction<any>) => {
      (state.loading = false), (state.error = action?.payload);
    },

    // Quantity
    fetchUpdateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const items = [...state.data.items];
      const index = items.findIndex((item) => item.id === action.payload.id);
      items[index].quantity = action.payload.quantity;
      items[index].totalPrice = action.payload.quantity * items[index].price;
      state.data.items = items;

      let totalPrice = 0;
      items.map((item) => (totalPrice += item.totalPrice));
      state.data.orderSummary.totalPrice = totalPrice;
      state.data.orderSummary.totalCost = totalPrice + state.data.orderSummary.shippingCost.standard;
    },

    // Remove
    fetchRemoveCartItem: (state, action: PayloadAction<string>) => {
      let items = [...state.data.items];
      items = items.filter((item) => item.id !== action.payload);
      state.data.items = items;
      state.data.orderSummary.count = items.length;

      let totalPrice = 0;
      items.map((item) => (totalPrice += item.totalPrice));
      state.data.orderSummary.totalPrice = totalPrice;
      state.data.orderSummary.totalCost = totalPrice + state.data.orderSummary.shippingCost.standard;
    },
  },
});

export const {
  fetchCartDataRequest,
  fetchCartDataSuccess,
  fetchCartDataFailure,
  fetchUpdateQuantity,
  fetchRemoveCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;

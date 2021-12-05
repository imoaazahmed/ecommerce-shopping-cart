import { combineReducers } from '@reduxjs/toolkit';

// App Reducers
import cartReducer from '@redux/cart/reducer';

export default combineReducers({
  cart: cartReducer,
});

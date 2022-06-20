import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import cartSlice from "./slices/cart/cart-slice";
import filterSlice from "./slices/filter/filter-slice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/filter-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        filter,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

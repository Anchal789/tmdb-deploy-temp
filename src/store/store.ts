import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';
import filterSlice from './filterSlice';

const store = configureStore({
    reducer: {
        movies: movieSlice.reducer,
        filters: filterSlice.reducer,
    }
})

export default store;
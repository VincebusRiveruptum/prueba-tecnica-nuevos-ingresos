import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./cars/carsSlice";

// This object picks a reducer

// store = configureStore( {reducers} );
export const store = configureStore({
    reducer: {
        cars : carsSlice.reducer
    },
});

// Essentially the return type of the function 
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;



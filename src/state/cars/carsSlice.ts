import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cars} from './cars';

const initialState: Cars = {
    cars:[]
};

export const carsSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{
        addCar:(state, action) => {
            state.cars.push(action.payload);
        },
        removeCar:(state,action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        },        
    }
});

export const { addCar, removeCar } = carsSlice.actions;

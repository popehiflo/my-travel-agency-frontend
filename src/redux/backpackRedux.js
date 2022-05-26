/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const backpackSlice = createSlice({
  name: 'backpack',
  initialState: {
    tours: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addTour: (state, action) => {
      state.quantity += 1;
      state.tours.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addTour } = backpackSlice.actions;
export default backpackSlice.reducer;

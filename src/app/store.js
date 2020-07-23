import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moverReducer from '../features/mover/moverSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mover: moverReducer
  },
});

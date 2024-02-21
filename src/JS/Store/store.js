import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/rootReducer';
const store = configureStore({
    reducer: {
        tasks: rootReducer,
      },
  });
  
  export default store;


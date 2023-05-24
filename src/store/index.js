import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import statusControl from './reducers/statusControl';

const store = configureStore({
  reducer: {
    // Add your reducers to the "reducer" object
    control: statusControl,
  },
});

export default store;

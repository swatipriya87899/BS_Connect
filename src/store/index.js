import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import statusControl from './reducers/statusControl';
import friend from './reducers/friend';

const store = configureStore({
  reducer: {
    // Add your reducers to the "reducer" object
    control: statusControl,
    friend:friend
  },
});

export default store;

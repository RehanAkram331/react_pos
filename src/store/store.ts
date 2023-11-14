import { apiSlice } from '@app/features/api/apiSlice';
import authSlice from '@app/features/auth/authSlice';
import { uiSlice } from '@app/features/reducers/ui';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(createLogger()).concat(apiSlice.middleware)
  ]
});

export default store;

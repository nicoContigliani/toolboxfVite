// eslint-disable-next-line no-unused-vars
import { configureStore } from '@reduxjs/toolkit';
import fileReducer from '../Stores/features/folder/fileSlice'

export const store = configureStore({
    reducer: {
      file: fileReducer
    },
  });
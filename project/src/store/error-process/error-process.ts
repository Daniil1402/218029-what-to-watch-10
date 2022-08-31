import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ErrorProcess} from '../../types/state';
import { setError } from '../action';

const initialState: ErrorProcess = {
  error: null,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  }
});

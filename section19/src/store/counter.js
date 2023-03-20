import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // redux에서는 직접 값을 변경하면 안되지만, redux toolkit의 createSlice를 사용하면
      // 직접 변경을 하는 문구를 사용해도 된다.
      // redux toolkit에서 알아서 재생성 및 나머지 값들을 복사해주기 떄문이다.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

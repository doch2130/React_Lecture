// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       // redux에서는 직접 값을 변경하면 안되지만, redux toolkit의 createSlice를 사용하면
//       // 직접 변경을 하는 문구를 사용해도 된다.
//       // redux toolkit에서 알아서 재생성 및 나머지 값들을 복사해주기 떄문이다.
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const counterReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case 'increase':
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case 'decrement':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'toggle':
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);
// const store = configureStore({ reducer: counterReducer });
// const store = configureStore({ reducer: counterSlice.reducer });
// const store = configureStore({ counter: counterSlice.reducer });
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

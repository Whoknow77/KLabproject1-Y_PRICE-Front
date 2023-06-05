import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 생성
let user = createSlice({
  // name: state이름, initialState: state값
  name: "user",
  initialState: "kim",
});

// state 등록
export default configureStore({
  reducer: {
    // 작명: createSlice 만든거.reducer
    user: user.reducer,
  },
});

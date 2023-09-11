import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addmessage } = ChatSlice.actions;
export default ChatSlice.reducer;

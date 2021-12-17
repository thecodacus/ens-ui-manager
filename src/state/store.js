import { configureStore } from "@reduxjs/toolkit"
import avatarReducer from "./avatar-slice"
export const store = configureStore({
	reducer: {
		avatar: avatarReducer,
	},
})

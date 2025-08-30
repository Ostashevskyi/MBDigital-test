import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice/cartSlice'
import coursesReducer from "./coursesSlice/coursesSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    courses: coursesReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
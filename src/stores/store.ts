import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import modalReducer from './modal-store'
import resourceReducer from './resource-store'
import membersReducer from './members-store'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    resource: resourceReducer,
    members: membersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
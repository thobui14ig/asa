import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ResourceState {
  teamId: string,

}

const initialState: ResourceState = {
    teamId: 'false',
}

export const resource = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    setResource: (state, payload) => {
      const { id } = payload.payload
      state.teamId = id;
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { setResource } = resource.actions

export default resource.reducer
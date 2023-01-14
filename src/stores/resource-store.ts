import { createSlice } from '@reduxjs/toolkit'

export interface ResourceState {
  teamId: string,
  resourceTitle: string
}

const initialState: ResourceState = {
    teamId: 'false',
    resourceTitle: ''
}

export const resource = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    setResource: (state, payload) => {
      const { id } = payload.payload
      state.teamId = id;
    },
    setResourceTitle: (state, payload) => {
      state.resourceTitle = payload.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setResource, setResourceTitle } = resource.actions

export default resource.reducer
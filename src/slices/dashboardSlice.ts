import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DashboardState {
  users: Dashboard.User[]
}

const initialState: DashboardState = {
  users: []
}

const storeUsers = (
  state: DashboardState,
  { payload }: PayloadAction<Dashboard.User[]>
): void => {
  state.users = payload
}

export const dashboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveUsers: storeUsers
  }
})

export const { saveUsers } = dashboardSlice.actions

export default dashboardSlice.reducer

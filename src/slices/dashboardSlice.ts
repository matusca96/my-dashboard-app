import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DashboardState {
  users: Dashboard.User[]
  firstTimeLoaded: boolean
}

const initialState: DashboardState = {
  users: [],
  firstTimeLoaded: false
}

const storeUsers = (
  state: DashboardState,
  { payload }: PayloadAction<Dashboard.User[]>
): void => {
  state.users = payload
}

const storeFirstTimeLoaded = (
  state: DashboardState,
  { payload }: PayloadAction<boolean>
): void => {
  state.firstTimeLoaded = payload
}

export const dashboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveUsers: storeUsers,
    checkFirstTimeLoaded: storeFirstTimeLoaded
  }
})

export const { saveUsers, checkFirstTimeLoaded } = dashboardSlice.actions

export default dashboardSlice.reducer

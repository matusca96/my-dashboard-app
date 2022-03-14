import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DashboardState {
  users: Dashboard.User[]
  firstTimeLoaded: boolean
  totalUsers: number
}

const initialState: DashboardState = {
  users: [],
  firstTimeLoaded: false,
  totalUsers: 0
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

const incrementUsers = (
  state: DashboardState,
  { payload }: PayloadAction<number>
): void => {
  state.totalUsers += payload
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    saveUsers: storeUsers,
    checkFirstTimeLoaded: storeFirstTimeLoaded,
    incrementTotalUsers: incrementUsers
  }
})

export const { saveUsers, checkFirstTimeLoaded, incrementTotalUsers } =
  dashboardSlice.actions

export default dashboardSlice.reducer

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import dashboardReducer, { DashboardState } from '../../slices/dashboardSlice'

const store = configureStore({
  reducer: dashboardReducer,
  devTools: process.env.NODE_ENV === 'development'
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, DashboardState, null, Action<string>>

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<DashboardState> = useSelector

export default store

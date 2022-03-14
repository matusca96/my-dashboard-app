import { useContext } from 'react'
import { ToastContext } from '../contexts/ToastContext'

const useToast = (): ToastContext.Data => {
  const context = useContext(ToastContext)

  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export default useToast

import { createContext, useState } from 'react'
import { Toast } from '../components/Toast'

export const ToastContext = createContext({} as ToastContext.Data)

export const ToastProvider = ({
  children
}: ToastContext.Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState({
    duration: 5000,
    status: 'success'
  } as ToastContext.Options)

  const toast = (options: ToastContext.Options): void => {
    setOptions(options)
    setOpen(true)

    setTimeout(() => setOpen(false), options.duration ?? 5000)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      <Toast
        title={options.title}
        description={options.description}
        status={options.status}
        open={open}
        onOpenChange={setOpen}
      >
        {children}
      </Toast>
    </ToastContext.Provider>
  )
}

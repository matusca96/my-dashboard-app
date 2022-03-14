import {
  ToastProvider,
  Toast as ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
  Button
} from './styles'

interface Props {
  title: string
  description: string
  status: 'success' | 'error'
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const Toast = ({
  title,
  description,
  status,
  open,
  onOpenChange,
  children
}: Props): JSX.Element => {
  return (
    <ToastProvider swipeDirection="right">
      {children}
      <ToastRoot status={status} open={open} onOpenChange={onOpenChange}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction asChild altText="Close notification">
          <Button color={status} onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

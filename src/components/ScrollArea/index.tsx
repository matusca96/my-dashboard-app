import {
  StyledCorner,
  StyledScrollArea,
  StyledScrollbar,
  StyledThumb,
  StyledViewport
} from './styles'

interface Props {
  children: React.ReactNode
}

export const ScrollArea = ({ children }: Props): JSX.Element => {
  return (
    <StyledScrollArea>
      <StyledViewport css={{ bg: '$slate3', transition: '$fast' }}>
        {children}
      </StyledViewport>
      <StyledScrollbar orientation="vertical">
        <StyledThumb />
      </StyledScrollbar>
      <StyledScrollbar orientation="horizontal">
        <StyledThumb />
      </StyledScrollbar>
      <StyledCorner />
    </StyledScrollArea>
  )
}

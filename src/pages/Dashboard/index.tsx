import { Box } from '../../components/Box'
import { Header } from '../../components/Header'

export const Dashboard = (): JSX.Element => {
  return (
    <Box css={{ maxWidth: '1200px', mx: 'auto', px: '$4' }}>
      <Header />
    </Box>
  )
}

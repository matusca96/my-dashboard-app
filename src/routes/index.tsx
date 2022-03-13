import { Routes as Router, Route } from 'react-router-dom'

import { AddUser } from '../pages/AddUser'
import { Dashboard } from '../pages/Dashboard'
import { EditUser } from '../pages/EditUser'

export const Routes = (): JSX.Element => {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>Theres nothing here!</p>
          </main>
        }
      />
    </Router>
  )
}

import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/auth'

const ProtectedRoutes = () => {
  const { isLogged } = useAuth()
  return isLogged ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes

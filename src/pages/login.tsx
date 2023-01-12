import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

const LoginPage = () => {
  const { isLogged, setLogged } = useAuth()

  return (
    <>
      {isLogged ? (
        <Navigate to="/planboard" replace />
      ) : (
        <>
          <button
            className="px-5 py-2 rounded-md bg-green-700/40 cursor-pointer font-inter text-gray-300"
            onClick={() => setLogged(true)}
          >
            Login
          </button>
        </>
      )}
    </>
  )
}

export default LoginPage

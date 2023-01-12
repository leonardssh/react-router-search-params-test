import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ProtectedRoutes from './components/protectedRoute'
import { AuthContext } from './context/auth'

const PlanboardPage = React.lazy(() => import('./pages/planboard'))
const GridPage = React.lazy(() => import('./pages/grid'))
const LoginPage = React.lazy(() => import('./pages/login'))

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <AuthContext.Provider value={{ isLogged: loggedIn, setLogged: setLoggedIn }}>
      {loggedIn && (
        <nav>
          <ul className="flex gap-3 cursor-pointer font-inter text-gray-300 justify-center items-center">
            <li
              className="px-5 py-2 rounded-md bg-neutral-700/40"
              onClick={() => navigate('planboard')}
            >
              Planboard
            </li>
            <li className="px-5 py-2 rounded-md bg-neutral-700/40" onClick={() => navigate('grid')}>
              Grid
            </li>
            <li className="px-5 py-2 rounded-md bg-red-700/40" onClick={() => setLoggedIn(false)}>
              Log Out
            </li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="login" element={<LoginPage />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route index element={<Navigate to="/planboard" replace />} />

          <Route
            path="planboard"
            element={
              <React.Suspense fallback={<>Loading planboard...</>}>
                <PlanboardPage />
              </React.Suspense>
            }
          />

          <Route
            path="grid"
            element={
              <React.Suspense fallback={<>Loading grid page...</>}>
                <GridPage />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App

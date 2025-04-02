import { Navigate, Route, Routes } from "react-router"
import App from "./App"
import AuthContainer from "./components/authContainer"
import { useTypedSelector } from "./store/hooks"

const Router = () => {
  const isAuthenticated =
    useTypedSelector((state) => state.auth.isAuthenticated) ||
    Number(localStorage.getItem("isAuthenticated"))
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to={"/home"} /> : <AuthContainer />
        }
      />
      <Route
        path="/home"
        element={!isAuthenticated ? <Navigate to={"/login"} /> : <App />}
      />
    </Routes>
  )
}

export default Router

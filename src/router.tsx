import { Route, Routes } from "react-router"
import App from "./App"
import AuthContainer from "./components/authContainer"

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/login" element={<AuthContainer />} />
    </Routes>
  )
}
export default Router

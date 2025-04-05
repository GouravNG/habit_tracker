import { Navigate, Route, Routes } from "react-router"
import App from "./App"
import AuthContainer from "./components/authContainer"
import { useTypedSelector } from "./store/hooks"
import { Alert, Snackbar } from "@mui/material"

const Router = () => {
  const isAuthenticated =
    useTypedSelector((state) => state.auth.isAuthenticated) ||
    Number(localStorage.getItem("isAuthenticated"))
  const snackBarStatus = useTypedSelector((state) => state.toggles.isSnackBar)
  const snackBarContent = useTypedSelector(
    (state) => state.toggles.snackBarContent
  )
  return (
    <>
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
      <Snackbar
        open={snackBarStatus}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert severity={"info"}>{snackBarContent}</Alert>
      </Snackbar>
    </>
  )
}

export default Router

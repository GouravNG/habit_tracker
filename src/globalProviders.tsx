import { ThemeProvider } from "@emotion/react"
import { habbitTheme } from "./theme/theme"
import { Provider } from "react-redux"
import habbitStore from "./store/habbitStore"
import { BrowserRouter } from "react-router"

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={habbitStore}>
        <BrowserRouter>
          <ThemeProvider theme={habbitTheme}>{children}</ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default GlobalProvider

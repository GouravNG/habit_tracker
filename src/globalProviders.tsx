import { ThemeProvider } from "@emotion/react"
import { habbitTheme } from "./theme/theme"
import { Provider } from "react-redux"
import habbitStore from "./store/habbitStore"

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={habbitStore}>
        <ThemeProvider theme={habbitTheme}>{children}</ThemeProvider>
      </Provider>
    </>
  )
}

export default GlobalProvider

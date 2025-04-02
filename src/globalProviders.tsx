import { ThemeProvider } from "@emotion/react"
import { habbitTheme } from "./theme/theme"
import { Provider } from "react-redux"
import habbitStore from "./store/habbitStore"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router"

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const tanClient = new QueryClient()
  return (
    <>
      <Provider store={habbitStore}>
        <QueryClientProvider client={tanClient}>
          <BrowserRouter>
            <ThemeProvider theme={habbitTheme}>{children}</ThemeProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default GlobalProvider

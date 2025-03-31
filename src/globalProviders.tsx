import { ThemeProvider } from "@emotion/react"
import { habbitTheme } from "./theme/theme"

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={habbitTheme}>{children}</ThemeProvider>
    </>
  )
}

export default GlobalProvider

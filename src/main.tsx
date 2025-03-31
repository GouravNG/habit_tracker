import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import GlobalProvider from "./globalProviders.tsx"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <CssBaseline />
      <Container maxWidth="lg">
        <App />
      </Container>
    </GlobalProvider>
  </StrictMode>
)

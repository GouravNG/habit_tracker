import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from "react"
import { useLogin, useSignup } from "../api/hooks/auth.hooks"
import type { TAuthPayload } from "../api/types/auth.types"

const AuthContainer = () => {
  const [tab, setTab] = useState(0)
  const signup = useSignup()
  const login = useLogin()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload: TAuthPayload = {
      email: formData.get("email")!.toString(),
      password: formData.get("password")!.toString(),
    }
    if (tab) signup.mutate(payload)
    else login.mutate(payload)
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          height: "98vh",
        }}
      >
        <Grid size={5}>
          <Card elevation={4} sx={{ padding: 2, borderRadius: 2 }}>
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign={"center"}
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              Habit Tracker <Box component={"span"}>🎯</Box>
            </Typography>
            <Tabs
              centered
              value={tab}
              onChange={(_, v) => setTab(v)}
              sx={{ margin: 2 }}
            >
              <Tab label={"Login"} sx={{ width: "50%", padding: 1 }} />
              <Tab label={"SignUp"} sx={{ width: "50%", padding: 1 }} />
            </Tabs>
            <Stack
              component={"form"}
              spacing={2}
              onSubmit={(e) => handleSubmit(e)}
            >
              <Box>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  sx={{ width: "100%" }}
                />
              </Box>
              {!!tab && (
                <Box sx={{ width: "100%" }}>
                  <TextField
                    id="confirm-password"
                    name="confirm-password"
                    label="Confirm Password"
                    placeholder="Re-enter password"
                    type="password"
                    sx={{ width: "100%" }}
                  />
                </Box>
              )}
              <Button
                variant="contained"
                size="small"
                sx={{ padding: 2 }}
                type="submit"
              >
                {tab ? "Signup" : "Login"}
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
export default AuthContainer

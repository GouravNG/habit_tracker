import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"

const AuthContainer = () => {
  const [tab, setTab] = useState(0)
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
            <Typography variant="h5" fontWeight={700} textAlign={"center"}>
              Habit Tracker
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
            <Stack component={"form"} spacing={2}>
              <Box>
                <TextField
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="password"
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
                    label="Confirm Password"
                    placeholder="Re-enter password"
                    type="password"
                    sx={{ width: "100%" }}
                  />
                </Box>
              )}
              <Button variant="contained" size="small" sx={{ padding: 2 }}>
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

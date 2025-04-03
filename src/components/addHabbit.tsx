import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { CircleCheckBig, CircleX } from "lucide-react"
import { useTypedDispatch } from "../store/hooks"
import { toggleNewHabbit } from "../store/toggleSlice"
import useCreateHabbit, { useGetHabbits } from "../api/hooks/habit.hooks"
import { TCreateHabbit } from "../api/api.modal"

const AddHabbit = () => {
  const dispatch = useTypedDispatch()
  const habbit = useCreateHabbit()
  useGetHabbits()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload: TCreateHabbit = {
      name: formData.get("habbit-name")!.toString(),
      user_id: localStorage.getItem("userId")!,
    }
    habbit.mutate(payload)
  }
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid>
          <Grid size={2}>
            <Typography id="modal-modal-title" variant="h6" component={"h2"}>
              Habbit
            </Typography>
          </Grid>
          <Grid>
            <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
              <Box
                component={"input"}
                placeholder="Enter your Habbit"
                name="habbit-name"
                id="habbit-name"
                sx={{
                  width: "100%",
                  padding: 2,
                  marginY: 2,
                }}
              />
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ padding: 2, borderRadius: 2 }}
                  endIcon={<CircleX />}
                  onClick={() => dispatch(toggleNewHabbit())}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  sx={{ padding: 2, borderRadius: 2 }}
                  endIcon={<CircleCheckBig />}
                  type="submit"
                >
                  Done
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AddHabbit

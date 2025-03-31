import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { CircleCheckBig, CircleX } from "lucide-react"
import { useTypedDispatch } from "../store/hooks"
import { toggleNewEntry } from "../store/toggleSlice"

const AddEntry = () => {
  const dispatch = useTypedDispatch()
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
              Entry
            </Typography>
          </Grid>
          <Grid>
            <Box component={"form"}>
              <Typography variant="body2">{Date.now()}</Typography>
              <Box
                component={"input"}
                placeholder="Add notes"
                sx={{
                  width: "100%",
                  padding: 2,
                  marginY: 2,
                }}
              />
            </Box>
          </Grid>
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
              onClick={() => dispatch(toggleNewEntry())}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{ padding: 2, borderRadius: 2 }}
              endIcon={<CircleCheckBig />}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AddEntry

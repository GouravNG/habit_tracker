import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { CircleCheck } from "lucide-react"

const placeHolderArray = [1, 2, 3, 4, 5, 6, 7]

const Tracker = () => {
  return (
    <Grid size={12} container marginBottom={1}>
      <Grid size={2} alignContent={"center"} justifyContent={"center"}>
        <Typography variant="h6" textAlign={"center"}>
          Running 🏃‍♂️
        </Typography>
      </Grid>
      <Grid
        size="grow"
        container
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {placeHolderArray.map((_, index) => {
          return (
            <Grid
              textAlign={"center"}
              size="grow"
              key={index}
              sx={{
                height: "100%",
                backgroundColor: "orange",
                borderRadius: 2,
              }}
            />
          )
        })}
      </Grid>
      <Grid
        size={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          size="large"
          variant="outlined"
          sx={{ borderRadius: 2, paddingY: 2 }}
          endIcon={<CircleCheck />}
        >
          Add entry
        </Button>
      </Grid>
    </Grid>
  )
}
export default Tracker

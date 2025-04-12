import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { CircleCheck } from "lucide-react"
import { useTypedDispatch } from "../store/hooks"
import { toggleNewEntry } from "../store/toggleSlice"
import { setHabitId } from "../store/primarySlice"
import { THabit } from "../api/types/habits.types"

const today = new Date()

const placeHolderArray = Array.from({ length: 7 })
  .map((_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    return date.toISOString().slice(0, 10)
  })
  .reverse()

const Tracker = ({ data }: { data: THabit }) => {
  const dispatch = useTypedDispatch()
  return (
    <Grid
      size={12}
      container
      marginBottom={1}
      sx={{
        border: { xs: "1px black solid", lg: "none" },
        p: { xs: 1, lg: 0 },
        borderRadius: { xs: 2 },
      }}
    >
      <Grid
        size={{ lg: 2, xs: 6 }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h6" textAlign={"center"}>
          {data.name}
        </Typography>
      </Grid>
      <Grid
        display={{ xs: "none", lg: "flex" }}
        size="grow"
        container
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {placeHolderArray.map((date, index) => {
          const finalEntry = data.entries.filter((cdate) => {
            return cdate.created_at.includes(date)
          })
          const color =
            finalEntry.length &&
            finalEntry[finalEntry.length - 1].status === "DONE"
              ? "green"
              : "lightblue"
          return (
            <Grid
              textAlign={"center"}
              size="grow"
              key={index}
              sx={{
                height: "100%",
                backgroundColor: color,
                borderRadius: 2,
              }}
            />
          )
        })}
      </Grid>
      <Grid
        size={{ lg: 2, xs: 6 }}
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
          onClick={() => {
            dispatch(setHabitId(data.id))
            dispatch(toggleNewEntry())
          }}
        >
          Add entry
        </Button>
      </Grid>
      <Grid
        display={{ xs: "flex", lg: "none" }}
        sx={{ width: "100%", p: 1 }}
        gap={{ xs: 3, lg: 1 }}
      >
        {placeHolderArray.map((date, index) => {
          const finalEntry = data.entries.filter((cdate) => {
            return cdate.created_at.includes(date)
          })
          const color =
            finalEntry.length &&
            finalEntry[finalEntry.length - 1].status === "DONE"
              ? "green"
              : "lightblue"
          return (
            <Grid
              textAlign={"center"}
              size="grow"
              key={index}
              sx={{
                height: "100%",
                backgroundColor: color,
                borderRadius: 2,
              }}
            >
              &nbsp;
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
export default Tracker

import Grid from "@mui/material/Grid"
import TrackerHeader from "./components/trackerHeader"
import Tracker from "./components/tracker"
import Utilities from "./components/utilityButtons"
import Popup from "./components/popup"
import ViewNotes from "./components/viewNotes"
import { useTypedSelector } from "./store/hooks"
import AddEntry from "./components/addEntry"
import AddHabbit from "./components/addHabbit"
import Header from "./components/header"
import { useGetHabbits } from "./api/hooks/habit.hooks"
import { THabitsResponse } from "./api/types/habits.types"
import { Typography } from "@mui/material"

function App() {
  const toggleState = useTypedSelector((states) => states.toggles)
  const { data, isError, isPending } = useGetHabbits<THabitsResponse>()

  if (data) {
    return (
      <>
        <Header />
        <Grid container height={"20vh"}>
          <Popup>
            {toggleState.isViewAllNotes && <ViewNotes />}
            {toggleState.isNewEntry && <AddEntry />}
            {toggleState.isNewHabit && <AddHabbit />}
          </Popup>
          <Grid size={12} container>
            <TrackerHeader />
          </Grid>
          <Grid
            size={12}
            sx={{ height: { lg: "300px", xs: "500px" }, overflowY: "auto" }}
          >
            {isPending && <Typography>Loading...</Typography>}
            {isError && <Typography>Something went wrong!!</Typography>}
            {(data === undefined || !data.length) && (
              <Typography textAlign={"center"} sx={{ p: 2 }}>
                No habit found!!
              </Typography>
            )}
            {data.map((i, index) => {
              return <Tracker data={i} key={index} />
            })}
          </Grid>
          <Grid
            size={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <Utilities />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default App

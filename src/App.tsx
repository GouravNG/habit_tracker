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
import { THabbitResponse } from "./api/api.modal"
import { Typography } from "@mui/material"

function App() {
  const toggleState = useTypedSelector((states) => states.toggles)
  const { data, isError, isPending } = useGetHabbits<THabbitResponse[]>()
  if (isPending) return <Typography>Loading...</Typography>
  if (isError) return <Typography>Something went wrong!!</Typography>
  if (
    data === undefined ||
    (data.length && <Typography>No habit found!!</Typography>)
  )
    if (data) {
      return (
        <>
          <Header />
          <Grid container height={"30vh"}>
            <Popup>
              {toggleState.isViewAllNotes && <ViewNotes />}
              {toggleState.isNewEntry && <AddEntry />}
              {toggleState.isNewHabbit && <AddHabbit />}
            </Popup>
            <Grid size={12} container>
              <TrackerHeader />
            </Grid>
            <Grid size={12} sx={{ height: "300px", overflowY: "auto" }}>
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

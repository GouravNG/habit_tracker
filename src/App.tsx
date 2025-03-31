import Grid from "@mui/material/Grid"
import TrackerHeader from "./components/trackerHeader"
import Tracker from "./components/tracker"
import Utilities from "./components/utilityButtons"
import Popup from "./components/popup"
import ViewNotes from "./components/viewNotes"

function App() {
  return (
    <>
      <Grid container height={"30vh"}>
        <Popup>
          <ViewNotes />
        </Popup>
        <Grid size={12} container>
          <TrackerHeader />
        </Grid>
        <Grid size={12} sx={{ height: "300px", overflowY: "auto" }}>
          <Tracker />
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

export default App

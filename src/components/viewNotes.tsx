import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import NoteList from "./noteList"
import NotesFilter from "./noteFilter"
import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"

const ViewNotes = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid>
          <Grid size={2}>
            <Typography id="modal-modal-title" variant="h6" component={"h2"}>
              Notes
            </Typography>
          </Grid>
          <Grid
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              msOverflowY: "auto",
            }}
            container
            spacing={1}
          >
            <Grid size={12}>
              <NotesFilter />
            </Grid>
            <NoteList />
            <NoteList />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pagination count={5} shape="rounded" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ViewNotes

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"

import NoteList from "./noteList"
import NotesFilter from "./noteFilter"
import { CircleX } from "lucide-react"
import { useTypedDispatch } from "../store/hooks"
import { toggleViewAllNotes } from "../store/toggleSlice"

const ViewNotes = () => {
  const dispatch = useTypedDispatch()
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
          <Grid
            size={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component={"h2"}>
              Notes
            </Typography>
            <IconButton onClick={() => dispatch(toggleViewAllNotes())}>
              <CircleX />
            </IconButton>
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

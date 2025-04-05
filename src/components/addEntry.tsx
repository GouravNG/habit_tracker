import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ToggleButton from "@mui/material/ToggleButton"

import { CircleCheckBig, CircleX } from "lucide-react"
import { useTypedDispatch, useTypedSelector } from "../store/hooks"
import { toggleNewEntry } from "../store/toggleSlice"
import { useState } from "react"
import { useCreateNote } from "../api/hooks/note.hook"

const AddEntry = () => {
  const dispatch = useTypedDispatch()
  const habitId = useTypedSelector((state) => state.primary.habitId)
  const createNote = useCreateNote()
  const [status, setStatus] = useState<"DONE" | "NOTDONE">("DONE")
  const date = new Date()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    createNote.mutate({
      habit_id: habitId,
      description: form.get("desc")!.toString(),
    })
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
            <Typography id="modal-title" variant="h6" component={"h2"}>
              Entry
            </Typography>
          </Grid>
          <Grid>
            <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
              <Typography variant="body2">{date.toLocaleString()}</Typography>
              <Box
                component={"input"}
                name="desc"
                id="desc"
                placeholder="Add notes"
                sx={{
                  width: "100%",
                  padding: 2,
                  marginY: 2,
                }}
              />
              <ToggleButton
                value={"check"}
                selected={status === "DONE" ? true : false}
                onClick={() =>
                  setStatus(status === "DONE" ? "NOTDONE" : "DONE")
                }
                sx={{ marginY: 1, paddingY: 1 }}
              >
                {status}
              </ToggleButton>
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
                  type="button"
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

export default AddEntry

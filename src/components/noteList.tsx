import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { PencilIcon } from "lucide-react"

const NoteList = () => {
  return (
    <>
      <Grid
        sx={{ backgroundColor: "green", padding: 1, borderRadius: 2 }}
        size={11}
      >
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Lorem, ipsum dolor sit
        </Typography>
      </Grid>
      <Grid size={1}>
        <Button size="large" sx={{ borderRadius: 2 }} disabled>
          <PencilIcon />
        </Button>
      </Grid>
    </>
  )
}

export default NoteList

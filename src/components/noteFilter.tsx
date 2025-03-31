import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

const NotesFilter = () => {
  const NoteHabbit = ["Running", "Cycling", "Cooking", "GyM"]
  return (
    <>
      <Autocomplete
        disablePortal
        options={NoteHabbit}
        sx={{ width: "150px" }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Habbits" />}
      />
    </>
  )
}

export default NotesFilter

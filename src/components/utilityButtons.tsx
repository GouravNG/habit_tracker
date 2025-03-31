import Button from "@mui/material/Button"
import { PlusCircle, ScrollText } from "lucide-react"
import { useTypedDispatch } from "../store/hooks"
import { toggleNewHabbit, toggleViewAllNotes } from "../store/toggleSlice"

const Utilities = () => {
  const dispatch = useTypedDispatch()
  return (
    <>
      <Button
        variant="contained"
        sx={{ padding: 2, borderRadius: 2 }}
        endIcon={<PlusCircle />}
        onClick={() => dispatch(toggleNewHabbit())}
      >
        Add Habbit
      </Button>
      <Button
        variant="contained"
        sx={{ padding: 2, borderRadius: 2 }}
        endIcon={<ScrollText />}
        onClick={() => dispatch(toggleViewAllNotes())}
      >
        View notes
      </Button>
    </>
  )
}

export default Utilities

import Button from "@mui/material/Button"
import { PlusCircle, ScrollText } from "lucide-react"

const Utilities = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{ padding: 2, borderRadius: 2 }}
        endIcon={<PlusCircle />}
      >
        Add Habbit
      </Button>
      <Button
        variant="contained"
        sx={{ padding: 2, borderRadius: 2 }}
        endIcon={<ScrollText />}
      >
        View notes
      </Button>
    </>
  )
}

export default Utilities

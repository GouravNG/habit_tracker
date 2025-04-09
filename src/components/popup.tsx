import Modal from "@mui/material/Modal"
import { useTypedSelector } from "../store/hooks"
import { Box } from "@mui/material"

type TPopUp = {
  children: React.ReactNode
}

const PopUp: React.FC<TPopUp> = ({ children }) => {
  const toggleState = useTypedSelector((states) => states.toggles)
  const isEnabled =
    toggleState.isNewEntry ||
    toggleState.isNewHabit ||
    toggleState.isViewAllNotes

  const handleOnclose = () => {
    console.log("Modal is closed")
  }
  return (
    <>
      <Modal
        open={isEnabled}
        onClose={handleOnclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>{children}</Box>
      </Modal>
    </>
  )
}

export default PopUp

import Modal from "@mui/material/Modal"

const PopUp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Modal
        open={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>{children}</>
      </Modal>
    </div>
  )
}

export default PopUp

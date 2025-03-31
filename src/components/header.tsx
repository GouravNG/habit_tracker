import AppBar from "@mui/material/AppBar"
import Avatar from "@mui/material/Avatar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          padding: 1,
          marginBottom: 2,
          borderBottom: "3px tomato solid",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component={"h1"} fontWeight={800}>
            Habbit Tracker
          </Typography>
          <Avatar variant="rounded" />
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Header

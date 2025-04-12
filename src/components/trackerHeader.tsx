import Grid from "@mui/material/Grid"

const TrackerHeader = () => {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
  const today = new Date()
  const startFrom = today.getDay()
  const weekDays = Array.from(
    { length: 7 },
    (_, i) => days[(startFrom + i) % 7]
  )
  return (
    <>
      <Grid size={2} display={{ xs: "none", lg: "flex" }} />
      <Grid
        container
        size="grow"
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {weekDays.map((i, index) => {
          return (
            <Grid
              textAlign={"center"}
              size="grow"
              key={i + index}
              sx={{ textTransform: "uppercase", paddingY: 1 }}
            >
              {i}
            </Grid>
          )
        })}
      </Grid>
      <Grid size={2} display={{ xs: "none", lg: "flex" }} />
    </>
  )
}

export default TrackerHeader

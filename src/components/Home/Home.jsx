import { Box, Hidden, Typography } from "@mui/material";
import {
  MoodBad,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Mood,
} from "@mui/icons-material";
import { EmojiObjects, PlaylistAdd, LibraryBooks, HelpOutline } from "@mui/icons-material";
import afisha from "./afisha.png";

export default function Home() {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        marginTop: "-70px", // значение по умолчанию для маленьких экранов
        "@media (min-width: 400px)": {
          marginTop: "-250px", // значение для больших экранов (примерная ширина 600px)
        },
        "@media (min-width: 700px)": {
          marginTop: "-150px", // значение для больших экранов (примерная ширина 600px)
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <img src={afisha} alt="" width="180" height="180" />
        <Typography sx={{ fontSize: { xs: "34px", md: "30px" }, marginTop: "10px" }}>Привет</Typography>
        <Typography sx={{ fontSize: { xs: "34px", md: "30px" }, marginLeft: "10px" }}>Как ты себя чувствуешь?</Typography>
      </Box>

      <Box sx={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <MoodBad sx={{ fontSize: "50px", color: "red" }} />
        <SentimentDissatisfied sx={{ fontSize: "50px", color: "orange" }} />
        <SentimentSatisfied sx={{ fontSize: "50px", color: "yellow" }} />
        <SentimentVerySatisfied sx={{ fontSize: "50px", color: "green" }} />
        <Mood sx={{ fontSize: "50px", color: "chartreuse" }} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
        <StyledBox>
          <EmojiObjects sx={{ fontSize: "40px", color: "blueviolet" }} />
          <Typography sx={{ fontSize: { xs: "28px", md: "30px" } }}>Мысли</Typography>
        </StyledBox>
        <StyledBox>
          <PlaylistAdd sx={{ fontSize: "40px", color: "blueviolet" }} />
          <Typography sx={{ fontSize: { xs: "28px", md: "30px" } }}>Планы</Typography>
        </StyledBox>
        <StyledBox>
          <LibraryBooks sx={{ fontSize: "40px", color: "blueviolet" }} />
          <Typography sx={{ fontSize: { xs: "28px", md: "30px" } }}>Полезные статьи</Typography>
        </StyledBox>
        <StyledBox>
          <HelpOutline sx={{ fontSize: "40px", color: "blueviolet" }} />
          <Typography sx={{ fontSize: { xs: "28px", md: "30px" } }}>Помощь другим</Typography>
        </StyledBox>
      </Box>
    </Box>
  );
}

const StyledBox = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    {children}
  </Box>
);
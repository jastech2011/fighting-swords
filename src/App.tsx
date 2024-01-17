import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import Layout from "./components/Layout";
import useRandomOutcome from "./utils/useRandomOutcome";
import { styled } from "@mui/material/styles";

const DELAY_BATTLE = 10000;
const DELAY_RESTART = 4000;

const StyledCard = styled(Card)({
  width: 400,
  minHeight: 200,
  flexGrow: 1,
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
});

function App() {
  const [outcome, generateOutcome] = useRandomOutcome();
  const [showButton, setShowButton] = useState(true);
  const [showBattle, setShowBattle] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startGame = () => {
    generateOutcome();
    setShowResult(false);
    setShowBattle(true);
    setShowButton(false);
  };

  useEffect(() => {
    let battleTimeout: ReturnType<typeof setTimeout>;

    if (showBattle) {
      battleTimeout = setTimeout(() => {
        setShowBattle(false);
        setShowResult(true);

        setTimeout(() => {
          setShowResult(false);
          setShowButton(true);
        }, DELAY_RESTART);
      }, DELAY_BATTLE);
    }

    return () => {
      clearTimeout(battleTimeout);
    };
  }, [showBattle]);

  return (
    <Layout>
      <StyledCard>
        <CardContent>
          {showButton && (
            <Button variant="contained" onClick={startGame}>
              Start Fight
            </Button>
          )}
          {showBattle && (
            <iframe
              style={{ border: 0 }}
              src="https://lottie.host/embed/7b22685f-5456-404d-a7da-de63259a85ac/aYBlsYNSHh.json"
              title="Battle Animation"
            ></iframe>
          )}
          {showResult && (
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: outcome === "Win" ? green[500] : red[500] }}
            >
              {outcome}
            </Typography>
          )}
        </CardContent>
      </StyledCard>
    </Layout>
  );
}

export default App;

import { Paper, Typography } from "@mui/material";
import { Cards } from "./components/Cards/Cards";
import { useEffect, useState } from "react";

export const Memory = () => {
  const [revealCards, setRevealCards] = useState<boolean>(false);
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (revealCards) {
      setTimer(3);
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setRevealCards(false);
            return null;
          }
          return prev! - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [revealCards]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          height: 40,
          width: 160,
          padding: 12,
        }}
      >
        <Typography
          onClick={() => setRevealCards(!revealCards)}
          fontWeight="h3"
          style={{
            cursor: "pointer",
          }}
        >
          {revealCards ? "Restart Game!" : "Reveal Cards!"}
        </Typography>
        <Typography style={{ fontSize: 30, marginLeft: 8 }}>{timer}</Typography>
      </div>
      <Paper
        style={{
          backgroundColor: "#1B6CA7",
          width: "80%",
          height: "60%",
          padding: 40,
        }}
        elevation={2}
      >
        <Cards revealCards={revealCards} />
      </Paper>
    </div>
  );
};

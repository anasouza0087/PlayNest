import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { CARDS_CONTENTS } from "../../constants";
import { useState } from "react";
import { RevealedCards } from "./revealedCards";
import { UnrevealedCards } from "./unrevealedCards";

interface ICards {
  revealCards: boolean;
}

export const Cards = ({ revealCards }: ICards) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const shuffledCards = [...CARDS_CONTENTS, ...CARDS_CONTENTS].sort(
    () => Math.random() - 0.5
  );

  return (
    <Grid container spacing={2}>
      {shuffledCards.map((cardContent, index) => {
        return (
          <Grid item xs={4}>
            <Card style={{ height: 200 }}>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{ height: "100%", backgroundColor: "#E57EB3" }}
                >
                  {revealCards ? (
                    <RevealedCards cardContent={cardContent} index={index} />
                  ) : (
                    <UnrevealedCards />
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

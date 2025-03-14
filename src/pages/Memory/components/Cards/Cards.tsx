import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { CARDS_CONTENTS } from "../../constants";
import { useMemo, useState } from "react";
import { RevealedCard } from "./revealedCard";

interface ICards {
  revealCards: boolean;
}

export const Cards = ({ revealCards }: ICards) => {
  const [selectedsCardsPair, setSelectedsCardsPair] = useState<number[]>([]);
  const [selectedsCardsIndex, setSelectedsCardsIndex] = useState<number[]>([]);
  const [isMatch, setIsMatch] = useState<boolean>(false);

  const duplicatedAndShuffledCards = useMemo(() => {
    const doubledCards = [...CARDS_CONTENTS, ...CARDS_CONTENTS];
    return doubledCards.sort(() => Math.random() - 0.5);
  }, []);

  const showMatchCardsPair = (
    clickedCardId: number,
    clickedCardIndex: number
  ) => {
    const isMatched =
      selectedsCardsPair.includes(clickedCardId) &&
      !selectedsCardsIndex.includes(clickedCardIndex);

    setIsMatch(isMatched);

    if (selectedsCardsPair.length === 2 && !isMatched) {
      setTimeout(() => {
        setSelectedsCardsPair([]);
        setSelectedsCardsIndex([]);
      }, 500);
    }

    if (selectedsCardsPair.length < 2) {
      setSelectedsCardsPair([...selectedsCardsPair, clickedCardId]);
      setSelectedsCardsIndex([...selectedsCardsIndex, clickedCardIndex]);
    }
  };

  return (
    <Grid container spacing={2}>
      {duplicatedAndShuffledCards.map((cardContent, index) => (
        <Grid item xs={4} key={`${cardContent.id}-${index}`}>
          <Card style={{ height: 200 }}>
            <CardActionArea
              onClick={() => {
                showMatchCardsPair(cardContent.id, index);
              }}
              data-active={selectedsCardsIndex.includes(index) ? "" : undefined}
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
              <CardContent sx={{ height: "100%", width: "100%" }}>
                {(selectedsCardsIndex.includes(index) || revealCards) && (
                  <RevealedCard
                    cardContent={cardContent}
                    index={index}
                    isMatch={isMatch}
                    selectedsCardsPair={selectedsCardsPair}
                    selectedsCardsIndex={selectedsCardsIndex}
                    revealCards={revealCards}
                  />
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

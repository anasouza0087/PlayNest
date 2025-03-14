import { Typography } from "@mui/material";

interface ICard {
  name: string;
  id: number;
  icon: string;
}

interface IRevealedCard {
  index: number;
  cardContent: ICard;
  isMatch: boolean;
  selectedsCardsPair: number[];
  selectedsCardsIndex: number[];
  revealCards: boolean;
}

export const RevealedCard = ({ cardContent, index }: IRevealedCard) => {
  return (
    <div>
      <>
        <Typography fontWeight="bold">{`${cardContent.name} ${cardContent.id}.${
          index + 1
        }`}</Typography>
        <img
          src={cardContent.icon ?? ""}
          style={{
            width: "100%",
            height: 100,
            objectFit: "contain",
          }}
        />
      </>
    </div>
  );
};

import { Typography } from "@mui/material";

interface IRevealedCards {
  index: number;
  cardContent: { name: string; id: number; icon: string };
}

export const RevealedCards = ({ cardContent, index }: IRevealedCards) => {
  return (
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
  );
};

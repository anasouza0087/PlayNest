import { useMemoryGameContext } from "../context/MemoryGameContext";
import {
  BoardGame,
  CardGame,
  CardImage,
  CardsContainer,
  Container,
} from "../styles";
import { BoardButtons } from "./BoardButtons";

export const MemoryGameBoard = () => {
  const { shuffledCards } = useMemoryGameContext();
  return (
    <Container>
      <BoardButtons />
      <BoardGame>
        <CardsContainer>
          {shuffledCards.map((shuffledCard) => {
            return (
              <>
                <CardGame>
                  {shuffledCard.name}
                  <CardImage src={shuffledCard.image} />
                </CardGame>
              </>
            );
          })}
        </CardsContainer>
      </BoardGame>
    </Container>
  );
};

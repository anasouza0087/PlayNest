import { useMemoryGameContext } from "../context/MemoryGameContext";
import {
  BoardGame,
  CardGame,
  CardImage,
  CardsContainer,
  CardTitle,
  Container,
  CounterContainer,
  GameCounter,
} from "../styles";
import { IGameStatusEnum } from "../types";
import { BoardButtons } from "./BoardButtons";

export const MemoryGameBoard = () => {
  const { shuffledCards, gameStatus, counter, onCardClick, cardsSelecteds } =
    useMemoryGameContext();

  return (
    <Container>
      <CounterContainer>
        <BoardButtons />
        {[IGameStatusEnum.Starting].includes(gameStatus) && (
          <GameCounter>{counter}</GameCounter>
        )}
      </CounterContainer>
      <BoardGame>
        <CardsContainer>
          {shuffledCards.map((shuffledCard, shuffledCardIdx) => {
            return (
              <>
                <CardGame
                  onClick={() => onCardClick(shuffledCard, shuffledCardIdx)}
                  disabled={[
                    IGameStatusEnum.Idle,
                    IGameStatusEnum.Resetting,
                  ].includes(gameStatus)}
                >
                  {(![
                    IGameStatusEnum.Idle,
                    IGameStatusEnum.Resetting,
                    IGameStatusEnum.Playing,
                  ].includes(gameStatus) ||
                    cardsSelecteds.includes(shuffledCard.uniqueId)) && (
                    <>
                      <CardTitle>{shuffledCard.name}</CardTitle>
                      <CardImage src={shuffledCard.image} />
                    </>
                  )}
                </CardGame>
              </>
            );
          })}
        </CardsContainer>
      </BoardGame>
    </Container>
  );
};

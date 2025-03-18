import { useEffect, useState } from "react";
import { CARDS_INFORMATION } from "../constants";
import { ICardsInformationType, IGameStatusEnum } from "../types";

export const useMemoryGame = () => {
  const [revealCards, setRevealCards] = useState<boolean>(false);
  const [shuffledCards, setShuffledCards] = useState<ICardsInformationType[]>(
    []
  );
  const [gameStatus, setGameStatus] = useState<IGameStatusEnum>(
    IGameStatusEnum.Idle
  );

  const shuffleCard = () => {
    const doubledCards = [...CARDS_INFORMATION, ...CARDS_INFORMATION];
    setShuffledCards(
      doubledCards.sort(() => Math.random() - 0.5) as ICardsInformationType[]
    );
  };

  const onStartGame = () => {
    setGameStatus(IGameStatusEnum.Playing);
    shuffleCard();
  };

  useEffect(() => {
    shuffleCard();
  }, []);

  return {
    revealCards,
    setRevealCards,
    gameStatus,
    setGameStatus,
    onStartGame,
    shuffledCards,
  };
};

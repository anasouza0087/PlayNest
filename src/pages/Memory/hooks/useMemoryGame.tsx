import { useEffect, useState } from "react";
import { CARDS_INFORMATION } from "../constants";
import { ICardsInformationType, IGameStatusEnum } from "../types";

export const useMemoryGame = () => {
  const [revealCards, setRevealCards] = useState<boolean>(false);
  const [shuffledCards, setShuffledCards] = useState<any[]>(
    []
  );
  const [gameStatus, setGameStatus] = useState<IGameStatusEnum>(
    IGameStatusEnum.Idle
  );
  const [counter, setCounter] = useState<number>(3);
  const [cardsSelecteds, setCardsSelecteds] = useState<string[]>([]);

  const shuffleCard = () => {
    const doubledCards = [...CARDS_INFORMATION, ...CARDS_INFORMATION];

    const cardsWithUniqueId = doubledCards.map((card, index) => {
      const uniqueId = `${card.id}-${index % 2 === 0 ? "a" : "b"}`;

      return { ...card, uniqueId };
    });

    setShuffledCards(
      cardsWithUniqueId.sort(
        () => Math.random() - 0.5
      ) as ICardsInformationType[]
    );
  };

  const onStartCounter = () => {
    shuffleCard();
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setGameStatus(IGameStatusEnum.Playing);
          setCounter(3);
          return prev;
        }
      });
    }, 1000);
  };

  const onCardClick = (cardInfo: any) => {
    setCardsSelecteds([...cardsSelecteds, cardInfo.uniqueId]);
  };

  useEffect(() => {
    shuffleCard();
  }, []);

  return {
    revealCards,
    setRevealCards,
    gameStatus,
    setGameStatus,
    onStartCounter,
    shuffledCards,
    counter,
    onCardClick,
    cardsSelecteds,
    setCardsSelecteds,
  };
};

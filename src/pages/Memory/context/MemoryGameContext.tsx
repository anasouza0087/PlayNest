import { createContext, useContext, ReactNode } from "react";
import { useMemoryGame } from "../hooks";
import { ICardsInformationType, IGameStatusEnum } from "../types";

// Define the type for the context
interface IMemoryGameContextType {
  revealCards: boolean;
  setRevealCards: React.Dispatch<React.SetStateAction<boolean>>;
  gameStatus: IGameStatusEnum;
  setGameStatus: React.Dispatch<React.SetStateAction<IGameStatusEnum>>;
  onStartGame: () => void;
  shuffledCards: ICardsInformationType[];
}

// Create the context with an explicit type
const MemoryGameContext = createContext<IMemoryGameContextType | null>(null);

// Define the provider props type (should only include `children`)
interface IMemoryGameProviderProps {
  children: ReactNode;
}

// Corrected provider component
export const MemoryGameContextProvider = ({
  children,
}: IMemoryGameProviderProps) => {
  const {
    revealCards,
    setRevealCards,
    shuffledCards,
    gameStatus,
    setGameStatus,
    onStartGame,
  } = useMemoryGame();

  return (
    <MemoryGameContext.Provider
      value={{
        revealCards,
        setRevealCards,
        shuffledCards,
        gameStatus,
        setGameStatus,
        onStartGame,
      }}
    >
      {children}
    </MemoryGameContext.Provider>
  );
};

// Custom hook for consuming the context
export const useMemoryGameContext = () => {
  const context = useContext(MemoryGameContext);
  if (!context) {
    throw new Error(
      "useMemoryGameContext must be used within a MemoryGameContextProvider"
    );
  }
  return context;
};

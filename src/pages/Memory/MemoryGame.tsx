import { MemoryGameBoard } from "./components";
import { MemoryGameContextProvider } from "./context/MemoryGameContext";

const MemoryGameWrapped = () => {
  return <MemoryGameBoard />;
};

export const MemoryGame = () => {
  return (
    <MemoryGameContextProvider>
      <MemoryGameWrapped />
    </MemoryGameContextProvider>
  );
};

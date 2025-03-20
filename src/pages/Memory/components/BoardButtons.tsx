import { useMemoryGameContext } from "../context/MemoryGameContext";
import { BoardButton } from "../styles";
import { IGameStatusEnum } from "../types";

export const BoardButtons = () => {
  const { setGameStatus, gameStatus, onStartCounter, setCardsSelecteds } =
    useMemoryGameContext();
  return (
    <>
      {[
        IGameStatusEnum.Idle,
        IGameStatusEnum.GameOver,
        IGameStatusEnum.Resetting,
      ].includes(gameStatus) && (
        <BoardButton
          onClick={() => {
            setGameStatus(IGameStatusEnum.Starting);
            onStartCounter();
          }}
        >
          Start Game!
        </BoardButton>
      )}

      {![
        IGameStatusEnum.Idle,
        IGameStatusEnum.GameOver,
        IGameStatusEnum.Resetting,
      ].includes(gameStatus) && (
        <BoardButton
          onClick={() => {
            setGameStatus(IGameStatusEnum.Resetting);
            setCardsSelecteds([]);
          }}
        >
          Finish Game
        </BoardButton>
      )}
    </>
  );
};

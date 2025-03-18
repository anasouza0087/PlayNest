import { useMemoryGameContext } from "../context/MemoryGameContext";
import { BoardButton } from "../styles";
import { IGameStatusEnum } from "../types";

export const BoardButtons = () => {
  const { setGameStatus, gameStatus, onStartGame } = useMemoryGameContext();
  return (
    <>
      {[
        IGameStatusEnum.Idle,
        IGameStatusEnum.GameOver,
        IGameStatusEnum.Resetting,
      ].includes(gameStatus) && (
        <BoardButton
          onClick={() => {
            onStartGame();
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
        <BoardButton onClick={() => setGameStatus(IGameStatusEnum.Resetting)}>
          Finish Game
        </BoardButton>
      )}
    </>
  );
};

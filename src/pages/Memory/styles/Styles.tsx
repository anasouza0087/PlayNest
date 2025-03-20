import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardGame = styled.div`
  background-color: #ffd166;
  width: 82vw;
  border-radius: 12px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardGame = styled.div<{ disabled?: boolean }>`
  background-color: #a7c4bc;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  width: 30%;
  height: 220px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    width: 31%;
    height: 240px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 90%;
  max-width: 100%;
  display: block;
  object-fit: contain;
`;

export const BoardButton = styled.button`
  align-items: center;
  font-size: 22px;
  color: #fff;
  padding: 14px;
  background-color: #ff2600;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff2600;
    min-width: 160px;
    min-height: 60px;
    font-size: 24px;
    margin-right: 8px;
  }
`;

export const CardTitle = styled.b`
  font-size: 14px;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  height: fit-content;
  margin-bottom: 14px;
  padding: 8px;
`;

export const GameCounter = styled.b`
  font-size: 40px;
`;

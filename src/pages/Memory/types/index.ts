export interface ICardsInformationType {
  id: string;
  name: string;
  image: string;
}

export enum IGameStatusEnum {
  Idle = "idle",
  Playing = "playing",
  Flipping = "flipping",
  Checking = "checking",
  Matched = "matched",
  Mismatched = "mismatched",
  GameOver = "game-over",
  Resetting = "resetting",
}

// idle – O jogo ainda não começou, aguardando o jogador iniciar.
// playing – O jogo está ativo, com os jogadores tentando encontrar os pares.
// flipping – O jogador virou uma carta, mas ainda falta virar outra.
// checking – Duas cartas estão viradas e o jogo está verificando se formam um par.
// matched – Um par correto foi encontrado e permanece visível.
// mismatched – As cartas viradas não formam um par e precisam ser escondidas novamente.
// game-over – Todas as cartas foram combinadas e o jogo terminou.

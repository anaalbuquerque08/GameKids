import jogoDaVelha from "../assets/img-games/img-jogo-da-velha.png";
import labirinto from "../assets/img-games/img-labirinto.png";
import libelula from "../assets/img-games/img-libelula.png";
import memoria from "../assets/img-games/img-memoria.png";

import adivinha from "../assets/img-games/img-adivinha.png";
import alvo from "../assets/img-games/img-alvo.png";
import runfast from "../assets/img-games/img-runfast.png";
import jumpgame from "../assets/img-games/img-jumpgame.png";

export const games = [
  { 
    id: "jogo-da-velha", 
    name: "JOGO DA VELHA", 
    img: jogoDaVelha,
    description: "Um clássico jogo de estratégia e raciocínio. Tente alinhar três símbolos iguais!",
    instructions: "O objetivo é simples: ser o primeiro a conseguir três dos seus símbolos (X ou O) em linha, seja horizontal, vertical ou diagonal. Clique em um quadrado vazio para fazer sua jogada." 
  },
  { 
    id: "labirinto", 
    name: "LABIRINTO", 
    img: labirinto,
    description: "Teste sua coordenação e visão espacial encontrando a saída antes que o tempo acabe.",
    instructions: "Use as teclas de seta (ou arraste na tela) para mover o personagem. Navegue pelo labirinto e chegue à bandeira final no menor tempo possível. Cuidado para não bater nas paredes!"
  },
  { 
    id: "quizz", 
    name: "QUIZZ", 
    img: libelula,
    description: "Responda a perguntas divertidas e aprenda fatos novos sobre o mundo e nossos personagens.",
    instructions: "Para cada pergunta, você terá algumas opções de resposta. Clique na opção que você acha que está correta. Responda o máximo de perguntas que puder para ganhar mais pontos." 
  },
  { 
    id: "memoria", 
    name: "JOGO DA MEMÓRIA", 
    img: memoria,
    description: "Exercite sua memória encontrando todos os pares de cartas idênticas.",
    instructions: "Vire duas cartas por vez. Se elas tiverem a mesma imagem, elas ficam viradas. Se forem diferentes, elas se fecham e você tenta novamente. Encontre todos os pares no menor número de jogadas!" 
  }, 
  { 
    id: "adivinha", 
    name: "ADIVINHA", 
    img: adivinha,
    description: "Um jogo de lógica e dedução para adivinhar a palavra secreta com base em dicas.",
    instructions: "O jogo escolhe uma palavra secreta. Você tem um número limitado de tentativas para adivinhar a palavra, usando as dicas que o jogo fornece após cada tentativa. Pense bem e seja esperto!" 
  },
  { 
    id: "alvo", 
    name: "ALVO", 
    img: alvo,
    description: "Um teste de precisão e reflexo. Mire e acerte o alvo em movimento para pontuar.",
    instructions: "Use o mouse (ou o toque) para mirar. O alvo se move rapidamente, então seja rápido e preciso. Cada acerto no centro vale mais pontos. Não deixe o tempo acabar sem bater o recorde!" 
  },
  { 
    id: "runfast", 
    name: "RUNFAST", 
    img: runfast,
    description: "Corra o mais rápido que puder e desvie dos obstáculos para alcançar a maior distância.",
    instructions: "Use a barra de espaço ou o toque para pular. Seu personagem corre automaticamente. O objetivo é evitar os obstáculos que aparecem na sua frente. Quanto mais longe você for, maior será sua pontuação." 
  },
  { 
    id: "jumpgame", 
    name: "JUMPGAME", 
    img: jumpgame,
    description: "Suba o mais alto possível pulando em plataformas. Cuidado para não cair!",
    instructions: "Mova-se para a esquerda e direita (setas ou toque) para cair nas plataformas. Você ganha pontos subindo cada vez mais alto. Cuidado com plataformas que somem ou inimigos! O objetivo é alcançar o topo." 
  },
];
import { createContext, useState } from "react";
import { PONTOS, TEMPO_EM_MS } from "../constants/configuracoes";
import { buscarCartas } from "../services/buscarCartas";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, definirCartas] = useState([]);
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([]);
  const [idsDasCartasViradas, definirIdsDasCartasViradas] = useState([]);

  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] =
    useState(0);
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0);

  const iniciarJogo = async () => {
    definirIdsDosParesEncontrados([]);
    definirIdsDasCartasViradas([]);

    definirQuantidadeDeCartasViradas(0);

    const cartas = await buscarCartas();
    definirCartas(cartas);
  };

  const novaRodada = () => {
    definirIdsDasCartasViradas([]);
  };

  const contarCartaVirada = () =>
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1);

  const marcarPonto = () =>
    definirQuantidadeDePontos((pontos) => pontos + PONTOS.PAR_ENCONTRADO);

  const registrarParEncontrado = (idDoPar) =>
    definirIdsDosParesEncontrados((ids) => [...ids, idDoPar]);

  const compararCartasPorIds = ([primeiroId, segundoId]) => {
    const idPar1 = cartas.find(({ id }) => id === primeiroId)?.idDoPar;
    const idPar2 = cartas.find(({ id }) => id === segundoId)?.idDoPar;
    return idPar1 === idPar2;
  };

  const virarCarta = ({ id, idDoPar }) => {
    contarCartaVirada();

    if (idsDasCartasViradas.length === 0) {
      return definirIdsDasCartasViradas([id]);
    }

    const primeiroId = idsDasCartasViradas[0];
    const segundoId = id;
    const ids = [primeiroId, segundoId];
    definirIdsDasCartasViradas(ids);

    const cartasIguais = compararCartasPorIds(ids);
    if (cartasIguais) {
      marcarPonto();
      registrarParEncontrado(idDoPar);
    }

    const tempo = cartasIguais ? 0 : TEMPO_EM_MS.VIRAR_CARTA;
    setTimeout(novaRodada, tempo);
  };

  const valor = {
    cartas,
    idsDosParesEncontrados,
    idsDasCartasViradas,

    quantidadeDeCartasViradas,
    quantidadeDePontos,

    iniciarJogo,
    virarCarta,
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};

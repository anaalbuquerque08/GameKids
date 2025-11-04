import { useContext } from "react";
import { LogicaJogoDaMemoriaContext } from "../contexts/LogicaJogoDaMemoria";

export const useJogoDaMemoria = () => {
  const contexto = useContext(LogicaJogoDaMemoriaContext);
  return contexto;
};

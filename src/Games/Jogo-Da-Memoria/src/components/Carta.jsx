import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Carta = ({ id, idDoPar, imagem }) => {
  const { virarCarta, idsDasCartasViradas, idsDosParesEncontrados } =
    useJogoDaMemoria();

  const controlarClique = () => {
    virarCarta({ id, idDoPar });
  };

  const encontrada = idsDosParesEncontrados.includes(idDoPar);
  const virada = encontrada || idsDasCartasViradas.includes(id);
  const bloqueado = virada || idsDasCartasViradas.length > 1;

  let classes = "carta";
  if (virada) classes += " carta--virada";
  if (encontrada) classes += " carta--encontrada";

  return (
    <button
      id={id}
      className={classes}
      onClick={controlarClique}
      disabled={bloqueado}
    >
      <div className="carta__conteudo">
        <div className="carta__frente" />
        <div className="carta__costas">
          <img alt={idDoPar} width={300} src={imagem} />
        </div>
      </div>
    </button>
  );
};

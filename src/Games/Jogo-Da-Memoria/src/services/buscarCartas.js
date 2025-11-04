import { paresDeCartas } from "../constants/cartas";

const embaralharLista = (lista = []) => {
  for (let indice = lista.length - 1; indice > 0; indice--) {
    const item = lista[indice];
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
    lista[indice] = lista[indiceAleatorio];
    lista[indiceAleatorio] = item;
  }
  return lista;
};

export const buscarCartas = async () => {
  return embaralharLista(paresDeCartas);
};

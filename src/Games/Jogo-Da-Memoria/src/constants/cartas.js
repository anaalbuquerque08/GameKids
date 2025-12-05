const imagens = [
  "/memory/Card-1.png",
  "/memory/Card-2.png",
  "/memory/Card-3.png",
  "/memory/Card-4.png",
  "/memory/Card-5.png",
  "/memory/Card-6.png",
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);

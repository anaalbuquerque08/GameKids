const imagens = [
  "/src/assets/memory/Card-1.png",
  "/src/assets/memory/Card-2.png",
  "/src/assets/memory/Card-3.png",
  "/src/assets/memory/Card-4.png",
  "/src/assets/memory/Card-5.png",
  "/src/assets/memory/Card-6.png",
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);

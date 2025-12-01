export const getResultadosQuiz = (name) => {
  return [
    {
      titulo: "Excelente",
      imagem:
        name === "TONY"
          ? "/src/assets/memory/Tony-Excelente.png"
          : "/src/assets/memory/Ozzy-Excelente.png",
      min: 75,
    },
    {
      titulo: "Muito Bom",
      imagem:
        name === "TONY"
          ? "/src/assets/memory/Tony-Bom.png"
          : "/src/assets/memory/Ozzy-Bom.png",
      min: 50,
    },
    {
      titulo: "Ruim",
      imagem:
        name === "TONY"
          ? "/src/assets/memory/Tony-Esquecido.png"
          : "/src/assets/memory/Ozzy-Esquecido.png",
      min: 25,
    },
    {
      titulo: "Precisa estudar",
      imagem:
        name === "TONY"
          ? "/src/assets/memory/Tony-Amnésia.png"
          : "/src/assets/memory/Ozzy-Amnésia.png",
      min: 0,
    },
  ];
};

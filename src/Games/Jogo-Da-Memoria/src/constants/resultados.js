export const getResultados = () => {
  const name = localStorage.getItem("name");

  return [
    {
      titulo: "Excelente",
      imagem:
        name === "TONY"
          ? "/memory/Tony-Excelente.png"
          : "/memory/Ozzy-Excelente.png",
      min: 75,
    },
    {
      titulo: "Bom",
      imagem:
        name === "TONY"
          ? "/memory/Tony-Bom.png"
          : "/memory/Ozzy-Bom.png",
      min: 50,
    },
    {
      titulo: "Esquecido",
      imagem:
        name === "TONY"
          ? "/memory/Tony-Esquecido.png"
          : "/memory/Ozzy-Esquecido.png",
      min: 25,
    },
    {
      titulo: "Amnésia",
      imagem:
        name === "TONY"
          ? "/memory/Tony-Amnésia.png"
          : "/memory/Ozzy-Amnésia.png",
      min: 0,
    },
  ];
};

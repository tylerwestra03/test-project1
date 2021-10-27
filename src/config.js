const description =
  "Rhino dev";
const baseUri = "https://rhinodev/nft";

const layersOrder = [
  { name: "Background" },
  { name: "Eyeball" },
  { name: "Eye color" },
  { name: "Iris" },
  { name: "Shine" },
  { name: "Bottom lid" },
  { name: "Top lid" },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "90%",
};

const uniqueDnaTorrance = 10000;

const editionSize = 10;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};

import * as Layers from "../layer/index.js";

// Generate style.json
export function build(tileURL, spriteURL, glyphURL, mode) {
  return {
    name: "Americana",
    glyphs: glyphURL,
    layers: Layers.build(mode),
    sources: {
      openmaptiles: {
        url: tileURL,
        type: "vector",
      },
    },
    sprite: spriteURL,
    light: {
      anchor: "viewport",
      color: "white",
      intensity: 0.12,
    },
    version: 8,
  };
}

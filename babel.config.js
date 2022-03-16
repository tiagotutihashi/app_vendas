module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@contex": "./src/contex",
            "@navigation": "./src/navigation",
            "@ducks": "./src/store/ducks",
            "@sagas": "./src/store/sagas",
            "@store": "./src/store",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};

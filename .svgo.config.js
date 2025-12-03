export default {
  multipass: false,
  js2svg: {
    pretty: true,
    indent: "  ",
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          convertPathData: false,
          mergePaths: false,
          convertTransform: false,
          minifyStyles: false,
          cleanupNumericValues: false,
        },
      },
    },

    {
      name: "convertPathData",
      active: true,
      params: {
        floatPrecision: 2,
        transformPrecision: 2,
        makeArcs: false,
        straightCurves: false,
        noSpaceAfterFlags: false,
      },
    },
  ],
};


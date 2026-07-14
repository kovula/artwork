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
          collapseGroups: false,
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
        floatPrecision: 5,
        transformPrecision: 5,
        makeArcs: false,
        straightCurves: false,
        noSpaceAfterFlags: false,
      },
    },
  ],
};


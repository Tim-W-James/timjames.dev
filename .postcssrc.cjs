module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-ts-classnames")({
      dest: "src/styles/cssClasses.d.ts",
      // Set isModule if you want to import ClassNames from another file
      isModule: true,
      exportAsDefault: true, // to use in combination with isModule
    }),
  ],
};

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "gsap",
  "gsap/ScrollTrigger",
]);

module.exports = withPlugins([withTM]);

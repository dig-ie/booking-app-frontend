// metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig();

  // Caso você precise adicionar outras configurações personalizadas, faça aqui.

  return config;
})();
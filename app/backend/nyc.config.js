// Arquivo criado com base no arquivo nyc.config.js do projeto Trybe-Futebol-Clube criado pela instituição Trybe.
// File based on nyc.config.js from project Trybe-Futebol-Clube created by Trybe institution.

module.exports = {
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'src/tests',
    'src/database/config',
    'src/database/migrations',
    'src/database/seeders'
  ],
  include: ['src/**/*.ts']
};

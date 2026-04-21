// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros específicos do React ou qualquer erro da App
  return false;
});

const COMMAND_DELAY = 3000; // Tempo em milissegundos

if (Cypress.config('slowMo')) {
  Cypress.on('command:enqueued', (obj) => {
    if (obj.attributes.type === 'child') {
      // Se for um comando encadeado, opcionalmente podes ignorar ou manter
    }
    return new Promise((resolve) => {
      setTimeout(resolve, COMMAND_DELAY);
    });
  });
}
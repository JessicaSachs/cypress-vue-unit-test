import { MyPlugin } from '../../components/MyPlugin'
const mountVue = require('../..')

/* eslint-env mocha */
describe('Custom plugin MyPlugin', () => {
  const use = [MyPlugin]

  // extend Vue with plugins
  const extensions = {
    use
  }
  beforeEach(mountVue({}, { extensions }))

  it('registers global method on Vue instance', () => {
    cy.window().its('Vue').its('aPluginMethod').should('be.a', 'function')
  })

  it('can call this global function', () => {
    cy.window().its('Vue').invoke('aPluginMethod').should('equal', 'foo')
  })
})

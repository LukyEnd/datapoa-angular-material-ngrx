/// <reference types="cypress" />

describe('Mapeamento das rotas da Lotação 0', () => {
  beforeEach(() => {
    cy.visit('/minibus');
    cy.wait(2000);
    cy.get(':nth-child(1) > .cdk-column-itinerario > .btn-rout-bus')
      .first()
      .click();
    cy.url().should('include', 'itinerary/16');
    cy.wait(5000);
  });

  it('Mudar de Tema', () => {
    cy.get('.btn-theme').click();
    cy.get('.btn-theme').click();
    cy.wait(1000);
  });
});

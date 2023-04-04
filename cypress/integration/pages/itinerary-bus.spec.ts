/// <reference types="cypress" />

describe('Mapa com as Rotas do Ônibus Linha 5525', () => {
  beforeEach(() => {
    cy.visit('/bus');
    cy.wait(2000);
    cy.get(':nth-child(1) > .cdk-column-itinerario > .btn-rout-bus')
      .first()
      .click();
    cy.url().should('include', 'itinerary/5525');
    cy.wait(5000);
  });

  it('Mudar de Tema', () => {
    cy.get('.btn-theme').click();
    cy.get('.btn-theme').click();
    cy.wait(1000);
  });
});

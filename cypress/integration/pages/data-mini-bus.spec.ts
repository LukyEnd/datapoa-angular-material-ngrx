/// <reference types="cypress" />

describe('Data MiniBus', () => {
  beforeEach(() => {
    cy.visit('/minibus');
  });

  it('Titulo e Dados da Pagina MiniBus', () => {
    cy.url().should('include', 'minibus');
    cy.wait(1000);
  });

  it('Botão de Percorrer Tabela', () => {
    cy.get(
      '.mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon'
    ).click();
    cy.get(
      '.mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon'
    ).click();

    cy.get(
      '.mat-paginator-navigation-last > .mat-button-wrapper > .mat-paginator-icon'
    ).click();
    cy.get(
      '.mat-paginator-navigation-last > .mat-button-wrapper > .mat-paginator-icon'
    ).click();
  });

  it('Mudar de Tema', () => {
    cy.wait(1000);
    cy.get('.btn-theme').click();
    cy.get('.btn-theme').click();
    cy.wait(1000);
  });

  it('Botão de Pesquisar na Tabela', () => {
    cy.wait(1000);
    cy.get('#mat-input-0').type('futebol arena').click();
  });
});

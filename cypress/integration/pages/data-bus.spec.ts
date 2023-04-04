/// <reference types="cypress" />

describe('Data BusLine', () => {
  beforeEach(() => {
    cy.visit('/bus');
  });

  it('Titulo da Pagina Ônibus', () => {
    cy.url().should('include', 'bus');
    cy.contains('Linha de Ônibus').should('to.have.length', 1);
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
    cy.get('.btn-theme').contains('LIGHT').click();
    cy.get('.btn-theme').contains('DARK').click();
    cy.wait(1000);
  });

  it('Botão de Pesquisar na Tabela', () => {
    cy.wait(1000);
    cy.get('#mat-input-0').type('futebol arena').click();
  });
});

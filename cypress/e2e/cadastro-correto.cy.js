describe('Página de Cadastro', () => {
  it('Visita página principal do AdoPet e clica no botão de cadastrar', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"').click();
    cy.get('[data-test="input-name"').type('Ana');
    cy.get('[data-test="input-email"]').type('ana5@gmail.com');
    cy.get('[data-test="input-password"').type('Senha123');
    cy.get('[data-test="input-confirm-password"').type('Senha123');
    cy.get('[data-test="submit-button"').click();
  })
  // it('Visita página principal do AdoPet e testa o botão "Ver pets disponíveis para adoção"', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/');
  //   cy.contains('a', 'Ver pets disponíveis para adoção').click();
  // })
  // it('Visita a página principal e testa o botão header', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/');
  //   cy.get('.header__home').click();
  // })

  // it('Visita a página de /login', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  // })

  // it('Visita a página de /home', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  // })

  // it('Visita a página de /home e clica no botão de "Falar com o responsável"', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  //   cy.get('.header__message').click();
  // })
})
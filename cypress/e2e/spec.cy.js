describe('template spec', () => {
  it('Visita página principal do AdoPet e clica no botão de cadastrar', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Ana');
    cy.get('input[name="email"]').type('ana5@gmail.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  })
  it('Visita página principal do AdoPet e testa o botão "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })
  it('Visita a página principal e testa o botão header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
  })

  it('Visita a página de /login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })

  it('Visita a página de /home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })

  it('Visita a página de /home e clica no botão de "Falar com o responsável"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
  })
})
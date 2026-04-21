describe("Reserva de Quarto - Fluxo Completo", () => {
 
  beforeEach(() => {
    cy.intercept('POST', '**/booking**', {
      statusCode: 201,
      body: { bookingid: 1 }
    }).as('createBooking');
    cy.visit("https://automationintesting.online/");
  });

  it("Deve completar uma reserva com sucesso", () => {
    // Seleção de datas (mês seguinte)
    cy.get('.form-control').first().click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__day--010').first().click();
    cy.get('.form-control').eq(1).click();
    cy.get('.react-datepicker__day--012').first().click();
    cy.contains('button', 'Check Availability').click();
    cy.contains('Book now').first().click();
    // Preenchimento do formulário
    const email = `sofia${Date.now()}@gmail.com`;
    cy.get("#doReservation").click();
    cy.get('[name="firstname"]').type("Sofia");
    cy.get('[name="lastname"]').type("Campos");
    cy.get('[name="email"]').type(email);
    cy.get('[name="phone"]').type("123456789012");
    cy.contains('button', 'Reserve Now').click();
    // Aguarda e valida o pedido de reserva
    cy.wait('@createBooking')
      .its('response.statusCode')
      .should('eq', 201);
    // Confirmação visível
    cy.get('h2.card-title', { timeout: 10000 })
      .should('contain', 'Booking Confirmed');
    // Tira o screenshot como evidência final
    cy.screenshot('evidencia-reserva-sucesso-SM8');
  });
});
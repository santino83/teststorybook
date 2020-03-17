describe('mynamespace-mylib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=firstcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('voiptech-firstcomponent').should('exist');
  });
});

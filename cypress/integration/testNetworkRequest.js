// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('Test with Intercepted Network Request', () => {
    let fetchPolyfill;
  
    before(() => {
      const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';
  
      cy.request(polyfillUrl)
        .then((response) => {
          fetchPolyfill = response.body;
        });
  
        cy.server()
        .route("https://api.exchangeratesapi.io/2020-08-21?base=EUR","fixture:EURchange")
        .as("eurList")
        .route("https://api.exchangeratesapi.io/2020-08-13?base=USD","fixture:USDchange")
        .as("usdList")
        

      cy.visit('http://127.0.0.1:8080', {
        onBeforeLoad(contentWindow) {
          // eslint-disable-next-line no-param-reassign
          delete contentWindow.fetch;
          contentWindow.eval(fetchPolyfill);
          // eslint-disable-next-line no-param-reassign
          contentWindow.fetch = contentWindow.unfetch;
        },
      });
      
    });
    
      it("Clicks SUBMIT button", () => {
        cy.get("#submit-button").click()
        .get("#list > li").should("have.length", 32);
      });

      it("Watchout for appearing STUBBED currencies", () => {
        cy.get("#list > li").should("have.length", 32)
        .contains("STUBBED")
      });

      it("select a USD STUBBED currency", () => {
        cy.get("#date").type("2020-08-13");
      });

      it("Watchout for appearing STUBBED currencies", () => {
        cy.get("#select-menu").type("USD")
        .get("#list > li").should("have.length", 32)
        .contains("STUBBED")
      });
  });
const URL = "http://192.168.0.108:8080/";
const container = "[data-cy=container]";

context("Xchange Rates any Day", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Makes sure there is a FORM", () => {
    it(" makes sure there are two headers", () => {
      cy.get(container).find("h1").should("have.length", 2);
    });
    it("makes sure there are a DATE input", () => {
      cy.get(container).find("#date");
    });
    it("makes sure there are a select input", () => {
      cy.get(container)
        .find("#select-menu")
        .select("EUR")
        .should("have.value", "EUR")
        .select("USD")
        .should("have.value", "USD")
        .select("AUD")
        .should("have.value", "AUD");
    });
    it("makes sure buttons are ok", () => {
      cy.get(container).find("button").should("have.length", 2);
    });
  });
  describe("Makes sure FORM  works ok", () => {
    it("select DATA and CURRENCY", () => {
      cy.get("#date").type("2020-05-20");
      cy.get("#select-menu").type("USD");
    });
    it("Clicks SUBMIT button", () => {
      cy.get("#submit-button").click();
    });
    it("Watchout for appearing currencies", () => {
      cy.get("#list > li").should("have.length", 33);
    });
    it("Makes sure RESET button works ok", () => {
      cy.get("#reset-button").click();
      cy.get("#list > li").should("have.length", 0);
    });
  });
});

import { exportAllDeclaration } from "@babel/types";

describe("Home/root test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("renders the page without crashing", () => {
    expect(true).to.be.true;
  });
  it("renders the title", () => {
    cy.get(".header__div").contains("Welcome to NC News");
  });
  it("renders the username input", () => {
    cy.get(":nth-child(1) > [data-cy=Login_Username]").type("text");
  });
  it("renders the password input", () => {
    cy.get(":nth-child(1) > [data-cy=Login_Username]").type("password");
  });
  it("renders the submit button with click function", () => {
    cy.get("[data-cy=Login_submit]").click();
  });
  it("renders a functional Home link", () => {
    cy.get("[data-cy=Home").click();
    cy.url().should("equal", "http://localhost:3000/");
  });
  it("renders a functional Coding topics link", () => {
    cy.get("[data-cy=coding").click();
    cy.url().should("equal", "http://localhost:3000/topics/coding");
  });
  it("renders a functional Football topics link", () => {
    cy.get("[data-cy=football").click();
    cy.url().should("equal", "http://localhost:3000/topics/football");
  });
  it("renders a functional Cooking topics link", () => {
    cy.get("[data-cy=cooking").click();
    cy.url().should("equal", "http://localhost:3000/topics/cooking");
  });
  it("renders h2 header with desired content", () => {
    cy.get("h2").contains("Home - All topics");
  });
  it("display article has a function click button", () => {
    cy.get(".DisplayArticles__button").click();
  });
  it("displayed article list have clickable links", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > :nth-child(2) > .ArticleCard__Link > h3"
    ).click();
  });
});

import { exportAllDeclaration } from "@babel/types";

describe("Home/root test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/topics/cooking");
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
    cy.get("[data-cy=Home]").click();
    cy.url().should("equal", "http://localhost:3000/");
  });
  it("renders a functional Coding topics link", () => {
    cy.get("[data-cy=coding]").click();
    cy.url().should("equal", "http://localhost:3000/topics/coding");
  });
  it("renders a functional Football topics link", () => {
    cy.get("[data-cy=football]").click();
    cy.url().should("equal", "http://localhost:3000/topics/football");
  });
  it("renders a functional Cooking topics link", () => {
    cy.get("[data-cy=cooking]").click();
    cy.url().should("equal", "http://localhost:3000/topics/cooking");
  });
  it("renders h2 header with desired content", () => {
    cy.get("h2").contains("Articles on cooking");
  });
  it("display article has a function click button", () => {
    cy.get(".DisplayArticles__button").click();
  });
  it("displayed articles list have clickable links", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > :nth-child(2) > .ArticleCard__Link > h3"
    ).click();
  });
  it("displayed articles have 'votes' count entry", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > .ArticleCard__div--votes > :nth-child(1) > :nth-child(2) > p"
    ).contains("Votes");
  });
  it("displayed articles have created 'by' author entry", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > :nth-child(2) > :nth-child(2)"
    ).contains("by");
  });
  it("displayed articles have 'Posted On' entry", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > :nth-child(2) > :nth-child(3)"
    ).contains("Posted on");
  });
  it("displayed articles have 'Comments count' entry", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > :nth-child(2) > :nth-child(4)"
    ).contains("Comments count");
  });
  it("up-vote button has click function", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > .ArticleCard__div--votes > :nth-child(1) > :nth-child(1) > .Votes__button > .fas"
    ).click();
  });
  it("down-vote button has click function", () => {
    cy.get(
      ":nth-child(1) > .ArticleCard__div > .ArticleCard__div--votes > :nth-child(1) > :nth-child(3) > .Votes__button > .fas"
    ).click();
  });
});

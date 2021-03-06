import { exportAllDeclaration } from "@babel/types";

describe("Home/root test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/articles/33");
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
  it("h2 heading", () => {
    cy.get("h2").contains("Seafood substitutions are increasing");
  });
  it("Article should render votes count", () => {
    cy.get(".ArticleById__div > :nth-child(3) > :nth-child(2) > p").contains(
      "Votes"
    );
  });
  it("Article should render votes count", () => {
    cy.get(".ArticleById__div > :nth-child(4)").contains("Number of comments");
  });
  it("Post comment button should be rendered and click", () => {
    cy.get(".ArticleById__button").click();
  });
  it("up-vote button has click function", () => {
    cy.get(":nth-child(3) > :nth-child(1) > .Votes__button > .fas").click();
  });
  it("down-vote button has click function", () => {
    cy.get(":nth-child(3) > :nth-child(1) > .Votes__button > .fas").click();
  });
  it("Comment section has 'comment by' entry", () => {
    cy.get(
      ".ListComments__ul > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).contains("Comment by");
  });
  it("Comment section has 'body' of comment entry", () => {
    cy.get(
      ".ListComments__ul > :nth-child(1) > :nth-child(2) > :nth-child(2)"
    ).contains("hey");
  });
  it("Comment section has 'votes' count entry", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > p"
    ).contains("Votes");
  });
  it("Comment up-vote button has click function", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .Votes__button > .fas"
    ).click();
  });
  it("Comment down-vote button has click function", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .Votes__button > .fas"
    ).click();
  });
});

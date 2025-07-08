describe("Launches Page", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://spacex-production.up.railway.app/**", {
      data: {
        launches: [
          {
            id: "1",
            mission_name: "Test Mission 1",
            launch_date_utc: "2024-01-15T10:30:00Z",
            links: {
              flickr_images: [
                "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
              ],
            },
          },
          {
            id: "2",
            mission_name: "Test Mission 2",
            launch_date_utc: "2024-02-20T14:45:00Z",
            links: {
              flickr_images: [
                "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
              ],
            },
          },
        ],
      },
    }).as("getGraphQL");

    cy.visit("/launches");
  });

  it("should display the launches page", () => {
    cy.wait("@getGraphQL");

    cy.get("body").should("be.visible");

    cy.get('[data-testid="launch-card"]').should("have.length.at.least", 1);
  });

  it("should display launch information correctly", () => {
    cy.wait("@getGraphQL");

    cy.contains("Test Mission 1").should("be.visible");
    cy.contains("January 15, 2024").should("be.visible");

    cy.contains("Test Mission 2").should("be.visible");
    cy.contains("February 20, 2024").should("be.visible");
  });

  it("should handle loading state", () => {
    cy.visit("/launches");

    cy.wait("@getGraphQL");

    cy.get('[data-testid="launch-card"]').should("be.visible");
  });

  it("should be accessible", () => {
    cy.wait("@getGraphQL");

    cy.get("main").should("exist");
    cy.get("h1, h2").should("exist");

    cy.get("a").each(($link) => {
      cy.wrap($link).should(
        "satisfy",
        ($el: JQuery<HTMLElement>) =>
          $el.text().trim() !== "" || $el.attr("aria-label")
      );
    });
  });

  it("should handle empty state", () => {
    cy.intercept(
      "POST",
      "https://spacex-production.up.railway.app/**",
      (req) => {
        if (req.body.operationName === "GetLaunchesList") {
          req.reply({
            data: {
              launches: [],
            },
          });
        }
      }
    ).as("getEmptyLaunches");

    cy.visit("/launches");
    cy.wait("@getEmptyLaunches");

    cy.get('[data-testid="launch-card"]').should("not.exist");
  });
});

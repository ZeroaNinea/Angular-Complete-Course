import { StepperComponent } from "./stepper.component";

describe("StepperComponent", () => {
  beforeEach(() => {
    cy.mount(StepperComponent);
  });

  it("stepper should default to 0", () => {
    cy.get("[data-test=counter]").should("have.text", "0");
  });

  it('supports an "initial" prop to set the value', () => {
    cy.mount(StepperComponent, {
      componentProperties: {
        // Change component properties.
        count: 100,
      },
    }); // The `mount` method checks if there are no errors in tests.
    cy.get("[data-test=counter]").should("have.text", "100");
  });

  it("when the increment button is pressed, the counter is incremented", () => {
    cy.get("[data-test=increment]").click();
    cy.get("[data-test=counter]").should("have.text", "1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    cy.get("[data-test=decrement]").click();
    cy.get("[data-test=counter]").should("have.text", "-1");
  });

  it("clicking + fires a change event with the incremented value", () => {
    // `spy` checks how many times the test has been called.
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(StepperComponent, {
      componentProperties: {
        change: {
          emit: onChangeSpy,
        } as any,
      },
    });

    cy.get("[data-test=increment]").click();
    cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  });
});

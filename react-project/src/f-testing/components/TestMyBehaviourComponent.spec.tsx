import { expect, describe, it, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestMyBehaviourComponent } from "./TestMyBehaviourComponent.tsx";

describe("TestMyBehaviourComponent", () => {
  afterEach(() => {
    cleanup();
  });

  it('should start with "zero likes"', async () => {
    // Given (Arrange)
    render(<TestMyBehaviourComponent />);

    // When (Act)
    const element = await screen.findByText(/na ten moment/);

    // Then (Assert)
    expect(element.textContent).toContain("zero lajków");
  });

  it("should count up the likes - one click - one like", async () => {
    // Given (Arrange)
    render(<TestMyBehaviourComponent />);
    const displayTextHeader = await screen.findByText(/na ten moment/);
    const button = await screen.findByTitle("I like");

    // When (Act)
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    // Then (Assert)
    expect(displayTextHeader.textContent).toContain("4 lajki");
  });

  it("should not be possible to have less than zero likes", async () => {
    // Given (Arrange)
    render(<TestMyBehaviourComponent />);
    const displayTextHeader = await screen.findByText(/na ten moment/);
    const button = await screen.findByTitle("I dislike");

    // When (Act)
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    // Then (Assert)
    expect(displayTextHeader.textContent).toContain("zero lajków");
  });
});

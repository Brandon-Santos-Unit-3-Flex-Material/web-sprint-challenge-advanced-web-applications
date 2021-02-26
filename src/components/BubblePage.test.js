import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const mockData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
];

test("Renders BubblePage without errors", async () => {
  render(<BubblePage />); // Finish this test
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<ColorList colors={mockData} />);
  render(<Bubbles colors={mockData} />);

  const colors = await screen.findByText(/limegreen/i);
  const secondColor = await screen.findByText(/aliceblue/i);
  const thirdColor = await screen.findByText(/aquamarine/i);
  const bubbleOnScreen = await screen.findByTestId("bubbles");
  expect(colors).toBeInTheDocument();
  expect(bubbleOnScreen).toBeInTheDocument();
  expect(secondColor).toBeInTheDocument();
  expect(thirdColor).toBeInTheDocument();
});
//Task List
//1. Setup test for b\\\asic rendering of component
//2. Setup test for initial rendering of bubbles on loading

import { render, screen } from "@testing-library/react";
import App from "./App";

test("print 'Hello World'", () => {
  render(<App />);
  const text = screen.getByText(/Hello World/i);
  expect(text).toBeInTheDocument();
});

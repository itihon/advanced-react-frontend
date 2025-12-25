import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export default function renderWithRouter(node: ReactNode): ReturnType<typeof render> {
  return render(
    <MemoryRouter>
      { node }
    </MemoryRouter>
  );
}
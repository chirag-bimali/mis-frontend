import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { z } from "zod";
import { HouseholdProfileFormRunner } from "./HouseholdProfileFormRunner";

// Mock tanstack router useParams & useNavigate
vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => vi.fn(),
  useParams: () => ({ caseId: "case-1", householdId: "hh-1" }),
}));

describe("HouseholdProfileFormRunner", () => {
  const schema = z.object({
    name: z.string(),
  });

  it("renders form title, Nepalese label, and children", () => {
    render(
      <HouseholdProfileFormRunner
        sectionId="disaster"
        title="Disaster Preparedness"
        labelNe="(विपद् जोखिम)"
        schema={schema}
        defaultValues={{ name: "Test" }}
        draftKeyFn={(id) => `disaster-${id}`}
        routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/disaster"
      >
        <div data-testid="form-body">Form Inputs</div>
      </HouseholdProfileFormRunner>,
    );

    expect(screen.getByText("Disaster Preparedness")).toBeInTheDocument();
    expect(screen.getByText("(विपद् जोखिम)")).toBeInTheDocument();
    expect(screen.getByTestId("form-body")).toBeInTheDocument();
  });
});

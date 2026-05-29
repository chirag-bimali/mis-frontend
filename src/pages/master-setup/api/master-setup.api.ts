import type { MasterSetupSummary } from "../model";

const mockSummaryDb: MasterSetupSummary = {
  municipalityCount: 20,
  wardCount: 12,
  toleCount: 43,
  departmentCount: 8,
  programCount: 24,
  currentFiscalYear: "FY 2082/83",
  surveyOptionCount: 37,
  updatedAt: new Date().toISOString(),
};

export const masterSetupApi = {
  getSummary: async () => {
    return structuredClone(mockSummaryDb);
  },
};

import { type DisasterFormValues } from "./disaster-form";

export const defaultDisasterForm: DisasterFormValues = {
  familyId: "",
  hasDisasterRisk: false,
  disasterTypeIds: [],
  preparednessMeasures: [],
  earlyWarningAccess: false,
  remarks: "",
};

// using MIS.Domain.Common.Premitives;

// namespace MIS.Domain.Entities.DataCollection.HouseholdInfo;

// public class Decision : BaseEntity
// {
//     public Guid FamilyId { get; set; }
//     public Guid? HouseholdExpenseId { get; set; }
//     public Guid? PropertyId { get; set; }
//     public Guid? HealthCareId { get; set; }
//     public Guid? EducationId { get; set; }
//     public Guid? InvestmentsId { get; set; }

//     public Guid? GovernanceId { get; set; }

//     //Navigation
//     public Family Family { get; set; } = null!;

//     public OptionItem? HouseholdExpense{ get; set; }
//     public OptionItem? Property{ get; set; }
//     public OptionItem? HealthCare{ get; set; }
//     public OptionItem? Education{ get; set; }
//     public OptionItem? Investments{ get; set; }
//     public OptionItem? Governance{ get; set; }
// }

import { optionItemSchema } from "@shared/model";
import { z } from "zod";

export const decisionSchema = z.object({
  id: z.guid(),
  familyId: z.guid({ error: "Family is required" }),
  householdExpenseId: z.guid({ error: "Invalid Household Expense" }),
  propertyId: z.guid({ error: "Invalid Property" }),
  educationId: z.guid({ error: "Invalid Education" }),
  investmentId: z.guid({ error: "Invalid Investments" }),
  governanceId: z.guid({ error: "Invalid Governance" }),

  householdExpense: optionItemSchema,
  property: optionItemSchema,
  education: optionItemSchema,
  investment: optionItemSchema,
  governance: optionItemSchema,
});

export type Decision = z.infer<typeof decisionSchema>;

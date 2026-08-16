import {
  aiServiceStatusHandlers,
  animalTypeHandlers,
  birthHistoryHandlers,
} from "@entities/data-collection/livestock";

import {
  commonLanguageHandler,
  ethnicityHandler,
  motherTongueHandler,
  religionHandler,
} from "@entities/data-collection/social-cultural";

import { decisionMakerHandler } from "@entities/data-collection/decision";

const handlers = [
  ...animalTypeHandlers,
  ...birthHistoryHandlers,
  ...aiServiceStatusHandlers,
  ...commonLanguageHandler,
  ...ethnicityHandler,
  ...motherTongueHandler,
  ...religionHandler,
  ...decisionMakerHandler,
];

export default handlers;

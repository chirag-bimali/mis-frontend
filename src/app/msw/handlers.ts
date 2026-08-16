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

const handlers = [
  ...animalTypeHandlers,
  ...birthHistoryHandlers,
  ...aiServiceStatusHandlers,
  ...commonLanguageHandler,
  ...ethnicityHandler,
  ...motherTongueHandler,
  ...religionHandler,
];

export default handlers;

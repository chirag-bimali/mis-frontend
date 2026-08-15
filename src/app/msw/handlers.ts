import {
  aiServiceStatusHandlers,
  animalTypeHandlers,
  birthHistoryHandlers,
} from "@entities/data-collection/livestock";

const handlers = [
  ...animalTypeHandlers,
  ...birthHistoryHandlers,
  ...aiServiceStatusHandlers,
];

export default handlers;

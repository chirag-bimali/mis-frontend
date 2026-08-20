import "@testing-library/jest-dom";
import { vi } from "vitest";

const memoryStore = new Map<string, unknown>();

vi.mock("idb-keyval", () => ({
  get: vi.fn((key: string) => Promise.resolve(memoryStore.get(key))),
  set: vi.fn((key: string, val: unknown) => {
    memoryStore.set(key, val);
    return Promise.resolve();
  }),
  del: vi.fn((key: string) => {
    memoryStore.delete(key);
    return Promise.resolve();
  }),
  clear: vi.fn(() => {
    memoryStore.clear();
    return Promise.resolve();
  }),
}));

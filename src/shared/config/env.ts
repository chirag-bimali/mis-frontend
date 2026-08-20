// All VITE_ vars come from import.meta.env
// We validate them at startup so the app crashes early
// with a clear message instead of silently failing later

const getEnvVar = (key: string, fallback?: string): string => {
  const value = import.meta.env[key] || process.env[key] || fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

export const env = {
  APP_NAME: getEnvVar("VITE_APP_NAME", "MIS Frontend"),
  API_BASE_URL: getEnvVar("VITE_API_BASE_URL", "http://localhost:3000/api"),
  ENV: getEnvVar("VITE_ENV", "development"),
  ENABLE_MOCKS: getEnvVar("VITE_ENABLE_MOCKS", "false") === "true",

  // Derived helpers (no validation needed)
  isDevelopment: import.meta.env.VITE_ENV === "development",
  isStaging: import.meta.env.VITE_ENV === "staging",
  isProduction: import.meta.env.VITE_ENV === "production",
} as const;

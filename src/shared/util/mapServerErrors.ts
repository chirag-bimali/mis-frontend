// utils/mapServerErrors.ts
import type { UseFormSetError, FieldValues, Path } from "react-hook-form";

export function mapServerErrors<T extends FieldValues>(
  details: Record<string, string[]>,
  setError: UseFormSetError<T>,
) {
  Object.entries(details).forEach(([field, messages]) => {
    // Convert PascalCase → camelCase
    const camelField = field.charAt(0).toLowerCase() + field.slice(1);

    // Skip non-form fields like "dto", "request" etc.
    if (camelField === "dto" || camelField === "request") {
      // Set as a root form error instead
      setError("root" as Path<T>, {
        type: "server",
        message: messages.join(", "),
      });
      return;
    }

    setError(camelField as Path<T>, {
      type: "server",
      message: messages.join(", "),
    });
  });
}

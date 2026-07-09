import { ApiError } from "@/lib/api/client";

export function getErrorMessage(
  error: unknown,
  fallbackMessage = "Terjadi kesalahan",
): string | null {
  if (!error) return null;
  if (error instanceof ApiError) return error.message;
  if (error instanceof Error) return error.message;
  return fallbackMessage;
}
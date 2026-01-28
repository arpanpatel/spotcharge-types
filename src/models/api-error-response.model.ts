import { ApiErrorCode } from "../enum";

export interface ApiErrorResponse {
  errorCode: ApiErrorCode;
  message: string;
  details?: Record<string, unknown>;
}
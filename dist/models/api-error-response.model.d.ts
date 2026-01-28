import { ApiErrorCode } from "../enum";
export interface ApiErrorResponse {
    errorCode: ApiErrorCode;
    message: string;
    details?: Record<string, unknown>;
}
//# sourceMappingURL=api-error-response.model.d.ts.map
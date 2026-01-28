"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorCode = void 0;
/**
 * Standardized API error codes for consistent error handling across frontend and backend.
 * Frontend can use these codes to display user-friendly messages.
 */
var ApiErrorCode;
(function (ApiErrorCode) {
    // General errors
    ApiErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    ApiErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ApiErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ApiErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ApiErrorCode["NOT_FOUND"] = "NOT_FOUND";
    // Slot Hold errors
    ApiErrorCode["HOLD_NOT_FOUND"] = "HOLD_NOT_FOUND";
    ApiErrorCode["HOLD_EXPIRED"] = "HOLD_EXPIRED";
    ApiErrorCode["HOLD_CONFLICT"] = "HOLD_CONFLICT";
    ApiErrorCode["HOLD_UNAUTHORIZED"] = "HOLD_UNAUTHORIZED";
    // Booking errors
    ApiErrorCode["BOOKING_NOT_FOUND"] = "BOOKING_NOT_FOUND";
    ApiErrorCode["BOOKING_ALREADY_EXISTS"] = "BOOKING_ALREADY_EXISTS";
    ApiErrorCode["BOOKING_SLOT_UNAVAILABLE"] = "BOOKING_SLOT_UNAVAILABLE";
    ApiErrorCode["BOOKING_NOT_CANCELLABLE"] = "BOOKING_NOT_CANCELLABLE";
    ApiErrorCode["BOOKING_ALREADY_STARTED"] = "BOOKING_ALREADY_STARTED";
    // Payment errors
    ApiErrorCode["PAYMENT_FAILED"] = "PAYMENT_FAILED";
    ApiErrorCode["PAYMENT_ORDER_CREATION_FAILED"] = "PAYMENT_ORDER_CREATION_FAILED";
    ApiErrorCode["INSUFFICIENT_WALLET_BALANCE"] = "INSUFFICIENT_WALLET_BALANCE";
    ApiErrorCode["AMOUNT_MISMATCH"] = "AMOUNT_MISMATCH";
    ApiErrorCode["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    // Charger errors
    ApiErrorCode["CHARGER_NOT_FOUND"] = "CHARGER_NOT_FOUND";
    ApiErrorCode["CHARGER_OFFLINE"] = "CHARGER_OFFLINE";
    ApiErrorCode["CHARGER_NOT_CONNECTED"] = "CHARGER_NOT_CONNECTED";
    ApiErrorCode["CHARGER_RESET_REJECTED"] = "CHARGER_RESET_REJECTED";
    ApiErrorCode["CHARGER_CONFIG_ERROR"] = "CHARGER_CONFIG_ERROR";
    ApiErrorCode["CHARGER_FIRMWARE_ERROR"] = "CHARGER_FIRMWARE_ERROR";
    ApiErrorCode["CONNECTOR_NOT_FOUND"] = "CONNECTOR_NOT_FOUND";
    ApiErrorCode["CONNECTOR_UNAVAILABLE"] = "CONNECTOR_UNAVAILABLE";
    // Order/Charging errors
    ApiErrorCode["ORDER_START_FAILED"] = "ORDER_START_FAILED";
    ApiErrorCode["ORDER_STOP_FAILED"] = "ORDER_STOP_FAILED";
    ApiErrorCode["ORDER_RESTART_FAILED"] = "ORDER_RESTART_FAILED";
    ApiErrorCode["ORDER_NOT_FOUND"] = "ORDER_NOT_FOUND";
    ApiErrorCode["ORDER_INVALID_TYPE"] = "ORDER_INVALID_TYPE";
    ApiErrorCode["BOOKING_ID_REQUIRED"] = "BOOKING_ID_REQUIRED";
})(ApiErrorCode = exports.ApiErrorCode || (exports.ApiErrorCode = {}));
//# sourceMappingURL=api-error-code.enum.js.map
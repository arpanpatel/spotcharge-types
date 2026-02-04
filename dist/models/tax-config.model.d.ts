export type TaxType = 'CGST_SGST' | 'IGST';
/**
 * Tax configuration stored at invoice creation time.
 * Contains tax type and rates determined by comparing charger state with GST record state.
 */
export interface TaxConfigModel {
    taxType: TaxType;
    cgstRate?: number;
    sgstRate?: number;
    igstRate?: number;
    totalRate: number;
}
/**
 * Detailed tax breakdown stored in invoice after calculation.
 * Contains actual amounts based on taxableAmount (subTotal + serviceCharge).
 */
export interface InvoiceTaxModel {
    taxType: TaxType;
    taxableAmount: number;
    cgstRate?: number;
    cgstAmount?: number;
    sgstRate?: number;
    sgstAmount?: number;
    igstRate?: number;
    igstAmount?: number;
    totalTaxAmount: number;
}
//# sourceMappingURL=tax-config.model.d.ts.map
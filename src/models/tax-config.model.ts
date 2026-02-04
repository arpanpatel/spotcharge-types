export type TaxType = 'CGST_SGST' | 'IGST';

/**
 * Tax configuration stored at invoice creation time.
 * Contains tax type and rates determined by comparing charger state with GST record state.
 */
export interface TaxConfigModel {
  taxType: TaxType;
  // For CGST_SGST (intra-state)
  cgstRate?: number;  // e.g., 9
  sgstRate?: number;  // e.g., 9
  // For IGST (inter-state)
  igstRate?: number;  // e.g., 11
  // Combined rate for quick calculation
  totalRate: number;  // e.g., 18 or 11
}

/**
 * Detailed tax breakdown stored in invoice after calculation.
 * Contains actual amounts based on taxableAmount (subTotal + serviceCharge).
 */
export interface InvoiceTaxModel {
  taxType: TaxType;
  taxableAmount: number;
  // For CGST_SGST (intra-state)
  cgstRate?: number;
  cgstAmount?: number;
  sgstRate?: number;
  sgstAmount?: number;
  // For IGST (inter-state)
  igstRate?: number;
  igstAmount?: number;
  // Total
  totalTaxAmount: number;
}

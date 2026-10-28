/**
 * RAVI MOBILE — DOMAIN TYPES & DATA CONTRACTS
 */

export type Language = 'en' | 'mr' | 'hi';

export type ProductCategory = 'displays' | 'batteries' | 'chargers' | 'accessories';

export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  brand?: 'apple' | 'samsung' | 'xiaomi' | 'realme' | 'vivo' | 'oneplus' | 'universal';
  badge?: string;
  modelCompatibility: string;
  specs: string[];
  inStockStatus: string;
  wholesaleEligible: boolean;
  priceNote: string;
}

export interface RepairProcedureStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface RepairService {
  id: string;
  title: string;
  badge: string;
  turnaroundTime: string;
  description: string;
  procedureSteps: string[];
  highlights: string[];
}

export interface ProblemTile {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  actionKey: string;
  inquiryPayload: string;
}

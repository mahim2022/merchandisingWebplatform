// TypeScript types for B2B Garment Factory Website

export type ProductCategory = "knit" | "woven" | "denim";

export type ComplianceType =
  | "WRAP"
  | "BSCI"
  | "Oeko-Tex"
  | "GOTS"
  | "Fair Trade"
  | "ISO 9001"
  | "SEDEX"
  | "Other";

export type DestinationMarket = "EU" | "Canada" | "Australia" | "USA" | "Other";

export type BuyerRole =
  | "Sourcing Manager"
  | "Product Development Manager"
  | "Buyer"
  | "Merchandiser"
  | "Quality Manager"
  | "Owner/Director"
  | "Other";

export interface Capability {
  category: ProductCategory;
  name: string;
  description: string;
  fabrics: string[];
  gsmRange: string;
  stitchTypes: string[];
  moq: string;
}

export interface ProductionCapacity {
  category: string;
  linesCount: number;
  monthlyOutput: string;
  peakCapacity?: string;
  offPeakCapacity?: string;
  leadTime: {
    sampling: string;
    bulk: string;
  };
}

export interface QualityCheckpoint {
  stage: string;
  description: string;
  checkpoints: string[];
  standards: string;
}

export interface Certification {
  name: string;
  issuingBody: string;
  issueDate: string;
  expiryDate: string;
  scope: string;
  certificateUrl?: string;
}

export interface InquiryFormData {
  buyerRole: BuyerRole;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  productCategories: ProductCategory[];
  quantity: number;
  destinationMarket: DestinationMarket;
  requiredCompliance: ComplianceType[];
  timeline: string;
  additionalDetails: string;
}

export interface StatCardData {
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
  duration?: string;
}

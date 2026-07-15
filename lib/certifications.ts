export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl: string;
  category: 'cloud' | 'ai_ml' | 'security' | 'development';
  skills: string[];
  featured?: boolean;
}

export const CERTIFICATION_CATEGORIES = [
  { id: 'all', label: 'All Credentials' },
  { id: 'ai_ml', label: 'AI & Machine Learning' },
  { id: 'cloud', label: 'Cloud & Systems' },
] as const;

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oci-2025-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "October 2025",
    credentialId: "102945412OCI25AICFA",
    verificationUrl: "/certificates/oracle-ai-foundations-2025.pdf",
    category: "ai_ml",
    skills: ["Oracle Cloud Infrastructure", "AI Foundations", "Generative AI", "Machine Learning", "Cloud AI Services"],
    featured: true,
  },
  {
    id: "oci-2025-networking-professional",
    title: "Oracle Cloud Infrastructure 2025 Certified Networking Professional",
    issuer: "Oracle University",
    date: "October 2025",
    credentialId: "103017960OCI25NWOCP",
    verificationUrl: "/certificates/oracle-networking-professional-2025.pdf",
    category: "cloud",
    skills: ["OCI Networking", "Cloud Architecture", "Virtual Cloud Network (VCN)", "Load Balancing", "Network Security"],
    featured: true,
  },
];

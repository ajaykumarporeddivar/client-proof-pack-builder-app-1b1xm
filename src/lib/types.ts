export type ProofPackStatus = 'draft' | 'pending_review' | 'approved' | 'exported' | 'archived' | 'rejected';

export type RecentActivityType = 'create' | 'update' | 'export' | 'archive';

export interface KeyMetric {
  id: string;
  name: string;
  value: number;
  unit?: string; // e.g., %, $, clicks
}

export interface ProofPack {
  id: string;
  clientName: string;
  campaignName: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  summary: string;
  metrics: KeyMetric[];
  status: ProofPackStatus;
  notes?: string; // Internal agency notes
  proofPoints?: string[]; // Links or brief descriptions of evidence
  exportUrl?: string; // URL to the exported file after generation
}

export interface RecentActivity {
  id: string;
  type: RecentActivityType;
  proofPackId: string;
  proofPackClientName: string;
  proofPackCampaignName: string;
  timestamp: string; // ISO date string
  userId: string;
  userName: string;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string; // e.g., 'SC' for Sarah Chen
  joinedAt: string; // ISO date string
}
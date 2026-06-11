import {
  DemoUser,
  ProofPack,
  KeyMetric,
  RecentActivity,
  ProofPackStatus,
  RecentActivityType,
} from './types';
import { LucideIcon, Home, FolderKanban, BarChart3, Settings, Users, ArrowUpRight } from 'lucide-react';

export const DEMO_USER: DemoUser = {
  id: 'usr_sarahchen',
  name: 'Sarah Chen',
  email: 'sarah.chen@agencyx.com',
  role: 'Account Manager',
  plan: 'Pro Agency',
  avatar: 'SC',
  joinedAt: '2023-01-15T10:00:00Z',
};

const generateMetrics = (baseId: string): KeyMetric[] => [
  { id: `${baseId}-m1`, name: 'Website Traffic', value: Math.floor(Math.random() * 50000) + 10000, unit: 'visits' },
  { id: `${baseId}-m2`, name: 'Conversion Rate', value: parseFloat((Math.random() * (0.05 - 0.01) + 0.01).toFixed(4)), unit: '%' },
  { id: `${baseId}-m3`, name: 'Avg. Order Value', value: parseFloat((Math.random() * (250 - 50) + 50).toFixed(2)), unit: '$' },
  { id: `${baseId}-m4`, name: 'Social Reach', value: Math.floor(Math.random() * 200000) + 50000, unit: 'impressions' },
];

export const MOCK_PROOF_PACKS: ProofPack[] = [
  {
    id: 'ppk_001',
    clientName: 'EcoSustain Goods',
    campaignName: 'Spring Collection Launch',
    startDate: '2024-03-01T00:00:00Z',
    endDate: '2024-03-31T23:59:59Z',
    summary: 'Successful launch of the new eco-friendly spring line, driving significant organic traffic and conversions via social media campaigns and influencer collaborations.',
    metrics: [
      { id: 'ppk_001-m1', name: 'Website Traffic', value: 45280, unit: 'visits' },
      { id: 'ppk_001-m2', name: 'Conversion Rate', value: 2.85, unit: '%' },
      { id: 'ppk_001-m3', name: 'Avg. Order Value', value: 125.75, unit: '$' },
      { id: 'ppk_001-m4', name: 'Social Reach', value: 185300, unit: 'impressions' },
    ],
    status: 'approved',
    notes: 'Client expressed satisfaction with ROI on social spend.',
    proofPoints: ['Link to GA report', 'Instagram campaign screenshot', 'Influencer partnership brief'],
    exportUrl: '/exports/ecosustain_spring_report.pdf',
  },
  {
    id: 'ppk_002',
    clientName: 'Urban Oasis Cafe',
    campaignName: 'Summer Patio Revamp',
    startDate: '2024-05-15T00:00:00Z',
    endDate: '2024-06-15T23:59:59Z',
    summary: 'Focused on local SEO and Google My Business optimization, coupled with local print ads, to drive foot traffic to the newly renovated patio area.',
    metrics: [
      { id: 'ppk_002-m1', name: 'Local Search Impressions', value: 12800, unit: '' },
      { id: 'ppk_002-m2', name: 'GMB Clicks to Call', value: 320, unit: '' },
      { id: 'ppk_002-m3', name: 'Social Engagement Rate', value: 4.1, unit: '%' },
    ],
    status: 'pending_review',
    notes: 'Waiting for client feedback on initial draft metrics.',
    proofPoints: ['GMB analytics report', 'Local ad placement proof'],
  },
  {
    id: 'ppk_003',
    clientName: 'Global Tech Solutions',
    campaignName: 'Q2 Lead Generation Drive',
    startDate: '2024-04-01T00:00:00Z',
    endDate: '2024-06-30T23:59:59Z',
    summary: 'Executed a multi-channel lead generation campaign targeting enterprise clients, utilizing LinkedIn ads and industry-specific webinars.',
    metrics: [
      { id: 'ppk_003-m1', name: 'Leads Generated', value: 1580, unit: '' },
      { id: 'ppk_003-m2', name: 'Conversion Rate', value: 0.72, unit: '%' },
      { id: 'ppk_003-m3', name: 'CPL', value: 85.50, unit: '$' },
    ],
    status: 'draft',
    notes: 'Awaiting final metrics from sales team for Q2.',
    proofPoints: ['Webinar registration data', 'LinkedIn campaign report'],
  },
  {
    id: 'ppk_004',
    clientName: 'FitLife Studios',
    campaignName: 'New Member Drive - Autumn',
    startDate: '2024-09-01T00:00:00Z',
    endDate: '2024-11-30T23:59:59Z',
    summary: 'Launched a localized digital marketing campaign across social media and local fitness blogs to attract new gym memberships.',
    metrics: [
      { id: 'ppk_004-m1', name: 'New Members', value: 210, unit: '' },
      { id: 'ppk_004-m2', name: 'Website Sign-ups', value: 780, unit: '' },
      { id: 'ppk_004-m3', name: 'Social Media Engagements', value: 15300, unit: '' },
    ],
    status: 'exported',
    notes: 'Client happy with results, plan to replicate next year.',
    proofPoints: ['Facebook Ads report', 'Local blog sponsorships'],
    exportUrl: '/exports/fitlife_autumn_report.pdf',
  },
  {
    id: 'ppk_005',
    clientName: 'MediCare Solutions',
    campaignName: 'Patient Education Initiative',
    startDate: '2024-07-01T00:00:00Z',
    endDate: '2024-08-31T23:59:59Z',
    summary: 'Developed and distributed educational content via email newsletters and a dedicated landing page to inform patients about new services.',
    metrics: [
      { id: 'ppk_005-m1', name: 'Email Open Rate', value: 28.5, unit: '%' },
      { id: 'ppk_005-m2', name: 'Landing Page Views', value: 8900, unit: '' },
      { id: 'ppk_005-m3', name: 'Consultation Bookings', value: 120, unit: '' },
    ],
    status: 'archived',
    notes: 'Campaign concluded, all data archived.',
    proofPoints: ['Email campaign report', 'Landing page analytics'],
    exportUrl: '/exports/medicare_education_report.pdf',
  },
];

export const MOCK_RECENT_ACTIVITY: RecentActivity[] = [
  {
    id: 'act_001',
    type: 'create',
    proofPackId: 'ppk_003',
    proofPackClientName: 'Global Tech Solutions',
    proofPackCampaignName: 'Q2 Lead Generation Drive',
    timestamp: '2024-07-01T10:00:00Z',
    userId: 'usr_sarahchen',
    userName: 'Sarah Chen',
  },
  {
    id: 'act_002',
    type: 'update',
    proofPackId: 'ppk_002',
    proofPackClientName: 'Urban Oasis Cafe',
    proofPackCampaignName: 'Summer Patio Revamp',
    timestamp: '2024-06-20T14:30:00Z',
    userId: 'usr_sarahchen',
    userName: 'Sarah Chen',
  },
  {
    id: 'act_003',
    type: 'export',
    proofPackId: 'ppk_001',
    proofPackClientName: 'EcoSustain Goods',
    proofPackCampaignName: 'Spring Collection Launch',
    timestamp: '2024-06-15T11:45:00Z',
    userId: 'usr_sarahchen',
    userName: 'Sarah Chen',
  },
  {
    id: 'act_004',
    type: 'archive',
    proofPackId: 'ppk_005',
    proofPackClientName: 'MediCare Solutions',
    proofPackCampaignName: 'Patient Education Initiative',
    timestamp: '2024-09-01T09:00:00Z',
    userId: 'usr_sarahchen',
    userName: 'Sarah Chen',
  },
  {
    id: 'act_005',
    type: 'update',
    proofPackId: 'ppk_004',
    proofPackClientName: 'FitLife Studios',
    proofPackCampaignName: 'New Member Drive - Autumn',
    timestamp: '2024-11-28T16:00:00Z',
    userId: 'usr_sarahchen',
    userName: 'Sarah Chen',
  },
];

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  current: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home, current: true },
  { name: 'Proof Packs', href: '/dashboard/proof-packs', icon: FolderKanban, current: false },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3, current: false },
  { name: 'Clients', href: '/dashboard/clients', icon: Users, current: false },
  { name: 'Exports', href: '/dashboard/exports', icon: ArrowUpRight, current: false },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings, current: false },
];

// Re-export constants under the names expected by imports
export const navItems = NAV_ITEMS;
export const activity = MOCK_RECENT_ACTIVITY;
export const records = MOCK_PROOF_PACKS;
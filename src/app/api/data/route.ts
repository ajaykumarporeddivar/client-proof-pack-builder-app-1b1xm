import { PROOF_PACKS, RECENT_ACTIVITY, DEMO_USER, STATS } from '@/lib/data';
import { ProofPack, RecentActivity, DemoUser, Stats } from '@/lib/types';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(): Promise<Response> {
  const data: {
    proofPacks: ProofPack[];
    recentActivity: RecentActivity[];
    demoUser: DemoUser;
    stats: Stats;
    total: number;
  } = {
    proofPacks: PROOF_PACKS,
    recentActivity: RECENT_ACTIVITY,
    demoUser: DEMO_USER,
    stats: STATS,
    total: PROOF_PACKS.length,
  };

  return new Response(JSON.stringify({ ok: true, data }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, message: 'Invalid JSON body' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    message: 'Demo mode — data not persisted',
    received: body,
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: CORS_HEADERS,
  });
}
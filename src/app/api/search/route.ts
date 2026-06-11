import { PROOF_PACKS } from '@/lib/data';
import { ProofPack } from '@/lib/types';
import { NextRequest } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type') || ''; // 'proofPacks' is implied for now

  let results: ProofPack[] = [];

  if (!query) {
    results = PROOF_PACKS.slice(0, 5); // Return first 5 if no query
  } else {
    const lowerCaseQuery = query.toLowerCase();
    results = PROOF_PACKS.filter(pack =>
      pack.clientName.toLowerCase().includes(lowerCaseQuery) ||
      pack.campaignName.toLowerCase().includes(lowerCaseQuery)
    );
  }

  const limitedResults = results.slice(0, 20); // Max 20 results

  return new Response(JSON.stringify({
    ok: true,
    data: {
      results: limitedResults,
      total: limitedResults.length,
      query: query,
    },
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
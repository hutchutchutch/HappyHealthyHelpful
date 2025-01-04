import { NextResponse } from 'next/server';
import { DesignRepository } from '@/lib/db/repositories/design.repository';

export async function GET() {
  try {
    const repo = new DesignRepository();
    const pillars = await repo.getSuggestedPillars();
    return NextResponse.json({ data: pillars });
  } catch (error) {
    console.error('Pillars API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
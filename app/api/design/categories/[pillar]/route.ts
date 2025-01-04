import { NextResponse } from 'next/server';
import { DesignRepository } from '@/lib/db/repositories/design.repository';

export async function GET(
  request: Request,
  { params }: { params: { pillar: string } }
) {
  try {
    const repo = new DesignRepository();
    const categories = await repo.getSuggestedCategories(params.pillar);
    return NextResponse.json({ data: categories });
  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
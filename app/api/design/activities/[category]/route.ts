import { NextResponse } from 'next/server';
import { DesignRepository } from '@/lib/db/repositories/design.repository';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const repo = new DesignRepository();
    const activities = await repo.getSuggestedActivities(params.category);
    return NextResponse.json({ data: activities });
  } catch (error) {
    console.error('Activities API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
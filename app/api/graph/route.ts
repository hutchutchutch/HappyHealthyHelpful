import { NextResponse } from 'next/server';
import { DataService } from '@/lib/db/services/data.service';

export async function GET() {
  try {
    const dataService = new DataService();
    const graphData = await dataService.getGraphData();
    
    return NextResponse.json({ data: graphData });
  } catch (error) {
    console.error('Graph API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
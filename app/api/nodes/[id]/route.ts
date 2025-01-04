import { NextResponse } from 'next/server';
import { DataService } from '@/lib/db/services/data.service';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const dataService = new DataService();
    const nodeDetails = await dataService.getNodeDetails(params.id);
    
    if (!nodeDetails) {
      return NextResponse.json(
        { error: 'Node not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: nodeDetails });
  } catch (error) {
    console.error('Node API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
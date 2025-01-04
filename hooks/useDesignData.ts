"use client";

import { useState, useEffect } from 'react';
import { SuggestedItem } from '@/lib/db/schemas/design.schema';

export function useDesignData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.error || 'Failed to fetch data');
        }
        
        setData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading = false;
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
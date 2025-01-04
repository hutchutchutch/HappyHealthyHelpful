"use client";

import { useState, useCallback } from 'react';

export function useDynamicRadius(threshold: number = 48) {
  const [borderRadius, setBorderRadius] = useState('1.25rem');

  const updateRadius = useCallback((height: number) => {
    setBorderRadius(height > threshold ? '1rem' : '1.25rem');
  }, [threshold]);

  return { borderRadius, updateRadius };
}
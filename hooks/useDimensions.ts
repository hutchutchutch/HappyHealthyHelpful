"use client";

import { useState, useEffect } from 'react';

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 1200, // Default width
    height: 800  // Default height
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Add event listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}
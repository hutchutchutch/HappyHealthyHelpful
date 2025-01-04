import { nodeColors } from './colors';

export const gradientColors = {
  start: nodeColors.happy.main, // Blue
  middle: nodeColors.healthy.main, // Green
  end: nodeColors.helpful.main, // Purple
} as const;
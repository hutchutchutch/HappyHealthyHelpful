import { nodeColors } from './colors';

export const gradientKeyframes = {
  blueToGreenToPurple: `
    0% { box-shadow: 0 0 20px ${nodeColors.happy.main}40 }
    33% { box-shadow: 0 0 20px ${nodeColors.healthy.main}40 }
    66% { box-shadow: 0 0 20px ${nodeColors.helpful.main}40 }
    100% { box-shadow: 0 0 20px ${nodeColors.happy.main}40 }
  `
} as const;
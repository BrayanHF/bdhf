import { FloatingShapeType } from '../../../interfaces/floating-shape-config.interface';

export const COLORS = ['white', '#d4d4d4', '#737373'];
export const SHAPES: FloatingShapeType[] = ['circle', 'rounded', 'square'];

export const DISCREET_RANGES = {
  size: { min: 8, max: 16 },
  opacity: { min: 0.08, max: 0.15 },
  blur: { min: 3, max: 6 },
  blurChance: 0.75,
  animRange: { min: 6, max: 12 },
  animRotationRange: { min: 4, max: 10 },
  animDurationMin: { min: 6, max: 9 },
  animDurationMax: { min: 10, max: 14 },
  maxEdgePercent: 6,
  maxDelay: 3,
  centerChance: 0,
};

export const NORMAL_RANGES = {
  size: { min: 12, max: 28 },
  opacity: { min: 0.2, max: 0.7 },
  blur: { min: 4, max: 12 },
  blurChance: 0.6,
  animRange: { min: 40, max: 70 },
  animRotationRange: { min: 20, max: 35 },
  animDurationMin: { min: 3, max: 5 },
  animDurationMax: { min: 6, max: 9 },
  maxEdgePercent: 30,
  maxDelay: 2.5,
  centerChance: 0.25,
};

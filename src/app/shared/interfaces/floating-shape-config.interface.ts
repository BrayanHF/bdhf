export type FloatingShapeType = 'circle' | 'rounded' | 'square';

export interface FloatingShapeConfig {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size: number;
  shape: FloatingShapeType;
  color: string;
  opacity: number;
  blur?: number;
  rotation: number;
  animRange: number;
  animRotationRange: number;
  animDurationMin: number;
  animDurationMax: number;
  animDelay: number;
  animEase: string;
}

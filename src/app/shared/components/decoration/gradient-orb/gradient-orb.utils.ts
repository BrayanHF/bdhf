import {
  GradientOrbConfig,
  GradientOrbPosition,
} from '../../../interfaces/gradient-orb-config.interface';
import { GRADIENT_ORB_BLUR, GRADIENT_ORB_COLORS, GRADIENT_ORB_RANGES } from './gradient-orb.config';
import { pick, rand, randInt } from '../../../helpers/random.helpers';

export function generateOrbConfig(
  position: GradientOrbPosition,
  sizeBase: number,
  index: number,
): GradientOrbConfig {
  const ranges = GRADIENT_ORB_RANGES;

  // -------- Size: first uses base, subsequent are smaller but close --------
  let size: number;
  if (index === 0) {
    size = sizeBase;
  } else {
    const variation = randInt(ranges.sizeVariation.min, ranges.sizeVariation.max);
    size = Math.max(220, sizeBase - variation);
  }

  // -------- Center mode: every orb gets its own center inside the central zone --------
  if (position === 'center') {
    const centerH = rand(44, 56); // 44% .. 56%
    const centerV = randInt(-60, 60); // px offset from 50%
    return {
      top: `calc(50% + ${centerV}px)`,
      left: `${centerH}%`,
      size,
      color: pick(GRADIENT_ORB_COLORS),
      opacity: parseFloat(rand(ranges.opacity.min, ranges.opacity.max).toFixed(2)),
      blur: GRADIENT_ORB_BLUR,
    };
  }

  // -------- Left / Right mode: spread inside the lateral zone --------
  const hRange = ranges.horizontal[position];
  const leftBase = randInt(hRange.min, hRange.max);
  const leftOffset = rand(ranges.positionOffset.min, ranges.positionOffset.max);
  const verticalOffset = randInt(-80, 80);

  return {
    top: `calc(50% + ${verticalOffset}px)`,
    left: `${leftBase + leftOffset}%`,
    size,
    color: pick(GRADIENT_ORB_COLORS),
    opacity: parseFloat(rand(ranges.opacity.min, ranges.opacity.max).toFixed(2)),
    blur: GRADIENT_ORB_BLUR,
  };
}

export function generateOrbConfigs(
  count: number,
  position: GradientOrbPosition,
): GradientOrbConfig[] {
  const safeCount = Math.max(0, Math.floor(count));
  const sizeBase = randInt(GRADIENT_ORB_RANGES.sizeBase.min, GRADIENT_ORB_RANGES.sizeBase.max);

  return Array.from({ length: safeCount }, (_, i) => generateOrbConfig(position, sizeBase, i));
}

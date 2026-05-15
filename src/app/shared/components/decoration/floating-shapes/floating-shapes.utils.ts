import { COLORS, DISCREET_RANGES, NORMAL_RANGES, SHAPES } from './floating-shapes.config';
import { FloatingShapeConfig } from '../../../interfaces/floating-shape-config.interface';
import { pick, rand, randInt } from '../../../helpers/random.helpers';

export function generateConfig(discreet: boolean): FloatingShapeConfig {
  const ranges = discreet ? DISCREET_RANGES : NORMAL_RANGES;

  // -------- Position --------
  let left: string | undefined;
  let right: string | undefined;
  let top: string | undefined;
  let bottom: string | undefined;

  const isCentered = Math.random() < ranges.centerChance;

  if (isCentered) {
    top = `${randInt(15, 80)}%`;
    const horizontalPos = `${randInt(10, 80)}%`;
    if (Math.random() < 0.5) {
      left = horizontalPos;
    } else {
      right = horizontalPos;
    }
  } else {
    top = `${randInt(10, 85)}%`;
    const edgePos = `${randInt(0, ranges.maxEdgePercent)}%`;
    if (Math.random() < 0.5) {
      left = edgePos;
    } else {
      right = edgePos;
    }
  }

  // -------- Appearance --------
  const size = randInt(ranges.size.min, ranges.size.max);
  const opacity = parseFloat(rand(ranges.opacity.min, ranges.opacity.max).toFixed(2));
  const blur =
    Math.random() < ranges.blurChance ? randInt(ranges.blur.min, ranges.blur.max) : undefined;
  const rotation = randInt(-45, 45);

  // -------- Animation --------
  const animRange = randInt(ranges.animRange.min, ranges.animRange.max);
  const animRotationRange = randInt(ranges.animRotationRange.min, ranges.animRotationRange.max);
  const animDurationMin = parseFloat(
    rand(ranges.animDurationMin.min, ranges.animDurationMin.max).toFixed(1),
  );
  const animDurationMax = parseFloat(
    rand(Math.max(animDurationMin, ranges.animDurationMax.min), ranges.animDurationMax.max).toFixed(
      1,
    ),
  );
  const animDelay = parseFloat(rand(0, ranges.maxDelay).toFixed(1));

  return {
    top,
    right,
    bottom,
    left,
    size,
    shape: pick(SHAPES),
    color: pick(COLORS),
    opacity,
    blur,
    rotation,
    animRange,
    animRotationRange,
    animDurationMin,
    animDurationMax,
    animDelay,
    animEase: 'sine.inOut',
  };
}

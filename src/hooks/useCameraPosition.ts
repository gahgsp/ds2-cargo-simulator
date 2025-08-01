import { useMemo } from "react";
import { Vector3 } from "three";
import { FOV } from "../constants/camera";
import { degreesToRadians } from "../utils/numberHelpers";
import type { ShelfBounds } from './../interfaces';

export const useCameraPosition = ({ bounds }: { bounds: ShelfBounds }): Vector3 => {
  return useMemo(() => {
    const [centerX, centerY, centerZ] = bounds.center
    const maxDimension = Math.max(bounds.width, bounds.height)
    const distance = (maxDimension / 2) / Math.tan(degreesToRadians(FOV) / 2)

    return new Vector3(centerX, centerY, centerZ + distance)
  }, [bounds])
}
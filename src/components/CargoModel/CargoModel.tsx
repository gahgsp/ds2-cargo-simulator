import type { PositionedCargo } from "../../hooks/useCargoPositions"
import LargeModel from "../../models/LargeModel"
import Model from "../../models/Model"

interface CargoModelProps {
  cargo: PositionedCargo
}

export const CargoModel = ({ cargo }: CargoModelProps) => {
  const sharedProps = {
    position: cargo.position,
    scale: cargo.scale,
    rotation: cargo.rotation,
    isSelected: cargo.isSelected,
    isTransparent: cargo.isTransparent,
  }

  return cargo.size === 'L' ? (
    <LargeModel key={`large-cargo-${cargo.id}`} {...sharedProps} />
  ) : (
    <Model key={`cargo-${cargo.id}`} {...sharedProps} />
  )
}

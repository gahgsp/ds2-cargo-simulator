import { Environment, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import Shelf from "../components/Shelf/Shelf"
import { TO_DELIVERIES_SHELF_ROTATION, TO_LOST_CARGOS_SHELF_ROTATION } from "../constants/camera"
import { useCameraPosition } from "../hooks/useCameraPosition"
import { useShelfBounds } from "../hooks/useShelfBounds"
import type { Cargo, Delivery } from "../interfaces"

interface SceneProps {
  deliveries: Delivery[]
  lostCargos: Cargo[]
  selectedCargo: Cargo | null
}

type AvailableShelfs = 'DELIVERIES' | 'LOST_CARGO'

const Scene = ({ deliveries, lostCargos, selectedCargo }: SceneProps) => {
  const [activeShelf, setActiveShelf] = useState<AvailableShelfs>('DELIVERIES')

  const cargosFromDeliveries = deliveries.flatMap((delivery) => delivery.cargos)

  // Calculating the bounds of each Shelf.
  const deliveriesShelfBounds = useShelfBounds({ cargos: cargosFromDeliveries })
  const lostCargosShelfBounds = useShelfBounds({ cargos: lostCargos })

  // Calculating the most optimized Camera position to fit the entire Shelf in the view.
  const deliveriesCameraPosition = useCameraPosition({ bounds: deliveriesShelfBounds })
  const lostCargosCameraPosition = useCameraPosition({ bounds: lostCargosShelfBounds })

  useEffect(() => {
    if (!selectedCargo || !lostCargos.find((c) => c.id === selectedCargo.id)) {
      setActiveShelf('DELIVERIES')
    } else {
      setActiveShelf('LOST_CARGO')
    }
  }, [lostCargos, selectedCargo])


  useFrame((state) => {
    if (activeShelf === 'DELIVERIES') {
      state.camera.position.lerp(deliveriesCameraPosition, 0.05)
      state.camera.quaternion.slerp(TO_DELIVERIES_SHELF_ROTATION, 0.1)
    } else if (activeShelf === 'LOST_CARGO') {
      state.camera.position.lerp(lostCargosCameraPosition, 0.05)
      state.camera.quaternion.slerp(TO_LOST_CARGOS_SHELF_ROTATION, 0.1)
    }
  })

  return (
    <>
      <PerspectiveCamera position={deliveriesCameraPosition} fov={15} makeDefault={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <Shelf cargos={deliveries.flatMap((delivery) => delivery.cargos)} selectedCargo={selectedCargo} position={[0, 0, 0]} />
        <Shelf cargos={lostCargos} selectedCargo={selectedCargo} position={[0, 0, 296]} rotation={[0, Math.PI, 0]} />
      </Suspense>
    </>
  )
}

export default Scene


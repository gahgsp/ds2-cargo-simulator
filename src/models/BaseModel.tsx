import { Clone, useGLTF } from '@react-three/drei'
import { type ThreeElements } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'
import FadingEdges from '../components/FadingEdges/FadingEdges'
import FloatingEffector from '../components/FloatingEffector/FloatingEffector'
import { makeTransparent } from '../utils/model'

type GroupProps = ThreeElements['group']

export type BaseModelProps = GroupProps & {
  gltfPath: string
  isSelected: boolean
  isTransparent: boolean
}

const BaseModel = ({
  gltfPath,
  isSelected,
  isTransparent,
  ...props
}: BaseModelProps) => {
  const { scene } = useGLTF(gltfPath)
  const groupRef = useRef<Group>(null)

  const originalModel = useMemo(() => scene.clone(true), [scene])

  const transparentModel = useMemo(() => {
    const clone = scene.clone(true)
    makeTransparent(clone, 0.1)
    return clone
  }, [scene])

  return (
    <group ref={groupRef} {...props}>
      {!isSelected && !isTransparent && <Clone object={originalModel} />}
      {isSelected && isTransparent && (
        <FloatingEffector>
          <Clone object={transparentModel} inject={<FadingEdges isTransparent={isTransparent} />} />
        </FloatingEffector>
      )}
      {isSelected && !isTransparent && (
        <Clone object={originalModel} inject={<FadingEdges isTransparent={isTransparent} />} />
      )}
    </group>
  )
}

export default BaseModel

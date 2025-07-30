import type { Material, Mesh, Object3D } from "three"

/**
 * Applies to a GLTF Model an opacity / transparency to all of its materials.
 * This code is is heavily inspired by this solution: https://discourse.threejs.org/t/change-the-opacity-of-an-a-frame-object-made-from-gltf-with-javascript/56699/2
 * @param model The GLTF Model in which we will apply the opacity to its materials.
 * @param opacity The opacity to be applied to the materials.
 */
export const makeTransparent = (model: Object3D, opacity = 0.1) => {
  model.traverse((node) => {
    if ((node as Mesh).isMesh) {
      const mesh = node as Mesh
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]

      // We clone every single material to avoid applying the same style for all of the Models.
      const clonedMaterials = materials.map((mat: Material) => {
        const clonedMat = mat.clone()
        clonedMat.transparent = true
        clonedMat.opacity = opacity
        clonedMat.depthWrite = false
        clonedMat.needsUpdate = true
        return clonedMat
      })

      // Assign back to the mesh the now cloned and transparent materials.
      mesh.material = Array.isArray(mesh.material) ? clonedMaterials : clonedMaterials[0]
    }
  })
}
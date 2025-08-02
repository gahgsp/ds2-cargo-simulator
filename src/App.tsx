import { Box, Grid } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import CargoDetails from './components/CargoDetails/CargoDetails'
import CargoSidebar from './containers/CargoSidebar'
import Scene from './containers/Scene'
import type { Cargo, Delivery } from './interfaces'

const styles = {
  container: {
    perspective: '1000px',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    padding: '16px',
    overflow: 'hidden'
  },
}

function App() {
  const [selectedCargo, setSelectedCargo] = useState<Cargo | null>(null)

  const deliveries: Delivery[] = [
    {
      type: 'Express',
      description: 'Deliver Unidentified Samples of Stranded Fish',
      totalWeight: 272,
      cargos: [
        { id: 0, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 1, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 2, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 3, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 4, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 5, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 6, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 7, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 8, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 9, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 10, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 11, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 12, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 13, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 14, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 15, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 16, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 17, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 18, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 19, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 20, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 21, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 22, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 23, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 24, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 25, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 26, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 27, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 28, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 29, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 30, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 31, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 32, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
        { id: 33, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
      ]
    },
  ]

  const lostCargos: Cargo[] = [
    { id: 69, title: 'Lost 1', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
    { id: 68, title: 'Lost 2', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 },
    { id: 67, title: 'Lost 3', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.', size: 'S', weight: 8 }
  ]

  return (
    <Grid container sx={styles.container}>
      {/* Left Column - Cargos */}
      <Grid size={5} sx={{ height: '100%', position: 'relative' }}>
        <CargoSidebar deliveries={deliveries} lostCargos={lostCargos} onSelectCargo={(cargo) => setSelectedCargo(cargo)} />
        <Box>
          {selectedCargo && <CargoDetails cargo={selectedCargo} />}
        </Box>
      </Grid>
      {/* Right Column - 3D Scene */}
      <Grid size={7}>
        <Canvas>
          <Scene deliveries={deliveries} lostCargos={lostCargos} selectedCargo={selectedCargo} />
        </Canvas>
      </Grid>
    </Grid>
  )
}

export default App

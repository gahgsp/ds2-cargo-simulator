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

const App = () => {
  const [selectedCargo, setSelectedCargo] = useState<Cargo | null>(null)

  const deliveries: Delivery[] = [
    {
      type: 'Express',
      description: 'Deliver Unidentified Samples of Stranded Fish',
      totalWeight: 136,
      cargos: Array.from({ length: 34 }, (_, id) => ({
        id,
        title: 'Unidentified Fish Sample',
        description:
          'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.',
        size: 'M',
        weight: 4,
        image: 'src/assets/img/fish-cargo.png',
        deliveryTo: 'Villa Libre'
      })),
    },
  ];

  const lostCargos: Cargo[] = [
    { id: 69, title: 'Vinyl Record with Sounds of Nature', description: 'A red and circular vinyl record. Used to store sounds and songs in a reproducible way. This object was very famous before the Death Stranding.', size: 'S', weight: 2, image: 'src/assets/img/red-disc.png', deliveryTo: 'Musician' },
    { id: 68, title: 'Pre-Death Stranding Collection of Songs', description: 'A yellow and circular vinyl record. Used to store sounds and songs in a reproducible way. This object was very famous before the Death Stranding.', size: 'S', weight: 2, image: 'src/assets/img/yellow-disc.png', deliveryTo: 'Musician' },
    { id: 67, title: 'Sack of Dirty Potatoes', description: 'Grown potatoes from a farm located in the south. It can be turned into different meals rich of carboidrates.', size: 'L', weight: 5, image: 'src/assets/img/potatoes.png', deliveryTo: 'Architect' }
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

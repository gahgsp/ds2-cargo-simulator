import { Box, Grid } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import CargoDetails from './components/CargoDetails/CargoDetails'
import CargoSidebar from './containers/CargoSidebar'
import Scene from './containers/Scene'
import type { Cargo, Delivery } from './interfaces'
import { Loader } from '@react-three/drei'

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
        image: '/img/fish-cargo.png',
        deliveryTo: 'Villa Libre'
      })),
    },
  ];

  const lostCargos: Cargo[] = [
    { id: 69, title: 'Vinyl Record with Sounds of Nature', description: 'A red and circular vinyl record. Used to store sounds and songs in a reproducible way. This object was very famous before the Death Stranding.', size: 'S', weight: 2, image: '/img/red-disc.png', deliveryTo: 'Musician' },
    { id: 68, title: 'Pre-Death Stranding Collection of Songs', description: 'A yellow and circular vinyl record. Used to store sounds and songs in a reproducible way. This object was very famous before the Death Stranding.', size: 'S', weight: 2, image: '/img/yellow-disc.png', deliveryTo: 'Musician' },
    { id: 67, title: 'Jar of Doce de Leite (Mumu)', description: 'Whether to eat it as a dessert or together with bread, this sweet sauce-like confection is a gift sent from the other side. It is said: a spoon of Doce de Leite a day, keeps the timefall away.', size: 'L', weight: 5, image: '/img/mumu-cargo.png', deliveryTo: 'Architect' }
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
          <Suspense fallback={null}>
            <Scene deliveries={deliveries} lostCargos={lostCargos} selectedCargo={selectedCargo} />
          </Suspense>
        </Canvas>
        <Loader />
      </Grid>
    </Grid>
  )
}

export default App

import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import Shelf from './components/Shelf/Shelf'
import CargoSidebar from './containers/CargoSidebar'
import CargoDetails from './components/CargoDetails/CargoDetails'
import type { Cargo, Delivery } from './interfaces'

const styles = {
  container: {
    perspective: '1000px',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    background: '#3d4648',
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
    }
  ]

  return (
    <Grid container sx={styles.container}>
      {/* Left Column - Cargos */}
      <Grid size={5} sx={{ height: '100%' }}>
        <CargoSidebar deliveries={deliveries} onSelectCargo={(cargo) => setSelectedCargo(cargo)} />
        <Box>
          {selectedCargo && <CargoDetails cargo={selectedCargo} />}
        </Box>
      </Grid>
      {/* Right Column - 3D Scene */}
      <Grid size={7}>
        <Shelf cargos={deliveries.flatMap((delivery) => delivery.cargos)} selectedCargo={selectedCargo} />
      </Grid>
    </Grid>
  )
}

export default App

import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import Shelf from './components/Shelf/Shelf'
import CargoSidebar from './containers/CargoSidebar'
import CargoDetails from './components/CargoDetails/CargoDetails'

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
  const [selectedCargo, setSelectedCargo] = useState(null)

  const layeredCargos = [
    {
      type: 'Express',
      orderDescription: 'Deliver Unidentified Samples of Stranded Fish',
      totalWeight: 272,
      cargos: [
        { id: 0, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 1, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 2, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 3, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 4, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 5, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 6, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 7, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 8, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 9, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 10, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 11, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 12, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 13, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 14, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 15, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 16, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 17, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 18, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 19, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 20, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 21, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 22, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 23, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 24, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 25, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 26, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 27, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 28, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 29, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 30, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 31, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 32, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
        { id: 33, title: 'Unidentified Fish Sample', description: 'Samples of fish recovered from a BT area. It is possible that these creatures crossed over from the other side at the same time as the BTs.' },
      ]
    }
  ]

  return (
    <Grid container sx={styles.container}>
      {/* Left Column - Cargos */}
      <Grid size={5} sx={{ height: '100%' }}>
        <CargoSidebar cargos={layeredCargos} onSelectCargo={(cargo) => setSelectedCargo(cargo)} />
        <Box>
          {selectedCargo && <CargoDetails cargo={selectedCargo} />}
        </Box>
      </Grid>
      {/* Right Column - 3D Scene */}
      <Grid size={7}>
        <Shelf cargos={layeredCargos.flatMap((delivery) => delivery.cargos)} selectedModel={selectedCargo} />
      </Grid>
    </Grid>
  )
}

export default App

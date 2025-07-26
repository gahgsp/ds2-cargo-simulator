import { Grid } from '@mui/material'
import { useState } from 'react'
import Shelf from './components/Shelf/Shelf'
import CargoSidebar from './containers/CargoSidebar'

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
  const [selectedCard, setSelectedCard] = useState(null)

  const layeredCargos = [
    {
      type: 'Express',
      orderDescription: 'Deliver Unidentified Samples of Stranded Fish',
      totalWeight: 272,
      cargos: [
        { id: 0, description: 'Unidentified Fish Sample' },
        { id: 1, description: 'Unidentified Fish Sample' },
        { id: 2, description: 'Unidentified Fish Sample' },
        { id: 3, description: 'Unidentified Fish Sample' },
        { id: 4, description: 'Unidentified Fish Sample' },
        { id: 5, description: 'Unidentified Fish Sample' },
        { id: 6, description: 'Unidentified Fish Sample' },
        { id: 7, description: 'Unidentified Fish Sample' },
        { id: 8, description: 'Unidentified Fish Sample' },
        { id: 9, description: 'Unidentified Fish Sample' },
        { id: 10, description: 'Unidentified Fish Sample' },
        { id: 11, description: 'Unidentified Fish Sample' },
        { id: 12, description: 'Unidentified Fish Sample' },
        { id: 13, description: 'Unidentified Fish Sample' },
        { id: 14, description: 'Unidentified Fish Sample' },
        { id: 15, description: 'Unidentified Fish Sample' },
        { id: 16, description: 'Unidentified Fish Sample' },
        { id: 17, description: 'Unidentified Fish Sample' },
        { id: 18, description: 'Unidentified Fish Sample' },
        { id: 19, description: 'Unidentified Fish Sample' },
        { id: 20, description: 'Unidentified Fish Sample' },
        { id: 21, description: 'Unidentified Fish Sample' },
        { id: 22, description: 'Unidentified Fish Sample' },
        { id: 23, description: 'Unidentified Fish Sample' },
        { id: 24, description: 'Unidentified Fish Sample' },
        { id: 25, description: 'Unidentified Fish Sample' },
        { id: 26, description: 'Unidentified Fish Sample' },
        { id: 27, description: 'Unidentified Fish Sample' },
        { id: 28, description: 'Unidentified Fish Sample' },
        { id: 29, description: 'Unidentified Fish Sample' },
        { id: 30, description: 'Unidentified Fish Sample' },
        { id: 31, description: 'Unidentified Fish Sample' },
        { id: 32, description: 'Unidentified Fish Sample' },
        { id: 33, description: 'Unidentified Fish Sample' },
      ]
    }
  ]

  return (
    <Grid container sx={styles.container}>
      {/* Left Column - Cargos */}
      <Grid size={5} sx={{ height: '100%' }}>
        <CargoSidebar cargos={layeredCargos} onSelectCargo={(id) => setSelectedCard(id)} />
      </Grid>
      {/* Right Column - 3D Scene */}
      <Grid size={7}>
        <Shelf cargos={layeredCargos.flatMap((delivery) => delivery.cargos)} selectedModel={selectedCard} />
      </Grid>
    </Grid>
  )
}

export default App

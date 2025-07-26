import { Box, Checkbox, Typography } from "@mui/material"
import type { Cargo } from "../../interfaces"

interface CargoListProps {
  cargos: Cargo[]
  onSelectCargo: (selectedCargo: Cargo) => void
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  information: {
    display: 'flex',
    alignItems: 'center'
  },
  size: {
    marginRight: '48px',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    width: '30px',
    height: '30px'
  }
}

const CargoList = ({ cargos, onSelectCargo }: CargoListProps) => {
  return (
    <Box sx={styles.container}>
      {cargos.map((cargo) => (
        <Box key={cargo.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={(e) => {
          e.preventDefault()
          onSelectCargo(cargo)
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox />
            <Typography sx={{ color: 'white' }}>{cargo.title}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={styles.size}>{cargo.size}</Typography>
            <Typography sx={{ color: 'white' }}>{cargo.weight}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CargoList
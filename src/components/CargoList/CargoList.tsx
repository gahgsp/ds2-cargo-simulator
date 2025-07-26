import { Box, Checkbox, Typography } from "@mui/material"

interface CargoListProps {
  cargos: any[]
  onSelectCargo: (id: number) => void
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
            <Typography sx={styles.size}>M</Typography>
            <Typography sx={{ color: 'white' }}>8.0</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CargoList
import { Box, Checkbox, Typography } from "@mui/material"
import type { Cargo } from "../../interfaces"
import { formatAmount } from "../../utils/numberHelpers"
import CargoIcon from "../CargoIcon/CargoIcon"

interface CargoItemProps {
  cargo: Cargo
  onSelectCargo: (cargo: Cargo) => void
}

const styles = {
  container: {
    display:
      'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    paddingLeft: '4px'
  },
  title: {
    color: 'white',
    fontSize: '0.85rem',
    px: '8px'
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center'
  },
  size: {
    marginRight: '48px',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px'
  },
  weight: {
    color: 'white'
  }
}

const CargoItem = ({ cargo, onSelectCargo }: CargoItemProps) => {
  return (
    <Box key={cargo.id} sx={styles.container} onClick={(e) => {
      e.preventDefault()
      onSelectCargo(cargo)
    }}>
      <Box sx={styles.leftSide}>
        <Checkbox sx={styles.checkbox} />
        <CargoIcon />
        <Typography sx={styles.title}>{cargo.title}</Typography>
      </Box>
      <Box sx={styles.rightSide}>
        <Box sx={styles.size}>
          <Typography variant="overline">{cargo.size}</Typography>
        </Box>
        <Typography sx={styles.weight}>{formatAmount(cargo.weight)}</Typography>
      </Box>
    </Box>
  )
}

export default CargoItem
import { Box, Checkbox, Typography } from "@mui/material"
import type { Cargo } from "../../interfaces"
import { formatAmount } from "../../utils/numberHelpers"
import CargoIcon from "../CargoIcon/CargoIcon"
import { makeCargoItemStyles } from './styles'

interface CargoItemProps {
  cargo: Cargo
  onSelectCargo: (cargo: Cargo) => void
  waveColor: 'blue' | 'green'
}

const CargoItem = ({ cargo, onSelectCargo, waveColor }: CargoItemProps) => {
  const styles = makeCargoItemStyles({ waveColor })
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

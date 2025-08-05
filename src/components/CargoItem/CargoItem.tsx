import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Box, Checkbox, Typography } from "@mui/material"
import { useState } from "react"
import { useAudioEffect } from '../../hooks/useAudioEffect'
import type { Cargo } from "../../interfaces"
import { formatAmount } from "../../utils/numberHelpers"
import IconContainer from '../IconContainer/IconContainer'
import { makeCargoItemStyles } from './styles'

interface CargoItemProps {
  cargo: Cargo
  onSelectCargo: (cargo: Cargo) => void
  waveColor: 'blue' | 'green'
}

const CargoItem = ({ cargo, onSelectCargo, waveColor }: CargoItemProps) => {
  const styles = makeCargoItemStyles({ waveColor })

  // Outside visual effects, we do not this information for other stuff. So we keep it simple.
  const [shouldDisplayCheckbox, setShouldDisplayCheckbox] = useState<boolean>(false)

  const playAudioEffect = useAudioEffect(['/sounds/effect1.mp3', '/sounds/effect2.mp3'])

  const handleOnSelectCargo = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSelectCargo(cargo)
    setShouldDisplayCheckbox(!shouldDisplayCheckbox)
    playAudioEffect()
  }

  return (
    <Box key={cargo.id} sx={styles.container} onClick={handleOnSelectCargo}>
      <Checkbox checked={true} checkedIcon={<KeyboardArrowDownOutlinedIcon sx={styles.checkedIcon} />} sx={{ ...styles.checkbox, visibility: shouldDisplayCheckbox ? 'visible' : 'hidden' }} />
      <Box sx={styles.leftSide}>
        <IconContainer>
          <DetailsOutlinedIcon sx={styles.cargoIcon} />
        </IconContainer>
        <Typography sx={styles.title}>{cargo.title}</Typography>
      </Box>
      <Box sx={styles.rightSide}>
        <Typography component="div" variant="overline" sx={styles.size}>{cargo.size}</Typography>
        <Typography sx={styles.weight}>{formatAmount(cargo.weight)}</Typography>
      </Box>
    </Box >
  )
}

export default CargoItem

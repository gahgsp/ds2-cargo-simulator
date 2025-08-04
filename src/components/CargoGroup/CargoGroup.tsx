import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import type { Cargo } from "../../interfaces"
import { formatAmount } from "../../utils/numberHelpers"
import CargoList from "../CargoList/CargoList"
import IconContainer from "../IconContainer/IconContainer"

interface CargoGroupProps {
  title: string
  totalWeight: number
  cargos: Cargo[]
  onSelectCargo: (cargo: Cargo) => void
  waveColor: 'blue' | 'green'
}

const styles = {
  accordion: {
    backgroundColor: 'transparent',
    border: 'none',
    borderShadow: 'none'
  },
  summary: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '32px !important',
    height: '32px !important',
    margin: '0 !important',
    outline: 'none !important',
    cursor: 'inherit',
    '.MuiAccordionSummary-content': {
      alignItems: 'center'
    },
  },
  deliveryInformation: {
    color: 'white',
    height: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingLeft: '8px'
  },
  cargoIcon: {
    transform: 'rotate(180deg)'
  }
}

const CargoGroup = ({ title, totalWeight, cargos, onSelectCargo, waveColor }: CargoGroupProps) => {
  return (
    <Accordion defaultExpanded={true} expanded={true} key={title} elevation={0} sx={styles.accordion} disableGutters={true}>
      <AccordionSummary sx={styles.summary}>
        <IconContainer>
          <DetailsOutlinedIcon sx={styles.cargoIcon} />
        </IconContainer>
        <Typography component="div" sx={styles.deliveryInformation}>
          <Typography>{title}</Typography>
          <Typography>{formatAmount(totalWeight)}</Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CargoList cargos={cargos} onSelectCargo={onSelectCargo} waveColor={waveColor} />
      </AccordionDetails>
    </Accordion >
  )
}

export default CargoGroup
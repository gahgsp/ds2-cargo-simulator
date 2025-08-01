import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import CargoIcon from "../CargoIcon/CargoIcon"
import CargoList from "../CargoList/CargoList"
import { formatAmount } from "../../utils/numberHelpers"
import type { Cargo } from "../../interfaces"

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
    '.MuiAccordionSummary-content': {
      alignItems: 'center'
    }
  },
  deliveryInformation: {
    color: 'white',
    height: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingLeft: '8px'
  }
}

const CargoGroup = ({ title, totalWeight, cargos, onSelectCargo, waveColor }: CargoGroupProps) => {
  return (
    <Accordion defaultExpanded={true} key={title} elevation={0} sx={styles.accordion} >
      <AccordionSummary sx={styles.summary}>
        <CargoIcon />
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
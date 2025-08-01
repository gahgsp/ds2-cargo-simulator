import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import CargoHeader from "../components/CargoHeader/CargoHeader";
import CargoIcon from "../components/CargoIcon/CargoIcon";
import CargoList from "../components/CargoList/CargoList";
import type { Cargo, Delivery } from "../interfaces";
import { formatAmount } from "../utils/numberHelpers";

interface CargoSidebarProps {
  deliveries: Delivery[]
  lostCargos: Cargo[]
  onSelectCargo: (selectedCargo: Cargo) => void
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
    overflow: 'hidden',
  },
  scrollableContainer: {
    flex: 1,
    overflowY: 'auto',
  },
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

const CargoSidebar = ({ deliveries, lostCargos, onSelectCargo }: CargoSidebarProps) => {
  return (
    <Box sx={styles.container}>
      <CargoHeader />
      <Box sx={styles.scrollableContainer}>
        {deliveries.map((delivery) => (
          <Accordion defaultExpanded={true} key={delivery.description} elevation={0} sx={styles.accordion} >
            <AccordionSummary sx={styles.summary}>
              <CargoIcon />
              <Typography component="div" sx={styles.deliveryInformation}>
                <Typography>[{delivery.type}] {delivery.description}</Typography>
                <Typography>{formatAmount(delivery.totalWeight)}</Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CargoList cargos={delivery.cargos} onSelectCargo={onSelectCargo} />
            </AccordionDetails>
          </Accordion >
        ))}
        <Accordion defaultExpanded={true} key={'lost-cargo'} elevation={0} sx={styles.accordion} >
          <AccordionSummary sx={styles.summary}>
            <CargoIcon />
            <Typography component="div" sx={styles.deliveryInformation}>
              <Typography>Lost Cargo</Typography>
              <Typography>{formatAmount(lostCargos.reduce((acc, curr) => acc + curr.weight, 0))}</Typography>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CargoList cargos={lostCargos} onSelectCargo={onSelectCargo} />
          </AccordionDetails>
        </Accordion >
      </Box>
    </Box>
  )
}

export default CargoSidebar
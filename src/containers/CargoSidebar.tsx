import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import CargoHeader from "../components/CargoHeader/CargoHeader"
import CargoList from "../components/CargoList/CargoList"
import type { Cargo, Delivery } from "../interfaces"

interface CargoSidebarProps {
  deliveries: Delivery[]
  onSelectCargo: (selectedCargo: Cargo) => void
}

const CargoSidebar = ({ deliveries, onSelectCargo }: CargoSidebarProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    }}>
      <CargoHeader />
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
      }}>
        {deliveries.map((delivery) => (
          <Accordion defaultExpanded={true} key={delivery.description} sx={{ backgroundColor: 'transparent', border: 'none', borderShadow: 'none' }} elevation={0}>
            <AccordionSummary>
              <Typography sx={{ color: 'white' }}>[{delivery.type}] {delivery.description} - {delivery.totalWeight}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CargoList cargos={delivery.cargos} onSelectCargo={onSelectCargo} />
            </AccordionDetails>
          </Accordion >
        ))}
      </Box>
    </Box>
  )
}

export default CargoSidebar
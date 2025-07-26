import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import CargoHeader from "../components/CargoHeader/CargoHeader"
import CargoList from "../components/CargoList/CargoList"

interface CargoSidebarProps {
  cargos: any[]
  onSelectCargo: (id: number) => void
}

const CargoSidebar = ({ cargos, onSelectCargo }: CargoSidebarProps) => {
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
        {cargos.map((delivery) => (
          <Accordion defaultExpanded={true} key={delivery.orderDescription} sx={{ backgroundColor: 'transparent', border: 'none', borderShadow: 'none' }} elevation={0}>
            <AccordionSummary>
              <Typography sx={{ color: 'white' }}>[{delivery.type}] {delivery.orderDescription} - {delivery.totalWeight}</Typography>
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
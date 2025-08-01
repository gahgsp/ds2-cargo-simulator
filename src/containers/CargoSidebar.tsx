import { Box } from "@mui/material";
import CargoGroup from "../components/CargoGroup/CargoGroup";
import CargoHeader from "../components/CargoHeader/CargoHeader";
import type { Cargo, Delivery } from "../interfaces";

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
  }
}

const CargoSidebar = ({ deliveries, lostCargos, onSelectCargo }: CargoSidebarProps) => {
  return (
    <Box sx={styles.container}>
      <CargoHeader />
      <Box sx={styles.scrollableContainer}>
        {/* Main Deliveries */}
        {deliveries.map((delivery) => (
          <CargoGroup title={`[${delivery.type}] ${delivery.description}`} totalWeight={delivery.totalWeight} cargos={delivery.cargos} onSelectCargo={onSelectCargo} waveColor="blue" />
        ))}
        {/* Lost Cargo */}
        <CargoGroup title="Lost Cargo" totalWeight={lostCargos.reduce((acc, curr) => acc + curr.weight, 0)} cargos={lostCargos} onSelectCargo={onSelectCargo} waveColor="green" />
      </Box>
    </Box>
  )
}

export default CargoSidebar
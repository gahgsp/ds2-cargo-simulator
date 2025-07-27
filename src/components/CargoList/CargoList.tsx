import { Box } from "@mui/material";
import type { Cargo } from "../../interfaces";
import CargoItem from "../CargoItem/CargoItem";

interface CargoListProps {
  cargos: Cargo[]
  onSelectCargo: (selectedCargo: Cargo) => void
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
}

const CargoList = ({ cargos, onSelectCargo }: CargoListProps) => {
  return (
    <Box sx={styles.container}>
      {cargos.map((cargo) => (
        <CargoItem cargo={cargo} onSelectCargo={onSelectCargo} />
      ))}
    </Box>
  )
}

export default CargoList
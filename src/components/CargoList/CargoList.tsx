import { Box } from "@mui/material";
import type { Cargo } from "../../interfaces";
import CargoItem from "../CargoItem/CargoItem";

interface CargoListProps {
  cargos: Cargo[]
  onSelectCargo: (selectedCargo: Cargo) => void
  waveColor: 'blue' | 'green'
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

const CargoList = ({ cargos, onSelectCargo, waveColor }: CargoListProps) => {
  return (
    <Box sx={styles.container}>
      {cargos.map((cargo) => (
        <CargoItem cargo={cargo} onSelectCargo={onSelectCargo} waveColor={waveColor} />
      ))}
    </Box>
  )
}

export default CargoList
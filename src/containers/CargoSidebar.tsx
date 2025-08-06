import { Box } from "@mui/material";
import CargoGroup from "../components/CargoGroup/CargoGroup";
import CargoHeader from "../components/CargoHeader/CargoHeader";
import type { Cargo, Delivery } from "../interfaces";
import { useEffect, useMemo, useRef } from "react";
import { useAudioEffect } from "../hooks/useAudioEffect";

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
    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#969ea2',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#969ea2',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  }
}

const CargoSidebar = ({ deliveries, lostCargos, onSelectCargo }: CargoSidebarProps) => {
  const playAudioEffect = useAudioEffect('/sounds/effect1.mp3')

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) {
      return
    }

    const handleOnScroll = () => {
      playAudioEffect()
    }

    element.addEventListener('scroll', handleOnScroll)
    return () => element.removeEventListener('scroll', handleOnScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalCargoCount = useMemo(() => deliveries.reduce((sum, delivery) => sum + delivery.cargos.length, 0) +
    lostCargos.length, [deliveries, lostCargos.length])

  return (
    <Box sx={styles.container}>
      <CargoHeader amountOfCargos={totalCargoCount} />
      <Box ref={scrollRef} sx={styles.scrollableContainer}>
        {/* Main Deliveries */}
        {deliveries.map((delivery) => (
          <CargoGroup key={delivery.description} title={`[${delivery.type}] ${delivery.description}`} totalWeight={delivery.totalWeight} cargos={delivery.cargos} onSelectCargo={onSelectCargo} waveColor="blue" />
        ))}
        {/* Lost Cargo */}
        <CargoGroup title="Lost Cargo" totalWeight={lostCargos.reduce((acc, curr) => acc + curr.weight, 0)} cargos={lostCargos} onSelectCargo={onSelectCargo} waveColor="green" />
      </Box>
    </Box>
  )
}

export default CargoSidebar
import { Box, Typography } from "@mui/material"
import CalendarViewWeekOutlinedIcon from '@mui/icons-material/CalendarViewWeekOutlined';

interface CargoHeaderProps {
  amountOfCargos: number
}

const styles = {
  container: {
    marginBottom: '1rem',
    color: 'white',
    paddingRight: '16px',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    paddingLeft: '16px',
    marginTop: '4px',
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: '#6a79ab'
  },
  iconContainer: {
    height: '32px',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: '4px',
    borderBottomRightRadius: '4px'
  },
  icon: {
    transform: 'rotate(90deg)',
    marginLeft: '4px'
  },
  informationHeader: {
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    borderLeft: '2px solid #485054'
  },
  subtitle: {
    height: '32px',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    paddingLeft: '16px',
    paddingTop: '4px',
    clipPath: 'polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)',
  },
  amount: {
    width: '80px',
    height: '32px',
    backgroundColor: '#485054',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: '8px',
    clipPath: 'polygon(16px 0, 100% 0, 100% 100%, 0 100%)',
  }
}

const CargoHeader = ({ amountOfCargos }: CargoHeaderProps) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h3" sx={styles.title}>Cargo Pick-Up</Typography>
      <Box sx={styles.informationContainer}>
        <Box sx={styles.iconContainer}>
          <CalendarViewWeekOutlinedIcon sx={styles.icon} />
        </Box>
        <Box style={styles.informationHeader}>
          <Box style={styles.subtitle}>
            <Typography component="div">Cargo Shelf</Typography>
          </Box>
          <Box style={styles.amount}>
            <Typography component="div">x{amountOfCargos}</Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default CargoHeader
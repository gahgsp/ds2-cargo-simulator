import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
import { Box } from "@mui/material";

const styles = {
  container: {
    backgroundColor: '#3d71aa',
    color: 'white',
    width: '32px',
    height: '32px',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    transform: 'rotate(180deg)'
  }
}

const CargoIcon = () => {
  return (
    <Box sx={styles.container}>
      <DetailsOutlinedIcon sx={styles.icon} />
    </Box>
  )
}

export default CargoIcon
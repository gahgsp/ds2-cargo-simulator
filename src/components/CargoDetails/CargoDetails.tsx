import { Avatar, Box, Grid, LinearProgress, Typography } from "@mui/material"
import AssignmentIcon from '@mui/icons-material/Assignment';

interface CargoDetailsProps {
  cargo: any
}

const CargoDetails = ({ cargo }: CargoDetailsProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', position: 'fixed', bottom: 30 }}>
      <Typography>{cargo.title}</Typography>
      <Grid container sx={{ display: 'flex', flexDirection: 'row', px: '24px' }}>
        <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={6}>
          <Avatar variant="square">
            <AssignmentIcon />
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: '0.85rem' }}>Container Damage</Typography>
            <LinearProgress variant="determinate" value={100} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.85rem' }}>Contents Damage</Typography>
            <LinearProgress variant="determinate" value={100} />
          </Box>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={6}>
          <Typography sx={{ fontSize: '0.85rem' }}>Standard Order Delivery Cargo</Typography>
          <Typography sx={{ fontSize: '0.85rem' }}>Villa Libre</Typography>
          <Typography sx={{ fontSize: '0.5rem' }}>{cargo.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CargoDetails
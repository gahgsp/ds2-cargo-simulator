import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { Box, Divider, Grid, LinearProgress, Typography } from "@mui/material";
import type { Cargo } from "../../interfaces";
import CargoIcon from "../CargoIcon/CargoIcon";

interface CargoDetailsProps {
  cargo: Cargo
}

const CargoDetails = ({ cargo }: CargoDetailsProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: 10, zIndex: 999, backgroundColor: 'rgba(61, 113, 170, 0.2)', color: 'white' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CargoIcon />
        <Typography sx={{ marginLeft: '8px' }}>{cargo.title}</Typography>
      </Box>
      <Grid container sx={{ display: 'flex', flexDirection: 'row', px: '24px' }}>
        <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={4}>
          <Box sx={{ height: '104px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle,rgba(0, 123, 255, 0.4) 0%, rgba(0, 123, 255, 0.3) 20%, transparent 40%)' }}>
            <img width="100" height="50" style={{ opacity: 0.6 }} srcSet={`src/assets/fish-cargo.png?w=248&fit=crop&auto=format&dpr=2 2x`} src={`src/assets/fish-cargo.png?w=248&fit=crop&auto=format`} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{
              backgroundColor: 'transparent',
              color: 'white',
              width: '32px',
              height: '32px',
              fontSize: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <FilterNoneOutlinedIcon />
            </Box>
            <Box sx={{ display: 'flex', flexGrow: '1', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '0.85rem' }}>Container Damage</Typography>
              <LinearProgress variant="determinate" value={100} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{
              backgroundColor: 'transparent',
              color: 'white',
              width: '32px',
              height: '32px',
              fontSize: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ViewInArOutlinedIcon />
            </Box>
            <Box sx={{ display: 'flex', flexGrow: '1', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '0.85rem' }}>Contents Damage</Typography>
              <LinearProgress variant="determinate" value={100} />
            </Box>
          </Box>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '16px', flexGrow: 1 }} size={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '32px' }}>
            <CargoIcon />
            <Typography sx={{ fontSize: '0.85rem', marginLeft: '8px' }}>Standard Order Delivery Cargo</Typography>
          </Box>
          <Divider sx={{ backgroundColor: '#6a7886', height: '1px', my: '4px' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', height: '32px' }}>
            <Box sx={{
              backgroundColor: 'transparent',
              color: 'white',
              width: '32px',
              height: '32px',
              fontSize: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <MarkunreadMailboxOutlinedIcon />
            </Box>
            <Typography sx={{ fontSize: '0.85rem', marginLeft: '8px' }}>Villa Libre</Typography>
          </Box>
          <Divider sx={{ backgroundColor: '#6a7886', height: '1px', my: '4px' }} />
          <Typography sx={{ fontSize: '0.85rem' }}>{cargo.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CargoDetails
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { Box, Divider, Grid, LinearProgress, Typography } from "@mui/material";
import type { Cargo } from "../../interfaces";
import CargoIcon from "../CargoIcon/CargoIcon";

interface CargoDetailsProps {
  cargo: Cargo
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 10,
    zIndex: 999,
    backgroundColor: 'rgba(61, 113, 170, 0.2)',
    color: 'white',
    p: '8px'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginLeft: '8px'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    px: '24px'
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'column'
  },
  photoContainer: {
    height: '104px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'radial-gradient(rgba(0, 123, 255, 0.2) 10%, rgba(0, 123, 255, 0.1) 50%, transparent 80%)',
    backgroundSize: '100% 100%', // stretches to cover full box
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  photo: {
    opacity: 0.6
  },
  damageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '32px',
    height: '32px',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressContainer: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column'
  },
  damageTitle: {
    fontSize: '0.85rem'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '16px',
    flexGrow: 1
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
  },
  highlightTitle: {
    fontSize: '0.85rem',
    marginLeft: '8px',
    paddingTop: '8px'
  },
  divider: {
    backgroundColor: '#6a7886',
    height: '1px',
    my: '4px'
  },
  description: {
    fontSize: '0.85rem'
  }
}

const CargoDetails = ({ cargo }: CargoDetailsProps) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <CargoIcon />
        <Typography sx={styles.title}>{cargo.title}</Typography>
      </Box>
      <Grid container sx={styles.details}>
        <Grid sx={styles.leftSide} size={4}>
          <Box sx={styles.photoContainer}>
            <img width="100" height="50" style={styles.photo} srcSet={`${cargo.image}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`src/assets/fish-cargo.png?w=248&fit=crop&auto=format`} />
          </Box>
          <Box sx={styles.damageContainer}>
            <Box sx={styles.icon}>
              <FilterNoneOutlinedIcon />
            </Box>
            <Box sx={styles.progressContainer}>
              <Typography sx={styles.damageTitle}>Container Damage</Typography>
              <LinearProgress variant="determinate" value={100} />
            </Box>
          </Box>
          <Box sx={styles.damageContainer}>
            <Box sx={styles.icon}>
              <ViewInArOutlinedIcon />
            </Box>
            <Box sx={styles.progressContainer}>
              <Typography sx={styles.damageTitle}>Contents Damage</Typography>
              <LinearProgress variant="determinate" value={100} />
            </Box>
          </Box>
        </Grid>
        <Grid sx={styles.rightSide} size={8}>
          <Box sx={styles.iconContainer}>
            <CargoIcon />
            <Typography sx={styles.highlightTitle}>Standard Order Delivery Cargo</Typography>
          </Box>
          <Divider sx={styles.divider} />
          <Box sx={styles.iconContainer}>
            <Box sx={styles.icon}>
              <MarkunreadMailboxOutlinedIcon />
            </Box>
            <Typography sx={styles.highlightTitle}>{cargo.deliveryTo}</Typography>
          </Box>
          <Divider sx={styles.divider} />
          <Typography sx={styles.description}>{cargo.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CargoDetails
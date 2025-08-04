import { Box } from "@mui/material";
import type { PropsWithChildren } from 'react';

interface IconContainerProps extends PropsWithChildren {
  variant?: 'light' | 'dark'
}

const styles = {
  container: (variant: 'light' | 'dark') => ({
    backgroundColor: variant === 'light' ? 'rgba(61, 113, 170, 0.2)' : 'rgba(61, 113, 170, 1)',
    color: 'white',
    width: '32px',
    height: '32px',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }),
}

const IconContainer = ({ variant = 'dark', children }: IconContainerProps) => {
  return (
    <Box sx={styles.container(variant)}>
      {children}
    </Box>
  )
}

export default IconContainer
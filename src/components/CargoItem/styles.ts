import { keyframes } from '@emotion/react';

const waveScroll = keyframes`
  0% { background-position-x: 0; }
  100% { background-position-x: 500px; }
`;

export const makeCargoItemStyles = ({ waveColor }: { waveColor: 'blue' | 'green' }) => {
  const colorVariants = {
    blue: {
      gradient: `
        rgba(0, 183, 255, 0.4) 6px,
        rgba(0, 140, 255, 0.6) 3px,
        rgba(0, 80, 200, 0.2) 5px,
      `,
      stroke: '00b7ff',
    },
    green: {
      gradient: `
        rgba(0, 200, 130, 0.4) 6px,
        rgba(0, 160, 120, 0.6) 3px,
        rgba(0, 100, 80, 0.2) 5px,
      `,
      stroke: '00c882',
    },
  };

  const { gradient, stroke } = colorVariants[waveColor];

  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    leftSide: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        transform: 'translateY(-50%)',
        top: '50%',
        left: 0,
        width: '100%',
        height: '16px',
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            ${gradient}
            transparent 1px
          ),
          url("data:image/svg+xml,%3Csvg width='200' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 Q 25 0, 50 6 T 100 6 T 150 6 T 200 6' fill='none' stroke='%23${stroke}' stroke-width='1.5'/%3E%3C/svg%3E")
        `,
        backgroundRepeat: 'repeat-x',
        animation: `${waveScroll} 16s linear infinite`,
        filter: 'blur(1px)',
        opacity: 1,
        zIndex: -1,
        pointerEvents: 'none',
      },
    },
    checkbox: {
      paddingLeft: '4px'
    },
    title: {
      color: 'white',
      fontSize: '0.85rem',
      px: '8px'
    },
    rightSide: {
      display: 'flex',
      alignItems: 'center'
    },
    size: {
      marginRight: '48px',
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
    },
    weight: {
      color: 'white'
    },
  };
};
import { Box, Typography } from "@mui/material"

const styles = {
    container: {
        marginBottom: '2rem',
        color: 'white'
    },
    informationHeader: {
        height: '30px',
        display: 'flex',
        alignItems: 'center'
    },
    subtitle: {
        height: '30px',
        backgroundColor: '#6a79ab',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center'
    },
    amount: {
        width: '80px',
        height: '30px',
        backgroundColor: '#485054',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#4f5869',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
}

const CargoHeader = () => {
    return (
        <Box sx={styles.container}>
            <Typography variant="h2">Cargo Pick-Up</Typography>
            <Box style={styles.informationHeader}>
                <Box style={styles.subtitle}>
                    <Typography variant="h5">Cargo Shelf</Typography>
                </Box>
                <Box style={styles.amount}>
                    <Typography variant="h5">x34</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CargoHeader
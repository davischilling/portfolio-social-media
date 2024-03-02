import { Box, Typography, useTheme } from '@mui/material'

const UnauthNavbar = () => {
  const theme = useTheme()

  return (
    <Box
      width='100%'
      backgroundColor={theme.palette.background.alt}
      padding='1rem 6%'
      textAlign='center'
    >
      <Typography fontWeight='bold' fontSize='32px' color='primary'>
        Social App
      </Typography>
    </Box>
  )
}

export default UnauthNavbar

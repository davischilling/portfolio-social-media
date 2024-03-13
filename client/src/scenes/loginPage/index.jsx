import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from 'components/Form'
import UnauthNavbar from 'components/UnauthNavbar'

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)')

  return (
    <Box>
      <UnauthNavbar />

      <Box
        width={isNonMobileScreen ? '50%' : '93%'}
        p='2rem'
        m='2rem auto'
        borderRadius='1.5rem'
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
          Welcome to Social App, the social media platform for everyone.
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage

import React from 'react'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 'auto',
        bgcolor: 'rgba(255,111,0,0.85)',
        color: 'white',
        width: '100%',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; 2026 Sistema de Carrito de Compras. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  )
}
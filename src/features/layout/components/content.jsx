import React from 'react'
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
  Grid,
  CardActions
} from '@mui/material'


export const Content = () => {

  const bannerUrl =
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f4b4e3a3c6a6c6a3a9b6d2f1e7f9a2b'

  return (
    <Box sx={{ m: 0, p: 0, overflow: 'hidden' }}>

      {/* Hero / Banner */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100vw',
          height: { xs: '50vh', sm: '60vh', md: '75vh' },
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgba(0,0,0,0.45)',
            color: '#fff',
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            maxWidth: 1100,
            mx: 2
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: '700', lineHeight: 1.1 }}
          >
            Productos De Calidad
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.95 }}>
            Presenta las funciones clave: gestión de productos, control de stock y búsqueda con un diseño atractivo.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, borderRadius: '20px' }}
          >
            Ver productos
          </Button>
        </Box>
      </Box>

      {/* Bienvenida */}
      <Box
        sx={{
          p: 4,
          backgroundColor: 'background.default',
          color: 'text.primary',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Bienvenido
        </Typography>

        <Typography>
          La guitarra perfecta para ti.
        </Typography>
      </Box>

      {/* Cartas de productos */}
      <Box sx={{ p: 4, backgroundColor: 'background.default' }}>
        <Grid container spacing={3} justifyContent="center">

          {/* Guitarra acústica */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/guitarra_acustica.jpg"
                alt="Guitarra acústica"
              />
              <CardContent>
                <Typography variant="h6">
                  Guitarra acústica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sonido cálido y clásico, perfecta para principiantes y profesionales.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Guitarra eléctrica */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/guitarra_electrica.jpg"
                alt="Guitarra eléctrica"
              />
              <CardContent>
                <Typography variant="h6">
                  Guitarra eléctrica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Diseñada para rendimiento en escenario con electrónica integrada.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Guitarra clásica */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/guitarra_clasica.jpg"
                alt="Guitarra clásica"
              />
              <CardContent>
                <Typography variant="h6">
                  Guitarra clásica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Excelente proyección y comodidad para interpretación clásica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Bajo acústico */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/bajo.jpg"
                alt="Bajo "
              />
              <CardContent>
                <Typography variant="h6">
                  Bajo acústico
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Graves profundos y cuerpo equilibrado para estudios y presentaciones.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Box>

    </Box>
  )
}

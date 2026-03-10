import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMall from '@mui/icons-material/LocalMall';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useContext } from 'react';
import { Badge } from '@mui/material';
import { ShopContext } from '../../view/hooks/useContext1';

import { AppBar, Button, Stack, Typography, Box, Toolbar, IconButton, Drawer } from '@mui/material'

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { favorites, cart } = useContext(ShopContext);

    const navLinks = [
        { to: '/', icon: <HomeIcon />, label: 'Inicio' },
        { to: '/articles', icon: <NewspaperIcon />, label: 'Articulos' },
        { to: '/offers', icon: <LocalOfferIcon />, label: 'Ofertas' },
        { to: '/myaccount', icon: <AccountBoxIcon />, label: 'Mi Cuenta' },
        {
            to: '/myfavorites',
            icon: (
                <Badge badgeContent={favorites.length} color="secondary">
                    <BookmarkIcon />
                </Badge>
            ),
            label: 'Mis Favoritos'
        },
        { to: '/mybuys', icon: <LocalMall />, label: 'Mis Compras' },
        {
            to: '/cart',
            icon: (
                <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            ),
            label: 'Carrito'
        },
    ];


    const drawerContent = (
        <Stack direction="column" sx={{ p: 2 }}>
            {navLinks.map((link) => (
                <Button
                    key={link.to}
                    component={NavLink}
                    to={link.to}
                    startIcon={link.icon}
                    sx={{
                        color: '#ff6f00',
                        justifyContent: 'flex-start',
                        mb: 1,
                        '&.active': {
                            fontWeight: 'bold'
                        }
                    }}
                    onClick={() => setMobileOpen(false)}
                >
                    {link.label}
                </Button>
            ))}
        </Stack>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                background: 'linear-gradient(to right, #ff6f00 0%, #d32f2f 100%)',
                boxShadow: 3,
                zIndex: 1300,
            }}
        >
            {/* Main Toolbar */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* left side: logo + navigation (desktop) */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* logo image */}
                    <Box
                        component={NavLink}
                        to="/"
                        sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <Box
                            component="img"
                            src="/img/logo.png"
                            alt="Moreloshop"
                            sx={{ height: 40 }}
                        />
                    </Box>

                    {/* desktop links */}
                    <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navLinks.map((link) => (
                            <Button
                                key={link.to}
                                component={NavLink}
                                to={link.to}
                                startIcon={link.icon}
                                sx={{
                                    color: 'white',
                                    fontSize: { sm: '0.75rem', md: '0.875rem' },
                                    padding: { sm: '4px 8px', md: '8px 12px' },
                                    whiteSpace: 'nowrap',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Stack>
                </Box>

                {/* right side: search & cart + mobile controls */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {/* desktop search form */}
                    <Box
                        component="form"
                        role="search"
                        sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}
                    >
                        <input
                            type="search"
                            placeholder='Buscar...'
                            style={{
                                padding: '6px 10px',
                                borderRadius: '20px',
                                border: '1px solid #ff6f00',
                                outline: 'none',
                                backgroundColor: '#fff',
                                fontSize: '0.875rem',
                                minWidth: '150px'
                            }}
                        />
                        <Button
                            variant="contained"
                            color='primary'
                            startIcon={<SearchIcon />}
                            sx={{
                                borderRadius: '20px',
                                fontSize: { sm: '0.65rem', md: '0.875rem' },
                                padding: { sm: '4px 8px', md: '8px 12px' }
                            }}
                        >
                            Buscar
                        </Button>
                    </Box>
                    {/* combined items counter */}
                    {favorites.length + cart.length > 0 && (
                        <Typography
                            variant="body2"
                            sx={{ color: 'white', ml: 2, display: { xs: 'none', md: 'block' } }}
                        >
                            Total de artículos: {favorites.length + cart.length}
                        </Typography>
                    )}

                    {/* desktop cart icon */}
                    <IconButton
                        component={NavLink}
                        to="/cart"
                        sx={{ color: 'white', display: { xs: 'none', md: 'flex' } }}
                    >
                        <Badge badgeContent={cart.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>

                    {/* mobile-only icons */}
                    <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        component={NavLink}
                        to="/cart"
                        sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
                    >
                        <Badge badgeContent={cart.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
                        onClick={handleDrawerToggle}
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
            </Toolbar>

            {/* Drawer para Mobile */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'flex', md: 'none' } }}
            >
                {drawerContent}
            </Drawer>
        </AppBar>
    )
}
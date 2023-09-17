import React from 'react'
import { ContactWrapper, NavbarWrapper } from './style'
import { Button, Grid, Typography } from '@mui/material'

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Typography variant={'h4'} noWrap>Rambs Dev</Typography>
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button variant='text' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>Home</Button>
                    <Button variant='text' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>About</Button>
                    <Button variant='text' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>Potfolio</Button>
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ContactWrapper>
                        <Button variant='outlined'>Contact</Button>
                    </ContactWrapper>
                </Grid>
            </Grid>
        </NavbarWrapper>
    )
}

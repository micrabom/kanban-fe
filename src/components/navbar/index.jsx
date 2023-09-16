import React from 'react'
import { ContactWrapper, NavbarWrapper } from './style'
import { Button, Grid, Typography } from '@mui/material'

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Grid container>
                <Grid item xs={2}>
                    <Typography variant={'h4'} noWrap>Rambs Dev</Typography>
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Typography variant='h5' sx={{ margin: '0 .7rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>Home</Typography>
                    <Typography variant='h5' sx={{ margin: '0 .7rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>About</Typography>
                    <Typography variant='h5' sx={{ margin: '0 .7rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>Potfolio</Typography>
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ContactWrapper>
                        <Button variant='outlined'><Typography variant='h6'>Contact</Typography></Button>
                    </ContactWrapper>
                </Grid>
            </Grid>
        </NavbarWrapper>
    )
}

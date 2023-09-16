import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const PaperWrapper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    height: 'calc(25vh - 20px)',
    color: 'white',
    overflow: 'hidden',
    boxShadow: 'none',
}));

const NavbarWrapper = styled('div')(({ theme }) => ({
    margin: '0 10px',
    width: '100%',
    /* outline: '1px solid red', */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
}));

const ContactWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
}));

export {
    NavbarWrapper,
    PaperWrapper,
    ContactWrapper,
}

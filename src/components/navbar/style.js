import { styled } from '@mui/material/styles';
import { Paper, Button } from '@mui/material';


// Create a custom theme


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
    margin: '0 15px',
    width: '100%',
    /* outline: '1px solid red', */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
}));

const ContactWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
}));
const StyledButton = styled(Button)(({ theme }) => ({
    // Add your button styles here
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export {
    NavbarWrapper,
    PaperWrapper,
    ContactWrapper,
    StyledButton,
}

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Trend = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    height: 'calc(25vh - 20px)',
    color: 'white',
    overflow: 'hidden',
    boxShadow: 'none',
}));

const HomePageWrapper = styled('div')(({ theme }) => ({
    /* outline: '1px solid red', */
    width: '100%',
    height: '100vh',
    ...theme.mixins.toolbar,
}));

export {
    HomePageWrapper,
}

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

const HeaderWrapper = styled('div')(({ theme }) => ({
    /* padding:'10px', */
    width: '100%',
    // outline: '1px solid blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
}));

export {
    HeaderWrapper,
}

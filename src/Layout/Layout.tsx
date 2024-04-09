import Container from '@mui/material/Container/Container';
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Items from '../Lib/Card/Item';
import Stack from '@mui/material/Stack';
import Navbar from '../Lib/Menu/Navbar';
import ListItems from '../Lib/List/ListItems';

const Wrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Layout() {
    const [count, setCount] = useState(0)
    return (
        <>
            {/* <Grid lg={12}>
                <Navbar />
            </Grid> */}
            <Grid lg={12}>
                <ListItems />
            </Grid>
        </>
    )
}

export default Layout;

import Container from '@mui/material/Container/Container';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack'
import Item from '../Card/Item';

const Wrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function ListItems() {
    const [data, setData] = useState([]) as any[];

    useEffect(() => {
        const url = "https://data.cityofnewyork.us/resource/kpav-sd4t.json";
        fetch(url).then(response => {
            response.json().then(dataItems => {
                let Items: any[] = [];
                let ItemsSubgroup: any[] = [];
                dataItems?.forEach((element: any, index: number) => {
                    const condition = index + 1;
                    if (condition % 3 === 0) {
                        ItemsSubgroup.push(element);
                        Items = [...Items, ItemsSubgroup];
                        ItemsSubgroup = [];
                    } else {
                        ItemsSubgroup.push(element);
                    }

                    if (condition === dataItems?.length) {
                        setData(Items);
                    }
                });
            });

        })
            .catch(error => console.error('Error:', error));

    }, []);
    return (
        <>
            {
                data?.map((dataItems: any[], i: number) =>
                    (
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Wrapper>
                                <Item props={dataItems[0]}></Item>
                            </Wrapper>
                            <Wrapper> <Item props={dataItems[1]}></Item></Wrapper>
                            <Wrapper> <Item props={dataItems[2]}></Item></Wrapper>
                        </Stack>
                    )
                )
            }
        </>
    )
}

export default ListItems;

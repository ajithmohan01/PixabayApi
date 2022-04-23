import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Box
                component="span"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={50}
                fontSize={34}
            ></Box>
            <Body/>
        </div>
    )
}

export default Home

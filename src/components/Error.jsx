import React from 'react'
// import * as react from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    AbsoluteCenter
  } from '@chakra-ui/react'


const Error = () => {
    return (

        <Box position='relative' h='85vh'>
            <AbsoluteCenter p='4' color='white' axis='both'>
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle color={"black"} fontSize={"18"} >Oops! Something went wrong while fetching data. Please try again later or contact support.</AlertTitle> 
                </Alert>
            </AbsoluteCenter>
        </Box>



    )
}

export default Error
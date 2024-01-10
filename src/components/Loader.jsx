import React from 'react'
import * as react from '@chakra-ui/react'

const Loader = () => {
  return (


    <react.Box position='relative' h='85vh'>
      <react.AbsoluteCenter p='4' color='white' axis='both'>
        <react.Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='#09757a'
          size='xl'
        />
      </react.AbsoluteCenter>
    </react.Box>


  )
}

export default Loader
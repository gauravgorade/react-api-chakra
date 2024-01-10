
import React from 'react'
import { Button, Container, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blue.800"}  >
      <Container maxW={"container.xl"}  >
        <Button variant={"unstyled"} color={"white"} fontSize={"lg"} px={3}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} fontSize={"lg"} px={3}>
          <Link to="/coins">Coins</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} fontSize={"lg"} px={3}>
          <a  target="_blank" rel="noreferrer" href="https://github.com/gauravgorade">❤️github.com/gauravgorade</a>
        </Button>
        
      </Container>
    </HStack>
  )
}

export default Header
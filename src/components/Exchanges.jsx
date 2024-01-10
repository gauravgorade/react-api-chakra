import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from "../index"
import { Container, HStack, VStack, Image, Heading, Text } from "@chakra-ui/react"
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchExchanges();
   
  }, []);

  

  if(error) return <Error/>


  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> : <>

        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((i) => (
            <Exchangecard
              key={i.id}
              name={i.name}
              image={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </HStack>
      </>
      }

    </Container>
  )

}


const Exchangecard = ({ name, image, rank, url }) => {

  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <VStack  w={"52"}  p={"8"}  shadow='lg'  rounded='md'   transition={"all 0.3s"} m={"4"} >
        <Image src={image} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
        <Heading size={"md"} noOfLines={1} >{rank}</Heading>
        <Text fontWeight={"bold"}>{name}</Text>
      </VStack>
    </a>
  )


}

export default Exchanges
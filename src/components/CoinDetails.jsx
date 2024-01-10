import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from "./Loader";
import Error from "./Error";
import { server } from "../index"
import { Container, HStack, VStack, Image, Select, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Flex, Box, } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';


const CoinDetails = () => {


  const storedCurrency = localStorage.getItem('selectedCurrency') || 'inr';

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState(storedCurrency);

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"


  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchCoin();

  }, [currency, id]);


  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setCurrency(newCurrency);
    localStorage.setItem('selectedCurrency', newCurrency);
    setLoading(true);
  };


  if (error) return <Error />


  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> : <>
        <HStack wrap={'wrap'} p={'8'} alignItems={"flex-start"} onChange={handleCurrencyChange}>
          <Select placeholder="Select Currency" size="md" value={currency} >
            <option value="inr">₹ INR</option>
            <option value="eur">€ EUR</option>
            <option value="usd">$ USD</option>
          </Select>
        </HStack>

        <Flex  boxShadow='xs' p='8' rounded='md' bg='white' maxW={"container.xl"}>

          <Box flex='1' >
            <Image boxShadow='xs'  rounded='md' src={coin.image.large} />
          </Box>
          <Box flex='2' textColor={"black"}>
            <Stat>
              <Badge colorScheme='red'>Market Cap Rank {`#${coin.market_cap_rank}`}</Badge>
              <StatLabel fontSize={"50"}>{coin.name}</StatLabel>
              <StatNumber fontSize={"50"}>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
              <StatHelpText fontSize={"20"}>
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? 'increase' : 'decrease'} />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
              {/* <Text fontSize={"large"} objectFit={"contain"}>Last Updated On {Date(coin.last_updated).split("G")[0]}</Text> */}
            </Stat>
          </Box>
        </Flex>






      </>
      }

    </Container>
  )
}




export default CoinDetails
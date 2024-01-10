import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from "../index"
import { Container, HStack, VStack, Image, Heading, Text, Select } from "@chakra-ui/react"
import Loader from "./Loader";
import Error from "./Error";
import { Link } from 'react-router-dom';
const Coins = () => {


  const storedCurrency = localStorage.getItem('selectedCurrency') || 'inr';

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState(storedCurrency);

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"





  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchCoins();

  }, [currency]);



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





        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinsCard
              key={i.id}
              id={i.id}
              name={i.name}
              image={i.image}
              price={i.current_price}
              currencySymbol={currencySymbol}

            />
          ))}
        </HStack>
      </>
      }

    </Container>
  )

}


const CoinsCard = ({ id, name, image, currencySymbol, price }) => {

  return (
    <Link to={`${id}`} >
      <VStack w={"52"} p={"8"} shadow='lg' rounded='md' bg='white' transition={"all 0.3s"} m={"4"}  >
        <Image src={image} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
        <Heading size={"md"} noOfLines={1} >{name}</Heading>
        <Text fontWeight={"bold"}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  )


}

export default Coins
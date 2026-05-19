
import { useLoaderData } from "react-router";
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from "react-router";

export const loader=async()=>{
  const bestelling= await fetch("http://localhost:3000/bestelling");
  
  

  return {bestelling: await bestelling.json()};

  

};


export const Bestelling = () => {

  const {bestelling}=useLoaderData();

  const [ordernaam, setOrdernaam]=useState(bestelling.ingredienten);
  const [orderbedrag, setOrderbedrag]=useState(bestelling.bedrag);
  const navigate=useNavigate();

  const clearBestelling= async()=>{
    
    

    
      await fetch(`http://localhost:3000/bestelling`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({
          ingredienten: "",         
            
          bedrag: 0,
          
        
        })

      });

      setOrdernaam("");
      setOrderbedrag(0);
  }
  
  const plaatsBestelling=async(order)=>{
    const response= await fetch("http://localhost:3000/bestellingen",{
            method: "POST",
            body: JSON.stringify(order),
            headers: {"Content-Type": "application/json;charset=utf-8"},
        });

                order.id= (await response.json()).id;

  }

  const handleBestelling=async()=>{
    plaatsBestelling({ordernaam, orderbedrag})

    fetch(`http://localhost:3000/bestelling`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({
          ingredienten: "",         
            
          bedrag: 0,
          
        
        })

    });

    navigate('/');

    
  }
  

  

  return (
    
        <>
          <Flex h='fit-content' w='90%' flexDir= {'column'} mb={2} padding={10}>

            <Heading>Uw bestelling</Heading>

            <Flex gap={4} ml={4} width={'100%'} flexDir={'column'} flexWrap={'wrap'} alignContent={'flex-start'} margin={2}>
              <Text w='fit-content'>{ordernaam}</Text>
              <Text>{orderbedrag}</Text>
              <Button onClick={() => clearBestelling()}>Clear</Button>
              <Button onClick={() => handleBestelling()}>plaats bestelling</Button>
              

              
            </Flex>
          </Flex>
            
          
          
        </>
      )
      
  
};
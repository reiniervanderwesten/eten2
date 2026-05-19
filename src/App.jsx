
import { useLoaderData } from "react-router";

import { Heading, Flex, Stack, Text, Button } from '@chakra-ui/react';
import { useState} from "react";





export const loader=async({params})=>{
  const hamburgers= await fetch("http://localhost:3000/hamburgers");
  const bijgerechten= await fetch("http://localhost:3000/bijgerechten");
  const frisdranken=await fetch("http://localhost:3000/frisdranken");
  const hamburger=await fetch(`http://localhost:3000/frisdranken/${params.HamburgerId}`)
  const bestelling= await fetch("http://localhost:3000/bestelling");
  
  
  

  return {
    hamburgers: await hamburgers.json(), 
    bijgerechten: await bijgerechten.json(), 
    frisdranken: await frisdranken.json(),
    hamburger: await hamburger.json(),
    bestelling: await bestelling.json()
    
    
  };

  

};






export const App = () => {

  const { hamburgers}= useLoaderData();
  const {bijgerechten}= useLoaderData();
  const {frisdranken}=useLoaderData();
  const {hamburger}=useLoaderData();
  const {bestelling}=useLoaderData();

  

  const handleClick= (leuk, leuker)=>{
    
    

    
      fetch(`http://localhost:3000/bestelling`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({
          ingredienten: bestelling.ingredienten + " -" + leuk,         
            
          bedrag: bestelling.bedrag + leuker,
          
        
        })

      });

      

    

    

    
  }
  
  

  
  

  

  return (
    
    <Flex h='fit-content' w='90%' flexDir= {'column'} mb={2} padding={10} bg={'green.200'}>
        <Heading m={4}>Gerechten</Heading>
              
      <Flex gap={4} ml={4} width={'100%'} flexDir={'row'} flexWrap={'wrap'} alignContent={'flex-start'} margin={2}>
        {hamburgers.map((hamburger, {index})=>(
          <Stack key= {hamburger.id} padding={3} w={250} borderWidth='2px' borderColor={'red.200'} >
                      
                      <Text>{hamburger.naam}</Text>            
                      <Text>{hamburger.prijs}</Text>
                      <Button key={index} onClick={() => handleClick(hamburger.naam, hamburger.prijs)}>toevoegen</Button>
                      
                      
                      
          
                  </Stack>
          

        ))}

      </Flex>  
        
        
        
      <Flex gap={4} ml={4} width={'100%'} flexDir={'row'} flexWrap={'wrap'} alignContent={'flex-start'} margin={2}>
        {bijgerechten.map((bijgerecht, {index})=>(
          <Stack key={bijgerecht.id} padding={3} w={250} borderWidth='2px' borderColor={'red.200'} >
            
            <Text>{bijgerecht.naam}</Text>            
            <Text>{bijgerecht.prijs}</Text>

            <Button key={index} onClick={() => handleClick(bijgerecht.naam, bijgerecht.prijs)}>toevoegen</Button>
            
            
            

          </Stack>

        ))}

      </Flex>
      <Flex gap={4} ml={4} width={'100%'} flexDir={'row'} flexWrap={'wrap'} alignContent={'flex-start'} margin={2}>
        {frisdranken.map((frisdrank, {index})=>(
          <Stack key={frisdrank.id} padding={3} w={250} borderWidth='2px' borderColor={'red.200'} >
            
            <Text>{frisdrank.naam}</Text>            
            <Text>{frisdrank.prijs}</Text>
            <Button key={index} onClick={() => handleClick(frisdrank.naam, frisdrank.prijs)}> toevoegen</Button>
            
            
            

          </Stack>

          

        ))}

      </Flex>
    </Flex>

  )
    
  
}

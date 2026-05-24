
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
          ingredienten: [],         
            
          bedrag: [],
          
        
        })

      });

      setOrdernaam("");
      setOrderbedrag(0);
  }

  const deleteBestelling= (gerecht)=>{
    
    const index=bestelling.ingredienten.indexOf(gerecht);

    if (index>-1){
      bestelling.ingredienten.splice(index,1);
    }


    
    

    
    fetch(`http://localhost:3000/bestelling`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({
          ingredienten: bestelling.ingredienten,
          bedrag:     bestelling.bedrag      
            
          
          
        
        })

    });

      

    

    

    
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
          <Flex h='fit-content' w='90%' flexDir= {'column'} mb={2} padding={10} >

            <Heading>Uw bestelling</Heading>

            <Flex gap={4} ml={4} width={'100%'} flexDir={'column'} flexWrap={'wrap'} alignContent={'flex-start'} margin={2}>
              
              {bestelling.ingredienten.map((ingredient, {index})=>(
          
            
                 <Button key={index} onClick={()=>deleteBestelling(ingredient)}>{ingredient}</Button>
            
            

          

             ))}

              
              
              

              
            </Flex>
            <Button w= 'fit-content' m= {2} onClick={() => clearBestelling()}>Clear</Button>
            <Button w= 'fit-content' m= {2} onClick={() => handleBestelling()}>plaats bestelling</Button>
          </Flex>
            
          
          
        </>
      )
      
  
};
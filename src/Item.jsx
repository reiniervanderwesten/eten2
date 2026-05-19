import React from "react";
import { Heading, Flex, Stack, Text, Button } from '@chakra-ui/react';
import { useState } from "react";

const Item=async(item)=>{

    const hamburgers= await fetch("http://localhost:3000/hamburgers");
    return(
        <Stack padding={3} w={250} borderWidth='2px' borderColor={'red.200'} >
            
            <Text>{item.naam}</Text>            
            <Text>{item.prijs}</Text>
            <Button>toevoegen</Button>
            
            
            

        </Stack>

    )
}

export default Item;
import React from 'react';
import { Link as ReactRouterLink} from 'react-router';
import {Link as ChakraLink, Flex} from '@chakra-ui/react';

export const Navigation = () => {
  return (
    <Flex margin={3} width= {'100%'} flexDir={'row'}>
      
          <ChakraLink  m={4} color= 'red' as={ReactRouterLink}  to="/" >Overzicht</ChakraLink>
        
          <ChakraLink m={4} color= 'red'as={ReactRouterLink} to="/bestelling">Bestelling</ChakraLink>
        
    </Flex>
  );
};

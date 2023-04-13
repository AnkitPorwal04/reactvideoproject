import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'}>

        <Stack direction={["column", "row"]}>

            <VStack alignItems={"stretch"} w={'full'} px={'4'}>
                <Heading size="md" textTransform={"uppercase"} textAlign={['center', 'left']}>
                    Subscribe to get updates...
                </Heading>
                <HStack
                borderBottom={'2px solid white'}
                py={'2'}
                >

                    <Input 
                    placeholder='Enter email here...' 
                    border={'none'} 
                    borderRadius={'none'} 
                    outline={'none'} 
                    focusBorderColor='none'/>
                    <Button 
                    p={'0'}
                    colorScheme='purple'
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack 
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
                <Heading textAlign={'center'} textTransform={"uppercase"}>
                    VIDEO HUB
                </Heading>
                <Text>
                    All rights reserved!
                </Text>
            </VStack>

            <VStack w={'full'}>

                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>

                <Button variant={'link'} colorScheme='WhiteAlpha'>
                    <a target={'blank'} href="https://twitter.com/AnkitPorwal04">Twitter</a>
                </Button>

                <Button variant={'link'} colorScheme='WhiteAlpha'>
                    <a target={'blank'} href="https://github.com/AnkitPorwal04">GitHub</a>
                </Button>

                <Button variant={'link'} colorScheme='WhiteAlpha'>
                    <a target={'blank'} href="https://instagram.com/ankit_porwal04">Instagram</a>
                </Button>

            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer
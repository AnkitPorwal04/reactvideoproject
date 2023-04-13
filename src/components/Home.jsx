import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from"../Assets/1.jpg";
import img2 from"../Assets/2.jpg";
import img3 from"../Assets/3.jpg";
import img4 from"../Assets/4.jpg";
import img5 from"../Assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p:'4',
    size: '3xl',
}

const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading 
            textTransform={"uppercase"} 
            py="2" w={'fit-content'} 
            borderBottom={'2px solid'} 
            m="auto"
            >
                Services
            </Heading>
            
            <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
            >

                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Cum sociis natoque penatibus et magnis dis parturient. Aliquet lectus proin nibh nisl condimentum. Sit amet est placerat in. Consectetur adipiscing elit pellentesque habitant morbi. Hendrerit dolor magna eget est lorem ipsum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. A scelerisque purus semper eget duis. Semper risus in hendrerit gravida rutrum quisque non tellus.uspendisse interdum consectetur libero id. Quisque egestas diam in arcu cursus euismod quis. Nisi est sit amet facilisis magna. Feugiat pretium nibh ipsum consequat nisl. Ac felis donec et odio. Egestas diam in arcu cursus euismod. At consectetur lorem donec massa.
                </Text>

            </Stack>

        </Container>

    </Box>
  )
}

const MyCarousel = () =>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>

        <Box w={'full'} h={'100vh'}>
            <Image src={img1}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2}/>
            <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on console
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img4}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life is Cool
            </Heading>
        </Box>

    </Carousel>
)
export default Home
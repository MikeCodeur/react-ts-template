import * as React from 'react'
import { useHistory } from 'react-router';
import { useAuthStore } from '../commons/store/authStore';
import {  Container,Grid, GridItem ,Text, Flex , Box , Button} from '../components/ui'
export const  Login = () => {
    return (
    <Container>
        <Box>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
            </Grid>
        </Box>
        <Box mt={20}>
            <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                >
                <GridItem rowSpan={2} colSpan={1} bg="tomato" />
                <GridItem colSpan={2} bg="papayawhip" />
                <GridItem colSpan={2} bg="papayawhip" />
                <GridItem colSpan={4} bg="tomato" />
            </Grid>
        </Box>
        <Box>
            <Text variant="h1" >INPUT</Text>
            <Text variant="h2" >INPUT</Text>
            <Text variant="h3" >INPUT</Text>
        </Box>
    </Container>
    
        
    )
}
export default Login;

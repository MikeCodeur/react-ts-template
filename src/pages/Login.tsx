import * as React from 'react'
import { useHistory } from 'react-router';
import { useAuthStore } from '../commons/store/authStore';
import { Grid, Cell, Text, Flex , Box , Button} from '../components/ui'
export const  Login = () => {
    const history = useHistory();
    const { updateAuthStore, isAuth, userLogged } = useAuthStore();
    //Grid Responsive les breacKPoint sont ici dans le theme src/styles/theme.ts
    const grid4 = {
        xs: '12', 
        sm: '12',
        md: '6',
        lg: '4',
        xl: '4',
      };
    return (
        <Box p={5}>
            <Text variant="h1" mb={40}>LOGIN</Text>
            <Text variant="p">
                <ul>
                    <li>Le menu change en fonction des rôles , l'accès aux page est bloqué si pas connecté, </li>
                    <li>Pas de librairie pour les composant j'utilise juste styled component / system.</li>
                    <li>J'ai créer des composants simple dans component/ui</li>
                    <li>J'ai mis les Grid sur le Login ( responsive )</li>
                    <li>Le routage est découpé par roles , les page sont Private ou non.</li>
                    <li>Part de APP.JS pour remonter le circuit.</li>
                    <li>J'ai mis Zustand pour (Gestionnaire d'état) simple.</li>
                </ul>
            </Text>
            <Grid cols={12} gap="20px" mt={20}>
            <Cell x-span={grid4} placeSelf="left">
                <Button 
                    onClick={()=> {
                        updateAuthStore({isAuth:true,roles:['COACH']});
                        history.push('/coach/exemple-A')}
                    }
                >
                    Connexion en tant que COACH
                </Button>
            </Cell>
            <Cell x-span={grid4} placeSelf="left">
                <Button 
                    variant="ghost"
                    onClick={()=> {
                        updateAuthStore({isAuth:true,roles:['STUDENT']});
                        history.push('/student/exemple-B')}
                    }
                >
                    Connexion en tant que STUDENT
                </Button>
            </Cell>
            <Cell x-span={grid4} placeSelf="left">
                <Button 
                    onClick={()=> {
                        updateAuthStore({isAuth:true,roles:['COACH','STUDENT']});
                        history.push('/coach/exemple-A')}
                    }
                >
                    Connexion en tant que COACH ET STUDENT
                </Button>
            </Cell>
            </Grid>
        </Box>
        
    )
}
export default Login;

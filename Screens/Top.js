import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import Contacts from './Contacts';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function Top() {

    const loggedIn = useSelector((state) => state.uname)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    loggedIn.name == null ? <Stack.Screen name="Login" component={Login}
                        options={{
                            headerShown: false,
                        }}
                    /> : <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                }
                <Stack.Screen name="Contacts" component={Contacts} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

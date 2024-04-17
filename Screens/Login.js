import { View, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { userName } from '../Store/unameSlice'
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    const LoginUser = () => {
        dispatch(userName(name))
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Name'
                autoCapitalize="none"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button

                title='Log In'
                onPress={LoginUser}
                color="#128C7E"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'lightgrey',
        margin: 10,
        padding: 8,
        color: 'black',
        fontSize: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login
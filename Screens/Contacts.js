import { View, StyleSheet, Button, FlatList, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { data } from '../Data/Data'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Store/contactSlice';
import { create } from '../Store/groupSlice';

const Contacts = ({ navigation }) => {
    const groupname = useSelector(state => state.gname);
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contact)

    const toHome = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        dispatch(create({ id: randomNumber, name: groupname.name, contacts }))
        navigation.navigate('Home')
    }
    const addContact = (item) => {
        dispatch(add(item));
    }

    const Item = ({ item }) => (
        <Pressable onPress={() => addContact(item)}>
            <View
                style={styles.item}

            >
                <Text style={styles.title}>{item.name} : {item.age}</Text>
            </View>
        </Pressable>
    );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Done"
                    onPress={toHome}
                    color="#128C7E"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 50,
        zIndex: 999, // Higher z-index to ensure it's above other content
    },
});

export default Contacts;
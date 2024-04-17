import React, { useState } from 'react'
import { Button, View, StyleSheet, Text, Modal, Pressable, TextInput, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { groupName } from '../Store/gnameSlice'

const Home = ({ navigation }) => {
    const data = useSelector(state => state.group);
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [modVisible, setModVisible] = useState(false);

    const Item = ({ item }) => (
        <View
            style={styles.item}
        >
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    const createGroup = () => {
        dispatch(groupName(''))
        setModVisible(true)
    }

    const selectContacts = () => {
        dispatch(groupName(name))
        setModVisible(false)
        navigation.navigate('Contacts')
    }
    return (
        <View style={styles.home}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModVisible(!modVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Group Name'
                            autoCapitalize="none"
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                        <View style={styles.modalButtons}>
                            <Pressable
                                onPress={selectContacts}>
                                <Text style={styles.textStyle}>
                                    Select
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() => setModVisible(!modVisible)}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <Text style={styles.text}>
                    Groups
                </Text>
                <Pressable
                    onPress={createGroup}
                >
                    <Text style={styles.btn}>
                        +
                    </Text>
                </Pressable>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            <View style={styles.buttonContainer}>
                <Button
                    title="Add"
                    onPress={createGroup}
                    color="#128C7E"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    input: {
        width: 200,
        height: 55,
        backgroundColor: 'lightgrey',
        margin: 10,
        padding: 8,
        color: 'black',
        fontSize: 15,
    },
    modalButtons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#128C7E'
    },
    home: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: '#128C7E',
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    btn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
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
        zIndex: 999
    },
})

export default Home
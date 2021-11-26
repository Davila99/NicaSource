import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeWorksList = () => {

    const [tareas, setTareas] = useState('')
    const lista = ['pigs', 'goats', 'sheep'];

    const [usuarios, setUsuarios] = useState([])

    const crearTarea = () => {
        const form = {
            "id": 1,
            "tareas": tareas
        }

    }
    const obtenerTareas = () => {

    }
    const eliminarTweet = () => {

    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.constainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Escriba la tarea por hacer"
                    onChangeText={setTareas}
                />
                <Button
                    title="Agregar"
                    onPress={() => crearTarea()}
                />
                {
                    usuarios.map(tweet => (
                        <View key={tweet.id} style={styles.constainer}>
                            <Text>{tweet.tareas}</Text>
                            <View>
                                {/* <Button
                                    title="Eliminar"
                                    onPress={() => eliminarTweet(tweet.id)}
                                /> */}

                            </View>

                        </View>
                    ))
                }
            </View>
            <Text>{ }</Text>

        </View>
    )
}

export default HomeWorksList

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        color: '#034C50',
    },
    constainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 4,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20
    },
    text: {
        fontSize: 20
    }

})

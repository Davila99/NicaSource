import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeWorksList = () => {

    const [tareas, setTareas] = useState('')


    const lista = ['pigs', 'goats', 'sheep'];

    const crearTarea = () => {
        lista.push(tareas)
        alert(lista)
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
                <View >

                </View>
                {
                    lista.map(user => (
                        <Text > hola {user.lista}</Text>
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

    }

})

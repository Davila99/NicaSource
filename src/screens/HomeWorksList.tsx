import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeWorksList = () => {

    const [tareas, setTareas] = useState('')
    let lista: string[] = [
        "Iron Man",
        "Spiderman",
        "Spiderman"
    ];
     
    const [tweetsData, setTweetsData] = useState([''])

    const getTareas = () => {
        setTweetsData(lista)
    }
    const crearTarea = () => {
        const newTaras = tareas
        lista.push(newTaras)
        getTareas()
    }
    const eliminarTweet = (id: number) => {
        alert(tweetsData)
        lista.splice(id, 1)
        getTareas()
    }
    useEffect(getTareas, [setTareas])

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

            </View>

            {
                tweetsData.map(tweet => (
                    <View style={styles.constainer}>
                        <Text>{tweet} </Text>
                        <View>
                            <Button
                                title="Eliminar"
                                onPress={() => eliminarTweet(tweet.id)}
                            />

                        </View>

                    </View>
                ))
            }



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

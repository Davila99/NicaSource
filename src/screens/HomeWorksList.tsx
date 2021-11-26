import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeWorksList = () => {

    const [tareas, setTareas] = useState('')
    const lista = ["Item 1", "Item 2", "Item 3",""];
    const [tweetsData, setTweetsData] = useState([""])



    const getTareas = ()=>{
        const tareas= lista
        setTweetsData(tareas)
    }
    const crearTarea = () => {
        const newTaras = tareas
        tweetsData.push(newTaras)
    }
    const eliminarTweet = (id: number) => {
        alert(tweetsData)
        tweetsData.splice(id, 1)
        
    }
    useEffect(getTareas, [])
 
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

import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import FormInputs from '../Components/FormInputs'




const HomeNica = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')


    const validarDatos = () => {
      
        if (user==="eliseo" && password==="davila") {
            
            alert('Hola')
            
        }
    }

    return (
        <View style={styles.container}>


            <FormInputs
                title="Usuario"
                defaultValue={user}
                onChangeText={setUser}
            />
            <FormInputs
                title="Contraseña"
                defaultValue={password}
                onChangeText={setPassword}
            />

            <View style={styles.button} >
                <Button
                    title="Ingresar"
                    onPress={validarDatos}

                />
            </View>


        </View>
    )
}

export default HomeNica

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#6ca0ab",
        flex: 1,
        width: "100%",
        paddingTop: 150,
        paddingLeft: 24,
        paddingRight: 24,
    },
    button:{
        paddingTop: 50,
        
    }

})

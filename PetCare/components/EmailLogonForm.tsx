import { StyleSheet, TextInput, Text, Alert} from 'react-native';
import { CustomButton } from './CustomButton';
import { useState } from 'react';
import { FIREBASE_AUTH } from './FireBaseAuth';


export function EmailLogonForm({cancelClick, navigation}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    async function Login(){
        try{
            const response = await FIREBASE_AUTH.signInWithEmailAndPassword(email,password)
            // console.log(response.user.uid)
            navigation.navigate('Home')
        } catch(e){
            Alert.alert("Błąd logowania!","Niepoprawne dane logowania.")
        }
    }

    return (<>
        <TextInput onChangeText={setEmail} style={styles.input} placeholder='Email'/>
        <TextInput onChangeText={setPassword} secureTextEntry={true} style={styles.input} placeholder='Hasło'/>
        <CustomButton text="Zaloguj" onButtonClick={Login}/>
        <Text onPress={()=>{cancelClick(false)}}>Anuluj</Text>  
    </>
    );
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: 'white',
        width:300,
        height:60,
    }
})
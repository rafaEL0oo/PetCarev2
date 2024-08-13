import { StyleSheet, TextInput, Text, View, Alert } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { Logo } from '../components/Logo';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../components/FireBaseAuth';


export function SingInForm({navigation}){
    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")

    async function createProfile(response:any){
        FIREBASE_DB.ref(`/users/${response.user.uid}`).set({userName})
    }

    async function CreateNewUser(){
        if(userEmail != "" && userPassword != ""){
            try{
                const response = await FIREBASE_AUTH.createUserWithEmailAndPassword(userEmail,userPassword)
            
                if(response.user){
                    await createProfile(response)
                    Alert.alert("Profile created!")
                }
            } catch(e){
                console.log(e)
                Alert.alert("Registration failed", "Please check your form again!")
            }
        }
    }
    return (<View style={styles.container}>
                <LinearGradient
                // Background Linear Gradient
                colors={['transparent','#6bcfe3']}
                style={styles.background}
                />
    <Logo/>
   <View style={styles.buttonsContainer}>
        <TextInput style={styles.input} placeholder='Nazwa' onChangeText={setUserName}/>
        <TextInput style={styles.input} placeholder='Email' onChangeText={setUserEmail}/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Hasło' onChangeText={setUserPassword}/>
        <CustomButton text="Utwórz konto" onButtonClick={CreateNewUser} buttonColor='#0F65F9'/>
        <Text onPress={()=>{navigation.navigate('Logon')}}>Anuluj</Text>  
    </View>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'100%'
      },
      buttonsContainer:{
          flex:1,
          top: 200,
          gap:20,
          alignItems:'center'
      },
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
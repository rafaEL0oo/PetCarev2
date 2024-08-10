import { StyleSheet, TextInput, Text, View, Alert } from 'react-native';
import { CustomButton } from './CustomButton';
import { Logo } from './Logo';
import { LinearGradient } from 'expo-linear-gradient';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import db from "@react-native-firebase/database"
import firebase from '@react-native-firebase/app';

export function SingInForm({navigation}){
    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")

    const config = {
        apiKey: "AIzaSyCsU-nr2BroJLH88HsL-QcSaKf3kMMLqtQ",
        authDomain: "firebase-adminsdk-bxqv7@petcare-da0d2.iam.gserviceaccount.com",
        projectId: "petcare-da0d2",
        storageBucket: "petcare-da0d2.appspot.com",
        messagingSenderId: "799144242076",
        appId: "1:799144242076:android:679ce795f817d20b887659",
        measurementId: "452898184",
        databaseURL:"https://petcare-da0d2-default-rtdb.firebaseio.com/"
      }

      !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

    async function createProfile(response:any){
        db().ref(`/users/${response.user.uid}`).set({userName})
        db().ref(`/users/${response.user.uid}/pets`).set([])
    }

    async function CreateNewUser(){
        if(userEmail != "" && userPassword != ""){
            try{
                const response = await auth().createUserWithEmailAndPassword(userEmail,userPassword)
            
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
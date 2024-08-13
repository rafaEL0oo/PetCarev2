import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { FIREBASE_DB } from "../components/FireBaseAuth";

export function HomePage({ route, navigation }){
    const [userDetails, setUserDetails] = useState(null)
    const uid = route.params;

    useEffect(()=>{
        async function GetLogonUserDetails(){
            try{
                const response = await FIREBASE_DB.ref(`/users/${uid}`).once('value');
                if(response.exists()){
                    console.log(response)
                    setUserDetails(response)
                }
            }catch(e){
                console.log(e)
            }
        }
        GetLogonUserDetails()
    },[uid])
    
    return <View>
        {userDetails ? (<Text>User Name:{userDetails['userName']} </Text>) : (<Text>Loading...</Text>)}
        <CustomButton text="Back" onButtonClick={()=>{navigation.navigate('Logon')}}/>
        </View>
}
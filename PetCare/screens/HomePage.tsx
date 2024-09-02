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
                    const parsedItems = response ? Object.keys(response).map(key => ({ id: key, ...response[key] })) : [];
                    console.log(parsedItems)
                    const userValues = {"id": parsedItems[0].key ,...parsedItems[0].value}
                    if(userValues.pets === "null"){
                        navigation.navigate('AddPetForm', userValues, navigation)
                    }
                    setUserDetails(userValues)
                }
            }catch(e){
                console.log(e)
            }
        }
        GetLogonUserDetails()
    },[uid])
    
    return <View>
        {userDetails ? (<Text>User Name: {userDetails["userName"]} </Text>) : (<Text>Loading...</Text>)}
        <CustomButton text="Back" onButtonClick={()=>{navigation.navigate('Logon')}}/>
        {/* Add Pet form or choose pet view */}
        </View>
}
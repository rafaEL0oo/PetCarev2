import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { FIRESTORE_DB } from "../components/FireBaseAuth";

export function HomePage({ route, navigation }){
    const [userDetails, setUserDetails] = useState(null)
    const userLogedOn = route.params;

    useEffect(()=>{
        async function GetLogonUserDetails(){
            try{
                const response = await FIRESTORE_DB.collection('users').doc(userLogedOn).get()
                const userData = response._data
                const ownedPets = response._data.petsOwned
                const sheredPets = response._data.petsShared
                const allPets = ownedPets.concat(sheredPets)
                if(allPets.length === 0){
                    navigation.navigate('AddPetForm', userData, navigation)
                }
                setUserDetails(userData)

            }catch(e){
                console.log(e)
            }
        }
        GetLogonUserDetails()
    },[userLogedOn])
    
    return <View>
        {userDetails ? (<Text>User Name: {userDetails["userName"]} </Text>) : (<Text>Loading...</Text>)}
        <CustomButton text="Back" onButtonClick={()=>{navigation.navigate('Logon')}}/>
        {/* Add Pet form or choose pet view */}
        </View>
}
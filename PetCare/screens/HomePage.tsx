import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { FIREBASE_AUTH, FIRESTORE_DB } from "../components/FireBaseAuth";

export function HomePage({ navigation }){
    const [userDetails, setUserDetails] = useState(null)


    async function GetLogonUserDetails(userId){
        try{
            const response = await FIRESTORE_DB.collection('users').doc(userId).get()
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

    useEffect(() => { 
        const subscriber = FIREBASE_AUTH.onAuthStateChanged((user)=>{
            if(user){
                console.log(`User Loged On, ID: ${user.uid}`)
                GetLogonUserDetails(user.uid)
            }else{
                console.log("Failed to retrive user")
            }
        });
        return subscriber; // Unsubscribes on unmount
      }, []);

    return <View>
        {userDetails ? (
            <Text>User Name: {userDetails["name"]} </Text>
            // Add users' pets here
            // Add logout button
            ) : (
            // Prepare better loading screen... 
            <Text>Loading...</Text>
            )}
        <CustomButton text="Back" onButtonClick={()=>{navigation.navigate('Logon')}}/>
        </View>
}
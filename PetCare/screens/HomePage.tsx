import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { FIREBASE_AUTH, FIRESTORE_DB } from "../components/FireBaseAuth";
import { LinearGradient } from 'expo-linear-gradient';
import { PetProfile } from '../components/PetProfile';

export function HomePage({ navigation }){
    const [userDetails, setUserDetails] = useState(null)
    const [userPets, setUserPets] = useState(null)

    async function GetUserPetsDetails(petIds){
        try {
            // Użyj Promise.all, aby pobrać dokumenty dla każdego ID równocześnie
            const documents = await Promise.all(
                petIds.map(async (id) => {
                const documentSnapshot = await FIRESTORE_DB
                  .collection('pets') // Zmień na nazwę swojej kolekcji
                  .doc(id) // Pobieranie dokumentu dla konkretnego ID
                  .get();
                
                if (documentSnapshot.exists) {
                  return { id, ...documentSnapshot.data() }; // Zwracanie danych dokumentu razem z ID
                } else {
                  console.log(`Dokument z ID ${id} nie istnieje`);
                  return null; // Obsługa braku dokumentu
                }
              })
            );
        
            // Filtruj dokumenty, które są null (np. brak dokumentów)
            return documents.filter(doc => doc !== null);
          } catch (error) {
            console.error("Błąd podczas pobierania dokumentów:", error);
            return [];
          }
    }


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
            console.log(allPets)
            //Set user details
            setUserDetails(userData)
            
            //Get user pets details
            const userPetsDetails = await GetUserPetsDetails(allPets)
            console.log(userPetsDetails)
            //Set user pets details
            setUserPets(userPetsDetails)

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

    return <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#6bcfe3']}
        style={styles.background}
        />
        {userDetails && userPets ? (<>
            <Text>Welcome {userDetails["name"]}! </Text>
            {/* Add users' pets here */}
            <PetProfile pets={userPets}/>
            {/* Add logout button */}
        </>
            ) : (
            // Prepare better loading screen... 
            <Text>Loading...</Text>
            )}
        <CustomButton text="Add new pet" onButtonClick={()=>{navigation.navigate('Logon')}}/>
        <CustomButton text="Back" onButtonClick={()=>{navigation.navigate('Logon')}}/>
        </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 10
      },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height:'100%'
    }
})
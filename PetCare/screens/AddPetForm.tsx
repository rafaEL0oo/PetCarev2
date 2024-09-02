import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { AnimalImage } from '../components/AnimalImage';
import { FIREBASE_DB } from "../components/FireBaseAuth";


export function AddPetForm({route, navigation}){

  const userDetails = route.params

  const [animalType, setAnimalType] = useState("dog");
  const [petName, setPetName] = useState("");

  async function AddPetToUserDB(){
    console.log(userDetails.id)
    console.log(petName)
    console.log(animalType)

    FIREBASE_DB.ref(`/users/${userDetails.id}/pets`).set({petName, animalType})
  }

  async function AddPet(){
    try{
      await AddPetToUserDB()
      console.log("Pet Added")
    }catch(e){
      console.log(e)
    }
  }

    return <View style={styles.container}>
    <LinearGradient
// Background Linear Gradient
colors={['transparent','#6bcfe3']}
style={styles.background}
/>

<AnimalImage animal={animalType}/>
<Text>Pet:</Text>
      <Picker
        selectedValue={animalType}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setAnimalType(itemValue)}
      >
        <Picker.Item label="Dog" value="dog" />
        <Picker.Item label="Cat" value="cat" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TextInput style={styles.input} placeholder='Name' onChangeText={setPetName}/>
      <CustomButton text="Add Pet" buttonColor="#0F65F9" onButtonClick={AddPet}/>
      
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
    },
    picker: { height: 50, 
      width: 150},
    input:{
      padding: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: 'white',
      width:300,
      height:60,
  },
  });
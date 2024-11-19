import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { AnimalImage } from './AnimalImage';


export function PetProfile({pets}){
  pets = pets.map((item, index)=>({...item, "key": index}))
  console.log(pets)
    return (
        <View>
          {pets.map(pet => (
            <View style={styles.petAccount} key={pet.key}>
            <AnimalImage animal={pet.type}/>
            <Text style={styles.petName}>{pet.name}</Text>
            </View>
          ))}
        </View>
      );
};

const styles = StyleSheet.create({
  petAccount: {
      justifyContent: 'center'
    },
    petName: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    }
})
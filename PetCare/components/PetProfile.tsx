import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { AnimalImage } from './AnimalImage';


export function PetProfile({pets}){

    return (
        <View>
          {pets.map(pet => (
            <View>
            <AnimalImage animal={pet.type}/>
              <Text>{pet.name}</Text>
            </View>
          ))}
        </View>
      );
};
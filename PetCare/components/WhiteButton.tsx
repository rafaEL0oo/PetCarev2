import React from 'react';
import { TouchableOpacity, StyleSheet,Text, View } from "react-native";

export function WhiteButton(){
    return <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text>Continue with Google</Text>
        </TouchableOpacity>
    </View> 
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      top:100,
      gap: 20
    },
    button: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 15,
      width:300,
      height:50,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
  });
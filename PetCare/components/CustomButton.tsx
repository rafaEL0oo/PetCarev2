import React from 'react';
import { TouchableOpacity, StyleSheet,Text} from "react-native";

export function CustomButton({text,buttonColor="white"}){
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:buttonColor}]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>);
  
}


const styles = StyleSheet.create({
  button: {
    justifyContent:'center',
    padding: 10,
    borderRadius: 15,
    width:300,
    height:60,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'500',
    textAlign:'center'
  },
});

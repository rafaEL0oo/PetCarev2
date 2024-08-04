import React from 'react';
import { TouchableOpacity, StyleSheet,Text, Image} from "react-native";

export function CustomButton({text,buttonColor="white", onButtonClick, logo="none"}){
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:buttonColor}]} onPress={onButtonClick}>
          {logo == "apple" && <Image  style={styles.image} source={require('../images/appleLogo.png')}></Image>}
          {logo == "google" && <Image  style={styles.image} source={require('../images/googleLogo.png')}></Image>}
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
  image:{
    position:'absolute',
    left:20,
    width: 35,
    height: 35,
  }
});

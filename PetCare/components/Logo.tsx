import React from 'react';
import {View, Image, StyleSheet } from 'react-native';


export function Logo(){

    const logoStyles = {
            width: 200,
            height: 200
        }
    return (<View>
        <Image  style={styles.image} source={require('../images/PetCarelogo.png')}></Image>
    </View>);
}

const styles = StyleSheet.create({
    container:{
    },
    image: {
      width: 250,
      height: 250,
    },
  });
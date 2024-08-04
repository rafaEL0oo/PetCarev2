import React from 'react';
import {View, Image, StyleSheet } from 'react-native';


export function Logo(){

    const logoStyles = {
            width: 200,
            height: 200
        }
    return (
        <Image  style={styles.image} source={require('../images/PetCarelogo.png')}></Image>);
}

const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 250,
      top:100
    },
  });
import React from 'react';
import { Image, StyleSheet } from 'react-native';


export function AnimalImage({animal}){
    let image
    if(animal == "dog") image = require("../images/dog.png")
    if(animal == "cat") image = require("../images/cat.png")
    if(animal == "other") image = require("../images/other.png")

    return (
        <Image  style={styles.image} source={image}></Image>);
}

const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      borderRadius: 150,
      marginBottom:20
    },
  });
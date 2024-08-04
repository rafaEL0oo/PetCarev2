import { StyleSheet, View, Text } from 'react-native';
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { EmailLogonForm } from '../components/EmailLogonForm';


export function LogonScreen({ navigation }){
  const [emailLogonShown,setEmailLogonShown] = useState(false)
  const [singInShown,setSingInShown]= useState(false)
    return   (
         <View style={styles.container}>
             <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#6bcfe3']}
        style={styles.background}
      />
      <Logo/>
        <View style={styles.buttonsContainer}>
            {emailLogonShown ? <EmailLogonForm cancelClick={setEmailLogonShown}/> : (
              <>
              <CustomButton text="Zaloguj przez Google" onButtonClick={()=>{}} logo="google"/>
              <CustomButton text="Zaloguj przez Apple" onButtonClick={()=>{}} logo="apple"/>
              <CustomButton text="Zaloguj przez mail" onButtonClick={()=>{setEmailLogonShown(true)}}/>
              <Text>Lub</Text>
              <CustomButton text="Utwórz konto" buttonColor='#0F65F9' onButtonClick={()=>{navigation.navigate('SignIn')}}/>
              <CustomButton text="Pomiń" onButtonClick={()=>{navigation.navigate('Home')}}/>
              </>
            )
            }
        </View>
      </View>
        );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height:'100%'
    },
    buttonsContainer:{
        flex:1,
        top: 200,
        gap:20,
        alignItems:'center'
    }
  });
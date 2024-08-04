import { StyleSheet, View, Text } from 'react-native';
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';


export function LogonScreen({ navigation }){
    return   (
         <View style={styles.container}>
             <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#1BE9F6']}
        style={styles.background}
      />
      <Logo/>
        <View style={styles.buttonsContainer}>
            <CustomButton text="Continue with Google"/>
            <CustomButton text="Continue with Apple"/>
            <CustomButton text="Sign in with mail"/>
            <Text>Or</Text>
            <CustomButton text="Create account" buttonColor='#0F65F9'/>
        </View>
      </View>
        )
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
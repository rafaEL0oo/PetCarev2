import { StyleSheet, TextInput, Text, View } from 'react-native';
import { CustomButton } from './CustomButton';
import { Logo } from './Logo';
import { LinearGradient } from 'expo-linear-gradient';
export function SingInForm({navigation}){
    return (<View style={styles.container}>
                <LinearGradient
                // Background Linear Gradient
                colors={['transparent','#6bcfe3']}
                style={styles.background}
                />
    <Logo/>
   <View style={styles.buttonsContainer}>
        <TextInput style={styles.input} placeholder='Nazwa'/>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Hasło'/>
        <CustomButton text="Utwórz konto" onButtonClick={()=>{}} buttonColor='#0F65F9'/>
        <Text onPress={()=>{navigation.navigate('Logon')}}>Anuluj</Text>  
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
      },
    input:{
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: 'white',
        width:300,
        height:60,
    }
})
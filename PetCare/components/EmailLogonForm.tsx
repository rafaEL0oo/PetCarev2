import { StyleSheet, TextInput, Text } from 'react-native';
import { CustomButton } from './CustomButton';
import auth from '@react-native-firebase/auth';


export function EmailLogonForm({cancelClick}){
    return (<>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Hasło'/>
        <CustomButton text="Zaloguj" onButtonClick={()=>{}}/>
        <Text onPress={()=>{cancelClick(false)}}>Anuluj</Text>  
    </>
    );
}

const styles = StyleSheet.create({
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
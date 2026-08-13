// tela de login local 
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";

const VALID_EMAIL = 'aluno@senac.com';
const VALID_PASSWORD = '123';

export default function LoginScreen({ navigation }) {
    // cada useState cria uma informação que pode mudar na tela

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ erroMenssage, setErroMenssage] = useState('');

    function handleLogin(){

        const normalizedEmail = email.trim().toLocaleLowerCase();

        if(!normalizedEmail  || !password) {
            setErroMenssage('Preencha o email e a senha.');
            return;
        }

        if(normalizedEmail !== VALID_EMAIL || password !== VALID_PASSWORD){
            setErroMenssage('E-mail ou senha incorretos.');
            return;
        }
        
        //Limpa o erro antes de navegar.
        setErroMenssage('');

        // replace impede que o usuario volte para tela de login pelo botao de voltar
        // o segundo argumento envia os parametros para tela de Home
        navigation.replace('Home', {studentName: 'Estudante'});
    }

    return (

        //KeyboardAvoidingView  ajuda a tela a se ajustar quando o teclado abre.
        <KeyboardAvoidingView
            style={styles.keyboardArea}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >

            <View style={ styles.container}>
                <Text style={styles.logo}>SF</Text>
                <Text style={styles.title}>Bem-Vindo ao StudyFlow</Text>
                <Text style={styles.subtitle}>Entre para acompanhar sua rotina de estudos</Text>
            </View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ route, navigation }) {

    const studentName = route.params?.studentName ?? 'Estudante';

    const [sessionStarted, setSessionStarted] = useState(false);

    function handleStartSession() {
        setSessionStarted(currentValue => !currentValue);
    }

    function handledLogout() {
        navigation.replace('Login');
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Olá, {studentName}</Text>
                        <Text style={styles.subtitle}>Seu progresso de hoje esta logo abaixo {studentName}</Text>
                        <Text style={styles.logoutText} onPress={handledLogout}>Sair</Text>
                    </View>

                    <View style={styles.highlightCard}>
                        <Text style={styles.highlightLabel}> Proxima Atividade </Text>
                        <Text style={styles.highlightLabel}> Revisar Fundamentos de React Native </Text>
                        <Text style={styles.highlightLabel}> Hoje - 19h </Text>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({

})


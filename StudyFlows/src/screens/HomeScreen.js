import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../styles/colors";
import InfoCard from "../components/Infocard";
import PrimaryButton from "../components/PrimaryButton";

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
                </View>
                <View style={styles.highlightCard}>
                    <Text style={styles.highlightLabel}> Proxima Atividade </Text>
                    <Text style={styles.highlightLabel}> Revisar Fundamentos de React Native </Text>
                    <Text style={styles.highlightLabel}> Hoje - 19h </Text>
                </View>
                <View style={styles.cardRow}>
                    <InfoCard
                        icon="OK" value="4" title="Tarefas Concluídas"
                    />
                    <InfoCard
                        icon="h" value="2h" title="Tempo Estudado"
                    />
                </View>

                <View style={styles.mensageRow}>
                    <Text style={styles.mensageTitle}>
                        {sessionStarted ? 'Sessão de estudo iniciada'
                            : 'Sessão de estudo não iniciada'}
                    </Text>

                    <Text style={styles.mensageText}>
                        {sessionStarted ? 'Você pode começar a estudar agora.'
                            : 'Clique no botão para iniciar uma sessão de estudo.'}
                    </Text>

                </View>

                <PrimaryButton
                    title={sessionStarted ? 'Finalizar Sessão' : 'Iniciar Sessão'}
                    onPress={handleStartSession}
                />
            </ScrollView >
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flexGrow: 1,
        padding: 24,
        gap: 22,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
    },
    greeting: {
        color: colors.text,
        fontSize: 26,
        fontWeight: '800',
    },
    subtitle: {
        color: colors.textLight,
        fontSize: 14,
        marginTop: 5,
    },
    logoutText: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '700',
        paddingVertical: 6,
    },
    highlightCard: {
        gap: 8,
        borderRadius: 22,
        backgroundColor: colors.primary,
        padding: 22,
    },
    highlightLabel: {
        color: colors.surface,
        fontWeight: '600',
        opacity: 0.85,
    },
    HighlightTitle: {
        color: colors.surface,
        fontWeight: '800',
        fontSize: 22,
        lineHeight: 29,
    },
    highlightTime: {
        color: colors.surface,
        fontWeight: '700',
        fontSize: 14,
    },
    cardRow: {
        flexDirection: 'row',
        gap: 14,
    },
    mensageCard: {
        gap: 8,
        borderRadius: 18,
        backgroundColor: colors.surface,
        padding: 20,
    },
    mensageTitle: {
        color: colors.text,
        fontWeight: '800',
        fontSize: 22,
        lineHeight: 29,
    },
    mensageText: {
        color: colors.textLight,
        fontSize: 14,
        lineHeight: 20,
    }
})
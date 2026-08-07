import { ImageBackground } from "react-native/types_generated/index";
import { View } from "react-native/types_generated/index";

export default function InfoCard(
    {
        icon, 
        title,
        value
    }
){

    return (
        <View style={styles.card}>
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        minHeight: 132,
        alignItens: 'center',
        justifyContent: 'center',
        gap: 6,
        borderRadius: 18,
        backgroundColor: colors.surface,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    icon: {
        color: colors.primary,
        fontSize: 12,
        fontWeight: '800',
    },
    value: {
        color: colors.onSurface,
        fontSize: 24,
        fontWeight: '800',
    },
    title: {
        color: colors.textLight,
        fontSize: 13,
        textAlign: 'center',
    }

})
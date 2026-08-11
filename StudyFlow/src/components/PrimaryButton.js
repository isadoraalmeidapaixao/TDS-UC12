import { Pressable } from "react-native";
import { colors } from "../styles/colors";

export default function PrimaryButton({ title, onPress, disabled = false }) {

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                style.button,
                pressed && style.buttonPressed,
                disable && style.buttonDisabled,
            ]}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>

    )
}

const styles = StyleSheet.create({
    button: {
        width:'100%',
        minHeight: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,

    },

    buttonPressed: {
        opacity: 0.8,
    },

    buttonDisabled: {
        opacity: 0.5,
    },

    buttonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: '700',
    }
});